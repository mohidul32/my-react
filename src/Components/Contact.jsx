import React from 'react'

export default function Contact(props) {
  return (
    <div className='contact_card'>
          <img src={props.img}/>
          <h3>{props.name}</h3>
          <div className='info_group'>
              <img src='../images/phone.png'/>
              <p>{props.phone}</p>
          </div>
          <div className='info_group'>
              <img src='../images/mail.png'/>
              <p>{props.email}</p>
          </div>
        </div>
  )
}
