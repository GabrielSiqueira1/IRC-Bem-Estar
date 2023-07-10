import React from "react";
import { RecipeBackground, RecipeContainer, RecipeLeft, RecipeLink, RecipeLink2, RecipeRight } from "./recipe";
import { Title, TitleBackground, TitleContent, TitleWrapper } from "./title";
import Image from 'next/image'

const Recipes = () => {
    return (
    <TitleWrapper numOfPages={3}>
        <TitleBackground><RecipeBackground></RecipeBackground></TitleBackground>
            <TitleContent><Title page={0} renderContent={({progress}) => (
                <RecipeContainer>
                    <RecipeLeft progress={progress}>
                        <div className="text-black text-xl md:text-3xl text-center">Disponibilizamos um livro que apresenta</div>
                        <div className="text-black text-xl md:text-4xl font-semibold text-center">receitas Doces</div>
                        <div className="m-5"></div>
                        <div className="text-center">
                            <RecipeLink href="/assets/docs/receitas-1.pdf">Baixe o livro</RecipeLink>
                        </div>
                    </RecipeLeft>
                    <RecipeRight progress={progress}>
                        <Image 
                        src="/assets/img/recipes/doces.png"
                        width={1280}
                        height={768}
                        alt="doces" />
                    </RecipeRight>
                </RecipeContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={1} renderContent={({progress}) => (
                <RecipeContainer>
                    <RecipeLeft progress={progress}>
                        <div className="text-black text-xl md:text-3xl text-center">Bem como</div>
                        <div className="text-black text-xl md:text-4xl font-semibold text-center">Salgadas</div>
                        <div className="m-5"></div>
                        <div className="text-center">
                            <RecipeLink href="/assets/docs/receitas-1.pdf">Baixe o livro</RecipeLink>
                        </div>
                    </RecipeLeft>
                    <RecipeRight progress={progress}>
                        <Image 
                        src="/assets/img/recipes/salgadas.png"
                        width={840}
                        height={1620}
                        alt="receitas-salgadas" />
                    </RecipeRight>
                </RecipeContainer>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={2} renderContent={({progress}) => (
                <RecipeContainer>
                    <RecipeLeft progress={progress}>
                        <div className="text-black text-xl md:text-3xl text-center">E ainda um livro com mais</div>
                        <div className="text-black text-xl md:text-4xl font-semibold text-center">outras receitas</div>
                        <div className="m-5"></div>
                        <div className="text-center">
                            <RecipeLink href="/assets/docs/receitas-2.pdf">Baixe o livro</RecipeLink>
                        </div>
                    </RecipeLeft>
                    <RecipeRight progress={progress}>
                        <Image 
                        src="/assets/img/recipes/muffin.png"
                        width={1620}
                        height={840}
                        alt="muffin" />
                    </RecipeRight>
                </RecipeContainer>
            )}
            ></Title>
            </TitleContent>
    </TitleWrapper>
    )
}

export default Recipes