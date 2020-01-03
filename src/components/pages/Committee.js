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
import { Link } from "react-router-dom";
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
    case 'friendship':
      return <People className={classes.objective} />;
    case 'throwback':
      return <Restore className={classes.objective} />;
    case 'society':
      return <Favorite className={classes.objective} />;
    default:
      return null;
  }
}

const objectives = [
  {
    icon: "friendship",
    title: "保持联系",
    description: "毕业后，我们都为各自的梦想翱翔，去了不同的大学。三年里，大家都过着不同的生活。让我们借此机会互问近况，永固友谊。",
  },
  {
    icon: "throwback",
    title: "丢回叙旧",
    description: "人生路上有起有落，走着走着我们常忘了初衷。这活动该带我们进入时光隧道看看自己在不知不觉中成长了多少。",
  },
  {
    icon: "society",
    title: "回馈社会",
    description: "你可否察觉身为学生的我们是多么有的幸运。我们常受社会的关照，被养育成人。我希望大家可以腾出活动中的一点时间，利用我们年少的活力,创新力与多元的专业领域为社会供一份勉力。",
  },
];

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
            若你在阅读此文章，我感到无比开心， 因为你抱有兴趣成为‘三年之约’筹委会之一员。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            ‘三年之约’会是怎么样的呢？我想你以知道我的回答，其实‘我也不知道’。哈哈。因为它可以千奇百怪，天马行空。就要看你了,未来的三年之约筹委会。 若你成为了‘三年之约’筹委会之一员，你将能把活动搞得最精彩。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            当然，身为‘三年之约’的启发人，我对这活动也有少许头绪和方针。这活动应包含三大宗旨：
          </Typography>
          <Box id="committee-objectives" className={classes.section}>
            <Grid container spacing={4}>
              {objectives.map((obj, i) => (
                <Grid item key={i} xs={12} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.objectiveCard}>
                      {ObjectiveIcon(obj.icon)}
                      <Typography gutterBottom variant="h4">{obj.title}</Typography>
                      <Typography variant="body1">{obj.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography variant="body1" className={classes.paragraph}>
            若你对此活动的三大方针有所共鸣，请在以下选择一个部门并完成筹委会报名表格。期待与你合作。
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            嘉骏 上
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
                              <li key={i} ><Typography variant="body2">
                                {role}</Typography></li>
                            ))}
                          </ul>
                          <Typography gutterBottom variant="subtitle2">
                            Preferences
                        </Typography>
                          <ul>
                            {dept.preference.map((pref, i) => (
                              <li key={i} ><Typography variant="body2">
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
