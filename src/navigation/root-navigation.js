import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
const { createNativeStackNavigator } = require("@react-navigation/native-stack");
import { HomeScreen, StreamScreen, ProfileScreen, DetailScreen } from '../screens'
import Entypo from 'react-native-vector-icons/Entypo'
import { screenName } from '../utils/constant';
import { COLORS } from '../themes/style';
import { createNavigationContainerRef } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}
const screenOptions = ({ route }) => {
    return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.lightBack },
        tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === screenName.homeTab) {
                iconName = 'home';
            }
            else if (route.name === screenName.stream) {
                iconName = 'game-controller';
            }
            else {
                iconName = 'user';
            }
            return (
                <View style={[styles.styleIcon, { backgroundColor: focused ? COLORS.lightPurple : "transparen" }]}>
                    <Entypo name={iconName} color={COLORS.white} size={22} />
                </View>
            );
        }
    }
};
const RootTab = () => {
    return <Tab.Navigator screenOptions={screenOptions} >
        <Tab.Screen name={screenName.homeTab} component={HomeScreen} />
        <Tab.Screen name={screenName.stream} component={StreamScreen} />
        <Tab.Screen name={screenName.profile} component={ProfileScreen} />
    </Tab.Navigator>
}
const RootStack = () => {
    return (<Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }} >
        <Stack.Screen name={screenName.home} component={RootTab} />
        <Stack.Screen name={screenName.detail} component={DetailScreen} />
    </Stack.Navigator>);
}
const RootNavigate = () => {
    return <RootStack />;
}

const styles = StyleSheet.create({
    styleIcon: {
        width: "50%",
        height: "80%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RootNavigate;