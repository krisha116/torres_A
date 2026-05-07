import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle, TextInput } from 'react-native'

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
  onChangeText,
  secureTextEntry = false,
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      {label ? (
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      ) : null}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          {
            width: '100%',
            borderBottomWidth: 1,
          },
          textStyle,
        ]}
      />
    </View>
  )
}

export default CustomTextInput