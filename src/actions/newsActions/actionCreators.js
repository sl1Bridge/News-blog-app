export const ACTION_NEWS_LIST_LOADED = 'ACTION_NEWS_LIST_LOADED';

export const loadNewsList = (news) => {
  return {
    type: ACTION_NEWS_LIST_LOADED,
    payload: news
  }
};