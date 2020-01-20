import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import makeStyles from "@material-ui/styles/makeStyles";
import { Link } from "react-router-dom";
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

const eventDetails = [
  "活动日期： 预定于2月29日",
  "活动时间： 预定只有一天， 没有隔夜 （可更改）",
  "活动地点： 预定于霹雳州",
  "活动行程： 尚未决定 （应以聚会叙旧为主题)",
  "筹备难度： 主要能让活动顺利举行即可 （在线上开会）",
  "筹委会报名截止日期： 2020年1月15日",
];
const departments = [{
  name: "Marketing",
  jd: ["Attract KMPKians to join", "Engage & deliver information to participants", "Produce digital media"],
  preference: ["Good at jio-ing people", "Computer literate. able to design poster and create videos"],
}, {
  name: "Treasury",
  jd: ["Budgeting. Ensure the efficient use of resources", "Accounting. Track Expenses and record down for future references"],
  preference: ["Stingy", "Won't involve in corruption"],
}, {
  name: "Program",
  jd: ["Design the agenda of the event", "Make the event happen"],
  preference: ["Inclusive. Able to design the agenda that suits every participants", "Resourceful. able the react to sudden change of the event"],
}, {
  name: "Operation",
  jd: ["Ensure venue, food & transportation is well arranged", "Prepare tools and equipments"],
  preference: ["Responsible"],
}]
function Committee(props) {
  useFirestoreConnect('committee_depts');
  const classes = useStyles();
  return (
    <div>
      <Banner banner="committee" />
      <Container className={classes.container}>
        <Box id="committee-intrleio" className={classes.section}>
          <Typography variant="h3" className={classes.paragraph}>
            活动大略
            </Typography>
          <ul>
            {eventDetails.map((details, i) =>
              <li key={i}>
                <Typography variant="subtitle1">{details}</Typography>
              </li>
            )}
          </ul>
          <Typography variant="body1" className={classes.paragraph}>
            不必担心太多，船头自然直， 在以下选择一个部门并完成筹委会报名表格吧！
          </Typography>
        </Box>
        <Box id="committee-positions" className={classes.section}>
          <Grid container spacing={4}>
            {departments.map((dept, i) =>
                <Grid item key={i} xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardActionArea className={classes.card}>
                      <Link to={`committee/register?dept=${dept.name.toLowerCase()}`} className={classes.link}>
                        <CardContent className={classes.card}>
                          <Typography gutterBottom variant="h4" color="primary">
                            {dept.name} Department
                              </Typography>
                          <Typography gutterBottom variant="subtitle2">
                            Roles & Responsibilities
                              </Typography>
                          <ul>
                            {dept.jd.map((role, i) =>
                              <li key={i} >
                                <Typography variant="body2">{role}</Typography>
                              </li>
                            )}
                          </ul>
                          <Typography gutterBottom variant="subtitle2">
                            Preferences
                              </Typography>
                          <ul>
                            {dept.preference.map((pref, i) =>
                              <li key={i} >
                                <Typography variant="body2">{pref}</Typography>
                              </li>
                            )}
                          </ul>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                  </Card>
                </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Committee;
