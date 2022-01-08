import React, { useEffect, useContext } from 'react'
import authContext from '../../context/auth/authContext'
import Contact from '../contacts/Contact'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'

const Home = () => {

    const {loadUser} = useContext(authContext);

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className ="grid-2">
            {/* <h1>HOME</h1> */}
            <div>
                
                <ContactForm/>
            </div>
            <div>
            <ContactFilter/>
            <Contact/>
            </div>
        </div>
    )
}

export default Home
