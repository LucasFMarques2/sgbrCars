import styled from 'styled-components/native'


export const ProfileContainer = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.blue_900};
    align-items: center;
    `
export const TextContainer = styled.Text`
    color: ${({ theme }) => theme.COLORS.white};
    font-size: 20px;
    `

export const ImageContainer = styled.Image`
    margin-top:70px;
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.gray_100};
`

export const ButtonContainer = styled.TouchableOpacity`
    width: 60%;
    background-color: ${({ theme }) => theme.COLORS.red};
    padding: 16px;
    align-items: center;
    margin-top: 80%;
    border-radius: 8px;
`