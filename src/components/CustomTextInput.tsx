import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
  label?: string
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
  secureTextEntry?: boolean
  textStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
}

const CustomTextInput: React.FC<Props> = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText = () => {},
  secureTextEntry = false,
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
        <Text style={{
          fontWeight: 'bold',
        }}>{label}</Text>

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          textStyle,
          {
            width: '100%',
            borderBottomWidth: 1,
          },
        ]}
      />
    </View>
  )
}

export default CustomTextInput;