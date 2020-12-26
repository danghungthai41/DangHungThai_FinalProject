import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import theme from "../../theme";
import { withStyles } from "@material-ui/core";
import axios from "axios";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDT: "",
        maNhom: "GP06",
      },
    };
  }
  //async đgl keyword
  handleSubmit = async (event) => {
    // stop refesh page when form submitted
    event.preventDefault();

    //async await
    try {
      const res = await axios({
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: this.state.form,
      });
      console.log(res);
      alert("Sign up success");
    } catch (err) {
      console.log(err);
    }
    // console.log(this.state.form);

    // .then((result) => {
    //   console.log(result.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
   
  };
  handleChange = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value },
    });
    // console.log(this.state.form)
  };
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="taiKhoan"
                  onChange={this.handleChange}
                  variant="outlined"
                  fullWidth
                  label="Username"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="FullName"
                  name="hoTen"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type="password"
                  name="matKhau"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Phone"
                  name="soDT"
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp);
