import React, { useState } from 'react';
import { View, LayoutRectangle } from 'react-native';
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
} from 'react-native-reanimated';
import clsx from 'clsx';

interface SheetProps {
  children: React.ReactNode;
  initialHeight?: number;
  minHeight?: number;
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
    overshootClamping?: boolean;
    restSpeedThreshold?: number;
    restDisplacementThreshold?: number;
  };
}

const SheetView: React.FC<SheetProps> = ({
  children,
  initialHeight = 400,
  minHeight = 300,
  springConfig,
}) => {
  const [parentHeight, setParentHeight] = useState<number | null>(null);
  const translateY = useSharedValue(initialHeight);
  const startTranslateY = useSharedValue(initialHeight);

  const defaultSpringConfig = {
    damping: 15,
    stiffness: 150,
    mass: 1,
    overshootClamping: true,
    restSpeedThreshold: 0.1,
    restDisplacementThreshold: 0.1,
  };

  const mergedSpringConfig = { ...defaultSpringConfig, ...springConfig };

  const gesture = Gesture.Pan()
    .onStart(() => {
      startTranslateY.value = translateY.value;
    })
    .onUpdate((event) => {
      const newTranslateY = startTranslateY.value - event.translationY;
      translateY.value = Math.min(
        Math.max(newTranslateY, minHeight),
        parentHeight || initialHeight
      );
    })
    .onEnd(() => {
      const targetHeight =
        translateY.value < ((minHeight + (parentHeight || initialHeight)) / 2)
          ? minHeight
          : parentHeight || initialHeight;
      translateY.value = withSpring(targetHeight, mergedSpringConfig);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    height: translateY.value,
    bottom: 0,
    borderTopLeftRadius: translateY.value === parentHeight ? 0 : 24,
    borderTopRightRadius: translateY.value === parentHeight ? 0 : 24,
  }));

  const isHandleVisible = useDerivedValue(() => translateY.value !== parentHeight);

  const handleStyle = useAnimatedStyle(() => ({
    height: isHandleVisible.value ? 4 : 0,
    opacity: isHandleVisible.value ? 1 : 0,
  }));

  const handleParentLayout = (event: { nativeEvent: { layout: LayoutRectangle } }) => {
    setParentHeight(event.nativeEvent.layout.height);
  };

  return (
    <View className="absolute inset-0" onLayout={handleParentLayout}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          className={clsx(
            "absolute bottom-0 left-0 right-0 bg-black overflow-hidden",
            {
              "rounded-t-3xl": true,
            }
          )}
          style={animatedStyle}
        >
          <Animated.View
            className="w-10 bg-gray-400 rounded-full self-center my-2"
            style={handleStyle}
          />
          <Animated.ScrollView className="flex-1 px-3">
            {children}
          </Animated.ScrollView>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SheetView;