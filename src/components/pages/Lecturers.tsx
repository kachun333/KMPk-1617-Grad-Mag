import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import makeStyles from "@material-ui/styles/makeStyles";
import { useSelector } from "react-redux";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import axios from "axios";
import Unauthorized from "../common/Unauthorized";
import CustomDialog from "../common/CustomDialog";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  searchSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: `${theme.spacing(2)}px 0px`,
  },
  searchBar: {
    width: "96%",
    [theme.breakpoints.up("md")]: {
      width: "72%",
    },
  },
  contentSection: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  department: {
    margin: `${theme.spacing(2)}px 0px`,
  },
  typography: {
    margin: theme.spacing(2),
  },
  gridItem: {
    textAlign: "center",
    margin: `${theme.spacing(2)}px 0px`,
  },
  card: {
    display: "flex",
    margin: "auto",
    width: "90%",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  cardImageBox: {
    display: "flex",
    overflow: "hidden",
    margin: "auto",
  },
  cardImage: {
    height: "240px",
  },
  cardContent: {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    maxHeight: "240px",
  },
  messageBox: {
    flex: 1,
    overflow: "hidden",
  },
  message: {
    margin: theme.spacing(2),
  },
  circularProgress: {
    margin: "auto",
  },
}));

function Lecturers() {
  const classes = useStyles();

  const verified = useSelector((state) => state.firebase.profile.verified);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const [lecturers, setLecturers] = useState({ data: null, ordered: null });

  useEffect(() => {
    if (verified && uid) {
      const url = `https://us-central1-ourpromise.cloudfunctions.net/api/lecturers?uid=${uid}`;
      axios
        .get(url)
        .then((res) => {
          // to perform deepvalue copy instead of reference copy for Array Object
          const lecturersData = JSON.parse(JSON.stringify(res.data));
          const lecturersOrdered = JSON.parse(JSON.stringify(res.data));
          setLecturers({ data: lecturersData, ordered: lecturersOrdered });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // to display login/verify message
      setLecturers({ finishRendered: true });
    }
  }, [verified, uid]);

  const searchAPI = (items, searchOptions) => {
    if (searchOptions.searchTerm) {
      if (items) {
        return filterItems(items, searchOptions);
      }
    } else {
      return items;
    }
  };
  const searchAPIDebounced = useCallback(
    AwesomeDebouncePromise(searchAPI, 500),
    []
  );

  const handleChange = async (text) => {
    const searchOptions = {
      searchTerm: text,
    };
    const searchObject = JSON.parse(JSON.stringify(lecturers.data));
    const result = await searchAPIDebounced(searchObject, searchOptions);
    setLecturers({ ...lecturers, ordered: result });
  };

  const filterItem = (item, searchOptions) => {
    const searchTerm = searchOptions.searchTerm.toLowerCase();
    return item.filter(
      (it) =>
        it.name.toLowerCase().includes(searchTerm) ||
        it.name_ch.includes(searchTerm)
    );
  };

  const filterItems = (items, searchOptions) =>
    items.reduce((accumulator, currentItem) => {
      const foundItem = filterItem(currentItem.lecturers, searchOptions);
      if (foundItem.length) {
        currentItem.lecturers = foundItem;
        accumulator.push(currentItem);
      }
      return accumulator;
    }, []);

  const [dialog, setDialog] = useState(null);

  return (
    <>
      <Container className={classes.container}>
        <Box id="lecturers-filterOption" className={classes.searchSection}>
          <TextField
            className={classes.searchBar}
            label="Search"
            margin="normal"
            variant="outlined"
            onChange={(e) => {
              handleChange(e.currentTarget.value);
            }}
          />
        </Box>
        <Box id="lecturers-images" className={classes.contentSection}>
          {lecturers.ordered ? (
            lecturers.ordered.map((department, index) => (
              <div
                key={`department-${department.id}`}
                className={classes.department}
              >
                <Typography variant="h4" className={classes.typography}>
                  Unit {department.department_name}
                </Typography>
                <Grid container spacing={2}>
                  {department.lecturers.map((lecturer) => (
                    <Grid
                      key={`lecturer-${lecturer.id}`}
                      className={classes.gridItem}
                      item
                      xs={12}
                      md={6}
                    >
                      <Card className={classes.card}>
                        <div className={classes.cardImageBox}>
                          <img
                            className={classes.cardImage}
                            alt={lecturer.name}
                            src={lecturer.image}
                          />
                        </div>
                        <CardContent className={classes.cardContent}>
                          <Typography variant="h4">
                            {lecturer.name_ch}
                          </Typography>
                          <Typography variant="h6" component="div">
                            {lecturer.name}
                          </Typography>
                          <CardActionArea
                            className={classes.messageBox}
                            onClick={() => setDialog(lecturer)}
                          >
                            <Typography
                              variant="body1"
                              className={classes.message}
                            >
                              {lecturer.message[0]}
                            </Typography>
                          </CardActionArea>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))
          ) : (
            <CircularProgress className={classes.circularProgress} />
          )}
          {lecturers.finishRendered ? (
            <Unauthorized type={uid ? "verify" : "login"} />
          ) : null}
        </Box>
      </Container>
      {/* Display if advanced search button is clicked */}
      {dialog ? (
        <CustomDialog
          open={Boolean(dialog)}
          onClose={() => {
            setDialog(null);
          }}
          title={`${dialog.name_ch || dialog.name} 留言`}
          description={dialog.message}
          footer={[dialog.sign_off]}
          dismissText="谢谢"
        />
      ) : null}
    </>
  );
}

export default Lecturers;
