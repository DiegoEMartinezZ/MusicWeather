import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import countryDB from "../../test/weather-test.json";

const MusicWeatherContext = createContext();

const MusicWeatherProvider = ({ children }) => {
  //
  /*
    Navigation around the views of the app
  */
  //
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
    setCityName("");
    setWeatherData([]);
    setBtnFlag(true);
  };

  const goToInfo = () => {
    navigate("/info");
  };

  const goToFavoriteCities = () => {
    navigate("/favorite");
  };

  //
  /*
    Light and Dark Mode
  */
  //
  const [btnDarkMode, setBtnDarkMode] = useState(true);
  const [theme, setTheme] = useState("light");

  const darkModeTrigger = () => {
    setBtnDarkMode(!btnDarkMode);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [countryCode, setCountryCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [citiesArray, setCitiesArray] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  //
  //
  /* From this point I would applied a JSON file as a TEST file with some countries and
    cities, the main objective for doing this is that when I found a proper API
   for cities I would use it with the Country API for a better performance.  
   This will not interfere with the purpose and fuctionality of the app.
   */
  //
  //

  //
  /*
    Country and city handlers:
  */
  //

  const countryHandler = (e) => {
    setCountryCode(e.target.value);
  };

  const cityHandler = (e) => {
    setCityName(e.target.value);
  };

  const checkCityInfo = () => {
    setTimeout(() => goToInfo(), 1000);
  };

  //
  /*
     Get the info of the city selected
  */
  //

  useEffect(() => {
    // Ensure the correct backend URL is used
    const BACKEND_URL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    // Filter cities by country code
    const countryByCode = countryDB.find(
      (country) => country.code === countryCode
    );

    // If country is found, extract cities; otherwise, set an empty array
    const cities = countryByCode ? countryByCode.cities : [];
    setCitiesArray(cities);

    // Function to fetch weather data for a given city
    const fetchWeatherData = async (cityName) => {
      if (!cityName) return; // Ensure cityName is valid

      try {
        // Make the API call to the backend
        const response = await axios.get(`${BACKEND_URL}/api/weather`, {
          params: { city: cityName },
        });

        // Destructure the response data
        const { location, current } = response.data;

        // Update state with the fetched data
        setWeatherData(current);
        setLocationData(location);

        console.log("Location:", location);
        console.log("Current Weather:", current);
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    // Fetch weather data if a valid cityName exists
    if (cityName) {
      fetchWeatherData(cityName);
    }
  }, [countryCode, cityName]);

  //
  /*
     Get the cities array, of a country selected, in alphabethical order:
  */
  //

  const citiesInOrder = citiesArray.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  });

  //
  /*
     Get the country array in alphabethical order:
  */
  //

  const countriesInOrder = countryDB.sort((a, b) => {
    if (a.country.toLowerCase() < b.country.toLowerCase()) return -1;
    if (a.country.toLowerCase() > b.country.toLowerCase()) return 1;
    return 0;
  });

  //
  /*
    Search the weather info for the country and the city selected: 
  */
  //

  const countrySelected = countryDB.filter(
    (oneCountry) => oneCountry.code === countryCode
  );

  const countryName = countrySelected.map((oneCountry) => oneCountry.country);

  //
  /*
    Different states at the time saving a favorite city
  */
  //

  const [btnFlag, setBtnFlag] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  //
  /*
   Handler for adding fav cities:
   */
  //

  const [arrayFavCities, setArrayFavCities] = useState(() => {
    const savedFavCities = localStorage.getItem("arrayFavCities");
    return savedFavCities ? JSON.parse(savedFavCities) : [];
  });

  //
  /*
   Update the array when a city is added:
   */
  //
  useEffect(() => {
    const arrayFavCitiesNoDupe = arrayFavCities.filter((oneCity, idx) => {
      return arrayFavCities.indexOf(oneCity) === idx;
    });
    setArrayFavCities(arrayFavCitiesNoDupe);
  }, []);

  useEffect(() => {
    localStorage.setItem("arrayFavCities", JSON.stringify(arrayFavCities));
  }, [arrayFavCities]);

  //
  /*
    Delete fav city from fav city array: 
  */
  //

  const deleteFavCity = (favoriteCity) => {
    const newArrayFavCities = arrayFavCities.filter(
      (oneCity) => oneCity !== favoriteCity
    );
    setArrayFavCities(newArrayFavCities);
  };

  //
  /*
   Check if the selected city exist already in the Fav City
   to change the status of the btn
   */
  //

  useEffect(() => {
    for (let i = 0; i < arrayFavCities.length; i++) {
      const found = arrayFavCities[i] === cityName;
      if (found) {
        setBtnFlag(false);
        break;
      } else if (!found) {
        setBtnFlag(true);
      }
    }
  }, [cityName]);

  //
  /*
   Handler to save that city in view -> Favorite Cities, NO repeat cities
   */
  //

  const favCity = () => {
    setArrayFavCities([...arrayFavCities, cityName]);

    if (btnFlag === true) {
      navigator.clipboard.writeText(cityName).then(() => {
        setBtnFlag(false);
        setMessage(`${cityName} Added to favorite cities!`);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      });
    } else {
      navigator.clipboard.writeText(cityName).then(() => {
        setBtnFlag(true);
        setMessage(`${cityName} Removed from favorite cities!`);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      });
    }
  };

  return (
    <MusicWeatherContext.Provider
      value={{
        goToHome,
        goToInfo,
        goToFavoriteCities,
        darkModeTrigger,
        btnDarkMode,
        theme,
        countryHandler,
        cityHandler,
        countriesInOrder,
        citiesInOrder,
        citiesArray,
        countryName,
        cityName,
        setCityName,
        countryCode,
        weatherData,
        setWeatherData,
        checkCityInfo,
        btnFlag,
        favCity,
        showMessage,
        message,
        arrayFavCities,
        locationData,
        setLocationData,
        deleteFavCity,
      }}
    >
      {children}
    </MusicWeatherContext.Provider>
  );
};

export { MusicWeatherContext, MusicWeatherProvider };
