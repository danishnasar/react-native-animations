import { StyleSheet } from "react-native";

export const IMAGE_SIZE = {
    max: 300,
    min: 100
};

export const TITLE_FONT_SIZE = {
  max: 30,
  min: 0.41
}

export const styles = StyleSheet.create({
    image: {
      height: IMAGE_SIZE.max,
      width: "100%"
    },
    textContainer: {
      padding: 10,
      backgroundColor: '#00000053',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    subtitle: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center'
    },
    title: {
      fontSize: 0,
      color: '#fff',
      textAlign: 'center'
    }
  });