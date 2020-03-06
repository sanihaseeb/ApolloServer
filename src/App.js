import React from 'react';
import '@awesomecomponents/mux/core/typography/assets/fonts/fonts.css';
import Layout from './Layout';
import './App.css';
import  DoctorsList  from './components/DoctorsList';
import  PatientsList  from './components/PatientsList';
import H1 from '@awesomecomponents/mux/core/typography/H1';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Patients from './components/Patients';

const client = new ApolloClient({
  uri: "https://graphql-doctor-patient.apps.cac.preview.pcf.manulife.com/"
});

  function App(props) {
    return (
    <Layout>
      <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
       <H1>Hello, {props.name}</H1>
    <DoctorsList/>
    <hr />
<Patients />
<hr />
<PatientsList/>
<br />
<br />
    </header>
    </div>
    </ApolloProvider>
    </Layout>
    )
  }



export default App;
