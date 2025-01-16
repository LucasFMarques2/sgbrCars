import CustomTabBar from "@components/CustomTabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

const Tab = createBottomTabNavigator();

export function BottomRoutes(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}} 
         tabBar={props=><CustomTabBar {...props}/>}
         >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}