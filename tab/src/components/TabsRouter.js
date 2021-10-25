import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Home from './Home';
import ListResource from './ListResource'
import CreateUser from './CreateUser'

export default function TabsRouter() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" />
            <Tab label="List Resource" value="2" />
            <Tab label="Form submit" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Home></Home></TabPanel>
        <TabPanel value="2"><ListResource></ListResource></TabPanel>
        <TabPanel value="3"><CreateUser></CreateUser></TabPanel>
      </TabContext>
    </Box>
  );
}
