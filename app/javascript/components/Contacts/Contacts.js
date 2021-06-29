import React, { useState, useEffect,Fragment } from 'react'
import axios from 'axios'

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


	const list = contacts.map( item => {
		return (<li key={item.attributes.name}>{item.attributes.name}</li>)
	})

	return (
		<Fragment>
			<div> prueba </div>
			<ul>{list}</ul>
		</Fragment>
	)
}

export default Contacts