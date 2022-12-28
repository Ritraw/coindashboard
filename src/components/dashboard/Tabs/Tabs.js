import {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import './Tabs.css';

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
    <div>
       <ThemeProvider theme={theme}>
        <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </Box>
        <TabPanel value="grid">
            {coins.map((item,i)=>(
                <p key={i}>{item.name}</p>
            ))}
        </TabPanel>
        <TabPanel value="list">Item Two</TabPanel>
        
      </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default Tabs;