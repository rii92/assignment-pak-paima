import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "./useFetch";
import { useEffect } from "react";

const User = (props) => {
  const [data] = useFetch(props.urlEnd);

  console.log("Post called");

  // Only to console log mount or unmount
  useEffect(() => {
    console.log("Post MOUNTED");
    return () => {
      console.log("Post UNMOUNTED");
    };
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell>{item.body}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default User;
