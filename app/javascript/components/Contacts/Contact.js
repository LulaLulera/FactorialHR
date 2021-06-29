import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
  	border: 1px solid #efefef;
  	background: #fff;
	text-align: center;
`
const ContactName = styled.div`
	padding: 5px 0 5px 0;
  	text-align: center;
`
const ContactEmail = styled.div`
	padding: 5px 0 5px 0;
	text-align: center;
`
const ContactPhone = styled.div`
	padding: 5px 0 5px 0;
	text-align: center;
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


const Contact = (props) => {
	return (
		<Card>
			<ContactName>
				{props.attributes.name} {props.attributes.last_name}
			</ContactName>
			<ContactEmail>
				{props.attributes.email}
			</ContactEmail>
			<ContactPhone>
				{props.attributes.phone_number}
			</ContactPhone>
			<LinkWrapper>
				<Link to={"/contacts/" + props.attributes.id}>Ver Contacto</Link>
			</LinkWrapper>
		</Card>
	  )
}

export default Contact