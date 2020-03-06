import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_PATIENT_DETAILS = gql`
  query ($id: ID!) {
    patient(id: $id) {
      id
      name
      doctors {
        name
        id
      }
    }
  }
`;

const PatientData = () => (
  <Query query={GET_PATIENT_DETAILS} variables={{ id: 2 }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.patient.doctors.map(({ name, id }) => (
        <div key={id}>
          <p>{`Doctor Name: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

class Patients extends Component {
  render() {
    return (
      <div className="patients">
        <PatientData />
      </div>
    );
  }
}

export default Patients;
