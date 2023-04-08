import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { useEffect } from "react";
export default function AlertBox(props) {
  const [open, setOpen] = useState({
    open: props.open,
    type: props.type,
    text: props.text,
  });
  useEffect(() => {
    setOpen({
      open: props.open,
      type: props.type,
      text: props.text,
    });
  }, [props]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false, type: open.type, text: open.text });
  };
  return (
    <Snackbar open={open.open} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={open.type}
        sx={{ width: "100%" }}
      >
        {open.text}
      </Alert>
    </Snackbar>
  );
}
