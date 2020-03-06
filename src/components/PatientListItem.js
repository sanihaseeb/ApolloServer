import React, { useState } from 'react';

const PatientListItem = ({ patient }) => {
  const [doctorsList, setDoctorsList] = useState(null);

  const handleLoadDoctors = () => {
    console.log('// TODO: Load doctors...');
    setDoctorsList([
      { id: 1, name: 'Test' },
      { id: 2, name: 'Test' }
    ]);
  };

  return (
    <div>
      <a href='#' onClick={handleLoadDoctors}>
        {patient.name}
      </a>
      {doctorsList &&
        doctorsList.map(doctor => <p key={doctor.id}>{doctor.name}</p>)}
    </div>
  );
};

export default PatientListItem;
