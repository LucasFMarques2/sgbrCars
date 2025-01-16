import { ViewContainer, ButtonCotainer } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const theme = useTheme();
  const route = useRoute();
  const nav = useNavigation();

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <ViewContainer>
      {state.index === 2 ? (
        <ButtonCotainer onPress={() => go("Home")}>
          <AntDesign name="arrowleft" size={30} color={theme.COLORS.white} />
        </ButtonCotainer>
      ) : (
        <ButtonCotainer onPress={() => go("Home")}>
          <AntDesign
            name="home"
            size={30}
            color={theme.COLORS.white}
            style={{ opacity: state.index === 0 ? 1 : 0.2 }}
          />
        </ButtonCotainer>
      )}
      <ButtonCotainer onPress={() => go("Profile")}>
        <AntDesign
          name="user"
          size={30}
          color={theme.COLORS.white}
          style={{ opacity: state.index === 1 ? 1 : 0.2 }}
        />
      </ButtonCotainer>
    </ViewContainer>
  );
}
