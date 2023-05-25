import React from 'react'
import Carousel from 'react-multi-carousel';
import { SliderData } from './SliderData';
import Card from './Card';

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const product= SliderData.map(item=>(
        // eslint-disable-next-line react/jsx-key
        <Card 
          key={item.key}
          image={item.image}
          desc={item.desc}
          />
))
  return (<>
    <h1 className='text-2xl font-bold text-center p-8' >Gallery</h1>
    <div className='max-w-container mx-auto py-6 lgl:py-16 px-4'>
    <Carousel responsive={responsive}>
        {product}  
    </Carousel>
    </div>
      </>
  )
}

export default Gallery