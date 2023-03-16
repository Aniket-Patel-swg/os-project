import React, { PureComponent } from 'react';
import '../Css/Fcfs.css';
import{TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper,Stack,Button,IconButton,TextField,} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


let i=0;
let sum=0;
export const arrayData =[];
   
      

const FCFSDisk = () => {

//     const [showChart, setShowChart]=React.useState(false);
//   const [newData, setNewData] = React.useState("");
//   const [currPos, setCurrPos] = React.useState("");
//   const [isDisabled, setisDisabled] = React.useState(false);



    const tableData = [{
        "prequest_id": 1,
        "request_sequence": "",
        
        "del_process": ""
      }]

     //function to handle user input
    //   const handleChart = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };

      //function to add row
    //   const handleAddRow = () => {
    //     setData((prevState) => [...prevState, newRow]);
    //     setNewData({ name: '', age: '', email: '' });
    //   };

      



     // const placementData = [
        // {
        //   Year: "2016",
        //   avg: 4,
        //   highest: 15,
        // },
        // {
        //   Year: "2017",
        //   avg: 6,
        //   highest: 16,
        // },
        // {
        //   Year: "2018",
        //   avg: 20,
        //   highest: 8,
        // },
        // {
        //   Year: "2019",
        //   avg: 12,
        //   highest: 19,
        // },
        // {
        //   Year: "2020",
        //   avg: 10,
        //   highest: 25,
        // },
     // ]
    
    //  const handleChart = () => {
    //     setShowChart(true);

    //  }

     

      
  
    return ( 
        <>  
        <div className="intial-head">
        <TableContainer component={Paper}>
            <Table aria-label = 'simple table'>
               
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                            <TableCell align="left">Intial Head Position :</TableCell>
                            <TableCell align="left">{row.priority}
                              <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  variant="filled"
                                  size="small"
                                />
                            </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        </div>
        <div className="Fcfs-Table">
            
            <TableContainer component={Paper}>
            <Table aria-label = 'simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Process ID</TableCell>
                        <TableCell align="left">Request Sequence</TableCell>
                        
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                            <TableCell align="left">{row.process_id}</TableCell>
                            <TableCell align="left">{row.priority}
                              <TextField
                                  hiddenLabel
                                  id="filled-hidden-label-small"
                                  variant="filled"
                                  size="small"
                                />
                            </TableCell>
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
          {/* <Button variant="contained" onClick={()=>Chart(process)}>RESULT</Button> */}
          <Button variant="contained" style={{ backgroundColor: "#f7404d" }}>RESET</Button>

        </Stack>
        </div>

        <ResponsiveContainer width="70%" height="50%" aspect={3}>
          <LineChart
            data={arrayData}
            width={500}
            height={800}
            margin={{top: 15, right: 30}}
          >
            <CartesianGrid strokeDasharray={5} vertical={false} />
            <XAxis dataKey="Year" />
            <Line dataKey="avg" stroke="green" />
            <Line dataKey="highest" stroke="cyan" />
            <YAxis />
            <Tooltip contentStyle={{backgroundColor: "#f1f1f1"}} />
            <Legend />
          </LineChart>
        </ResponsiveContainer>

   {/* <div>
    {showResult && <}
   </div> */}

        </>
     );
}
  
export default FCFSDisk;