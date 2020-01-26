import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Waypoint } from "react-waypoint";
import {loadMoreNewsAction, loadNewsListAction} from "../../actions/newsActions/actions";
import OneNewsComponent from "./OneNewsComponent";
import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import {bindActionCreators} from "redux";
import MainHeaderComponent from "../header/MainHeaderComponent";
import {styles} from "../../styles/styles";

const MainNewsListComponent = ({classes, news, isEnded, offset, actions: { loadNewsListAction, loadMoreNewsAction }}) => {
  useEffect(loadNewsListAction, []);

  return (
    <div>
      <MainHeaderComponent />
      <Container maxWidth="md">
        <Paper elevation={2} className={classes.listContainer}>
          {
            news.map(({id, article, title}) => (
                <OneNewsComponent key={id} title={title} article={article}/>
            ))
          }
          {
            !isEnded ?
            <div className={classes.alignCircle}>
              <React.Fragment >
                <CircularProgress  />
                <Waypoint onEnter={() => (loadMoreNewsAction(news, offset))} />
              </React.Fragment>
            </div> : <React.Fragment/>
          }
        </Paper>
      </Container>
    </div>
  )
};

const mapStateToProps = ({newsReducer}) => ({
  news: newsReducer.news,
  isEnded: newsReducer.isEnded,
  offset: newsReducer.offset,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadNewsListAction,
    loadMoreNewsAction
  }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainNewsListComponent));