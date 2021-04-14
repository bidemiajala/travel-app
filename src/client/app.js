import { validateInput } from './js/validateInput';
import { daysCountdown } from './js/daysCountdown';
import { renderTripCard } from './js/renderTripCard';
import { renderSavedTrips } from './js/renderSavedTrips';
import { handleSubmit, saveTrip, removeTrip } from './js/formHandler';
import { getGeoData } from './js/getGeoData';
import { getWeather } from './js/getWeather';
import { getPics } from './js/getPics';

import './styles/index.scss';

export {
    validateInput,
    daysCountdown,
    renderTripCard,
    renderSavedTrips,
    handleSubmit,
    saveTrip,
    removeTrip,
    getWeather,
    getGeoData,
    getPics,
};
