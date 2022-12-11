import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  magazineNav: {
    // minWidth: 160,
    // maxWidth: 280
    // width: 180
    width: 248,
  },
  h100: {
    height: "100%",
  },
  drawerPaper: {
    position: "static",
    height: "100%",
    width: "100%",
  },
  parentListItem: {
    padding: `12px 16px 12px ${theme.spacing(5)}px`,
    // paddingLeft: theme.spacing(4)
  },
  childListItem: {
    // padding: `px 0px 8px ${theme.spacing(8)}px`
    paddingLeft: theme.spacing(9),
  },
  active: {
    borderRight: `3px solid ${theme.palette.primary.main}`,
  },
}));

function MagazineNav(props) {
  const classes = useStyles();
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
    <nav aria-label="Magazine Navigations" className={classes.magazineNav}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden className={classes.h100} smDown implementation="css">
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
    </nav>
  );
}

export default MagazineNav;
