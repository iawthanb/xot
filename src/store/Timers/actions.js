import { actionTypes } from './reducer';

export const addToSaved = ({ description, tag, seconds }) => {
  const uniqueId = `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;
  const timestamp = new Date().toISOString();
  const duration = seconds;

  const timeEntry = {
    timerId: uniqueId,
    timestamp,
    duration,
    description,
    tag,
  };

  return {
    type: actionTypes.ADD_TO_SAVED,
    payload: timeEntry,
  };
};

export const removeFromSaved = (timerIds) => ({
  type: actionTypes.REMOVE_FROM_SAVED,
  payload: timerIds,
});

export const setSelectedTags = (tags) => ({
  type: actionTypes.SET_SELECTED_TAGS,
  payload: tags,
});
