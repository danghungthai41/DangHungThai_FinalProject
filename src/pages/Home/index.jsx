import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CourseItem from "../../components/CourseItem";
import Header from "../../components/Header";
import styles from "./style";
import { connect } from "react-redux";
import { fetchCourses } from "../../redux/actions/course";
class Home extends Component {
  renderCourseList = () => {
    return this.props.courseList.map((course, index) => {
      return (
        <Grid item xs={12} lg={4}>
          <CourseItem key = {index} course = {course}/>
        </Grid>
      );
    });
  };
  render() {
    console.log(this.props.classes);
    return (
      <div>
        <Header />
        <Typography
          component="h1"
          variant="h2"
          className={this.props.classes.title}
          
        >
          Course List
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
           {this.props.courseList && this.renderCourseList()}
          </Grid>
        </Container>
      </div>
    );
  }
  
  //Trong life cycle có 17 loại
  // có 2 loại chính là: create và update (life cycle)
  /**
   * các thứ tự chạy của Create life cycle:
   * constructor()
   * componentWillMount()
   * render()
   * componentDidMount()
   * Phương thức huỷ để chuyển trang: componentWillUnMount();
   * 
   * 
   ** các thứ tự chạy của Update life cycle:
   * componentWillRecieveProps()
   * componentWillUpdate ()
   * shouldComponentUpdate()
   * render()
   * componentDidUpdate()
   * 
   * 
   * Purecomponet from react giúp chống render lại trang con
   */
  componentDidMount() {
    this.props.dispatch(fetchCourses)
    // console.log("componentDidMount");
    
  }
}
const mapStateToProps = (state) => {
  return {
    // key là props của component
    // key: value,
    courseList: state.courseReducer.courseList,
  };
};
export default connect(mapStateToProps)(withStyles(styles)(Home));
