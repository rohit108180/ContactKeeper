import React, { useContext, useEffect, useRef } from 'react'
import contactContext from '../../context/Contact/contactContext'

const ContactFilter = () => {

    const {filtered , filterContact, clearFilter} = useContext(contactContext);

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    }, [])


    const onChange = e =>{
        if(text.current.value !== ''){
            filterContact(e.target.value);
        }
        else{
            clearFilter();
        }
    }


    return (
        <form>

            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange} />
            
        </form>
    )
}

export default ContactFilter
