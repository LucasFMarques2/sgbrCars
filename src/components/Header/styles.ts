import styled from "styled-components/native";


export const HeaderContainer = styled.View`
    height: 140px;
    border-radius: 10px;
    padding: 25px 20px;
    background: ${({theme}) => theme.COLORS.blue_600};
    border: 1px solid ${({theme}) => theme.COLORS.gray_opacity};
    gap: 20px;
`

export const TopContainer = styled.View`
   flex-direction: row;
   justify-content: space-between;
`

export const TextContainer = styled.Text`
    font-size: 16px;
    color: white;
`

export const LogOffButtonContainer = styled.TouchableOpacity`
    
`