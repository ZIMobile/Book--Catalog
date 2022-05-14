import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BooksCatalog from '../screens/BooksCatalog';
import BookDetails from '../screens/BookDetails';
import Screens from '../constants/Screens';
import Strings from '../constants/Strings';
import Login from '../screens/Login';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../components/Button';
import AuthService from '../services/Auth.service';

const AppStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state?.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppStack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 25},
          }}>
          <AppStack.Screen
            name={Screens.booksCatalog}
            component={BooksCatalog}
            options={{
              title: Strings.bookCatalog,
              headerLeft: () => (
                <Button onPress={() => dispatch(AuthService.logOut())} />
              ),
            }}
          />
          <AppStack.Screen
            name={Screens.bookDetails}
            component={BookDetails}
            options={({route}) => ({
              title: route.params?.bookDetails?.title || Strings.bookDetails,
              headerTitleContainerStyle: {
                width: '85%',
                alignItems: 'center',
              },
            })}
          />
        </AppStack.Navigator>
      ) : (
        <LoginStack.Navigator screenOptions={{headerShown: false}}>
          <LoginStack.Screen
            name={Screens.Login}
            component={Login}
            options={{
              title: Strings.Login,
            }}
          />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
