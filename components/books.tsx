import React from "react";
import { BookBackground, BookContainer, BookLeft, BookLink, BookLink2, BookRight } from "./book";
import { Title, TitleBackground, TitleContent, TitleWrapper } from "./title";
import Image from 'next/image'

const Books = () => {
    return (
    <TitleWrapper numOfPages={4}>
        <TitleBackground><BookBackground></BookBackground></TitleBackground>
            <TitleContent><Title page={0} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div className="text-xl md:text-3xl text-center">Nós produzimos um livro sobre</div>
                        <div className="text-xl md:text-4xl font-semibold text-center">Hortaliças</div>
                        <div className="m-4"></div>
                        <div className="text-center">
                            <BookLink href="hortalicas.pdf">Baixe o livro</BookLink>
                        </div>
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
                        <div className="text-xl md:text-3xl text-center">Nós produzimos um livro sobre</div>
                        <div className="text-xl md:text-4xl font-semibold text-center">Leguminosas</div>
                        <div className="m-4"></div>
                        <div className="text-center">
                            <BookLink href="leguminosas.pdf">Baixe o livro</BookLink>
                        </div>
                    </BookLeft>
                    <BookRight progress={progress}>
                        <Image 
                        src="/assets/img/books/leguminosas.png"
                        width={840}
                        height={1620}
                        alt="leguminosas" />
                    </BookRight>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={2} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div className="text-xl md:text-3xl text-center">Também produzimos um livro sobre</div>
                        <div className="text-xl md:text-4xl font-semibold text-center">Frutas</div>
                        <div className="m-4"></div>
                        <div className="text-center">
                            <BookLink href="frutas.pdf">Baixe o livro</BookLink>
                        </div>
                    </BookLeft>
                    <BookRight progress={progress}>
                        <Image 
                        src="/assets/img/books/frutas.png"
                        width={840}
                        height={1620}
                        alt="frutas" />
                    </BookRight>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={3} renderContent={({progress}) => (
                <BookContainer>
                    <BookLeft progress={progress}>
                        <div className="text-xl md:text-3xl text-center">Baixe outros livros sobre esse assunto</div>
                        <div className="m-4"></div>
                        <div className="text-center">
                            <BookLink2 href="livros.zip">Baixe o conjunto</BookLink2>
                        </div>
                    </BookLeft>
                    <BookRight progress={progress}>
                        <Image 
                        src="/assets/img/books/cereais.png"
                        width={840}
                        height={1620}
                        alt="cereais" />
                    </BookRight>
                </BookContainer>
            )}
            ></Title>
            </TitleContent>
    </TitleWrapper>
    )
}

export default Books