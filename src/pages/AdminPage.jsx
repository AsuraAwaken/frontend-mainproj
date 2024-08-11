import React from 'react'
import Card from '../Components/Card'

const AdminPage = () => {
    const cardData = [
        {
            id:1,
            sname:"Captain-prize",
            location:"Russia"
            
        },
        {
            id:2,
            sname:"Soap",
            location:"Norway"
            
        },
        {
            id:3,
            sname:"Ghost",
            location:"Gulag"
            
        },
        
    ]

  return (
    <>
    <h2>Welcome Director</h2>
     {
        cardData.map((card, index)=>(
            <Card
                key={index}
                sname={card.sname}
                location={card.location}
            />
        ))
    }
      
    </>
  )
}

export default AdminPage
