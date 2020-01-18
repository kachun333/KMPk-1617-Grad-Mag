import React, { useState, useCallback, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from '@material-ui/styles/useTheme';
import Tune from '@material-ui/icons/Tune';
import Banner from '../common/Banner';
import CustomDialog from "../common/CustomDialog";
import { Link } from "react-router-dom";
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import axios from 'axios';

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
  advancedSearch: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardContent: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    paddingBottom: `${theme.spacing(1)}px !important`,
  },
}));



function Graduates(props) {

  const [searchTerm, setSearchTerm] = useState(null);
  const [graduatesData, setGraduatesData] = useState(null);
  const [graduatesOrdered, setGraduatesOrdered] = useState(null);

  useEffect(() => {
    axios.get('https://us-central1-ourpromise.cloudfunctions.net/api/graduates')
      .then(res => {
        setGraduatesData(res.data);
        setGraduatesOrdered(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const searchAPI = (items, searchOptions) => filterItems(items, searchOptions);
  const searchAPIDebounced = useCallback(AwesomeDebouncePromise(searchAPI, 500), []);

  const handleChange = async text => {
    setSearchTerm(text);
    let searchOptions = {
      searchTerm: text,
    };
    let result = graduatesOrdered;
    if (graduatesData) {
      result = await searchAPIDebounced(graduatesData, searchOptions);
    }
    setGraduatesOrdered(result);
  };

  const filterItem = (item, searchOptions) => {
    if (
      Object.values(item).some(values => {
        return values
          .toString()
          .toLowerCase()
          .includes(searchOptions.searchTerm.toLowerCase())
      })
    ) {
      return item;
    } else {
      return null;
    }
  }

  const filterItems = (items, searchOptions) => {
    return items.reduce((accumulator, currentItem) => {
      const foundItem = filterItem(currentItem, searchOptions);
      if (foundItem) {
        accumulator.push(foundItem);
      }
      return accumulator;
    }, []);
  }

  const [dialog, setDialog] = useState(null);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Banner banner="graduates" />
      <Container className={classes.container} >
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={(e) => { handleChange(e.currentTarget.value) }} />
          <Button className={classes.advancedSearch} onClick={() => { setDialog({title:"Oops.. Advanced Search Is Not For You", description:"You are required to login & verify before using this feature"}) }} >
            <Tune />
          </Button>
        </Box>
        <Box id="graduates-images" className={classes.section}>
          {graduatesOrdered ?
            graduatesOrdered.map(graduate =>
              <>
                <Card key={graduate.id} className={classes.card}>
                  <CardActionArea>
                    <Link className={classes.link} to={`/graduates/${graduate.id}`}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={graduate.image || null}
                        title={graduate.name}
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="subtitle1">{graduate.name_ch}</Typography>
                    <Typography variant={matches ? "subtitle1" : "body2"} component="div">{graduate.name}</Typography>
                  </CardContent>
                </Card>
              </>
            )
            :
            <CircularProgress />
          }
        </Box>
      </Container>
      {/* Display if advanced search button is clicked */}
      {
        dialog ?
          <CustomDialog
            open={Boolean(dialog)}
            onClose={() => { setDialog(null) }}
            title={dialog.title}
            description={dialog.description}
          />
          : null
      }
    </>
  );
}

export default Graduates;
