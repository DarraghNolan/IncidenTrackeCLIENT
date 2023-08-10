import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import React from 'react'

const AddDriveOff = () =>{
    const [newdriveoff, setDriveOff] = useState({
        RegistrationNumber:"",
        Cost: "",
        Date:"",
        Time:"",
        FuelType:"",
        Make:"",
        Model:"",
        Details:"",
        Recorded: null,
        Reported: null,
        Collected: null,
        Resolved: null,
        EmployeeOD:"",
        ManagerOD:"",
        ReportAuthor:""
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setDriveOff((prev)=>({...prev, [e.target.name] : e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            //  --  Heroku 
            await axios.post("https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs", newdriveoff)

            //  --  Standard LocalHost Connection
            // await axios.post("http://localhost:8800/driveoffs", newdriveoff)
            //
            //  --  Hostiner test deployment
            // await axios.post("http://localhost:8800/driveoffs", newdriveoff)
            //
            //  --  Durnish Wifi
            // await axios.post("http://192.168.1.16:8800/driveoffs", newdriveoff)
            //
            //  --  Maxol Huewai 5G
            // await axios.post("http://192.168.254.128:8800/driveoffs", newdriveoff)
            //
            //  --  TUDUblin Guest Wifi
            // await axios.post("http://10.159.2.31:8800/driveoffs", newdriveoff)
            //
            //  --  Galaxy Lite HotSpot
            // await axios.post("http://192.168.255.186:8800/driveoffs", newdriveoff)
            navigate("/driveoffs")
        }catch(err){
            console.log("The Drive Off Report was not logged...")
        }
    };

    // console.log(newdriveoff)
    return (
        <div className='form'>
            <h1>Add New Drive Off Report</h1>
            <input 
                type="text"
                placeholder='Registration Number'
                onChange={handleChange}
                name="RegistrationNumber"
            />
            <input 
                type="text"
                placeholder='Cost (€)'
                onChange={handleChange}
                name="Cost"
            />
            <input 
                type="text" 
                placeholder='Date (YYYY/MM/DD)'
                onChange={handleChange}
                name="Date"
            />
            <input 
                type="text" 
                placeholder='Time (HH:MM)'
                onChange={handleChange}
                name="Time"
            />
            <input 
                type="text" 
                placeholder='Fuel Type'
                onChange={handleChange}
                name="FuelType"
            />
            <input 
                type="text" 
                placeholder='Make (Car Manufacturer)'
                onChange={handleChange}
                name="Make"
            />
            <input 
                type="text" 
                placeholder='Model (Car Type)'
                onChange={handleChange}
                name="Model"
            />
            <input 
                type="text" 
                placeholder='Details'
                onChange={handleChange}
                name="Details"
            />
            <input 
                type="number" 
                placeholder='Recorded'
                onChange={handleChange}
                name="Recorded"
            />
            <input 
                type="number" 
                placeholder='Reported'
                onChange={handleChange}
                name="Reported"
            />
            <input 
                type="number" 
                placeholder='Collected'
                onChange={handleChange}
                name="Collected"
            />
            <input 
                type="number" 
                placeholder='Resolved'
                onChange={handleChange}
                name="Resolved"
            />
            <input 
                type="text" 
                placeholder='Employee on Tills'
                onChange={handleChange}
                name="EmployeeOD"
            />
            <input 
                type="text" 
                placeholder='Manager on Duty'
                onChange={handleChange}
                name="ManagerOD"
            />
            <input 
                type="text" 
                placeholder='Name of Report`s Author'
                onChange={handleChange}
                name="ReportAuthor"
            />
            <button onClick={handleClick}>Save New Drive Off Report</button>
        </div>
    )
}

export default AddDriveOff