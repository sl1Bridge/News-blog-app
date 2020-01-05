import {ACTION_MORE_NEWS_LOADED, ACTION_NEWS_LIST_LOADED} from "../actions/newsActions/actionCreators";

const defautState = {
    news: [],
    isEnded: false,
    offset: 0,
};

export const newsReducer = (state = defautState, action) => {
  switch (action.type) {
    case ACTION_NEWS_LIST_LOADED: {
      const {items, offset} = action.payload;

      return {
        ...state,
        news: items,
        offset: offset,
      }
    }

    case ACTION_MORE_NEWS_LOADED: {
      const {concatedItems, offset, isEnded} = action.payload;

      return {
        ...state,
        news: concatedItems,
        offset: offset,
        isEnded: isEnded,
      }
    }

    default:
      return state;
  }
};