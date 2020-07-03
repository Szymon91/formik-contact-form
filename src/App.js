import React from 'react';
import { Grid } from '@material-ui/core';

import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <main>
      <Grid container justify="center">
        <Grid item xs={12} md={9} lg={8}>
          <ContactForm />
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
