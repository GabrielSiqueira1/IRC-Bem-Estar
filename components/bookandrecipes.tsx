import React from 'react'
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Image from 'next/image'
import Review from './review';

const BookAndRecipes: React.FC = () =>{
    return(
        <Carousel className='bg-black text-white py-10 lg:py-20'>
            <CarouselItem index={0}>
                <Review by="A">
                    <Image 
                        src="/assets/img/books/hortalicas.png"
                        width={840}
                        height={1620}
                        alt="hortalicas" />
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="B">
                    <Image 
                        src="/assets/img/books/hortalicas.png"
                        width={840}
                        height={1620}
                        alt="hortalicas" />
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/hortalicas.png"
                        width={840}
                        height={1620}
                        alt="hortalicas" />
                </Review>
            </CarouselItem>
        </Carousel>
    );
}

export default BookAndRecipes;