import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface CustomDialogProps {
  onClose: () => void;
  open: boolean;
  title: string;
  dismissText?: string;
  description: string[];
  footer?: string[];
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  onClose,
  open,
  title,
  dismissText,
  description,
  footer,
}) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="dialog-title" open={open}>
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        {description.map((text, i) => (
          <DialogContentText id={`dialog-description-${i}`}>
            {text}
          </DialogContentText>
        ))}

        {footer?.map((text, i) => (
          <DialogContentText
            id={`dialog-footer-${i}`}
            style={{ textAlign: "right" }}
          >
            {text}
          </DialogContentText>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" size="large" autoFocus>
          {dismissText || "Okay"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
