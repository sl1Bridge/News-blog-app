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
  }
};

const OneNewsComponent = ({classes}) => (
    <Card className={classes.cardStyle}>
      <img src={noImg} alt="newsImg" className={classes.photo}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque doloremque eveniet, exercitationem
          illum impedit itaque maiores natus omnis optio quis quo repellendus sint sit ut vero voluptatibus! Animi assumenda
          beatae, consequatur dolore id iure repellendus reprehenderit sit? A ad cum ducimus, ea eius et eveniet excepturi,
          explicabo iusto nisi, qui quidem ratione reprehenderit sit ut veritatis vitae voluptatibus. Adipisci.
          illum impedit itaque maiores natus omnis optio quis quo repellendus sint sit ut vero voluptatibus! Animi assumenda
          beatae, consequatur dolore id iure repellendus reprehenderit sit? A ad cum ducimus, ea eius et eveniet excepturi,
          explicabo iusto nisi, qui quidem ratione reprehenderit sit ut veritatis vitae voluptatibus. Adipisci.
        </Typography>
      </CardContent>
    </Card>
);

export default withStyles(styles)(OneNewsComponent);