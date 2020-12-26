import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import Detail from "../../pages/Detail";
import styles from "./style";

//width: 100%, height: 280px, h5: center
class CourseItem extends Component {
  render() {
    const { img, center } = this.props.classes;
    const { hinhAnh, moTa, tenKhoaHoc } = this.props.course;
    return (
      <Card>
        <CardActionArea className={center}>
          <CardMedia
            className={img}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {moTa}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={center}>
          <Button size="small" color="secondary">
            <Detail/>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles, { widthTheme: true })(CourseItem);
