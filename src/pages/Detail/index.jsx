import React, { Component } from "react";
import { connect } from "react-redux";
import { CardMedia, Typography, withStyles } from "@material-ui/core";
import style from "./style";
import { fetchCourseDetail } from "../../redux/actions/detail";
class Detail extends Component {
  render() {
    const { courseDetail, classes } = this.props;
    return (
      <div>
        <CardMedia
          className={classes.imageCourse}
          //optional chaining
          image={courseDetail?.hinhAnh}
        />
        <Typography component="h1" varient="h2">
          {courseDetail && courseDetail.tenKhoaHoc}
        </Typography>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseDetail("Backend_01"));
  }
}
const mapStateToProps = (state) => {
  return {
    // Hoặc dùng courseDetail: state.courseReducer.courseDetail || {}
    courseDetail: state.courseReducer.courseDetail,
  };
};
export default connect(mapStateToProps)(withStyles(style)(Detail));
