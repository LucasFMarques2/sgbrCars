import { createStackNavigator } from "@react-navigation/stack"
import { Login } from "@screens/Login"
import { BottomRoutes } from "./bottom.routes"

export function Routes(){
    const Stack = createStackNavigator()
    return(
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
      >
        <Stack.Screen
            name="Login"
            component={Login}
        />
         <Stack.Screen
            name="BottomRoutes"
            component={BottomRoutes}
        />
      </Stack.Navigator>
    )
}