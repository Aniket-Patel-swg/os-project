import React from "react";
import '../Css/Homepage.css';
import{TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper,Stack,Button,IconButton,TextField,Box} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const Homepage = () => {
    const tableData = [{
        "process_id": 1,
        "priority": "",
        "AT": "",
        "BT": "",
        "CT": "",
        "TAT": "",
        "WT": "",
        "RT": "",
        "del_process": ""
      }]
    
    return ( 
        <>  
        <div className="home-page">
            Home Page check text
            <TableContainer component={Paper}>
            <Table aria-label = 'simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Process ID</TableCell>
                        <TableCell align="center">Priority</TableCell>
                        <TableCell align="center">Arrival Time(AT)</TableCell>
                        <TableCell align="center">Brust Time(BT)</TableCell>
                        <TableCell align="center">Completion Time(CT)</TableCell>
                        <TableCell align="center">Turn Around Time(TAT)</TableCell>
                        <TableCell align="center">Waiting Time(WT)</TableCell>
                        <TableCell align="center">Response Time(RT)</TableCell>
                        <TableCell align="center">Delete Process</TableCell>
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                            <TableCell align="center">{row.process_id}</TableCell>
                            <TableCell align="center">{row.priority}
                              <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  variant="filled"
                                  size="small"
                                />
                            </TableCell>
                            <TableCell align="center">{row.AT}
                              <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  variant="filled"
                                  size="small"
                                />
                            </TableCell>
                            <TableCell align="center">{row.BT}
                              <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  variant="filled"
                                  size="small"
                                />
                            </TableCell>
                            <TableCell align="center">{row.CT}</TableCell>
                            <TableCell align="center">{row.TAT}</TableCell>
                            <TableCell align="center">{row.WT}</TableCell>
                            <TableCell align="center">{row.RT}</TableCell>
                            <TableCell align="center">{row.del_process}
                              <IconButton aria-label="delete">
                                <DeleteIcon />
                              </IconButton>                              
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Stack spacing={2} direction="row" style={{ justifyContent: "center", padding: "10em" }}>
          <Button variant="contained" style={{ backgroundColor: "#343536" }}>ADD PROCESS</Button>
          <Button variant="contained">RESULT</Button>
          <Button variant="contained" style={{ backgroundColor: "#f7404d" }}>RESET</Button>
        </Stack>
        </div>
        </>
     );
}
 
export default Homepage;