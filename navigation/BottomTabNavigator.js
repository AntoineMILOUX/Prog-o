import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/mapViewer';
import MapTester from '../screens/mapTester';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Demander de l'aide",
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-hand" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Carte des SOS',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      /> 
       <BottomTab.Screen
      name="Tester"
      component={MapTester}
      options={{
        title: 'Carte de test',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
      }}
    />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Projet n°8';
    case 'Links':
      return 'Map des environs';
    case 'Tester':
      return 'Map des environs en géoloc';
  }
}
