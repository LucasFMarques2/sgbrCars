import styled from "styled-components/native";
import { ImageBackground } from "react-native";


export const LoginContainer = styled(ImageBackground)`
    flex: 1;
    background: ${({theme}) => theme.COLORS.blue_900};
    align-items: center;
`
export const ImageOverlay = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); 
    border-radius: 10px;
`;

export const ImageContainer = styled.Image`
    width: 350px;
    height: 120px;
`

export const LogoContainer = styled.View`
    justify-content: center;
    margin-top: 150px;
    align-items: center;
    gap: 20px;
`

export const TextContainer = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.white};
    text-align: center;
`

export const FormContainer = styled.View`
    margin-top: 60px;
    width: 80%;
    height: 280px;
    background-color: ${({ theme }) => theme.COLORS.gray_opacity}; 
    padding: 25px 27px;
    border-radius: 8px;
    gap: 16px;
    justify-content: center;
    
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 80%;
    padding: 16px;
    text-align: center;
    color: ${({theme}) => theme.COLORS.white};
    background: ${({theme}) => theme.COLORS.blue_600};
    align-self: center;
    border-radius: 8px;
`