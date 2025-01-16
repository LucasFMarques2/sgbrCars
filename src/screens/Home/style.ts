import styled from 'styled-components/native'


export const HomeContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.blue_900};
`

export const TextContainer = styled.Text`
    color: ${({ theme }) => theme.COLORS.white};;
`