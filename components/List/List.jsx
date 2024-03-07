import { Dimensions } from "react-native";
import { styles } from "./List.style";
import { IMAGES } from "../../constant";
import ListItem from "../ListItem/ListItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { IMAGE_SIZE } from "../ListItem/ListItem.style";

const SCREEN_H = Dimensions.get("screen").height;
export default function List() {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      decelerationRate={"fast"}
      snapToInterval={IMAGE_SIZE.max}
      contentContainerStyle={{
        height: IMAGES.length * IMAGE_SIZE.max + (SCREEN_H - IMAGE_SIZE.max),
      }}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
    >
      {IMAGES.map((image, i) => (
        <ListItem image={image} scrollY={scrollY} index={i} />
      ))}
    </Animated.ScrollView>
  );
}
