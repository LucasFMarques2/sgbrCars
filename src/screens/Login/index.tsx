import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native"

import {
  LoginContainer,
  TextContainer,
  ImageOverlay,
  ImageContainer,
  LogoContainer,
  FormContainer,
  ButtonContainer
} from './styles'
import backgroundLogin from '@assets/backgroundLogin.jpg'
import sgbrLogo from '@assets/sgbrLogo.png'
import { Input } from "@components/Input"
import { useAuth } from "@context/auth"
import { MaterialIcons, Octicons } from "@expo/vector-icons"

export function Login() {
  const { signIn } = useAuth()
  const [hiddePassword, setHiddePassword] = useState(true)
  const { handleSubmit, control } = useForm<{ user: string; password: string }>()
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  };

  const onSubmit = (data: { user: string; password: string }) => {
    const { user, password } = data;
    signIn({ user: user, password })
  };

  const handleHiddePassword= ()=> {
    setHiddePassword(prevState => !prevState);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <LoginContainer source={backgroundLogin} blurRadius={6} resizeMode="cover">
            <ImageOverlay />
            <LogoContainer>
              <ImageContainer source={sgbrLogo} />
              <TextContainer>Encontre o carro dos seus sonhos</TextContainer>
            </LogoContainer>
              <FormContainer>
                <TextContainer>Faça seu login</TextContainer>
                    <Controller
                      control={control}
                      name="user"
                      render={({ field: { value, onChange } }) => (
                        <Input
                          placeholder="Usuário"
                          value={value}
                          onChangeText={onChange}
                          Icon={MaterialIcons}
                          IconName="email"
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="password"
                      render={({ field: { value, onChange } }) => (
                        <Input
                          placeholder="Senha"
                          value={value}
                          onChangeText={onChange}
                          Icon={Octicons}
                          IconName={hiddePassword ? "eye-closed" : "eye"}
                          secureTextEntry={hiddePassword}
                          onIconPress={handleHiddePassword}
                        />
                      )}
                    />
                   <ButtonContainer onPress={handleSubmit(onSubmit)}>
                     <TextContainer>Entrar</TextContainer>
                  </ButtonContainer>
              </FormContainer>
          </LoginContainer>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
