import {ACTION_NEWS_LIST_LOADED} from "./actions";

export const loadNewsListActionCreator = (news) => {
  return {
    type: ACTION_NEWS_LIST_LOADED,
    payload: news
  }
};