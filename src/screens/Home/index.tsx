import { HomeContainer, TextContainer } from "./style"
import { Input } from "@components/Input"
import { useTheme } from "styled-components"

export function Home(){
    const theme = useTheme()
    return(
        <HomeContainer>
            <Input 
             iconName='eye' 
             iconColor={theme.COLORS.gray_opacity} 
             iconSize={20} 
             placeholder="alo"/>
            <TextContainer>
                To na home
            </TextContainer>
        </HomeContainer>
    )
}