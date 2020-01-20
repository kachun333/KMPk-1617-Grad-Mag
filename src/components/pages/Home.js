import React from "react";
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
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
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
    height: "280px"
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

const cards = [
  {
    title: "Graduates",
    link: "graduates",
    image: "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fgraduates.jpg?alt=media&token=602999e3-4041-4479-b74e-227752611dcf",
  },
  {
    title: "Committee",
    link: "committee",
    image: "https://firebasestorage.googleapis.com/v0/b/ourpromise.appspot.com/o/banners%2Fcommittee.jpg?alt=media&token=d3ea08ba-7628-463c-b08d-fd1eb883a871"
  },
];
const features = [
  "Search graduates",
  "View graduates details",
  "Register as committee team",
  "Authenticate to view private information"
]
function Home() {
  const displayName = useSelector(state => state.firebase.profile.displayName);
  const classes = useStyles();
  return (
    <>
      <Banner banner="home" />
      <Container className={classes.container}>
        {displayName ?
          <>
            <Box id="greet" className={classes.section}>
              <Typography variant="h3" className={classes.paragraph}>
                {displayName || "Hey guys"}, 别来无恙？
            </Typography>
            </Box>
          </>
          : null
        }
        <Box id="home-introduction" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            2016年6月6日
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            还记得这一天是什么日子吗？ 没错， 这一天就是故事的开章，是我们第一次离乡背井，来到了隐匿于油棕园间的霹雳州务边国立大学预科学院。那你又可否还记得我们一起创出的那些‘第一次’？  第一次打领带/穿传统服装上课，第一次在 tutorial room ‘读书’ ， 第一次与朋友彻夜聊心， 第一次一起出外郊游， 第一次在舞台上表演， 还有， 第一次在毕业典礼上落泪。。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            人类是十分善忘的动物， 因此三年前，毕业刊筹委们不惜跨过种种困难，坚持将专属于我们的毕业刊完成， 并将它命名为《醇憶》。毕业刊筹委们希望透过书刊， 我们可以把青春，回忆，心境都记载下来。透过时间的考验，希望毕业刊会像一瓶好酒， 越酿越芳香。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            初次品尝其甘甜的时候将近。2020年正是我们相约的时候。在大学勤奋向学，忙碌于活动的你可否会赴约呢？
            </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            ‘三年之约’会是怎么样的呢？日期定了吗？地点会在哪？有什么好玩的活动？
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            我只能老实告诉你， ‘我也不知道’。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            因此为了筹备 ‘三年之约’ ，希望大家可以毛遂自荐, 加入筹委会, 让这简单又有意义活动成功举行。大家如果有兴趣阅读更多详情，请点入以下的网址。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            谢谢。
          </Typography>
          <div className={classes.button}>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              to="/committee"
            >
              Learn More
            </Button>
          </div>
        </Box>
        <Box id="about" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            About
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            This website serves as a platform to unite KMPk 16/17 graduates. The admin is currently migrating the physical graduation magazine to this website.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Stay tune for more interesting content and interactive features!
          </Typography>
        </Box>
        <Box id="new" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            What's new!
          </Typography>
          <ul>
            {
              features.map((feature, i) => (
                <li key={i}><Typography variant="subtitle1">{feature}</Typography></li>
              ))
            }
          </ul>
        </Box>
        <Box id="content-cards" className={classes.section}>
          <Grid container spacing={4}>
            {cards ?
              <>
                {
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
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                }
              </>
              :
              <CircularProgress />
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Home;
