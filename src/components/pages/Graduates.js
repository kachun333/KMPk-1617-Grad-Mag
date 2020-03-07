import React, { useState, useCallback, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles";
import useTheme from '@material-ui/styles/useTheme';
// import Tune from '@material-ui/icons/Tune';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import CustomDialog from "../common/CustomDialog";
import { useSelector } from 'react-redux';
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
    margin: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },
  sortBy: {
    marginTop: theme.spacing(1),
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

  const verified = useSelector(state => state.firebase.profile.verified);
  const uid = useSelector(state => state.firebase.auth.uid);
  const [graduates, setGraduates] = useState({ data: null, ordered: null })

  useEffect(() => {
    let url = 'https://us-central1-ourpromise.cloudfunctions.net/api/graduates'
    if (verified) {
      url += `?uid=${uid}`;
    }
    axios.get(url)
      .then(res => {
        //to perform value copy instead of reference copy for Array Object
        const graduatesData = res.data.slice();
        const graduatesOrdered = res.data.slice();
        setGraduates({ data: graduatesData, ordered: graduatesOrdered })
      })
      .catch(error => {
        console.log(error);
      });
  }, [verified, uid]);

  const searchAPI = (items, searchOptions) => {
    if (searchOptions.searchTerm) {
      if (items) {
        return filterItems(items, searchOptions);
      }
    } else {
      return items;
    }
  }
  const searchAPIDebounced = useCallback(AwesomeDebouncePromise(searchAPI, 500), []);

  const handleChange = async text => {
    let searchOptions = {
      searchTerm: text,
    };
    const result = await searchAPIDebounced(graduates.data, searchOptions);
    setGraduates({ ...graduates, ordered: result })
    setSortBy({ label: "Sort By", value: "Default", ascending: true, anchorEl: null });

  };

  const filterItem = (item, searchOptions) => {
    const searchTerm = searchOptions.searchTerm.toLowerCase();
    if (item.name.toLowerCase().includes(searchTerm) || item.name_ch.includes(searchTerm)) {
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

  const [sortBy, setSortBy] = useState({ label: "Sort By", value: "Default", ascending: true, anchorEl: null });
  const handleSortByOpen = event => {
    setSortBy({ ...sortBy, anchorEl: event.currentTarget });
  };
  const handleSortByClose = (sortCriteria) => {
    if (sortCriteria === null) {
      //did not select anything
      setSortBy({ ...sortBy, anchorEl: null });
    } else if (sortCriteria === sortBy.value) {
      //select the same sortCriteria
      const sortedData = graduates.data.reverse();
      const sortedOrdered = graduates.ordered.reverse();
      setGraduates({ data: sortedData, ordered: sortedOrdered });
      setSortBy({ ...sortBy, ascending: !sortBy.ascending, anchorEl: null });
    } else {
      const sortedData = sortGraduates(graduates.data, sortCriteria);
      const sortedOrdered = sortGraduates(graduates.ordered, sortCriteria);
      setGraduates({ data: sortedData, ordered: sortedOrdered });
      setSortBy({ label: sortCriteria, value: sortCriteria, ascending: true, anchorEl: null })
    }
  }

  function sortGraduates(data, sortCriteria) {
    let fieldName = null;
    switch (sortCriteria) {
      case "Name":
        fieldName = 'name';
        break;
      case "Gender":
        fieldName = 'gender';
        break;
      case "Tutorial Group":
        fieldName = 'tutorial';
        break;
      case "Birthday":
        fieldName = 'birthday';
        break;
      case "Default":
      default:
        fieldName = 'id';
        break;
    }
    return data.sort((a, b) => {
      //if equal then comparison = 0
      let comparison = 0;
      if (a[fieldName] > b[fieldName]) {
        comparison = 1;
      } else if (b[fieldName] > a[fieldName]) {
        comparison = -1;
      }
      return comparison;
    })
  }

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Container className={classes.container} >
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={(e) => { handleChange(e.currentTarget.value) }} />
          {/* <Button className={classes.advancedSearch} onClick={() => { setDialog({ title: "Oops.. Advanced Search Is Not For You", description: "You are required to login & verify before using this feature" }) }} >
            <Tune />
          </Button> */}
          <Button className={classes.sortBy} aria-controls="graduates-sortBy" aria-haspopup="true" onClick={handleSortByOpen}>
            {sortBy.label}
            {sortBy.ascending ? <ExpandMore /> : <ExpandLess />}
          </Button>
          <Menu
            id="graduates-sortBy"
            anchorEl={sortBy.anchorEl}
            keepMounted
            open={Boolean(sortBy.anchorEl)}
            onClose={() => { handleSortByClose(null) }}
          >
            <MenuItem onClick={() => { handleSortByClose("Default") }}>Default</MenuItem>
            <MenuItem onClick={() => { handleSortByClose("Name") }}>Name</MenuItem>
            <MenuItem onClick={() => { handleSortByClose("Gender") }}>Gender</MenuItem>
            {verified ? <MenuItem onClick={() => { handleSortByClose("Birthday") }}>Birthday</MenuItem> : null}
            {verified ? <MenuItem onClick={() => { handleSortByClose("Tutorial Group") }}>Tutorial Group</MenuItem> : null}
          </Menu>
        </Box>
        
        <Box id="graduates-images" className={classes.section}>
          {graduates.ordered ?
            graduates.ordered.map((graduate, index) =>
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
            )
            :
            <CircularProgress />
          }
        </Box>
      </Container>
      {/* Display if advanced search button is clicked */}
      {dialog ?
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
