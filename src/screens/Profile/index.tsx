import { ProfileContainer, TextContainer, ImageContainer,  ButtonContainer } from "./stele"
import userIcon from '@assets/userIcon.png'
import { useAuth } from "@context/auth"

export function Profile(){
    const { user, signOut } = useAuth()
    return(
        <ProfileContainer>
            <ImageContainer source={userIcon}/>
           <TextContainer>
                 {user?.name}
           </TextContainer>
           < ButtonContainer onPress={signOut}>
            <TextContainer>
                Sair
            </TextContainer>
           </ButtonContainer>
        </ProfileContainer>

    )
}