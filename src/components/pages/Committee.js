import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles";
import People from '@material-ui/icons/People';
import Restore from '@material-ui/icons/Restore';
import Favorite from '@material-ui/icons/Favorite';
import Link from "react-router-dom/Link";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import Banner from '../common/Banner';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  section: {
    marginTop: theme.spacing(4),
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

function Committee(props) {

  useFirestoreConnect('committee_depts');
  const departments = useSelector(state => state.firestore.ordered.committee_depts);

  const classes = useStyles();
  return (
    <div>
      <Banner banner="committee" />
      <Container className={classes.container}>
        <Box id="committee-intro" className={classes.section}>
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
                      <Typography variant="body1">
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
            {departments ? (
              departments.map((dept, i) => (
                <Grid item key={i} xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardActionArea className={classes.card}>
                      <Link to={dept.link} className={classes.link}>
                        <CardContent className={classes.card}>
                          <Typography gutterBottom variant="h4" color="primary">
                            {dept.name} Department
                        </Typography>
                          <Typography gutterBottom variant="subtitle2">
                            Roles & Responsibilities
                        </Typography>
                          <ul>
                            {dept.jd.map((role, i) => (
                              <li key={i} ><Typography variant="body1">
                                {role}</Typography></li>
                            ))}
                          </ul>
                          <Typography gutterBottom variant="subtitle2">
                            Preferences
                        </Typography>
                          <ul>
                            {dept.preference.map((pref, i) => (
                              <li key={i} ><Typography variant="body1">
                                {pref}</Typography></li>
                            ))}
                          </ul>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                  </Card>
                </Grid>
              )))
              : <CircularProgress />
            }
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Committee;
