import React from "react";
import { styled } from "@mui/material/styles";
import makeStyles from "@mui/material/styles/makeStyles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const PREFIX = "Unauthorized";

const classes = {
  card: `${PREFIX}-card`,
  cardContent: `${PREFIX}-cardContent`,
  button: `${PREFIX}-button`,
};

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    minWidth: 275,
  },

  [`& .${classes.cardContent}`]: {
    textAlign: "center",
  },

  [`& .${classes.button}`]: {
    margin: theme.spacing(2),
    marginBottom: 0,
  },
}));

export default function Unauthorized(props) {
  let title = "";
  const buttonTitle = props.type;
  if (buttonTitle === "login") {
    title = "You are required to login & verify to view more content";
  } else if (buttonTitle === "verify") {
    title = "Please verify that you are a KMPkian to view more content";
  }
  return (
    <StyledCard className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{title}</Typography>
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
      </CardContent>
    </StyledCard>
  );
}
