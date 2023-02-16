import React from "react";
import Equipe from "./equipe";

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11 text-lime-900">
                <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
                    <strong>Nosso objetivo é esclarecer e auxiliar no tratamento da Insuficiência Renal Crônica.</strong>
                    Nesse trabalho demonstraremos as nossas receitas juntamente dos livros auxiliadores produzidos por nossa equipe.
                </p>
            </div>
            <div className="container max-auto px-11 text-center mt-28 text-lime-900">
                <h2>Nossa equipe</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20">
                    <Equipe id="1" name="Ana Alves"/>
                    <Equipe id="2" name="Ana Siqueira"/>
                    <Equipe id="3" name="Isabella"/>
                    <Equipe id="4" name="Thaís"/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs