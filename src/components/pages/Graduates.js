import React, { Fragment, useState } from "react";
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
import GraduateDetails from './GraduateDetails.js';
import Banner from '../common/Banner';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

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

function filterItem(item, searchOptions) {
  if (
    Object.values(item).some(values =>
      values
        .toString()
        .toLowerCase()
        .includes(searchOptions.searchTerm.toLowerCase())
    )
  ) {
    return item;
  } else {
    return undefined;
  }
}

function filterItems(items, searchOptions) {
  return items.reduce((accumulator, currentItem) => {
    const foundItem = filterItem(currentItem, searchOptions);
    if (foundItem) {
      accumulator.push(foundItem);
    }
    return accumulator;
  }, []);
}


function Graduates() {
  // const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);

  const handleFullScreenOpen = () => {
    setOpen(true);
  };
  const handleFullScreenClose = () => {
    setOpen(false);
  };

  // const [datasource, setDatasource] = useState();

  useFirestoreConnect('graduates');
  const graduates = useSelector(state => state.firestore.ordered.graduates);
  // setDatasource(graduates);

  const handleChange = (e) => {
    const searchOptions = {
      searchTerm: e.target.value,
    };
    // setDatasource(filterItems(graduates, searchOptions));
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div>
      <Banner banner="graduates" />
      <Container className={classes.container} >
        <Box id="gradautes-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={handleChange} />
        </Box>
        <Box id="gradautes-images" className={classes.section}>
          
        {graduates ? (
          graduates.map(graduate => (
            <Card key={graduate.id} className={classes.card}>
              <CardActionArea onClick={handleFullScreenOpen}>
                <CardMedia
                  className={classes.cardMedia}
                  image={null}
                  title={graduate.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1">{graduate.name_ch}</Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">{graduate.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))) : (
            <Typography variant="h3" className={classes.paragraph}>
              Loading.... Please Wait
            </Typography>
          )}
        </Box>
      </Container>
      {/* <GraduateDetails
        open={open}
        handleClose={handleFullScreenClose}
        info={null}
        TransitionComponent={Transition}
      /> */}
    </div>
  );
}

export default Graduates;
