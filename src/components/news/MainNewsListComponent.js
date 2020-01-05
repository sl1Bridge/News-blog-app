import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {newsData} from "../../data/newsData";
import {loadNewsListAction} from "../../actions/newsActions/actions";
import OneNewsComponent from "./OneNewsComponent";
import {Paper, withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";


const styles = {
  marginContainer: {
    padding: '10px 0',
  },
};

const MainNewsListComponent = ({classes, onScreenLoad, news}) => {

  useEffect(() => {onScreenLoad()}, [onScreenLoad]);

  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.marginContainer}>
        {
          news.map(({id, article, title}) => (
            <OneNewsComponent key={id} title={title} article={article}/>
          ))
        }
      </Paper>
    </Container>
  )
};

const mapStateToProps = (state) => ({
  news: state.news
});

const mapDispatchToProps = (dispatch) => ({
  onScreenLoad: () => dispatch(loadNewsListAction(newsData))
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainNewsListComponent));