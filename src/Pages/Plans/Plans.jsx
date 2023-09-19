import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_4.jpg'
import Card from '../../Ul/Card'
import { plans } from '../../data'
import './Plan.css'



const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda illum officiis, sequi totam eveniet id numquam odio soluta voluptates veritatis?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disable' : ''}>
                      {feature}
                    </p>

                  })
                }
                <button className='btn lg'> Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>

    </>
  )
}

export default Plans