import React, { Fragment, useContext } from 'react'
import contactContext from '../../context/Contact/contactContext'
import ContactItem from './ContactItem';

const Contact = () => {

    const {contacts} = useContext(contactContext);
        return (
        <Fragment>
            {
                contacts.map(contact => <ContactItem contact = {contact} key ={contact.id} />)
            }
            
        </Fragment>
    )
}

export default Contact
