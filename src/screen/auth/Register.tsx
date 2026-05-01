import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// ✅ FIX: define navigation type (expanded for completeness)
type RootStackParamList = {
  LOGIN: undefined;
  // Add other routes as needed, e.g., HOME: undefined;
};

const Register: React.FC = () => {
  // state
  const [fullName, setFullName] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ✅ FIX: typed navigation (corrected variable name)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const validateForm = () => {
    if (!fullName.trim() || !emailAdd.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAdd.trim())) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    return true;
  };

  return (
    <View style={{
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{ width: '100%' }}>
        <CustomTextInput
          label={'Full Name'}
          placeholder={'Enter Full Name'}
          value={fullName}
          onChangeText={(val: string) => setFullName(val.trim())}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Enter Email Address'}
          value={emailAdd}
          onChangeText={(val: string) => setEmailAdd(val.trim())}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />
        <CustomTextInput
          label={'Password'}
          placeholder={'Enter Password'}
          value={password}
          onChangeText={(val: string) => setPassword(val)}
          secureTextEntry={true}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />
        <CustomTextInput
          label={'Confirm Password'}
          placeholder={'Re-enter Password'}
          value={confirmPassword}
          onChangeText={(val: string) => setConfirmPassword(val)}
          secureTextEntry={true}
          containerStyle={{ padding: 10 }}
          textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
        />
      </View>
      <CustomButton
        label={'REGISTER'}
        containerStyle={{
          borderWidth: 1,
          borderRadius: 10,
          marginVertical: 20,
          backgroundColor: 'blue',
          width: '85%',
        }}
        textsStyle={{ color: 'white', fontWeight: 'bold' }}
        onPress={() => {
          if (!validateForm()) return;

          Alert.alert('Success', 'Account Created Successfully!');

          // FIX: safe navigation (corrected variable name)
          navigation.navigate('LOGIN');
        }}
      />
    </View>
  );
};

export default Register;