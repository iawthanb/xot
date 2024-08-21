export const actionTypes = {
  ADD_TO_SAVED: 'ADD_TO_SAVED',
  REMOVE_FROM_SAVED: 'REMOVE_FROM_SAVED',
};

export const initialState = {
  timers: JSON.parse(localStorage.getItem('savedTimers') || '[]'),
  selectedTags: [],
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_SAVED: {
      const isInList = state.timers.find((timer) => timer.timerId === action.payload.timerId);

      if (isInList) {
        return state;
      }

      const updatedTimers = [...state.timers, action.payload];
      localStorage.setItem('savedTimers', JSON.stringify(updatedTimers));

      return {
        ...state,
        timers: updatedTimers,
      };
    }

    case actionTypes.REMOVE_FROM_SAVED: {
      const updatedTimers = state.timers.filter((timer) => !action.payload.includes(timer.timerId));

      localStorage.setItem('savedTimers', JSON.stringify(updatedTimers));

      return {
        ...state,
        timers: updatedTimers,
      };
    }

    case actionTypes.SET_SELECTED_TAGS: {
      return {
        ...state,
        selectedTags: action.payload,
      };
    }

    default:
      return state;
  }
}
