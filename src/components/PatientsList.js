import React, { useState, useEffect } from 'react';
import H1 from '@awesomecomponents/mux/core/typography/H1';

import PatientListItem from './PatientListItem';

const PatientsList = () => {
  const [patients, setPatients] = useState(null);

  const fetchPatients = () => {
    fetch(
      'https://rest-example-node.apps.cac.preview.pcf.manulife.com/v1/patients'
    )
      .then(response => response.json())
      .then(result => setPatients(result));
  };

  // only runs once on component mount
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <>
      <H1>Patients List</H1>
      {patients &&
        patients.map(patient => <PatientListItem patient={patient} />)}
    </>
  );
};

export default PatientsList;
