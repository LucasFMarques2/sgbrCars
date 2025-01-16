import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.gray_100};
    border-radius: 8px;
    padding: 0 16px;
`;

export const IconContainer = styled.TouchableOpacity`
    margin-left: 8px; 
`;

export const InputTextContainer = styled(TextInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.gray_300, 
}))`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    color: ${({ theme }) => theme.COLORS.black};
`;
