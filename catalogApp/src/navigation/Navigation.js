/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BooksCatalog from 'screens/BooksCatalog';
import BookDetails from 'screens/BookDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen
          name={'BooksCatalog'}
          component={BooksCatalog}
          options={{title: 'Books Catalog'}}
        />
        <Stack.Screen
          name={'BookDetails'}
          component={BookDetails}
          options={({route}) => ({
            title: route.params?.bookDetails?.title || 'Book Details',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
