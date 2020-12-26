import axios from "axios";
import createAction from ".";
import { FETCH_COURSE_LIST } from "../constants/courseConstant";
// create async action to dispatch to middleware to call api
export const fetchCourses = (dispatch) => {
  axios({
    url:
      "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    method: "GET",
    //Gửi token lên back end
    //key ma
    header :{
      Authorization: "Bearer" + localStorage.getItem("t"),
    }
  })
    .then((result) => {
      // console.log(result);
      dispatch(createAction(FETCH_COURSE_LIST, result.data));
    })
    .catch((err) => {
      // console.log(err);
    });
};
