import React, { useState, useEffect,Fragment } from 'react'
import axios from 'axios'
import Contact from './Contact'

const Contacts = () => {
	const [contacts, setContacts] = useState([])

	useEffect(()=>{
		axios.get('/api/v1/contacts.json')
		.then( resp => 
		{
			setContacts(resp.data.data)
		})
		.catch( resp=> console.log(resp))		
	}, [contacts.length])


	const grid = contacts.map( item => {
		return (
			<Contact 
				key={item.attributes.name}
				attributes= {item.attributes}
			/>
		)
	})

	return (
		<div className="home">
			<header>
				<h1>Contactos</h1>
			</header>
			<div className="grid">
				{grid}
			</div>
		</div>
	)
}

export default Contacts