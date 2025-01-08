// This change the background image when is day or night
export const getBackgroundImage = (isDay) => {
  if (isDay == 0) {
    return {
      sm: "/src/assets/backgrounds/night_sm.png",
      md: "/src/assets/backgrounds/night_md.png",
      lg: "/src/assets/backgrounds/night_lg.png",
    };
  } else {
    return {
      sm: "/src/assets/backgrounds/daylight_sm.png",
      md: "/src/assets/backgrounds/daylight_md.png",
      lg: "/src/assets/backgrounds/daylight_lg.png",
    };
  }
};
