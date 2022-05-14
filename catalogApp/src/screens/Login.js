import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AuthService from '../services/Auth.service';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput, Button} from 'react-native-paper';
import {screenHeight, screenWidth} from '../constants/Layout';
import Strings from '../constants/Strings';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [password, setPassword] = useState('');
  const isLoading = useSelector(state => state?.auth.isLoading);

  const onLoginPressed = async () =>
    dispatch(await AuthService.login(email, password));

  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{Strings.Login}</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          mode={'outlined'}
          label="Email"
          value={email}
          onChangeText={mail => setEmail(mail.trim())}
        />
        <TextInput
          style={styles.textInput}
          mode={'outlined'}
          label="Password"
          value={password}
          secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon
              name="eye"
              onPressIn={() => setSecureTextEntry(!secureTextEntry)}
              onPressOut={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          onChangeText={password => setPassword(password.trim())}
        />
        <Button
          style={styles.button}
          loading={isLoading}
          icon="power"
          mode="contained"
          onPress={onLoginPressed}>
          login
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight * 0.2,
  },
  titleText: {
    fontSize: 40,
  },
  form: {
    flex: 2,
  },
  button: {
    marginTop: 100,
  },
  textInput: {
    width: screenWidth * 0.8,
  },
});
