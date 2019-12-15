import React, { Fragment } from "react";
import {
  Box,
  Avatar,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  withStyles,
  Typography,
  Button,
  Container,
  Hidden
} from "@material-ui/core";
import { People, Restore, Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Background from '../../assets/images/committee.jpg';

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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  avatar: {
    width: 200,
    height: 200,
    margin: "auto",
    marginBottom: theme.spacing(4),
  },
  paragraph: {
    margin: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  objectiveCard: {
    textAlign: "center",
  },
  objective: {
    color: theme.palette.primary.main,
    height: "100px",
    width: "100px",
  },
  card: {
    height: "100%",
  },
  cardMedia: {
    height: "240px"
  },
}));

function ObjectiveIcon(title) {
  const classes = useStyles();
  switch (title) {
    case 'info':
      return <People className={classes.objective} />;
    case 'warning':
      return <Restore className={classes.objective} />;
    case 'error':
      return <Favorite className={classes.objective} />;
    default:
      return null;
  }
}

const objectives = [1, 2, 3];

const cards = [{
  image: "#",
  title: "Treasury",
  link: "/committee/register?dept=treasury",
  caption: "Are you guys still in contact?",
  jd: [
    "Budgeting. Ensure the efficient use of resources while organizing the event",
    "Accounting. Track Expenses and record down for future references"
  ],
  preference: [
    "stingy",
    "good in dealing money",
    "won't involve in corruption"
  ]
}, {
  image: "../../assets/images/committee.jpg",
  title: "Marketing",
  link: "/committee/register?dept=marketing",
  caption: "Learn more about 'Our Promise' & register now to get involve in the event preparation",
  jd: [
    "Invite KMPKians to attend this event",
    "engage & deliver information to participants",
    "produce digital media"],
  preference: [
    "Good at jio-ing people",
    "creative",
    "computer literate, able to design poster and create videos"
  ]
}, {
  image: "../../assets/images/committee.jpg",
  title: "Program",
  link: "/committee/register?dept=program",
  caption: "Learn more about 'Our Promise' & register now to get involve in the event preparation",
  jd: [
    "Budgeting. Ensure the efficient use of resources while organizing the event",
    "Accounting. Track Expenses and record down for future references",
  ],
  preference: [
    "consolidate KMPKians interest",
    "Crazy minded, can come out with the most interesting program in the world",
    "realistic. Know the limit the resources, won't give up and make the event successful",
    "resourceful. able the react to sudden change of event"]
}, {
  image: "#",
  title: "Operation",
  link: "/committee/register?dept=operation",
  caption: "Learn more about the story & motivation behind 'Our Promise'",
  jd: [
    "Ensure food & transportation is well arranged",
    "prepare venue",
    "prepare tools and equipments"
  ],
  preference: [],
},
];
function Committee() {
  // const [t, i18n] = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <Box id="graduates-banner" className={classes.banner}>
      </Box>
      <Container className={classes.container}>
        <Box id="committee-avatar" className={classes.section}>
          <Avatar alt="initiator" src={Background} className={classes.avatar} />
          <Typography variant="h3" className={classes.paragraph}>
            Hello World!
            </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien pulvinar, finibus nisl eu, finibus justo. In pulvinar libero eu turpis ultricies commodo in in sem. Quisque dictum id nunc tempus tincidunt. Vestibulum ut turpis ac diam ultricies pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam iaculis eu mi sit amet suscipit. Praesent ut venenatis est. Duis dictum urna a ex gravida ornare et et turpis. Nam eu libero nec libero pretium commodo sed a mauris. Morbi sed molestie diam, id euismod est. Praesent massa tellus, laoreet ac venenatis nec, vestibulum ut sem. Praesent a odio risus. Donec convallis tellus porta, rhoncus purus eget, consequat magna. Ut aliquam interdum dolor, eu laoreet velit. Ut laoreet tempus dolor, laoreet mollis nisl feugiat at.
    </Typography>

          <Box id="committee-objectives" className={classes.section}>
            <Grid container spacing={4}>
              {objectives.map((obj, i) => (
                <Grid item key={i} xs={12} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.objectiveCard}>
                      {ObjectiveIcon("warning")}
                      <Typography gutterBottom variant="h4" color="primary">
                        Lorem ipsum dolor sit amet
                        </Typography>
                      <Typography variant="body">
                        Our dreams set us apart. We were in different university and each of us has gone through different life journeys in the past 3 years. Let’s get updated with how everyone is doing & maintain our life-long friendship.
                        </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography variant="body1" className={classes.paragraph}>
            Aliquam semper fermentum arcu vel rhoncus. Nullam hendrerit magna a orci dapibus tempor. Proin sollicitudin, orci eu facilisis laoreet, ligula purus porta sapien, vel dictum augue purus id magna. Aliquam dapibus nibh nulla, nec tristique leo bibendum nec. Praesent aliquam sollicitudin magna, sit amet molestie nisi scelerisque ac. Nulla nec tempor risus. Aliquam non viverra ipsum. Aliquam tincidunt, lacus a tempor pulvinar, quam mauris porta diam, quis pellentesque lorem nisl et mauris. Vivamus sit amet placerat velit, et bibendum sapien. Suspendisse auctor purus nec lorem faucibus, vitae blandit purus vehicula. Nulla quis nisi diam.
    </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            In sollicitudin pellentesque mi, sit amet lobortis ex consequat vitae. Duis volutpat, libero vitae efficitur tincidunt, erat lectus porttitor tellus, a elementum eros lectus id quam. Vestibulum vestibulum est elit, at aliquet nisl dapibus nec. Maecenas maximus bibendum diam id convallis. Mauris ullamcorper leo ac ex dictum interdum. Vestibulum blandit dolor eget malesuada pretium. Praesent mauris dolor, aliquam eget nulla et, auctor consequat mi. Praesent at leo condimentum, ullamcorper ante nec, finibus odio. Phasellus nibh urna, sodales aliquam dolor eu, iaculis semper arcu. Nam lobortis id massa at iaculis. Curabitur mauris ligula, fringilla sit amet ipsum eu, bibendum semper lacus.
    </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Vestibulum pretium lorem et posuere faucibus. Fusce ultricies mauris eros, non aliquet felis elementum in. Morbi vel interdum risus, a ullamcorper ipsum. Sed convallis egestas sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque gravida posuere blandit. Quisque est tortor, scelerisque quis quam eu, consectetur tempus enim. Phasellus ac luctus velit, vel ornare nibh.
    </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Nam ut lectus sed eros interdum consequat a ac nulla. Etiam in purus quam. Nulla eget odio faucibus, gravida tortor quis, lobortis tellus. Aliquam feugiat, erat sed facilisis feugiat, leo est tincidunt augue, eget malesuada metus nulla et magna. Curabitur sed ullamcorper tellus, ut pharetra nunc. Morbi sed velit finibus, rhoncus lacus at, efficitur sapien. Nullam porta orci vel dolor consequat, id commodo est bibendum. Pellentesque semper lobortis eros eu egestas. Fusce porta venenatis justo. Proin ullamcorper scelerisque velit a vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tincidunt ipsum ac dapibus laoreet. Proin eu porttitor neque. Phasellus ut cursus ante, eu ultrices lectus.
      </Typography>
        </Box>
        <Box id="committee-positions" className={classes.section}>
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} md={6}>
                <Card className={classes.card}>
                  <CardActionArea className={classes.card}>
                    <Link to={card.link} className={classes.link}>
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h4" color="primary">
                          {card.title} Department
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                          Roles & Responsibilities
                        </Typography>
                        <ul>
                          {card.jd.map((role, i) => (
                            <li key={i} ><Typography variant="body">
                              {role}</Typography></li>
                          ))}
                        </ul>
                        <Typography gutterBottom variant="subtitle2">
                          Preferences
                        </Typography>
                        <ul>
                          {card.preference.map((pref, i) => (
                            <li key={i} ><Typography variant="body">
                              {pref}</Typography></li>
                          ))}
                        </ul>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Committee;
