import React from "react";
import { useCallback, useContext, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import s from "../styles/middle.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div  className="text-white bg-black">
            <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div
                        className="{s.skillText}, text-center pb-10 mb-10 text-xl md:text-3xl"
                    >
                        Qual a importância da alimentação adequada no tratamento renal?
                    </div>
                    <div
                        className="{s.skillText}, font-light text-center sm:text-center md:text-center lg:text-left text-xl md:text-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
                    >
                        <div className="lg:list-item lg:mt-10">
                            <p>
                                Evitar a evolução do quadro e possíveis complicações;
                            </p>
                            <p className="mt-10 lg:list-item">
                                Visa auxiliar no controle e prevenção;
                            </p>
                        </div>
                        <div className="place-self-center">
                            <Image
                                className="mt-10 md:place-self-center"
                                src="/assets/footer.png"
                                width={400}
                                height={280} 
                                alt="cereais"
                            />
                            <p className="lg:list-item mt-5 lg:ml-5">
                                Colabora para a redução dos sintomas e promove mais comodidade na rotina;
                            </p>
                        </div>
                        <div className="lg:ml-10 mt-10 lg:list-item">
                            <p>
                                Dieta restrita e bem estrutura, feita exclusivamente a cada indivíduo;
                            </p>
                            <p className="mt-10 lg:list-item">
                                Proporcionar conforto e segurança durante o tratamento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
