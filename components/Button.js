import { View, Text, TouchableOpacity, Image } from 'react-native';
// constants
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: "absolute",
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.light,
      ...props
    }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 26,
          height: 26
        }}
      />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>Rect</Text>
    </View>
  )
}
