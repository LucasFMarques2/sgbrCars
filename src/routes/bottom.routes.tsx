import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { Models } from "@screens/Models"; // Nova tela
import CustomTabBar from "@components/CustomTabBar";

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Models: { brandId: string };
};

const Tab = createBottomTabNavigator<RootTabParamList>(); 

export function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Models" component={Models} />
    </Tab.Navigator>
  );
}
