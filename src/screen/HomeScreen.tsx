import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { authLogout } from '../app/actions';
import navigations from '../navigations';
import { NavigationProp } from '@react-navigation/native';



  const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'yellow',
      }}
    >
      {/* <Image source={IMG.LOGO} style={{ width: 320, height: 100 }} /> */}
      <Text style={{ fontSize: 20 }}>Torres Krisha-Ann</Text>

       {/* <TouchableOpacity onPress={() => navigations.navigate(ROUTES.PROFILE)}>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
          
        >
          <Text style={{ fontSize: 24, color: 'white' }}>midterm exam</Text>
        </View>
       </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => {
          dispatch(authLogout());
        }}
      >
        <View
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;