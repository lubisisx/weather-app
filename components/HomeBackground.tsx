import {
  Image,
  ImageBackground,
  StyleSheet,
  ScaledSize,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

const HomeBackground = () => {
  const dimensions = useWindowDimensions();
  const { width, height } = dimensions;
  const myStyles = styles(dimensions);
  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E3358", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("../assets/home/Background.png")}
        resizeMode="cover"
        style={{ height: "100%" }}>
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokeOffsetY,
          }}>
          <Rect x={0} y={0} width={width} height={smokeHeight}></Rect>
        </Canvas>
        <Image
          source={require("../assets/home/House.png")}
          resizeMode="cover"
          style={myStyles.houseImage}
        />
      </ImageBackground>
    </>
  );
};

export default HomeBackground;

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    houseImage: {
      width: width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
