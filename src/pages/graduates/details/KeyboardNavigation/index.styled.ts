import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

export const ModalPaper = styled(Paper)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const ModalHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
}));

export const ModalHeaderTitle = styled(Typography)({
  flex: 1,
});

export const ModalTableContainer = styled(TableContainer)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingTop: 0,
}));

export const ModalTable = styled(Table)({
  minWidth: 300,
});

export const ModalTableRow = styled(TableRow)({
  minWidth: 300,
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});

export const ShortcutIcon = styled(Paper)(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  background: theme.palette.grey[100],
  fontWeight: "bold",
}));

export const ShortcutIconDelimiter = styled("span")(({ theme }) => ({
  margin: `0 ${theme.spacing(1)}`,
}));
