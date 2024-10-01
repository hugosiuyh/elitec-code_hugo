import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, Easing } from 'react-native';

const { width, height } = Dimensions.get('window');

const emojis = ['🎉', '🎊', '🎉', '🎊', '🎉', '🎉', '🎉', '🌟'];

const ConfettiAnimation: React.FC = () => {
  const emojiAnimations = useRef(emojis.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = emojiAnimations.map((anim) => {
      // Smooth upward and downward motion with bounce effect
      const translateY = anim.interpolate({
        inputRange: [0, 0.5, 1], // 0.5 is the peak, 1 is the fall back
        outputRange: [height, height * 0.3, height], // Bounce up to 30%, then fall back to bottom
      });

      // Move emojis in random X directions starting from the center
      const initialXOffset = (Math.random() - 0.5) * 100; // Random offset in the range of -50 to +50
      const translateX = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [initialXOffset, Math.random() > 0.5 ? Math.random() * width : -Math.random() * width], // Random X movement from around center to left or right
      });

      // Start with full opacity, then fade out at the end
      const opacity = anim.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [1, 1, 0], // Fade out towards the end
      });

      // Bouncy motion using Easing.bounce
      return Animated.timing(anim, {
        toValue: 1, // Move to final position
        duration: 2800, // Slower duration for a more relaxed motion
        easing: Easing.bounce, // Use bounce easing for natural motion
        useNativeDriver: true, // Use native driver for better performance
      });
    });

    // Start all animations different times instead of PARALLEL
    Animated.stagger(90, animations).start();
  }, [emojiAnimations]);

  return (
    <View style={styles.confettiContainer} pointerEvents="none">
      {emojis.map((emoji, index) => {
        const translateY = emojiAnimations[index].interpolate({
          inputRange: [0, 0.5, 1], // Include rise and fall
          outputRange: [height, height * 0.3, height], // Rise to 30% of the screen, then fall back to the bottom
        });

        const translateX = emojiAnimations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [0, Math.random() > 0.5 ? Math.random() * width : -Math.random() * width], // Start from center and move randomly to left or right
        });

        const opacity = emojiAnimations[index].interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [1, 1, 0], // Fade out towards the end
        });

        return (
          <Animated.Text
            key={index}
            style={[
              styles.emoji,
              {
                transform: [{ translateX }, { translateY }],
                opacity,
              },
            ]}
          >
            {emoji}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  confettiContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1000, // Ensure the confetti is above other content
    alignItems: 'center',
  },
  emoji: {
    position: 'absolute',
    fontSize: 30,
  },
});

export default ConfettiAnimation;
