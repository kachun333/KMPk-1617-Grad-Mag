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


function findWithAttr(array, attr, value){
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
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  console.log(graduates)
  return (
    <div>
      <Banner banner="graduates" />
      <Container className={classes.container} >
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={handleChange} />
        </Box>
        <Box id="graduates-images" className={classes.section}>
          {graduates ? (
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
            )}
        </Box>
      </Container>
      {
        selected ?
          (<GraduateDetails
            open={true}
            handleClose={handleFullScreenClose}
            info={selected}
            TransitionComponent={Transition}
          />)
          :
          null
      }
    </div>
  );
}

export default Graduates;
