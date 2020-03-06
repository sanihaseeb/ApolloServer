import React, { useState } from 'react';
import DoctorDetails from './DoctorDetails';

function DoctorListItem({ doctor, onDeleteDoctor }) {
  const [details, setDetails] = useState(null);

  function handleDeleteDoctor() {
    onDeleteDoctor(doctor.id);
  }
 
  function handleLoadDetails() {
    fetch(
      `https://doctor-info.apps.cac.preview.pcf.manulife.com/v1/doctor/${doctor.id}`
    )
      .then(response => response.json())
      .then(response => setDetails(response))
      
    
  }
  function renderDoctorDetails() {
    if (!details) { return; }
    return <DoctorDetails {...details} />
  }

  return (
    <div>
      <a href='#/' onClick={handleLoadDetails}>
        {doctor.name}
        {renderDoctorDetails()}
      </a>
      <button onClick={handleDeleteDoctor}> Delete </button>
    </div>
  );
  }
  
export default DoctorListItem;
