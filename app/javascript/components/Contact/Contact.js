import React, { useState, useEffect, Link } from 'react'
import axios from 'axios'
import Main from './Main'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
	margin-top: 30px;
	max-width: 50%;
	width: 15%;
	float: left;
	height: 60vh;
`
const LinkWrapper = styled.div`
	margin: 30px 0 20px 0;
	height:50px;
	a {
		color: #fff;
		background-color: #71b406;
		border-radius: 4px;
		padding: 10px 50px;
		cursor: pointer;
		border-radius: 3px;
		border: 1px solid #71b406;
		text-align: center;
		line-height: 20px;
		min-height: 40px;
		margin: 7px;
		font-weight: 600;
		text-decoration: none;
		width: 100%;
		transition: ease-in-out 0.1s;
		&:hover{
		border-color: #619a07;
		background: #619a07;
		}
	}
`
const SubmitBtn = styled.button`
	margin-bottom: 10px;
	color: #fff;
	background-color: #71b406;
	border-radius: 4px;   
	padding:12px 12px;  
	border: 1px solid #71b406;
	width:100%;
	font-size:18px;
	cursor: pointer;
	transition: ease-in-out 0.2s;
	&:hover {
		background: #71b406cf;
		border-color: #71b406cf;
	}
`
const DeleteBtn = styled.button`
	color: #fff;
	background-color: #d01a1a;
	border-radius: 4px;   
	padding:12px 12px;  
	border: 1px solid #d01a1a;
	width:100%;
	font-size:18px;
	cursor: pointer;
	transition: ease-in-out 0.2s;
	&:hover {
		background: #cc3131;
		border-color: #cc3131;
	}
`

const Contact = (props) => {
	const [contact, setContact] = useState({})
	const [loaded, setLoaded] = useState(false)

	useEffect(() =>{
		const  id = props.match.params.id
		const url = `/api/v1/contacts/${id}`

		axios.get(url)
		.then( resp => {
			setContact(resp.data) 
			setLoaded(true)
		})
		.catch( resp => console.log(resp) )
	}, [])

	return (
		<Wrapper>
			<Column>
				{
					loaded &&
					<Main 
						attributes={contact.data.attributes}
				    />	
				}
			<SubmitBtn type="Submit">Editar</SubmitBtn>
			<DeleteBtn type="Submit">Eliminar</DeleteBtn>
			{ 
			props.error && 
			<Error>{props.error}</Error>
			}	
			</Column>
		</Wrapper>
		
	)
}

export default Contact