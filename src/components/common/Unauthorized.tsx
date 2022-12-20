import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
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

interface UnauthorizedProps {
  type: "login" | "verify";
}

const Unauthorized: React.FC<UnauthorizedProps> = ({ type }) => {
  let title = "";
  const buttonTitle = type;
  if (buttonTitle === "login") {
    title = "You are required to login & verify to view more content";
  } else if (buttonTitle === "verify") {
    title = "Please verify that you are a KMPkian to view more content";
  }
  return (
    <StyledCard className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{title}</Typography>
        <Link to={`/auth/${buttonTitle}`}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="medium"
          >
            {buttonTitle}
          </Button>
        </Link>
      </CardContent>
    </StyledCard>
  );
};

export default Unauthorized;
