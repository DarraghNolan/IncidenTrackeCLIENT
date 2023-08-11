import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import axios from 'axios';

const DetailsDriveOff = () => {
  const [driveOff, setDriveOff] = useState(null);
  
  const location = useLocation();
  const driveOffId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchDriveOff = async () => {
      try {
        //  --  Heroku Connection
        const response = await fetch(`https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs/${driveOffId}`);

        //  --  Standard Localhost Connection
        // const response = await fetch(`http://localhost:8800/driveoffs/${driveOffId}`);
        
        //  --  Hostiner test deployment
        // const response = await fetch(`http://141.136.33.9:8800/driveoffs/${driveOffId}`);

        //  --  Maxol Wifi
        //const resRemoteHome = await axios.get(`http://192.168.254.128:8800/driveoffs/${driveOffId}`);

        //  --  Durnish Wifi
        // const resRemoteHome = await axios.get(`http://192.168.1.16:8800/driveoffs/${driveOffId}`);

        //  --  TUDUblin Guest Wifi
        // const response = await fetch(`http://10.159.2.31:8800/driveoffs/${driveOffId}`);

        if (response.ok) {
          const driveOffData = await response.json();
          setDriveOff(driveOffData);
        } else {
          throw new Error('Error occurred while fetching drive-off details. Please try again.');
        }
      } catch (err) {
        console.log(err);
        console.log("Error occurred while fetching drive-off details. Please try again.");
      }
    };
    fetchDriveOff();
  }, [driveOffId]);
  
  const handleDelete = async (id)=>{
    try{
      //  --  Heroku Connection
      await axios.delete("https://incidentrackerheroku-f9b4e6122ea4.herokuapp.com/driveoffs/"+id)

      //  --  Standard LocalHost Connection
      // await axios.delete("http://localhost:8800/driveoffs/"+id)
      //
      //  --  Hostiner test deployment
      // await axios.delete("http://141.136.33.9:8800/driveoffs/"+id)
      //
      //  --  Durnish Wifi
      // await axios.delete("http://192.168.1.16:8800/driveoffs/"+id)
      //
      //  --  Maxol Huewai 5G
      // await axios.delete("http://192.168.254.128:8800/driveoffs/"+id)
      //
      //  --  Galaxy Lite HotSpot
      // await axios.delete("http://192.168.255.186:8800/driveoffs/"+id)
      //
      //  --  TUDublin Guest Wifi
      // await axios.delete("http://10.159.2.31:8800/driveoffs/"+id)
      

      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (    
    <div>
      <h1>Drive-Off Report Details</h1>
      {driveOff && (
        <div className="driveOff">
          <h2>Registration Number:</h2>
          <h2>{driveOff.RegistrationNumber}</h2>
          <h3>Cost: {driveOff.Cost}</h3>
          <h3>Date: {driveOff.Date}</h3>
          <br/>      
          <h3>Time: {driveOff.Time}</h3>
          <h3>Fuel: {driveOff.FuelType}</h3>
          <h3>Make: {driveOff.Make}</h3>
          <h3>Model: {driveOff.Model}</h3>
          <h3>Details:</h3>
          <h4>{driveOff.Details}</h4>
          <Accordion>
            <AccordionItem header="PROGRESS">              
              <h4>Recorded? {driveOff.Recorded}</h4>
              <h4>Reported? {driveOff.Reported}</h4>
              <h4>Collected by Gadraí? {driveOff.Collected}</h4>
              <h4>Incident fully resolved and paid for? {driveOff.Resolved}</h4>
            </AccordionItem>
          </Accordion>
          <h3>Employee on Tills: {driveOff.EmployeeOD}</h3>  
          <h3>Manager on Duty: {driveOff.ManagerOD}</h3>
          <h3>Report Author: {driveOff.ReportAuthor}</h3>   
          <button className='update'><Link to={`/updatedriveoff/${driveOff.id}`}>UPDATE</Link></button>
          <button className='delete' onClick={()=>handleDelete(driveOff.id)}>DELETE</button>
        </div>
      )}
    </div>
  );
};

export default DetailsDriveOff;