import {newsData} from "../../data/newsData";
import {loadMoreNewsActionCreator, loadNewsListActionCreator} from "./actionCreators";

export const loadNewsListAction = () => dispatch => {
  let items = newsData.slice(0, 6);
  let offset = items.length;
  dispatch(loadNewsListActionCreator(items, offset))
};

export const loadMoreNewsAction = ( news, offset) => dispatch => {
  let isEnded = false;
  let concatedItems = news.concat(newsData.slice(offset, offset + 6));
  if (concatedItems.length >= newsData.length) {
    isEnded = true
  }
  dispatch(loadMoreNewsActionCreator(concatedItems, offset + 6, isEnded))
};