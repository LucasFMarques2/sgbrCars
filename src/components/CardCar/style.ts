import styled from "styled-components/native";


export const CardContainer = styled.View`
    width: 100%;
    padding: 15px 20px 0 20px;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`

export const BrandContainer = styled.View`
    width: 70%;
    padding: 25px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.blue_600};
`

export const ButtonContainer = styled.TouchableOpacity`
    border: 1px solid blue;
    padding: 20px;
    width: 25%;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.blue_200};
    flex-direction: row;
    gap: 2px;
    justify-content: center;
`

export const TextContainer = styled.Text`
    color: ${({theme}) => theme.COLORS.white};
`

export const TextBrandContainer = styled(TextContainer)`
    font-size: 20px;
    font-weight: bold;
`