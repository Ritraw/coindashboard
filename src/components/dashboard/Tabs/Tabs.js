import {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../grid/Grid';
import './Tabs.css';
import List from '../list/List';

function Tabs({coins}) {
    const [tabValue,setTabValue] = useState("grid");

    const handleChange = (event,newValue)=>{
        setTabValue(newValue);
    }

    const theme = createTheme ({
        palette:{
            primary:{
                main: "#3a80e9",
            },
        },
    });
    
    const style = {
        color: "var(--white)",
        width: "50vw",
        fontSize: "1.2rem",
        fontWeight: 600,
        fontFamily: "Inter",
        textTransform: "uppercase",
      };

    return (
    
      <Box>
       <ThemeProvider theme={theme}>
        <TabContext value={tabValue}>
          <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        <TabPanel value="grid" className='tabPanel'>
            <Box className='grid-flex'>
                {coins.map((coin,i)=>(
                  <Grid coin={coin} key={i}/>
                ))}
            </Box>
        </TabPanel>
        <TabPanel value="list" className='tabPanel'>
        <table className="list-flex">
              {coins.map((coin, i) => (
                <List coin={coin} key={i}/>
              ))}
            </table>
        </TabPanel>
        
      </TabContext>
      </ThemeProvider>
      </Box>
  );
}

export default Tabs;