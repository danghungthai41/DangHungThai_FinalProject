import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import theme from "../../theme";
import { withStyles } from "@material-ui/core";
import axios from "axios";
import Header from "../../components/Header";
import {connect} from "react-redux";
import { SET_TOKEN } from "../../redux/constants/courseConstant";
import createAction from "../../redux/actions";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = {
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: this.state.account,
      });
      //Save accessToken into localStorage
      localStorage.setItem("t", result.data.accessToken);

      //Save accessToken to Store
      this.props.dispatch(createAction(SET_TOKEN,result.data.accessToken));
      //sessionStorage
      //cookies: Rate
      console.log(result);
      alert("Success");
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    this.setState({
      account: {
        ...this.state.account,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.account);
  };
  render() {
    // const { classes } = this.props;
    return (
      <>
        <Header />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                label="Tài Khoản"
                name="taiKhoan"
                onChange={this.handleChange}
              />
              <TextField
                name="matKhau"
                variant="outlined"
                label="Password"
                type="password"
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </>
    );
  }
}

export default connect()(withStyles(styles)(SignIn));
