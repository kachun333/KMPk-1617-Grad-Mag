import React, { useState, useCallback, useEffect } from "react";
import {
  Slide,
  Box,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  withStyles,
  Typography,
  Button,
  IconButton,
  Container,
  CircularProgress,
  GridListTile,
  GridListTileBar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/styles";
import { Share } from '@material-ui/icons';
import GraduateDetails from './GraduateDetails.js';
import Banner from '../common/Banner';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, useFirebase } from 'react-redux-firebase';
import { setGraduates, filterGraduates } from "../../store/actions/graduatesAction";
import Unauthorized from '../common/Unauthorized';

// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: `${theme.spacing(2)}px 0px`,
  },
  searchBar: {
    width: "96%",
    [theme.breakpoints.up('md')]: {
      width: "72%",
    }
  },
  card: {
    margin: "4px",
    width: "43.2vw",
    [theme.breakpoints.up('md')]: {
      width: "282px",
    }
  },
  cardMedia: {
    height: "28.8vw",
    [theme.breakpoints.up('md')]: {
      height: "188px",
    }
  },
  cardContent: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`
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


function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

function Graduates(props) {
  // const [t, i18n] = useTranslation();

  const dispatch = useDispatch();
  const firebase = useFirebase();

  useFirestoreConnect('graduates');
  const datasource = useSelector(state => state.firestore.ordered.graduates);
  useEffect(() => {
    getGraduates(datasource);
    // setSelected({
    //   "id": "39",
    //   "name": "Brian Lee How Cheng",
    //   "name_ch": "李孝靖",
    //   "birthday": "16/01/1998",
    //   "phone": "016-4514893",
    //   "email": "brianlhc13@gmail.com",
    //   "one_liner": "walao！",
    //   "gender": "male",
    //   "lecture": "M1",
    //   "tutorial": "M1T8b",
    //   "describe_me": ["Typical乖乖仔，but是很eh cham的乖乖仔。以学业为第一的他，同时也喜欢运动，和朋友打成一片。是大家的好supporter！",
    //     "很ampia leh，Liverpool fan，是球好伴，运动佳，成绩好，人很好，随意，让他很容易跟大家参，话很多，很容易跟大家聊起来。",
    //     "最好的钟灵朋友，运动好伙伴，样样行，有点吝啬丑害羞。为什么那么多白头发？希望你和她能进一样的大学？",
    //   ],
    //   "message": "谢谢大家这一年的陪伴。这一年说长不长，说短不短，一眨眼我们都毕业了。祝大家能够得到自己心目中的大学和科系。爱吾kmpk 。"
    // });
  }, [datasource])
  const getGraduates = useCallback(
    datasource => dispatch(setGraduates({ firebase }, datasource)),
    [dispatch]
  )

  const graduates = useSelector(state => state.graduates.ordered);

  const handleChange = (e) => {
    const searchOptions = {
      searchTerm: e.target.value,
    };
    handleFilter(searchOptions);
  };
  const handleFilter = useCallback(
    searchOptions => dispatch(filterGraduates(searchOptions)),
    [dispatch]
  )

  const [selected, setSelected] = useState(false);
  const handleFullScreenOpen = (id) => {
    let index = findWithAttr(graduates, "id", id)
    console.log(graduates[index]);
    if (index >= 0) {
      setSelected(graduates[index]);
    }
  };
  const handleFullScreenClose = () => {
    setSelected(null);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const classes = useStyles();
  const theme = useTheme();
  console.log(graduates)
  return (
    <div>
      <Banner banner="graduates" />
      <Container className={classes.container} >
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={handleChange} />
        </Box>
        <Box id="graduates-images" className={classes.section}>
          {
          false?
          graduates ? (
            graduates.map(graduate => (
              <Card key={graduate.id} className={classes.card}>
                <CardActionArea onClick={() => handleFullScreenOpen(graduate.id)}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={graduate.image}
                    title={graduate.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1">{graduate.name_ch}</Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">{graduate.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))) : (
              <CircularProgress />
            )
          :
          <Unauthorized />
          }
        </Box>
      </Container>
      {/* {
        selected ?
          (<GraduateDetails
            open={true}
            handleClose={handleFullScreenClose}
            info={selected}
            TransitionComponent={Transition}
          />)
          :
          null
      } */}
    </div>
  );
}

export default Graduates;
