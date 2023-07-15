import React from "react";
import Image from "next/image";
import { BookBackground, BookContainer, BookLeft, BookLink, BookLink2, BookRight } from "./book";

const BookIntroduction: React.FC = () => {
    return (
        <div className="text-black bg-amber-100">
            <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div
                        className="{s.skillText}, text-center pb-2 mb-10 text-xl md:text-3xl"
                    >
                        Livros didáticos e receitas
                    </div>
                    <div
                        className="{s.skillText}, font-light text-center sm:text-center md:text-center lg:text-left text-xl md:text-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
                    >
                        <div className="text-center p-10 lg:mt-10">
                            <p>
                                Com o objetivo de auxiliar em um melhor entendimento dos conceitos de alimentos, você pode baixar os livros produzidos por nossa equipe, por meio do botão abaixo.
                            </p>
                            <div className="text-white mt-10">
                                <BookLink href="/assets/docs/livros.zip">Baixe o conjunto</BookLink>
                            </div>
                        </div>
                        <div className="text-center p-10 lg:mt-10">
                            <p>
                                Para promover uma melhor alimentação, a equipe disponibiliza dois livros de receitas que podem ser baixados abaixo, o livro conta com receitas salgadas e doces.
                            </p>
                            <div className="text-white mt-10">
                                <BookLink2 href="/assets/docs/receitas.zip">Baixe o conjunto</BookLink2>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 mt-10 font-light text-center text-2xl">
                        Você também pode baixar cada livro ou receita individualmente clicando na imagem respectiva
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookIntroduction;
