import {ACTION_NEWS_LIST_LOADED} from "../actions/newsActions/actions";

const defautState = {
    news: [],
    isEnded: false,
    offset: 0,
};

export const newsReducer = (state = defautState, action) => {
  switch (action.type) {
    case ACTION_NEWS_LIST_LOADED: {
      return {
        ...state,
        news: action.payload,
      }
    }

    default:
      return state;
  }
};