export const getBackgroundImage = (isDay, humidity) => {
  if (humidity >= 60 && humidity <= 100) {
    return isDay === 0
      ? {
          sm: "/src/assets/backgrounds/night_cold_sm.png",
          md: "/src/assets/backgrounds/night_cold_md.png",
          lg: "/src/assets/backgrounds/night_cold_lg.png",
        }
      : {
          sm: "/src/assets/backgrounds/day_cold_sm.png",
          md: "/src/assets/backgrounds/day_cold_md.png",
          lg: "/src/assets/backgrounds/day_cold_lg.png",
        };
  } else if (humidity >= 30 && humidity < 60) {
    return isDay === 0
      ? {
          sm: "/src/assets/backgrounds/night_warm_sm.png",
          md: "/src/assets/backgrounds/night_warm_md.png",
          lg: "/src/assets/backgrounds/night_warm_lg.png",
        }
      : {
          sm: "/src/assets/backgrounds/day_warm_sm.png",
          md: "/src/assets/backgrounds/day_warm_md.png",
          lg: "/src/assets/backgrounds/day_warm_lg.png",
        };
  } else if (humidity < 30) {
    return isDay === 0
      ? {
          sm: "/src/assets/backgrounds/night_sunny_sm.png",
          md: "/src/assets/backgrounds/night_sunny_md.png",
          lg: "/src/assets/backgrounds/night_sunny_lg.png",
        }
      : {
          sm: "/src/assets/backgrounds/day_sunny_sm.png",
          md: "/src/assets/backgrounds/day_sunny_md.png",
          lg: "/src/assets/backgrounds/day_sunny_lg.png",
        };
  }
};
