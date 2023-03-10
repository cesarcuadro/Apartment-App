import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'

const ProtectedApartmentIndex = ( {apartments, user,deleteApartment} ) => {
    console.log(apartments);
    console.log(user);
  const deleteAp = (id) => {
    deleteApartment(id)
  }
  return (
    <div className='card-index'>
        {user && apartments?.filter(apartment => apartment.user_id === user.id).map(apartment => {
        return (
            <Card
              style={{
                width: "14rem"
              }}
              key={apartment.id}
            >
              <img alt={`apartment`} src={apartment.image} />
              <CardBody>
                <p>Price; ${apartment.price}</p>
                <p>Location; {`${apartment.street} ${apartment.city}, ${apartment.state}`}</p>
                <p>Bathrooms; {apartment.bathrooms}</p>
                <p>Bedrooms; {apartment.bedrooms}</p>
                <Button>See More Details</Button>
                <Button onClick={
                  () => deleteAp(apartment?.id)}  outline color="danger">Delete</Button>
                 
              </CardBody>
            </Card>
          )
    })}
    </div>
)
}

export default ProtectedApartmentIndex