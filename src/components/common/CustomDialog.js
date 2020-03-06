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
        {props.description.map((text, i) =>
          <DialogContentText id={`dialog-description-${i}`}>{text}</DialogContentText>
        )}

        {props.footer ?
          props.footer.map((text, i) =>
            <DialogContentText id={`dialog-footer-${i}`} style={{ textAlign: "right" }}>{text}</DialogContentText>
          )
          : null
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" size="large" autoFocus>{props.dismissText || "Okay"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
