import React from 'react'
import { Link } from 'react-router-dom'

const MyPropertyCard = ({property , deleteAction}) => {

    return (
      <div className='propertiesz'>
        
        <div className='left'>
          <img src={property.main_image} alt="" />

          <h2>
              <Link className='text-decoration-none' to={`/properties/${property.id}`}>
                  {property.listing_name}
              </Link>
          </h2>

          <p>Area: <b>{property.city}</b><br></br>
            Cancelation Policy: <b>{property.cancellation_policy}</b><br></br>
            Property Size: <b>{property.size_in_meter} meter</b><br></br>
            Bills Included: <b>Yes</b><br></br>
            Current Status: <b>Occupied</b></p>
            <span>Price: <b>${property.price}</b></span>
        </div>

        <div className='right'>
          <a>
              <i className="fa fa-eye" aria-hidden="true"></i></a>
          <a>
              <i className="fa-solid fa-pen-to-square"></i>
          </a>
          <a onClick={() => deleteAction(property.id)}><i className="fa fa-trash" aria-hidden="true"></i></a>
        </div>

    </div>
  )
}

export default MyPropertyCard