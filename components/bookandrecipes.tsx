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
                    <a href="/assets/docs/hortalicas.pdf">
                        <Image 
                            src="/assets/img/books/hortalicas.png"
                            width={840}
                            height={1620}
                            alt="hortalicas" />
                    </a>
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by="B">
                    <Image 
                        src="/assets/img/books/carnes.png"
                        width={840}
                        height={1620}
                        alt="carnes" />
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/cereais.png"
                        width={840}
                        height={1620}
                        alt="cereais" />
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/frutas.png"
                        width={840}
                        height={1620}
                        alt="frutas" />
                </Review>
            </CarouselItem>
            <CarouselItem index={4}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/leguminosas.png"
                        width={840}
                        height={1620}
                        alt="leguminosas" />
                </Review>
            </CarouselItem>
            <CarouselItem index={5}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/leites.png"
                        width={840}
                        height={1620}
                        alt="leites" />
                </Review>
            </CarouselItem>
            <CarouselItem index={6}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/ns.png"
                        width={840}
                        height={1620}
                        alt="ns" />
                </Review>
            </CarouselItem>
            <CarouselItem index={7}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/pescados.png"
                        width={840}
                        height={1620}
                        alt="pescados" />
                </Review>
            </CarouselItem>
            <CarouselItem index={8}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/rc1.png"
                        width={840}
                        height={1620}
                        alt="primeiro livro de receitas" />
                </Review>
            </CarouselItem>
            <CarouselItem index={9}>
                <Review by="C">
                    <Image 
                        src="/assets/img/books/rc2.png"
                        width={840}
                        height={1620}
                        alt="segundo livro de receitas" />
                </Review>
            </CarouselItem>
        </Carousel>
    );
}

export default BookAndRecipes;