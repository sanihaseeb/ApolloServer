import React from 'react';
import PropTypes from 'prop-types';

const DoctorDetails = ({ dob, specialty, address }) => {
  const { street, city, province, postal_code } = address;
  return (
    <>
      <h5>{`Date of birth: ${dob}`}</h5>
      <h5>{`Specialty: ${specialty}`}</h5>
      <h5>{`Address: ${street}, ${city}, ${province} ${postal_code}`}</h5>
    </>
  );
};

DoctorDetails.propTypes = {
    dob: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired
  };

 
 
export default DoctorDetails;
