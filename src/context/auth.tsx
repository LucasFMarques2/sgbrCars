import { createContext, useContext, useState, ReactNode } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import { authenticateApi } from "src/services/authenticateApi"
import { useNavigation, NavigationProp } from "@react-navigation/native"

interface User {
  id: string
  name: string
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<boolean>;
  signOut: () => void
  user?: User
  token?: string
}

interface SignInCredentials {
  user: string;
  password: string
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user?: User; token?: string }>({});
  
  const navigation = useNavigation<NavigationProp<any>>()

  async function signIn({ user, password }: SignInCredentials): Promise<boolean> {
    try {
    
      const response = await authenticateApi.post("/signIn", { user, password })
      const { token, name, id } = response.data.user

      await AsyncStorage.setItem("@sgbrCars:token", token)
      authenticateApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
    
      setData({ token, user: { id, name } })
    
      Alert.alert('Login realizado com sucesso')
    
      navigation.reset({routes:[{name:'BottomRoutes'}]})
   
    } catch (err: any) {
      console.log("Erro ao tentar logar:", err)
      if (err.response && err.response.data) {
        Alert.alert(err.response.data.message)
      } else {
        Alert.alert("Não foi possível logar")
      }
      return false;
    }
    return true;
  }
  
  async function signOut(){
    await  AsyncStorage.removeItem("@sgbrCars:token")
    setData({})
    navigation.reset({ routes: [{ name: "Login" }] })
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, token: data.token }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export { AuthProvider, useAuth }
