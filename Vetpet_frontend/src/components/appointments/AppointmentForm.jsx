import React, { useState } from 'react'

const AppointmentForm = () => {

  const [form,setForm]=useState({



username:'',email:''

  })

  return (
    <div><form action="">
      
      <div>


        <label htmlFor="">Username</label>
        <input type="text" name='username'value={form.username}/>
      </div>
      
      </form></div>
  )
}

export default AppointmentForm