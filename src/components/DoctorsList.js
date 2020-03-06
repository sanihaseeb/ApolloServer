import React, { Component } from 'react';
import DoctorListItem from './DoctorsListItem';
import '@awesomecomponents/mux/core/typography/assets/fonts/fonts.css';
import H1 from '@awesomecomponents/mux/core/typography/H1';
import AddDoctor from './AddDoctor';

export default class DoctorsList extends Component {
  constructor(props) {
    super(props);

    this.state = { doctors: [] };
  }

  componentDidMount() {
      fetch( 'https://alsamya-rest-exercise-code.apps.cac.preview.pcf.manulife.com/doctors'
      )
      .then(response => response.json())
      .then(result => this.setState({ doctors: result }));
  
  }

  renderDoctors() {
     return this.state.doctors.map(doctor => <DoctorListItem doctor={doctor} />
    
     )};

     handleAddDoctor(name) {
        const newDoctor = { id: (this.state.doctors.length + 1).toString(), name: name };
        const newDoctorsList = [...this.state.doctors, newDoctor];
        this.setState({ doctors: newDoctorsList });
       }
       

  render() {
    return (
      <>
        <H1>Doctors List</H1>
        <AddDoctor onAddDoctor={name => this.handleAddDoctor(name)} />
        {this.renderDoctors()}
      </>
    );
  }
}

