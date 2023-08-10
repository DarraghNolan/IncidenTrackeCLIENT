import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function SearchDriveOffs() {
  const [driveOffs, setDriveOffs] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAllDriveOffs = async () => {
      try {
        //  --  Heroku Connect
        const resRemoteHome = await axios.get("https://incidentracker-e5eace51cecc.herokuapp.com/driveoffs");
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
        //
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

  const filterKeys = ["RegistrationNumber", "Cost", "Date", "FuelType", "Make", "Model"]

  const searchDriveOffs = (data)=>{
    return data.filter((item) => 
      filterKeys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  console.log(query)
  return (
    <div>
        <div className="driveOffs">
            <input 
                type="text" 
                placeholder="Search for Drive Off Reports" 
                className="searchDriveOffs" 
                onChange={e=>setQuery(e.target.value)}
            />
            <ul className='list'>
                {(searchDriveOffs(driveOffs)
                  ).map((driveOff) => (
                    <li key={driveOff.id} className="listDriveOff">
                      <h2>{driveOff.RegistrationNumber}</h2>
                      <h3>{driveOff.Cost}</h3>
                      <h3>{driveOff.Date}</h3>
                      <button className="details"><Link to={`/detailsdriveoff/${driveOff.id}`}>DETAILS</Link></button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default SearchDriveOffs;