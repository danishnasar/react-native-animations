import { Alert, TouchableOpacity, View, Text } from "react-native";
import { IMAGE_SIZE, TITLE_FONT_SIZE, styles } from "./ListItem.style";
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";

export default function ListItem({ image, scrollY, index }) {
  const imgAnimStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.max, index * IMAGE_SIZE.max - IMAGE_SIZE.max],
      [IMAGE_SIZE.max, IMAGE_SIZE.min],
      Extrapolate.CLAMP
    );

    return { height };
  });

  const textOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.max, index * IMAGE_SIZE.max - IMAGE_SIZE.max + IMAGE_SIZE.max/2],
      [1, 0],
      Extrapolate.CLAMP
    );

    return { opacity };
  });

  const textAnimStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.max, index * IMAGE_SIZE.max - IMAGE_SIZE.max],
      [TITLE_FONT_SIZE.max, TITLE_FONT_SIZE.min],
      Extrapolate.CLAMP
    );

    return { fontSize };
  });

  return (
    <TouchableOpacity onPress={() => Alert.alert(`You clicked on ${image.title}`)}>
      <Animated.Image source={image.picture} style={[styles.image, imgAnimStyle]} />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{image.subtitle}</Text>
        <Animated.Text style={[styles.title, textAnimStyle, textOpacity]}>{image.title}</Animated.Text>
      </View>
    </TouchableOpacity>
  );
}
