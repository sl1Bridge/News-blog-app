import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {loadMoreNewsAction, loadNewsListAction} from "../../actions/newsActions/actions";
import OneNewsComponent from "./OneNewsComponent";
import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";


const styles = {
  marginContainer: {
    padding: '10px 0',
  },
};

const MainNewsListComponent = ({classes, onScreenLoad, news, isEnded, OnBtnClickLoadMoreNews, offset}) => {

  useEffect(() => {onScreenLoad()}, [onScreenLoad]);

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.marginContainer}>
        {
          news.map(({id, article, title}) => (
            <OneNewsComponent key={id} title={title} article={article}/>
          ))
        }

        {
          (isEnded === false)
            ? <Button variant="contained" onClick={() => OnBtnClickLoadMoreNews(news, offset)}>Load More</Button>
            : <p>No more news for now</p>
        }
      </Paper>
    </Container>
  )
};

const mapStateToProps = (state) => ({
  news: state.news,
  isEnded: state.isEnded,
  offset: state.offset,
});

const mapDispatchToProps = (dispatch) => ({
  onScreenLoad: () => dispatch(loadNewsListAction()),
  OnBtnClickLoadMoreNews: (news, offset) => dispatch(loadMoreNewsAction(news, offset)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainNewsListComponent));