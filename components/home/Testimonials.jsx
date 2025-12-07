import React from 'react'
import Title from '../ui/Title'
import Card from '../ui/Card'

const Testimonials = () => {

  const testimonialsCard =[
    {
      name:"Sarah M.",
      comment:`I'm blown away by the quality and style of the clothes 
      I received from Shop.co. From casual wear to elegant dresses,
       every piece I've bought has exceeded my expectations.”`
    },
    {
      name:"Sarah M.",
      comment:`I'm blown away by the quality and style of the clothes 
      I received from Shop.co. From casual wear to elegant dresses,
       every piece I've bought has exceeded my expectations.”`
    },
    {
      name:"Sarah M.",
      comment:`I'm blown away by the quality and style of the clothes 
      I received from Shop.co. From casual wear to elegant dresses,
       every piece I've bought has exceeded my expectations.”`
    },
    {
      name:"Sarah M.",
      comment:`I'm blown away by the quality and style of the clothes 
      I received from Shop.co. From casual wear to elegant dresses,
       every piece I've bought has exceeded my expectations.”`
    },
    {
      name:"Sarah M.",
      comment:`I'm blown away by the quality and style of the clothes 
      I received from Shop.co. From casual wear to elegant dresses,
       every piece I've bought has exceeded my expectations.”`
    },
  ]

  return (
    <div className="py-12">
      <div className="px-4 sm:px-10 lg:px-16 xl:px-26 2xl:px-42 mx-auto">
        
        <Title text={'OUR HAPPY CUSTOMERS'} />

        <div className="card overflow-auto py-10">
          <div className="flex items-center gap-4 animate-scroll w-max">
            {[...testimonialsCard, ...testimonialsCard].map((card, i) => (
              <Card card={card} key={i}/>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials