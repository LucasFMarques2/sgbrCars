import styled from 'styled-components/native'


export const ViewContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 25px 20px;
    background: ${({ theme }) => theme.COLORS.blue_600};
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.COLORS.gray_opacity};
`

export const ButtonCotainer = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.gray_100};
`
