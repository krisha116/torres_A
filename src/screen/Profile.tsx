import React from 'react';
import { Image, Text, View } from 'react-native';
import { IMG } from '../utils';
const Profile: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'blue',
      }}
    >
      <Image
        source={{
          uri: IMG.LOGO,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 40 }}>Information Technology</Text>

    </View>
  );
};

export default Profile;