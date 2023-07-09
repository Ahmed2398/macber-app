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
import {GrMapLocation,GrPhone} from 'react-icons/gr'
import world from '../../assets/images/logos/World Network.svg';
const Office = ({country, address, img, link, mapLink, phone}) => {

  return (
    <>

        <a href={link} target="_blank">
   <MDBCard className="h-100">
        <MDBCardImage src={img} fluid alt={country} className="rounded" />
      <MDBCardBody className='text-center office-body'>
          <div className='d-flex justify-content-center'>
              <ImOffice className='icon_office'/>
              <MDBCardTitle className='mx-3 '>{country}
              </MDBCardTitle>
          </div>
          <div className="d-flex justify-content-between">
              <MDBCardText className="m-auto">
                  {address}
              </MDBCardText>
          </div>
          <div className="d-flex justify-content-between align-items-center phone">
              <a className="mx-2"  target="_blank" href={mapLink}><GrMapLocation/></a>
              <a className="mx-2"  target="_blank"><GrPhone/>{phone}</a>

          </div>

      </MDBCardBody>
    </MDBCard>
    </a>

    </>
  )
}

export default Office
