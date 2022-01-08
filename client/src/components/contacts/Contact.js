import React, { Fragment, useContext, useEffect } from "react";
import contactContext from "../../context/Contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contact = () => {
  const { contacts, filtered ,getContact, loading} = useContext(contactContext);

  useEffect(() => {
    getContact();
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
            <CSSTransition key={contact._id} timeout ={500}  classNames ="item">
            <ContactItem contact={contact} />
            </CSSTransition>
              
            ))
          : contacts.map((contact) => (
                <CSSTransition key={contact._id} timeout ={500}  classNames ="item">
                <ContactItem contact={contact} />
                </CSSTransition>
            ))}
      </TransitionGroup>
      ) : <Spinner/>}
      
    </Fragment>
  );
};

export default Contact;
