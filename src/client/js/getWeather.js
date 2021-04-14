const getWeather = async (daysToGo, lat, lon) => {
    try {
        let weatherForecastFormat = 'hourly';
        if (daysToGo > 7) weatherForecastFormat = 'daily';

        const weatherPostRequestBody = {
            BASE_URL: `https://api.weatherbit.io/v2.0/forecast/${weatherForecastFormat}?lat=${lat}&lon=${lon}`,
        };

        const weatherResponse = await fetch('/weather-bit-forecast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(weatherPostRequestBody),
        });

        const weatherData = await weatherResponse.json();
        return weatherData;
    } catch (error) {
        console.error(error);
    }
};

export { getWeather };
