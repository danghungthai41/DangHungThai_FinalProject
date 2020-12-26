import axios from "axios";
import createAction from ".";
import { FETCH_COURSE_DETAIL } from "../constants/courseConstant";

export const fetchCourseDetail = (courseId) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(createAction(FETCH_COURSE_DETAIL, result.data));
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};
