import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Contact = (props) => {
	return(
		<div className="card">
			<div className="contact_name">{props.attributes.name} {props.attributes.last_name}</div>
			<div className="contact_email">{props.attributes.email}</div>
			<div className="contact_phone">{props.attributes.phone_number}</div>
			<div className="contact_link">
				<Link to={'/contacts/${props.attribute.id}'}> Ver Contacto</Link>
			</div>
		</div>
	)
}

export default Contact