import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  Home,
  Intro,
  User,
  UpdateApp,
  Login,
  Scan,
  ResultScan,
  Map,
  ListMenu,
  History,
  ChangePassword,
  ResetPassword,
} from '../pages';

const Stack = createStackNavigator();

const itemConfigOpen = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 4,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const itemConfigClose = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 7,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configBottomBar = {
  cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
  transitionSpec: {
    open: itemConfigOpen,
    close: itemConfigClose,
  },
  headerShown: false,
};

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="Intro" screenOptions={configBottomBar}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="UpdateApp" component={UpdateApp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="ResultScan" component={ResultScan} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="ListMenu" component={ListMenu} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default Routers;
