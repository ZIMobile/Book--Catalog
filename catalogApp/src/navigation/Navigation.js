import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BooksCatalog from 'screens/BooksCatalog';
import BookDetails from 'screens/BookDetails';
import Screens from '../constants/Screens';
import Strings from '../constants/Strings';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 25},
        }}>
        <Stack.Screen
          name={Screens.booksCatalog}
          component={BooksCatalog}
          options={{title: Strings.bookCatalog}}
        />
        <Stack.Screen
          name={Screens.bookDetails}
          component={BookDetails}
          options={({route}) => ({
            title: route.params?.bookDetails?.title || Strings.bookDetails,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
