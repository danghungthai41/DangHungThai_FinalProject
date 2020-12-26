import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
class Header extends Component {
  removeToken = () => {
    localStorage.removeItem("t")
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" components="a">
              News
            </Typography>
            {this.props.token ? (
              <>
                <Button color="inherit">Hello, Friend</Button>
                <Button color="inherit" onClick = {this.removeToken}>Log out</Button>
              </>
            ) : (
              <>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Sign Up</Button>
                <Button color="inherit">Login</Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.credentials.token,
});

export default connect(mapStateToProps)(Header);
