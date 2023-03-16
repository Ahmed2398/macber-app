import { MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
   
     } from 'mdb-react-ui-kit'
import React from 'react'
import './Office.css'
import { MDBIcon } from 'mdb-react-ui-kit'

import {ImOffice} from 'react-icons/im'
const Office = ({country, address, img}) => {
    
  return (
    <>
   
             
   <MDBCard>
        <MDBCardImage src={img} fluid alt={country} className="rounded" />
    
      <MDBCardBody className='text-center office-body'>
          <div className='d-flex justify-content-center'>
              <ImOffice className='icon_office'/>
              <MDBCardTitle className='mx-3'>{country}</MDBCardTitle>
          </div>

        <MDBCardText>
            {address}
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>
            
    </>
  )
}

export default Office