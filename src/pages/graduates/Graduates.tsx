import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import graduatesData from "assets/json/graduates_public.json";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ImageHolder from "./components/ImageHolder";
import { SORT_CRITERIA } from "./graduates.constants";
import { filterItems, sortGraduates } from "./sort.utils";

const PREFIX = "Graduates";

const classes = {
  container: `${PREFIX}-container`,
  section: `${PREFIX}-section`,
  searchBar: `${PREFIX}-searchBar`,
  advancedSearch: `${PREFIX}-advancedSearch`,
  sortBy: `${PREFIX}-sortBy`,
  card: `${PREFIX}-card`,
  cardMedia: `${PREFIX}-cardMedia`,
  link: `${PREFIX}-link`,
  cardContent: `${PREFIX}-cardContent`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  [`& .${classes.section}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: `${theme.spacing(2)} 0px`,
  },

  [`& .${classes.searchBar}`]: {
    width: "96%",
    [theme.breakpoints.up("md")]: {
      width: "72%",
    },
  },

  [`& .${classes.advancedSearch}`]: {
    margin: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },

  [`& .${classes.sortBy}`]: {
    marginTop: theme.spacing(1),
  },

  [`& .${classes.card}`]: {
    margin: "4px",
    width: "43.2vw",
    [theme.breakpoints.up("md")]: {
      width: "282px",
    },
  },

  [`& .${classes.cardMedia}`]: {
    height: "28.8vw",
    [theme.breakpoints.up("md")]: {
      height: "188px",
    },
  },

  [`& .${classes.link}`]: {
    textDecoration: "none",
    color: "inherit",
  },

  [`& .${classes.cardContent}`]: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    paddingBottom: `${theme.spacing(1)} !important`,
  },
}));

export interface GraduateData {
  id: number;
  name: string;
  name_ch?: string;
  gender: string;
  message: string;
  one_liner?: string;
  describe_me: string[];
  birthday?: string;
  tutorial?: string;
  phone?: string;
  email?: string;
}

interface GraduatesData {
  data: GraduateData[];
  ordered: GraduateData[];
}

function Graduates() {
  const isVerified = false;
  const [graduates, setGraduates] = useState<GraduatesData>({
    data: graduatesData,
    ordered: graduatesData,
  });
  const [sortBy, setSortBy] = useState<{
    label: string;
    value: string;
    ascending: boolean;
    anchorEl: (EventTarget & HTMLButtonElement) | null;
  }>({
    label: "Sort By",
    value: "Default",
    ascending: true,
    anchorEl: null,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchAPIDebounced = useCallback(
    AwesomeDebouncePromise((items: GraduateData[], searchTerm: string) => {
      if (!searchTerm) return items;
      return filterItems(items, searchTerm);
    }, 500),
    []
  );

  const handleChange = async (text: string) => {
    const result = await searchAPIDebounced(graduates.data ?? [], text);
    setGraduates({ ...graduates, ordered: result });
    setSortBy({
      label: "Sort By",
      value: "Default",
      ascending: true,
      anchorEl: null,
    });
  };

  const handleSortByOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setSortBy({ ...sortBy, anchorEl: event.currentTarget });
    },
    [sortBy]
  );

  function handleSortByClose(sortCriteria: keyof GraduateData | null) {
    if (sortCriteria === null) {
      // did not select anything
      setSortBy({ ...sortBy, anchorEl: null });
    } else if (sortCriteria === sortBy.value) {
      // select the same sortCriteria
      const sortedData = graduates.data?.reverse() ?? null;
      const sortedOrdered = graduates.ordered?.reverse() ?? null;
      setGraduates({ data: sortedData, ordered: sortedOrdered });
      setSortBy({ ...sortBy, ascending: sortBy.ascending, anchorEl: null });
    } else {
      const sortedData = sortGraduates(graduates.data ?? [], sortCriteria);
      const sortedOrdered = sortGraduates(
        graduates.ordered ?? [],
        sortCriteria
      );
      setGraduates({ data: sortedData, ordered: sortedOrdered });
      setSortBy({
        label: sortCriteria,
        value: sortCriteria,
        ascending: true,
        anchorEl: null,
      });
    }
  }

  return (
    <Root>
      <Container className={classes.container}>
        <Box id="graduates-filterOption" className={classes.section}>
          <TextField
            className={classes.searchBar}
            label="Search"
            margin="normal"
            variant="outlined"
            onChange={(e) => {
              handleChange(e.currentTarget.value);
            }}
          />
          <Button
            className={classes.sortBy}
            aria-controls="graduates-sortBy"
            aria-haspopup="true"
            onClick={handleSortByOpen}
          >
            {sortBy.label}
            {sortBy.ascending ? <ExpandMore /> : <ExpandLess />}
          </Button>
          <Menu
            id="graduates-sortBy"
            anchorEl={sortBy.anchorEl}
            keepMounted
            open={Boolean(sortBy.anchorEl)}
            onClose={() => {
              handleSortByClose(null);
            }}
          >
            {SORT_CRITERIA.filter((sortCriteria) => {
              return isVerified || sortCriteria.isPublic;
            }).map((sortCriteria) => {
              return (
                <MenuItem
                  key={sortCriteria.id}
                  onClick={() => {
                    handleSortByClose(sortCriteria.id);
                  }}
                >
                  {sortCriteria.displayName}
                </MenuItem>
              );
            })}
          </Menu>
        </Box>

        <Box id="graduates-images" className={classes.section}>
          {graduates.ordered ? (
            graduates.ordered.map((graduate) => (
              <Card key={graduate.id} className={classes.card}>
                <CardActionArea>
                  <Link
                    className={classes.link}
                    to={`/graduates/${graduate.id}`}
                  >
                    <ImageHolder
                      className={classes.cardMedia}
                      graduateName={graduate.name}
                    />
                  </Link>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1">
                    {graduate.name_ch}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    {graduate.name}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Container>
    </Root>
  );
}

export default Graduates;
