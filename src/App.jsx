import './App.css'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork'

import pink  from '@mui/material/colors'
function App() {

  return (
    <>
      <Button variant="contained">Hello world</Button>
      <DeleteIcon />
      <AccessAlarmIcon />
      <AddHomeWorkIcon />
      <HomeRoundedIcon color="primary" />
      <HomeRoundedIcon color="secondary" />
      <HomeRoundedIcon color="success" />
      <HomeRoundedIcon color="action" />
      <HomeRoundedIcon color="disabled" />
      <HomeRoundedIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App

