import React from "react";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core";

import noImg from "../../img/no-image-found.jpg"

const styles = {
  cardStyle: {
    margin: '0 10px 15px 10px',
    boxShadow: '1px 2px 8px 2px',
  },
  photo: {
    marginLeft: '5px',
    float: 'right',
    height: '260px',
    width: '260px',
  }
};

const OneNewsComponent = ({classes, title, article}) => (
  <Card className={classes.cardStyle}>
    <div className={classes.photo}>
      <img src={noImg} alt="newsImg"/>
    </div>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {article}
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(OneNewsComponent);