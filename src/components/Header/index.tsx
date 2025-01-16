import { HeaderContainer, LogOffButtonContainer, TextContainer, TopContainer } from "./styles"
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { useAuth } from "@context/auth"
import { useTheme } from "styled-components"
import { Input } from "@components/Input"

interface HeaderProps {
    placeHolder?: string
    value?: string
    onChangeText?: (text: string) => void
}

export function Header({ placeHolder = 'Pesquise aqui', value, onChangeText }: HeaderProps) {
    const { user, signOut } = useAuth()
    const theme = useTheme()
    return (
        <HeaderContainer>
            <TopContainer>
                <TextContainer>
                    Seja bem-vindo {user?.name}
                </TextContainer>
                <LogOffButtonContainer onPress={signOut}>
                    <AntDesign name="poweroff" size={20} color={theme.COLORS.white} />
                </LogOffButtonContainer>
            </TopContainer>
            <Input 
                placeholder={placeHolder} 
                value={value} 
                onChangeText={onChangeText} 
                Icon={MaterialIcons} 
                IconName="search" 
                IconSize={25} 
            />
        </HeaderContainer>
    )
}
