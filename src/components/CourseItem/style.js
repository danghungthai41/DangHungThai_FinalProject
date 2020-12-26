import myTheme from '../../theme';
const styles = {
    img : {
        width: "100%",
        height: 280,
        '&:hover':{
            transform: "translate(-10px, -10px)",
            transition: "all 0.3s",
        }, 
    },
    center : {
        textAlign: "center",
        justifyContent: "center",
        "& h2" :{
            color: "red",
        }
    },
    btnDetail : {
        color: myTheme.palette.violet.main,
    },
}
export default styles;