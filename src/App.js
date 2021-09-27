
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/container/Container';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';

function App() {  
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
     </Container>
    );
  }

export default connect()(App);