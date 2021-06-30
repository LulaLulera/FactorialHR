import React from 'react'
import styled from 'styled-components'

const Main = (props) =>{
    const {name, last_name, email, phone_number}= props.attributes
    return (
        <div className="wrapper">
            <h1>{name} {last_name}</h1>
            <p>{email}</p>
            <p>{phone_number}</p>
        </div>
    )
}

export default Main