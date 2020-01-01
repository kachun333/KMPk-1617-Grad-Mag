import React, { useState, useCallback, useEffect } from "react";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles";
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, useFirebase } from 'react-redux-firebase';
import { setGraduates, filterGraduates } from "../../store/actions/graduatesAction";
import Banner from '../common/Banner';
import { Link } from "react-router-dom";

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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardContent: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`
  },
}));


function Graduates(props) {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  useFirestoreConnect('graduates');
  const datasource = useSelector(state => state.firestore.ordered.graduates);
  const getGraduates = useCallback(
    datasource => dispatch(setGraduates({ firebase }, datasource)),
    [firebase, dispatch]
  )

  useEffect(() => {
    getGraduates(datasource);
  }, [getGraduates, datasource])
  const graduates = useSelector(state => state.graduates.ordered);

  const handleFilter = useCallback(
    searchOptions => dispatch(filterGraduates(searchOptions)),
    [dispatch]
  )

  const [searchTerm, setSearchTerm] = useState(null);
  const handleChange = async () => {
      const searchOptions = {
        searchTerm: searchTerm,
      };
      handleFilter(searchOptions);
  }
  const refresh = () => { handleFilter({ searchTerm: "" }); }
  if (graduates) {
    setTimeout(() => {
      refresh();
    }, 0);
  }

  const classes = useStyles();
  return (
    <div>
      <Banner banner="graduates" />
      <Container className={classes.container} >
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={(e) => { setSearchTerm(e.currentTarget.value); handleChange(); }} />
        </Box>
        <Box id="graduates-images" className={classes.section}>
          {graduates ? (
            graduates.map(graduate => (
              <Card key={graduate.id} className={classes.card}>
                <CardActionArea>
                  <Link className={classes.link} to={`/graduates/${graduate.id}`}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={graduate.image || null}
                      title={graduate.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="subtitle1">{graduate.name_ch}</Typography>
                      <Typography gutterBottom variant="subtitle2" component="div">{graduate.name}</Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            ))) : (
              <CircularProgress />
            )
          }
        </Box>
      </Container>
    </div>
  );
}

export default Graduates;
