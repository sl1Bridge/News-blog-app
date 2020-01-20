export const ACTION_NEWS_LIST_LOADED = 'ACTION_NEWS_LIST_LOADED';
export const ACTION_MORE_NEWS_LOADED = 'ACTION_MORE_NEWS_LOADED';

export const loadNewsListActionCreator = (items, offset) => ({
    type: ACTION_NEWS_LIST_LOADED,
    payload: {items, offset}
});

export const loadMoreNewsActionCreator = (concatedItems, offset, isEnded) => ({
    type: ACTION_MORE_NEWS_LOADED,
    payload: {concatedItems, offset, isEnded}
});