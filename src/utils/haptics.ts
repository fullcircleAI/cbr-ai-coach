/**
 * Haptic Feedback Utilities for iOS/Android Native Feel
 * Uses Vibration API for haptic feedback on mobile devices
 */

// Check if Vibration API is supported
const isVibrationSupported = (): boolean => {
  return 'vibrate' in navigator;
};

/**
 * Light haptic feedback (for button taps, selections)
 */
export const lightHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(10);
  }
};

/**
 * Medium haptic feedback (for confirmations, toggles)
 */
export const mediumHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(20);
  }
};

/**
 * Heavy haptic feedback (for errors, important actions)
 */
export const heavyHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(40);
  }
};

/**
 * Success haptic pattern (correct answer)
 */
export const successHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([10, 50, 10]);
  }
};

/**
 * Error haptic pattern (wrong answer)
 */
export const errorHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([20, 100, 20, 100, 20]);
  }
};

/**
 * Selection haptic (scrolling through options)
 */
export const selectionHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(5);
  }
};

/**
 * Warning haptic pattern
 */
export const warningHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate([30, 50, 30]);
  }
};

/**
 * Impact haptic (heavy action like submitting)
 */
export const impactHaptic = (): void => {
  if (isVibrationSupported()) {
    navigator.vibrate(30);
  }
};

