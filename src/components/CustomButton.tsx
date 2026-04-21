import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({ 
  containerStyle= {}, 
  textsStyle= {}, 
  label= '', 
  onPress=() => {}, 
  loading= false}) => {
    return (
        <View style={containerStyle}>
          <TouchableOpacity onPress={onPress} disabled={loading}>
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
            }}
            >
            <Text style={textsStyle}>{label}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default CustomButton;