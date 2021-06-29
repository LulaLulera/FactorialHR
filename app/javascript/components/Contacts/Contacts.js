import React, { useState, useEffect,Fragment } from 'react'
import axios from 'axios'
import Contact from './Contact'
import styled from 'styled-components'


const Home = styled.div`
	text-aling: center;
	max-width:12;
	margin-left: auto;
	margin-right: auto;
`
const Header = styled.header`
	padding: 0px 100px 0px 100px;
	h1{
		font-size: 42px;
	}
`
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 20px;
`


const Contacts = () => {
	const [contacts, setContacts] = useState([])

	useEffect(()=>{
		axios.get('/api/v1/contacts.json')
		.then( resp => setContacts(resp.data.data))
		.catch( resp=> console.log(resp))		
	}, [contacts.length])


	const grid = contacts.map( item => {
		return (
			<Contact 
				key={item.attributes.id}
				attributes= {item.attributes}
			/>
		)
	})

	return (
		<Home>
			<Header>
				<h1>Contactos</h1>
			</Header>
			<Grid>
				{grid}
			</Grid>
		</Home>
	)
}

export default Contacts