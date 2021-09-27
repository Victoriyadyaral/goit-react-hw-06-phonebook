
import React, {  useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/container/Container';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';

function App({contacts, filter, changeFilter}) {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])
  

  // const visibleContacts = getVisibleContacts();

  // const handleBlur = () => {
  //  if (visibleContacts.length === 0) {
  //    toast.error("No contact found. Enter the correct request!")
  //   } else {
  //     toast.success(` ${visibleContacts.length} contacts found!`)
  //   }
  // }
   
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
        <Filter
          //onBlur={handleBlur}
        />
        <ContactList/>
     </Container>
    );
  }

export default connect()(App);