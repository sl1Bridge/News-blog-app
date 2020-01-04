import React from 'react';

import {Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const MainNewsListComponent = () => (
  <Container maxWidth="md">
    <Paper elevation={2}>
      <div>
        <img src="https://stjohnscollegeagra.in/images/alumni/no-image-found.jpg" alt="img"/>
        <h1>Lorem ipsum.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque doloremque eveniet, exercitationem
          illum impedit itaque maiores natus omnis optio quis quo repellendus sint sit ut vero voluptatibus! Animi assumenda
          beatae, consequatur dolore id iure repellendus reprehenderit sit? A ad cum ducimus, ea eius et eveniet excepturi,
          explicabo iusto nisi, qui quidem ratione reprehenderit sit ut veritatis vitae voluptatibus. Adipisci.
        </p>
      </div>
    </Paper>
  </Container>
);

export default MainNewsListComponent;