import {loadNewsListActionCreator} from "./actionCreators";

export const ACTION_NEWS_LIST_LOADED = 'ACTION_NEWS_LIST_LOADED';

export const loadNewsListAction = (newsData) => dispatch => {
   return dispatch(loadNewsListActionCreator(newsData));
};