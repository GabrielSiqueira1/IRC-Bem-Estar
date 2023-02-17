import React from "react";
import { BookBackground, BookContainer, BookLeft, BookRight } from "./book";
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
                        <div className="text=4xl md:text-5xl font-semibold">Hortaliças</div>
                        <div className="p-4 bg-lime-900 justify-center items-center text-lg m-5 text-center">Baixe o livro</div>
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