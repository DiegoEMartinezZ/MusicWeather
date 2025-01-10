export const getBackgroundImage = (isDay, humidity) => {
  if (isDay == 0 && humidity >= 60 && humidity <= 100) {
    return {
      sm: "/src/assets/backgrounds/night_cold_sm.png",
      md: "/src/assets/backgrounds/night_cold_md.png",
      lg: "/src/assets/backgrounds/night_cold_lg.png",
    };
  } else if (isDay == 1 && humidity >= 60 && humidity <= 100) {
    return {
      sm: "/src/assets/backgrounds/day_cold_sm.png",
      md: "/src/assets/backgrounds/day_cold_md.png",
      lg: "/src/assets/backgrounds/day_cold_lg.png",
    };
  } else if ((isDay == 0 && humidity >= 30) || humidity < 60) {
    return {
      sm: "/src/assets/backgrounds/night_warm_sm.png",
      md: "/src/assets/backgrounds/night_warm_md.png",
      lg: "/src/assets/backgrounds/night_warm_lg.png",
    };
  } else if ((isDay == 1 && humidity >= 30) || humidity < 60) {
    return {
      sm: "/src/assets/backgrounds/day_warm_sm.png",
      md: "/src/assets/backgrounds/day_warm_md.png",
      lg: "/src/assets/backgrounds/day_warm_lg.png",
    };
  } else if (isDay == 0 && humidity < 30) {
    return {
      sm: "/src/assets/backgrounds/night_sunny_sm.png",
      md: "/src/assets/backgrounds/night_sunny_md.png",
      lg: "/src/assets/backgrounds/night_sunny_lg.png",
    };
  } else if (isDay == 1 && humidity < 30) {
    return {
      sm: "/src/assets/backgrounds/day_sunny_sm.png",
      md: "/src/assets/backgrounds/day_sunny_md.png",
      lg: "/src/assets/backgrounds/day_sunny_lg.png",
    };
  }
};
