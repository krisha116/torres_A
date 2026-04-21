import { Image, Text, View } from 'react-native';
import { IMG } from '../utils';
const midtermexam = () => {
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
      <Image source={IMG.LOGO} style={{ width: 320, height: 100 }} />
      <Text style={{ fontSize: 20 }}>midterm exam</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.MIDTERM);
        }}
      >
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>VISIT PROFILE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(authLogout());
        }}
      >
        <View
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'red' }}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default midtermexam;