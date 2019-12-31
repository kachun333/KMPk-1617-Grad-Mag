import React, { useEffect, useCallback } from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import { getCards } from "../../store/actions/appActions";
import Banner from '../common/Banner';

// component level styling
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  section: {
    margin: `${theme.spacing(2)}px 0px`,
  },
  button: {
    width: "fit-content",
    margin: "auto",
  },
  paragraph: {
    margin: theme.spacing(2),
  },
  card: {
    position: "relative",
  },
  cardMedia: {
    height: "240px"
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    margin: "0 32px",
    marginBottom: "8px",
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
}));

function Home() {
  const history = useHistory();
  const displayName = useSelector(state => state.firebase.profile.displayName);

  const dispatch = useDispatch();
  const firebase = useFirebase();

  const loadCards = useCallback(
    datasource => dispatch(getCards({ firebase }, datasource)),
    [dispatch]
  )

  useFirestoreConnect('home_cards');
  const datasource = useSelector(state => state.firestore.ordered.home_cards);
  useEffect(() => {
    loadCards(datasource);
  }, [datasource])

  const cards = useSelector(state => state.app.cards);

  const classes = useStyles();
  return (
    <div>
      <Banner banner="home" />
      <Container className={classes.container}>
        {displayName ? (
          <Box id="greet" className={classes.section}>
            <Typography variant="h3" className={classes.paragraph}>
              {displayName || "Hey"}, How's life going?
            </Typography>
          </Box>
        ) : null
        }
        <Box id="home-introduction" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            6th June 2016
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien pulvinar, finibus nisl eu, finibus justo. In pulvinar libero eu turpis ultricies commodo in in sem. Quisque dictum id nunc tempus tincidunt. Vestibulum ut turpis ac diam ultricies pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam iaculis eu mi sit amet suscipit. Praesent ut venenatis est. Duis dictum urna a ex gravida ornare et et turpis. Nam eu libero nec libero pretium commodo sed a mauris. Morbi sed molestie diam, id euismod est. Praesent massa tellus, laoreet ac venenatis nec, vestibulum ut sem. Praesent a odio risus. Donec convallis tellus porta, rhoncus purus eget, consequat magna. Ut aliquam interdum dolor, eu laoreet velit. Ut laoreet tempus dolor, laoreet mollis nisl feugiat at.
          </Typography>
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
          <div className={classes.button}>
            <Button variant="contained" color="primary" size="large" onClick={() => { history.push("/committee") }}>
              Learn More
            </Button>
          </div>
        </Box>
        <Box id="about" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            About
            </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Vestibulum pretium lorem et posuere faucibus. Fusce ultricies mauris eros, non aliquet felis elementum in. Morbi vel interdum risus, a ullamcorper ipsum. Sed convallis egestas sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque gravida posuere blandit. Quisque est tortor, scelerisque quis quam eu, consectetur tempus enim. Phasellus ac luctus velit, vel ornare nibh.
          </Typography>
        </Box>
        <Box id="new" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            What's new!
            </Typography>
          <ul>
            <li><Typography variant="subtitle1" className={classes.paragraph}>
              Nam ut lectus sed eros </Typography></li>
            <li><Typography variant="subtitle1" className={classes.paragraph}>
              Nam ut lectus sed eros </Typography></li>
            <li><Typography variant="subtitle1" className={classes.paragraph}>
              Nam ut lectus sed eros </Typography></li>
          </ul>
        </Box>
        <Box id="content-cards" className={classes.section}>
          <Grid container spacing={4}>
            {cards ? (
              cards.map((card, i) => (
                <Grid item key={i} xs={12} md={6}>
                  <Card>
                    <CardActionArea className={classes.card}>
                      <Link to={card.link}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={card.image}
                          title={card.title}
                        />
                        <div className={classes.overlay}></div>
                        <div className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" color="primary">
                            {card.title}
                          </Typography>
                        </div>
                      </Link>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))) : (
                <CircularProgress />
              )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
