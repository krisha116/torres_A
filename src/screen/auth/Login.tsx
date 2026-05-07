
import React, { useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  Alert, 
  StyleSheet, 
  StatusBar 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

// .js -> javascript
// .jsx -> javascript extension 
// .ts -> typescript
// .tsx -> typescript extension

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { authLogin } from '../../app/reducers/auth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { _signInwithGoogle } from '../../utils/firebase';

const FOX_THEME = {
  orange: '#53e622',
  dark: '#2C3E50',
  light: '#ECF0F1',
  accent: '#0b35bf',
};

const Login: React.FC = () => {
  // Hooks at the top to satisfy React Rules
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {isLoading, isError, error} = useSelector(
  (state: 
    { auth: { 
      isLoading: boolean; 
      isError: boolean; 
      error: string; 
  }}) =>
         state.auth)
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isLoading && isError && error) {
      Alert.alert('Login failed', error);
    }
  }, [isLoading, isError, error]);

  const handleLogin = () => {
    // If these are empty, it means the CustomTextInput isn't updating the state
    if (username === '' || password === '') {
      Alert.alert('Invalid Credentials', 'Please enter valid username and password');
      return;
    }

    dispatch(authLogin({ 
      username,
      password,
    }));
  };

      <GoogleSigninButton
        //  style={{ width: 212, height: 48 }}
         size={GoogleSigninButton.Size.Wide}
         color={GoogleSigninButton.Color.Dark}
         onPress={async () => {
          
          await _signInwithGoogle().then((result) =>{
            console.log(result);
          })
          .catch((err) => {
            Alert.alert('Error', `${err.message}`);
          }).finally(() => {
            Alert.alert('Success', 'Google Sign-In successful');
          });
        
        }}
       />



  return (
    <View style={[
      styles.mainContainer, 
      { paddingTop: insets.top, paddingBottom: insets.bottom }
    ]}>
      <StatusBar barStyle="dark-content" />
      
      {/* <View style={styles.headerSection}>
        <Image
          source={IMG.LOGO}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome</Text>
      </View> */}

      <View style={styles.formSection}>
        <CustomTextInput 
          label={'Username'} 
          placeholder={'Enter Username'} 
          
          value={username}
          onChangeText={setUsername}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText} 
        />

        <CustomTextInput 
          label={'Password'}
          placeholder={'Enter Password'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomButton 
          label={'LOG IN'} 
          containerStyle={styles.loginButton} 
          textsStyle={styles.loginButtonText}
          onPress={handleLogin}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>New to the pack?</Text>
        {/* <TouchableOpacity onPress={() => navigations.navigate(ROUTES.REGISTER)}>
          
          <Text style={styles.registerLink}> Register Now </Text>
        
          </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: FOX_THEME.light,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: FOX_THEME.dark,
  },
  subText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 5,
  },
  formSection: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputText: {
    borderRadius: 12,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    paddingHorizontal: 15,
    color: 'black', // Set to black so you can see what you type
    height: 50,
  },
  loginButton: {
    backgroundColor: FOX_THEME.orange,
    height: 55,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: FOX_THEME.dark,
    fontSize: 15,
  },
  registerLink: {
    color: FOX_THEME.accent,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Login