import React from "react";
import styled from 'styled-components'

const Field = styled.div`
  border-radius: 4px;
  input {
    width: 25%;
    min-height: 35px;
    margin: 5px 0;
  }
`
const Form = styled.div`
  text-align: center;
`
const Title = styled.div`
  text-align: center;
`


const ContactForm = (props) =>{
  return (
    
    <div className="wrapper">
      <Title>Nuevo Contacto</Title>
      <Form>
        <Field>
          <input type="text" name="name" placeholder="Nombre"/>
        </Field>
        <Field>
          <input type="text" name="last_name" placeholder="Apellido(s)"/>
        </Field>
        <Field>
          <input type="text" name="mail" placeholder="Correo electrónico"/>
        </Field>
        <Field>
          <input type="text" name="phone" placeholder="Teléfono"/>
        </Field>
        <button type="submit">Crear</button>
      </Form>
    </div>
  )
}

export default ContactForm