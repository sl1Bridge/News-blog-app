import React from 'react';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OneTabPanelComponent from "./OneTabPanelComponent";
import withStyles from "@material-ui/core/styles/withStyles";
import ProfileInfoComponent from "./tabs/ProfileInfoComponent";
import ChangeUsernameComponent from "./tabs/ChangeUsernameComponent";
import ChangePasswordComponent from "./tabs/ChangePasswordComponent";
import MainHeaderComponent from "../header/MainHeaderComponent";

const styles = {
  marginContainer: {
    marginTop: '15px',
  },
};

const MainProfileComponent = ({classes}) => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <MainHeaderComponent />
      <Container maxWidth="md" className={classes.marginContainer}>
        <Paper elevation={2}>
          <AppBar position="static">
            <Tabs value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                  aria-label="simple tabs example">
              <Tab label="Profile Info" />
              <Tab label="Change Username" />
              <Tab label="Change Password" />
            </Tabs>
          </AppBar>
          <OneTabPanelComponent value={value} index={0}>
            <ProfileInfoComponent />
          </OneTabPanelComponent>
          <OneTabPanelComponent value={value} index={1}>
            <ChangeUsernameComponent />
          </OneTabPanelComponent>
          <OneTabPanelComponent value={value} index={2}>
            <ChangePasswordComponent />
          </OneTabPanelComponent>
        </Paper>
      </Container>
    </div>
  );
};

export default withStyles(styles)(MainProfileComponent);