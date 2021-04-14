const getGeoData = async (destination) => {
    try {
        const requestBody = {
            BASE_URL: `http://api.geonames.org/searchJSON?formatted=true&q=${destination}`,
        };
        const geonameResponse = await fetch('/geo-name-locations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
        const geonameData = await geonameResponse.json();
        return geonameData;
    } catch (error) {
        console.error(error);
    }
};

export { getGeoData };
