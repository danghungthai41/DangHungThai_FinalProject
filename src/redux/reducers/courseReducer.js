import {
  FETCH_COURSE_LIST,
  FETCH_COURSE_DETAIL,
} from "../constants/courseConstant";
let initialState = {
  courseList: null,
  courseDetail: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_LIST:
      state.courseList = action.payload;
      return { ...state };

    case FETCH_COURSE_DETAIL:
      state.courseDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default courseReducer;
