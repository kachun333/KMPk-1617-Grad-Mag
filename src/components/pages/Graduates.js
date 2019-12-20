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
    width: "120px",
    [theme.breakpoints.up('md')]: {
      width: "300px",
    }
  },
  cardMedia: {
    height: "100%",
    [theme.breakpoints.up('md')]: {
      height: "200px",
    }
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
const graduates = [
  {
    id: "1",
    name: "Edasdfon",
    name_ch: "洪永",
    birthday: "07/10/1998",
    phone: "017-5610386",
    email: "edmsdfndues@yaasdfo.com",
    one_liner: "So……Doasdfad?",
    gender: "male",
    lecture: "M1",
    tutorial: "M1T1a",
    describe_me: ["asdfasdf",
      "qwerqwer",
      "qwerqwer",
    ],
    message: "qwerqwer"
  },
  {
    id: "2",
    name: "Casdf",
    name_ch: "曾楷",
    birthday: "1/08/1548",
    phone: "012-4062712",
    email: "chasdfhe@hosdfmail.com",
    one_liner: "qwerqwer",
    gender: "male",
    lecture: "M1",
    tutorial: "M1T1b",
    describe_me: ["asdfasdf",
      "qwerqwer",
      "qwerqwer",
    ],
    message: "qwerqwer"
  },
  {
    id: "3",
    name: "Lxcbin",
    name_ch: "林盈",
    birthday: "11/11/1238",
    phone: "017-4702669",
    email: "sicvbim92@yahoo.com",
    one_liner: "sasdasdf",
    gender: "female",
    lecture: "M1",
    tutorial: "M1T1a",
    describe_me: ["rtyurtyu",
      "rtyurtyu",
      "tyrtyurtyu",
    ],
    message: "rtyurtyu"
  },
  {
    id: "4",
    name: "Goertybf in",
    name_ch: "吴瑾",
    birthday: "1/06/1238",
    phone: "017-5610386",
    email: "edmundues@yahoo.com",
    one_liner: "Sasdf?",
    gender: "male",
    lecture: "M1",
    tutorial: "M1T1a",
    describe_me: ["rtyurtyu",
      "rtyurtyu",
      "tyrtyurtyu",
    ],
    message: "rtyurtyu"
  },
  {
    id: "5",
    name: "Goertybf in",
    name_ch: "吴瑾",
    birthday: "1/06/1238",
    phone: "017-5610386",
    email: "edmundues@yahoo.com",
    one_liner: "Sasdf?",
    gender: "male",
    lecture: "M1",
    tutorial: "M1T1a",
    describe_me: ["rtyurtyu",
      "rtyurtyu",
      "tyrtyurtyu",
    ],
    message: "rtyurtyu"
  },
]

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


  const [datasource, setDatasource] = useState(graduates);
  const handleChange = (e) => {
    const searchOptions = {
      searchTerm: e.target.value,
    };
    setDatasource(filterItems(graduates, searchOptions));
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
        <Box id="gradautes-filterOption" className={classes.section}>
          <TextField className={classes.searchBar} label="Search" margin="normal" variant="outlined" onChange={handleChange} />
        </Box>
        <Box id="gradautes-images" className={classes.section}>
            {datasource.map(graduate => (
              <Card key={graduate.id} className={classes.card}>
                <CardActionArea onClick={handleFullScreenOpen}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={graduate.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
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
