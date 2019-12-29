import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

function CustomDialog(props) {
  return (
    <Dialog onClose={props.onClose} aria-labelledby="dialog-title" open={props.open}>
      <DialogTitle id="dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">{props.description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" autoFocus>Okay</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
