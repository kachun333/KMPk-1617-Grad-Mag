import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const PREFIX = "MagazineNav";

const classes = {
  magazineNav: `${PREFIX}-magazineNav`,
  h100: `${PREFIX}-h100`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  parentListItem: `${PREFIX}-parentListItem`,
  childListItem: `${PREFIX}-childListItem`,
  active: `${PREFIX}-active`,
};

const Root = styled("nav")(({ theme }) => ({
  [`&.${classes.magazineNav}`]: {
    // minWidth: 160,
    // maxWidth: 280
    // width: 180
    width: 248,
  },

  [`& .${classes.h100}`]: {
    height: "100%",
  },

  [`& .${classes.drawerPaper}`]: {
    position: "static",
    height: "100%",
    width: "100%",
  },

  [`& .${classes.parentListItem}`]: {
    padding: `12px 16px 12px ${theme.spacing(5)}`,
    // paddingLeft: theme.spacing(4)
  },

  [`& .${classes.childListItem}`]: {
    // padding: `px 0px 8px ${theme.spacing(8)}`
    paddingLeft: theme.spacing(9),
  },

  [`& .${classes.active}`]: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  },
}));

function MagazineNav(props) {
  const navs = [
    {
      title: "封面",
      link: "/magazine",
    },
    {
      title: "叙憶",
      link: "/magazine/chap/1",
      // children: [{
      //   title: "老师赠言",
      //   link: ""
      // }, {
      //   title: "学生代表",
      //   link: ""
      // }, {
      //   title: "活动主席",
      //   link: ""
      // }]
    },
    {
      title: "華憶",
      link: "/magazine/chap/2",
    },
    {
      title: "迴憶",
      link: "/magazine/chap/3",
    },
    {
      title: "筆憶",
      link: "/magazine/chap/4",
    },
    {
      title: "酣憶",
      link: "/magazine/chap/5",
    },
    {
      title: "醇憶",
      link: "/magazine/chap/6",
    },
  ];

  const drawer = (
    <List>
      {navs.map((nav) => (
        <>
          <ListItem
            component={NavLink}
            key={nav.title}
            exact
            to={nav.link}
            className={classes.parentListItem}
            activeClassName={classes.active}
            button
          >
            <Typography variant="h4">{nav.title}</Typography>
          </ListItem>
          <List component="div" disablePadding>
            {nav.children
              ? nav.children.map((childNav) => (
                  <ListItem
                    component={NavLink}
                    key={childNav.title}
                    className={classes.childListItem}
                    exact
                    to={childNav.link}
                    activeClassName={classes.active}
                    button
                  >
                    <Typography variant="body1">{childNav.title}</Typography>
                  </ListItem>
                ))
              : null}
          </List>
        </>
      ))}
    </List>
  );

  return (
    <Root aria-label="Magazine Navigations" className={classes.magazineNav}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden className={classes.h100} mdDown implementation="css">
        <Drawer
          className={classes.h100}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </Root>
  );
}

export default MagazineNav;
