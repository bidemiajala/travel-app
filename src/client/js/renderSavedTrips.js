// checks and retrieves saved trips from local storage
const renderSavedTrips = () => {
    // Retrieve the object from storage
    const localStorageSavedTrips = JSON.parse(
        localStorage.getItem('savedTrips')
    );

    if (localStorageSavedTrips != null) {
        let documentFragment = new DocumentFragment();
        for (let localStorageSavedTrip of localStorageSavedTrips) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'card--column');

            // Call daysCountdown
            const daysToGo = Client.daysCountdown(
                localStorageSavedTrip.departureDate
            );

            cardElement.innerHTML = Client.renderTripCard(
                localStorageSavedTrip.pixabayData.webformatURL,
                localStorageSavedTrip.destination,
                daysToGo,
                localStorageSavedTrip.weatherData,
                localStorageSavedTrip.id,
                false
            );
            documentFragment.appendChild(cardElement);
        }
        savedTripsSection.appendChild(documentFragment);
    }
};

export { renderSavedTrips };
