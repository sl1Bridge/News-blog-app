import React from 'react';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OneTabPanelComponent from "./OneTabPanelComponent";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  marginContainer: {
    marginTop: '15px',
  },
};

const MainProfileComponent = ({classes}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" className={classes.marginContainer}>
      <Paper elevation={2}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Profile" />
            <Tab label="Change Username" />
            <Tab label="Change Password" />
          </Tabs>
        </AppBar>
        <OneTabPanelComponent value={value} index={0}>
          privet
        </OneTabPanelComponent>
        <OneTabPanelComponent value={value} index={1}>
          Item Two
        </OneTabPanelComponent>
        <OneTabPanelComponent value={value} index={2}>
          Item Three
        </OneTabPanelComponent>
      </Paper>
    </Container>
  );
};

export default withStyles(styles)(MainProfileComponent);