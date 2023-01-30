import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import graduatesData from "assets/json/graduates_public.json";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import React, { useCallback, useState } from "react";
import GraduateCard from "./components/card/GraduateCard";
import { SORT_CRITERIA } from "./graduates.constants";
import { Graduate } from "./graduates.interface";
import { filterItems, sortGraduates } from "./sort.utils";

const PREFIX = "Graduates";

const classes = {
  container: `${PREFIX}-container`,
  section: `${PREFIX}-section`,
  searchBar: `${PREFIX}-searchBar`,
  advancedSearch: `${PREFIX}-advancedSearch`,
  sortBy: `${PREFIX}-sortBy`,
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
}));

interface GraduatesData {
  data: Graduate[];
  ordered: Graduate[];
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
    AwesomeDebouncePromise((items: Graduate[], searchTerm: string) => {
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

  function handleSortByClose(sortCriteria: keyof Graduate | null) {
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
          {graduates.ordered.map((graduate) => (
            <GraduateCard key={graduate.id} graduate={graduate} />
          ))}
        </Box>
      </Container>
    </Root>
  );
}

export default Graduates;
