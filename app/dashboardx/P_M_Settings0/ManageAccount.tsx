
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import ManageContactsTable from './ManageContactsTable';
import { useDispatch,useSelector } from "react-redux";
import { dashboardSelector, userAccountManagementAccount } from '@/store/reducers/dashboard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ManageAccount(params: type) {
  const dispatch = useDispatch()
  const dashboardData = useSelector(dashboardSelector)
  useEffect(() => {
    dispatch(userAccountManagementAccount())
  }, [])

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className='min-h-[25px] mt-3' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className='flex flex-row min-h-[25px] py-1'  label="Contacts " icon={<img className='h-[20px] mr-1' src={'image/AccountPreference.png'} alt="Icon 1" />}  {...a11yProps(0)} />
                        <Tab className='flex flex-row min-h-[25px] py-1' label="People & sharing" icon={<img className='h-[20px] mr-1' src={'image/People_and_sharing.png'} alt="Icon 1" />} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <ManageContactsTable/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <div className='text-center py-5'>
                    <img className='h-[100px]' src="image/YouDont.png" alt="" />
                    <h6 className='text-red-500 mt-4'>You Don’t Have Permission</h6>
                </div>
                </CustomTabPanel>
     
            </Box>
        </>
    )
}

export default ManageAccount;