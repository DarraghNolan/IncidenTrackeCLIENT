import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const UpdateDriveOff = () =>{
    const [driveoff, setDriveOff] = useState({
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
        ManagerOD: "",
        EmployeeOD:"",
        ReportAuthor: ""
    });

    const [updateStatus, setUpdateStatus] = useState("");

    const navigate = useNavigate()
    const location = useLocation()

    const driveOffId = location.pathname.split("/")[2]

    useEffect(() => {
        const fetchDriveOff = async () => {
          try {
            //  --  Heroku Connection
            const response = await axios.get(`https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs/${driveOffId}`);
            //
            //  --  Standard Localhost Connection
            // const response = await axios.get(`http://localhost:8800/driveoffs/${driveOffId}`);
            //
            //  --  Hostiner test deployment
            // const response = await axios.get(`http://141.136.33.9:8800/driveoffs/${driveOffId}`);

            //  --  Durnish Cottage
            // const response = await axios.get(`http://192.168.1.16:8800/driveoffs/${driveOffId}`);

            //  --  Maxol Huawei 5G
            //const response = await axios.get(`http://192.168.1.16:8800/driveoffs/${driveOffId}`);
            
            //  --  TUDublin Guest Wifi
            // const response = await axios.get(`http://10.159.2.31:8800/driveoffs/${driveOffId}`);
            
            const driveOffData = response.data;
            setDriveOff(driveOffData);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchDriveOff();
    }, [driveOffId]);
    

    const handleChange = (e) =>{
        setDriveOff((prev)=>({...prev, [e.target.name] : e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            //  --  Heroku Connection
            await axios.put("https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs/" + driveOffId, driveoff)
            //
            //  --  Standard LocalHost Connection
            // await axios.put("http://localhost:8800/driveoffs/" + driveOffId, driveoff)
            //
            //  --  Hostiner test deployment
            // await axios.put(`http://141.136.33.9:8800/driveoffs/" + driveOffId, driveoff)
            //
            //  --  Durnish Wifi
            // await axios.put("http://192.168.1.16:8800/driveoffs/" + driveOffId, driveoff)
            //
            //  --  Maxol Huewai 5G
            // await axios.put("http://192.168.254.128:8800/driveoffs/" + driveOffId, driveoff)
            //
            //  --  TUDublin Guest Wifi
            // await axios.put("http://10.159.2.31:8800/driveoffs/" + driveOffId, driveoff)
            //
            //  --  Galaxy Lite HotSpot
            // await axios.put("http://192.168.255.186:8800/driveoffs/" + driveOffId, driveoff)
            navigate("/driveoffs")
        }catch(err){
            console.log("The Drive Off Report was not updated...")
            console.log(err)
            setUpdateStatus("The Drive Off Report was not updated...");
        }
    };

    return (
        <div className='form'>
            <h1>Update Drive Off Report</h1>
            <input 
                type="text"
                placeholder="Registration Number"
                value={driveoff.RegistrationNumber || ""}
                onChange={handleChange}
                name="RegistrationNumber"
            />
            <input 
                type="text"
                placeholder='Cost (€)'
                value={driveoff.Cost || ""}
                onChange={handleChange}
                name="Cost"
            />
            <input 
                type="text" 
                placeholder='Date (YYYY/MM/DD)'
                value={driveoff.Date || ""}
                onChange={handleChange}
                name="Date"
            />
            <input 
                type="text" 
                placeholder='Time (HH:MM)'
                value={driveoff.Time || ""}
                onChange={handleChange}
                name="Time"
            />
            <input 
                type="text" 
                placeholder='Fuel Type'
                value={driveoff.FuelType || ""}
                onChange={handleChange}
                name="FuelType"
            />
            <input 
                type="text" 
                placeholder='Make (Car Manufacturer)'
                value={driveoff.Make || ""}
                onChange={handleChange}
                name="Make"
            />
            <input 
                type="text" 
                placeholder='Model (Car Type)'
                value={driveoff.Model || ""}
                onChange={handleChange}
                name="Model"
            />
            <input 
                type="text" 
                placeholder='Details'
                value={driveoff.Details || ""}
                onChange={handleChange}
                name="Details"
            />
            <input 
                type="number" 
                placeholder='Recorded'
                value={driveoff.Recorded || ""}
                onChange={handleChange}
                name="Recorded"
            />
            <input 
                type="number" 
                placeholder='Reported'
                value={driveoff.Reported || ""}
                onChange={handleChange}
                name="Reported"
            />
            <input 
                type="number" 
                placeholder='Collected'
                value={driveoff.Collected || ""}
                onChange={handleChange}
                name="Collected"
            />
            <input 
                type="number" 
                placeholder='Resolved'
                value={driveoff.Resolved || ""}
                onChange={handleChange}
                name="Resolved"
            />
            <input 
                type="text" 
                placeholder='Manager on Duty'
                value={driveoff.ManagerOD || ""}
                onChange={handleChange}
                name="ManagerOD"
            />
            <input 
                type="text" 
                placeholder='Employee on Tills'
                value={driveoff.EmployeeOD || ""}
                onChange={handleChange}
                name="EmployeeOD"
            />
            <input 
                type="text" 
                placeholder='Name of Report`s Author'
                value={driveoff.ReportAuthor || ""}
                onChange={handleChange}
                name="ReportAuthor"
            />
            <button onClick={handleClick}>Save Changes</button>
            <div>
                <h3>{updateStatus}</h3>
            </div>
        </div>
    )
}

export default UpdateDriveOff