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
const CreateBtn = styled.button`
	margin: 0px 100px;
	color: #fff;
	background-color: #71b406;
	border-radius: 4px;   
	padding:12px 12px;  
	border: 1px solid #71b406;
	font-size:18px;
	cursor: pointer;
	transition: ease-in-out 0.2s;
	&:hover {
		background: #71b406cf;
		border-color: #71b406cf;
	}
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
			<CreateBtn type="Submit">Nuevo Contacto</CreateBtn>
			<Grid>
				{grid}
			</Grid>
		</Home>
	)
}

export default Contacts