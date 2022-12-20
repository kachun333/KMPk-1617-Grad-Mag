import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import axios from "axios";
import useAuth from "providers/auth/useAuth";
import React, { useEffect, useState } from "react";
import CustomDialog from "../common/CustomDialog";
import Unauthorized from "../common/Unauthorized";

const PREFIX = "Lecturers";

const classes = {
  container: `${PREFIX}-container`,
  searchSection: `${PREFIX}-searchSection`,
  searchBar: `${PREFIX}-searchBar`,
  contentSection: `${PREFIX}-contentSection`,
  department: `${PREFIX}-department`,
  typography: `${PREFIX}-typography`,
  gridItem: `${PREFIX}-gridItem`,
  card: `${PREFIX}-card`,
  cardImageBox: `${PREFIX}-cardImageBox`,
  cardImage: `${PREFIX}-cardImage`,
  cardContent: `${PREFIX}-cardContent`,
  messageBox: `${PREFIX}-messageBox`,
  message: `${PREFIX}-message`,
  circularProgress: `${PREFIX}-circularProgress`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  [`& .${classes.searchSection}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: `${theme.spacing(2)} 0px`,
  },

  [`& .${classes.searchBar}`]: {
    width: "96%",
    [theme.breakpoints.up("md")]: {
      width: "72%",
    },
  },

  [`& .${classes.contentSection}`]: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },

  [`& .${classes.department}`]: {
    margin: `${theme.spacing(2)} 0px`,
  },

  [`& .${classes.typography}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.gridItem}`]: {
    textAlign: "center",
    margin: `${theme.spacing(2)} 0px`,
  },

  [`& .${classes.card}`]: {
    display: "flex",
    margin: "auto",
    width: "90%",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  [`& .${classes.cardImageBox}`]: {
    display: "flex",
    overflow: "hidden",
    margin: "auto",
  },

  [`& .${classes.cardImage}`]: {
    height: "240px",
  },

  [`& .${classes.cardContent}`]: {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    maxHeight: "240px",
  },

  [`& .${classes.messageBox}`]: {
    flex: 1,
    overflow: "hidden",
  },

  [`& .${classes.message}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.circularProgress}`]: {
    margin: "auto",
  },
}));

interface Lecturer {
  id: string;
  name: string;
  name_ch: string;
  image: string;
  message: string[];
  sign_off: string;
}

interface Department {
  id: string;
  department_name: string;
  lecturers: Lecturer[];
}

interface LecturersData {
  data: Department[] | null;
  ordered: Department[] | null;
}

function Lecturers() {
  const [lecturers, setLecturers] = useState<LecturersData>({
    data: null,
    ordered: null,
  });
  const [dialog, setDialog] = useState<Lecturer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isVerified, userCredential } = useAuth();
  const { uid } = userCredential?.user ?? {};

  useEffect(() => {
    if (!isVerified || !uid) return;
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
      })
      .finally(() => setIsLoading(false));
  }, [isVerified, uid]);

  return (
    <Root>
      <Container className={classes.container}>
        <Box id="lecturers-images" className={classes.contentSection}>
          {lecturers.ordered ? (
            lecturers.ordered.map((department) => (
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
          {!isLoading && <Unauthorized type={uid ? "verify" : "login"} />}
        </Box>
      </Container>
      {/* Display advanced search button on clicked */}
      {!!dialog && (
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
      )}
    </Root>
  );
}

export default Lecturers;
