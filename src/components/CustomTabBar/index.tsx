import { ViewContainer, ButtonCotainer } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { useTheme } from "styled-components/native";

export default({ state, navigation }) => {
    const theme = useTheme()
    const go = (screenName: string) =>{
        navigation.navigate(screenName)
    }

    return (
        <ViewContainer>
            <ButtonCotainer onPress={()=> go('Home')}>
                <AntDesign 
                    name="home"
                    size={30}
                    color={theme.COLORS.white}
                    style={{opacity:state.index == 0 ? 1 : .2}}
                />
            </ButtonCotainer>
            <ButtonCotainer onPress={()=> go('Profile')}>
                <AntDesign 
                    name="user"
                    size={30}
                    color={theme.COLORS.white}
                    style={{opacity:state.index == 1 ? 1 : .2}}
                    />
            </ButtonCotainer>
        </ViewContainer>
    )
}