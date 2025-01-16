import styled from 'styled-components/native'


export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.blue_900};
`

export const TextContainer = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.white};
    margin-bottom: 20px;
`

export const CarBrandContainer = styled.View`
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`