import React from "react";
import Equipe from "./equipe";

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col items-center bg-white py-20 text-xl md:text-2xl`}>
            <div className="container mx-auto px-11 text-black">
                <p className="leading-tight max-w-5xl mx-auto text-2xl lg:text-3xl tracking-tight">
                    <strong>
                        Nosso objetivo com esse site é fazer com que você
                        conheça mais sobre a insuficiência renal crônica (IRC)
                        com o foco na alimentação.
                    </strong>
                    Com a intenção de tornar a explicação dinâmica, separa-se o
                    seguinte site em, nossa equipe, os E-books produzidos por
                    nossa equipe, algumas receitas e informações sobre a doença.
                </p>
            </div>
            <div className="container max-auto px-11 text-center mt-28 text-black">
                <h2>Nossa equipe</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20">
                    <Equipe id="1" name="Ana Alves" />
                    <Equipe id="2" name="Ana Siqueira" />
                    <Equipe id="3" name="Isabella" />
                    <Equipe id="4" name="Thaís" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
