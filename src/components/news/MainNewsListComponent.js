import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Waypoint } from "react-waypoint";
import {loadMoreNewsAction, loadNewsListAction} from "../../actions/newsActions/actions";
import OneNewsComponent from "./OneNewsComponent";
import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";


const styles = {
  marginContainer: {
    padding: '10px 0',
  },
  alignCircle: {
    padding: '30px 50%',
  },
};

const MainNewsListComponent = ({classes, onScreenLoad, news, isEnded, OnBtnClickLoadMoreNews, offset}) => {

  useEffect(() => {onScreenLoad()}, [onScreenLoad]);

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.marginContainer}>
        {
          news.map(({id, article, title},i) => (
            <React.Fragment key={id}>
              <OneNewsComponent title={title} article={article}/>
              <Waypoint onEnter={() => {
                if(i === offset-1) {OnBtnClickLoadMoreNews(news, offset)}
              }} />
            </React.Fragment>
          ))
        }
        {
          <div className={classes.alignCircle}>
            <CircularProgress  />
          </div>
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