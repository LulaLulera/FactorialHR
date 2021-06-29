import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contacts = () => {
	const [contacts, setContacts] = useState([])

	useEffect(()=>{
		axios.get('/contacts.json')
		.then( resp => console.log(resp.data))
		.catch( resp=> console.log(resp.data))		
	}, [contacts.length])

	return (
		<div> prueba </div>
	)
}

export default Contacts