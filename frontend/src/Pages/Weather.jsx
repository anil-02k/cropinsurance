import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CSS/Weather.css'; // Ensure you have this CSS file for your styles

const openWeatherApiKey = 'a7276583cb5469b0a66143ce58194703'; // Replace with your OpenWeatherMap API key
const openCageApiKey = '3cf420e0c64547cbb5ca925f552ed841'; // Replace with your OpenCage API key

const InteractiveMap = () => {
  const [map, setMap] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const indiaBounds = L.latLngBounds(
      L.latLng(8.0, 68.0),
      L.latLng(37.0, 97.0)
    );

    const mapInstance = L.map('map', {
      center: [20.5937, 78.9629],
      zoom: 5,
      maxZoom: 18,
      minZoom: 4
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    mapInstance.setMaxBounds(indiaBounds);

    mapInstance.on('zoomend', function () {
      const zoom = mapInstance.getZoom();
      if (zoom < mapInstance.getMinZoom()) {
        mapInstance.setZoom(mapInstance.getMinZoom());
      } else if (zoom > mapInstance.getMaxZoom()) {
        mapInstance.setZoom(mapInstance.getMaxZoom());
      }
    });

    mapInstance.on('moveend', function () {
      if (!mapInstance.getBounds().overlaps(indiaBounds)) {
        mapInstance.fitBounds(indiaBounds, { padding: [20, 20] });
      }
    });

    function adjustInitialZoom() {
      const bounds = indiaBounds.pad(0.1);
      mapInstance.fitBounds(bounds, { padding: [20, 20] });
    }

    adjustInitialZoom();

    mapInstance.on('click', function (e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      setCoordinates({ lat, lng });
      fetchWeatherData(lat, lng);
      fetchLocationData(lat, lng);
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const fetchWeatherData = async (lat, lng) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherApiKey}`);
      const data = await response.json();
      setWeatherInfo({
        temperature: `Temperature: ${data.main.temp} °C`,
        humidity: `Humidity: ${data.main.humidity} %`,
        wind: `Wind Speed: ${data.wind.speed} m/s`,
        condition: `Condition: ${data.weather[0].description}`
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherInfo({ error: 'Failed to retrieve weather data.' });
    }
  };

  const fetchLocationData = async (lat, lng) => {
    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${openCageApiKey}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocationInfo({ location: `Location: ${data.results[0].formatted}` });
      } else {
        setLocationInfo({ location: 'Location: Unknown' });
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
      setLocationInfo({ location: 'Failed to retrieve location data.' });
    }
  };

  return (
    <div className='map-main-container'>
      <h1>Click on the map to get weather information</h1>
      <div id="container">
        <div id="map-container">
          <div id="map" style={{ width: '100%', height: '75vh' }}></div>
        </div>
        <div id="weather-container">
          <div id="weather-info">
            <h2>Weather Information</h2>
            <p id="location">{locationInfo.location}</p>
            <p id="temperature">{weatherInfo.temperature}</p>
            <p id="humidity">{weatherInfo.humidity}</p>
            <p id="wind">{weatherInfo.wind}</p>
            <p id="condition">{weatherInfo.condition}</p>
            <p id="coordinates">Coordinates: {coordinates.lat.toFixed(2)}, {coordinates.lng.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
