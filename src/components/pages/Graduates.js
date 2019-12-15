import React, { Fragment } from "react";
import {
  Slide,
  Box,
  Tooltip,
  Grid,
  CardMedia,
  withStyles,
  Typography,
  Button,
  IconButton,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/styles";
import { Share } from '@material-ui/icons';
import Background from '../../assets/images/graduates.jpg';
import image from '../../assets/images/Tan Zhi Han.jpg';
import GraduateDetails from './GraduateDetails.js';

// component level styling
const useStyles = makeStyles(theme => ({
  banner: {
    maxWidth: "100vw",
    backgroundImage: props => `url(${Background})`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "40vh",
    [theme.breakpoints.up('md')]: {
      height: "calc(100vh - 64px)",
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  section: {
    margin: `${theme.spacing(2)}px 0px`,
  },
  gridList: {
    width: "100%",
  },
  gridListTileBar: {
    height: "fit-content",
    padding: theme.spacing(0.5),
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: "100px",
    backgroundImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
    opacity: 0.5,
  },
  icon: {
    color: "#FFF",
  },
}));
const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
]
const graduates = [
  {
    id: "1",
    name: "Edmund Ung Eng Soon",
    name_ch: "洪永顺",
    birthday: "07/01/1998",
    phone: "017-5610386",
    email: "edmundues@yahoo.com",
    one_liner: "So……Do you like bread?",
    gender: "male",
    lecture: "M1",
    tutorial: "M1T1a",
    describe_me: ["老是被老师呼唤，算是一个不错的班长吧！好像从来不担心明天要交的功课或平时的小测验，但是到了大考他绝对是ampia型。",
      "矮矮的胖胖的香蕉人。有时候真的很kapsiao哈哈！很会讨讲师的心。真的真的很喜欢吃面包。他的口头禅已说明了一切^^",
      "刚认识时觉得很可爱xia XD but没讲到话只是在lecture偶尔kapsiao，过后才变熟。自从中秋晚会帮我换蜡烛后就觉得他是一个好人。",
    ],
    message: "首次到此，遇到一群同甘共苦，同舟共济的损友。说真的他们改变了我，愿我们在此的一切回忆永恒! 祝大家前程似锦! YOLO"
  },
]
function Graduates() {
  // const [t, i18n] = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleFullScreenOpen = () => {
    setOpen(true);
  };
  const handleFullScreenClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div>
      <Box id="graduates-banner" className={classes.banner}>
      </Box>
      <Container className={classes.container} >
        <Box id="home-introduction" className={classes.section}>
          Search
        </Box>
        <Box id="home-introduction" className={classes.section}>
          <GridList
            cellHeight={matches ? 200 : 120}
            className={classes.gridList}
            cols={matches ? 4 : 2}
          >
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={1} onClick={handleFullScreenOpen}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Box>
      </Container>
      <GraduateDetails
        open={open}
        handleClose={handleFullScreenClose}
        info={graduates[0]}
        TransitionComponent={Transition}
      />
    </div>
  );
}

export default Graduates;
