import {ACTION_NEWS_LIST_LOADED} from "../actions/newsActions/actionCreators";

const defautState = {
  newsList: {
    items: [],
    isEnded: false,
    offset: 0,
  },
};

export const newsReducer = (state = defautState, action) => {
  switch (action.type) {
    case ACTION_NEWS_LIST_LOADED: {
      return {
        ...state,
        items: action.payload,
      }
    }

    default:
      return state;
  }
};