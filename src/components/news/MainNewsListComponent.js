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

const MainNewsListComponent = ({classes, onScreenLoad, news, isEnded, OnScrollDownLoadMore, offset}) => {
  useEffect(onScreenLoad, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.marginContainer}>
        {
          news.map(({id, article, title}) => (
              <OneNewsComponent key={id} title={title} article={article}/>
          ))
        }
        {
          <div className={classes.alignCircle}>
            {
              isEnded ?
                <p>no more</p> :
                <React.Fragment>
                  <CircularProgress  />
                  <Waypoint onEnter={() => (OnScrollDownLoadMore(news, offset))} />
                </React.Fragment>
            }
          </div>
        }
      </Paper>
    </Container>
  )
};

const mapStateToProps = ({newsReducer}) => ({
  news: newsReducer.news,
  isEnded: newsReducer.isEnded,
  offset: newsReducer.offset,
});

const mapDispatchToProps = (dispatch) => ({
  onScreenLoad: () => dispatch(loadNewsListAction()),
  OnScrollDownLoadMore: (news, offset) => dispatch(loadMoreNewsAction(news, offset)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainNewsListComponent));