import React from "react";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core";

import noImg from "../../img/no-image-found.jpg"
import {styles} from "../../styles/styles";

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