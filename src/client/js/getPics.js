const getPics = async (
    photoType,
    category,
    isSafeSearch,
    orderBy,
    orientation,
    destination
) => {
    try {
        function trimText(text) {
           const trimmed = text.split(' ').join('+');
           return trimmed;
        }
        const pixabayDestination = trimText(destination);
        
        // const pixabayDestination = destination.split(' ').join('+'); // trim spaces for the url. use '+' instead
        const pixabayRequestBody = {
            BASE_URL: `https://pixabay.com/api/?q=${pixabayDestination}&image_type=${photoType}&category=${category}&safesearch=${isSafeSearch}&order=${orderBy}&orientation=${orientation}`,
        };

        const pixabayResponse = await fetch('/pixabay-images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pixabayRequestBody),
        });

        const pixabayData = await pixabayResponse.json();
        return pixabayData;
    } catch (error) {
        console.error(error);
    }
};

export { getPics };
