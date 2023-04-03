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
import world from '../../assets/images/logos/World Network.svg';
const Office = ({country, address, img, link, imgLogo}) => {
    
  return (
    <>

        <a href="https://www.google.com" target="_blank">
   <MDBCard className="h-100">

        <MDBCardImage src={img} fluid alt={country} className="rounded" />
      <MDBCardBody className='text-center office-body'>

          <div className='d-flex justify-content-center'>

              <ImOffice className='icon_office'/>
              <MDBCardTitle className='mx-3 '>{country}

              </MDBCardTitle>

          </div>

          <div className="d-flex justify-content-between">

              <img src={imgLogo} alt="" className="w-25" />
              <MDBCardText className="m-auto">

                  {address}
              </MDBCardText>

          </div>


      </MDBCardBody>
    </MDBCard>
    </a>
    </>
  )
}

export default Office