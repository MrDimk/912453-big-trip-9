const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControlsContainer = document.querySelector(`.trip-controls`);
const tripEventsContainer = document.querySelector(`.trip-events`);

import {getTripInfo} from './components/trip-info';
import {getMainMenu} from './components/menu';
import {getFilter} from './components/filter';
import {getTripEvents} from './components/trip-event';

const renderElement = function (container, content, position = `beforeend`) {
  container.insertAdjacentHTML(position, content);
};

renderElement(tripInfoContainer, getTripInfo(), `afterbegin`);
renderElement(tripControlsContainer, getMainMenu());
renderElement(tripControlsContainer, getFilter());
renderElement(tripEventsContainer, getTripEvents());

// const

// for (let i = 0; i < TRIP_EVENT_ITEMS; i++) {
//   renderElement(tripEventsContainer)
// }


// EOF
