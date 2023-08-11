import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DriveOffs = () => {
  const [driveOffs, setDriveOffs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllDriveOffs = async () => {
      try {
        //  --  Heroku Connect
        const resRemoteHome = await axios.get("https://incidentrackerheroku-f9b4e6122ea4.herokuapp.com/driveoffs");
        //
        //  --  Standard LocalHost Connect
        // const resRemoteHome = await axios.get("http://localhost:8800/driveoffs");
        //
        //  --  Hostiner test deployment
        // const resRemoteHome = await axios.get("http://141.136.33.9:8800/driveoffs");
        //
        //  --  Durnish Wifi
        // const resRemoteHome = await axios.get("http://192.168.1.16:8800/driveoffs");
        //
        //  -- Maxol Huewai wifi 5G 
        // const resRemoteHome = await axios.get("http://192.168.254.128:8800/driveoffs");

        //  --  TUDublin Guest Wifi
        // const resRemoteHome = await axios.get("http://10.159.2.31:8800/driveoffs");
        //
        //  --  Galaxy Lite HotSpot
        // const resRemoteHome = await axios.get("http://192.168.255.186:8800/driveoffs");
        // setDriveOffs(res.data);
        
        setDriveOffs(resRemoteHome.data);
      } catch (err) {
        console.log(err);
        setError("Error occurred while fetching drive-offs. Please try again.");
      }
    };

    fetchAllDriveOffs();
  }, []);

  const handleDelete = async (id)=>{
    try{
      //  --  Heroku Connection
      await axios.delete("https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs/"+id)
      //
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
      <h1>Drive-Offs</h1>
      {error && <div>{error}</div>}
      <div className="driveOffs">
        {driveOffs.map((driveOff) => (
          <div className="driveoff" key={driveOff.id}>
            <h2>{driveOff.RegistrationNumber}</h2>            
            <h3>{driveOff.Cost}</h3>
            <h3>{driveOff.Date}</h3>
            <button className="details"><Link to={`/detailsdriveoff/${driveOff.id}`}>DETAILS</Link></button>
            <button className='update'><Link to={`/updatedriveoff/${driveOff.id}`}>UPDATE</Link></button>
            <button className='delete' onClick={()=>handleDelete(driveOff.id)}>DELETE</button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/adddriveoff">Add New Drive-Off Report</Link>
      </button>
    </div>
  );
};

export default DriveOffs;