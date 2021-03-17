import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import { DataGrid } from "@material-ui/data-grid";
// import { useDemoData } from "@material-ui/x-grid-data-generator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CustomList = (props) => {
  const classes = useStyles();
  const { contactList, page, perPage, total, total_pages } = props;
  //   const { data } = useDemoData({
  //     dataSet: "Commodity",
  //     rowLength: 100,
  //     maxColumns: 6,
  //   });
  return (
    <List className={classes.root}>
      {contactList.map((data, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar alt="ContactAvatar" src={data.avatar} />
          </ListItemAvatar>
          <ListItemText primary={data.first_name + " " + data.last_name} />
          <ListItemAvatar>
            <ArrowForwardIosIcon />
          </ListItemAvatar>
        </ListItem>
      ))}
      {/* <DataGrid
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
      /> */}
    </List>
  );
};
