import React, { useState } from 'react'
import Calendar from 'react-calendar'


const DashboardCalendar = () => {
        const [myCalendar, setMyCalendar] = useState(new Date())
  return (
    <>
    <Calendar className="shadow" onChange={setMyCalendar} value={myCalendar}/>
    </>
  )
}

export default DashboardCalendar