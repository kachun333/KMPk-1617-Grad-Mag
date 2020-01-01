import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  cardContent: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(2),
    marginBottom: 0
  }
}));

export default function Unauthorized(props) {
  const classes = useStyles();

  let title = "";
  let buttonTitle = props.type;
  switch (buttonTitle) {
    case "login":
      title = "You are required to login & verify before proceeding";
      break;
    case "verify":
      title = "Please verify that you are a KMPkian before proceeding";
      break;
  }
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">
          {title}
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          variant="contained"
          color="primary"
          size="medium"
          exact
          to={`/auth/${buttonTitle}`}
        >
          {buttonTitle}
        </Button>
        {/* <CardActions>
          <Button size="medium" color="primary">
            {buttonTitle}
          </Button>
        </CardActions> */}
      </CardContent>
    </Card>
  );
}