import React from "react";
import { BookBackground, BookContainer, BookLeft, BookLink, BookRight } from "./book";
import { Title, TitleBackground, TitleContent, TitleWrapper } from "./title";
import Image from 'next/image'

const Books = () => {
    return (
    <TitleWrapper numOfPages={4}>
        <TitleBackground><BookBackground></BookBackground></TitleBackground>
            <TitleContent><Title page={0} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div>Nós produzimos um livro sobre</div>
                        <div className="text=3xl md:text-4xl font-semibold">Hortaliças</div>
                        <div className="m-4"></div>
                        <BookLink href="https://www.google.com">Baixe o livro</BookLink>
                    </BookLeft>
                    <BookRight progress={progress}>
                        <Image 
                        src="/assets/img/books/hortalicas.png"
                        width={840}
                        height={1620}
                        alt="hortalicas" />
                    </BookRight>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={1} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div>Nós produzimos</div>
                    </BookLeft>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={2} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div>Nós produzimos</div>
                    </BookLeft>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={3} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div>Nós produzimos</div>
                    </BookLeft>
                </BookContainer>    
            )}
            ></Title>
            </TitleContent>
    </TitleWrapper>
    )
}

export default Books