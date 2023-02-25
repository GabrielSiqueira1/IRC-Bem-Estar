import React from "react";
import { useCallback, useContext, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import s from "../styles/middle.module.css";
import Image from "next/image";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) return 1;
    return 0.2;
};

const Middle: React.FC = () => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null);

    const numOfPages = 1.5;
    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;
        const percentY =
            Math.min(
                clientHeight + halfH,
                Math.max(-screenH, scrollY - offsetTop) + halfH
            ) / clientHeight;
        progress = Math.min(
            numOfPages - 0.5,
            Math.max(0.5, percentY * numOfPages)
        );
    }

    return (
        <div ref={refContainer} className="text-white bg-black">
            <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div
                        className={s.skillText}
                        style={{
                            opacity: opacityForBlock(progress, 0),
                        }}
                    >
                        Doença renal ou insuficiência renal é a condição na qual
                        os rins perdem a capacidade de efetuar suas funções
                        básicas.
                    </div>
                    <div
                        className="{s.skillText}, text-center p-10 font-light text-xl md:text-2xl"
                        style={{
                            opacity: opacityForBlock(progress, 0),
                        }}
                    >
                        A insuficiência renal pode ser:
                    </div>
                    <div
                        className="{s.skillText}, font-light text-xl md:text-2xl grid grid-cols-1 md:grid-cols-[400px_minmax(200px,_1fr)_20px] lg:grid-cols-[600px_minmax(200px,_1fr)_100px]"
                        style={{
                            opacity: opacityForBlock(progress, 0),
                        }}
                    >
                        <div className="list-item">
                            <li>
                                <p>
                                    <strong className="font-bold">
                                        Insuficiência renal aguda:{" "}
                                    </strong>
                                    ocorre quando há alguma lesão nos rins
                                    provocando rápida queda nas suas funções;
                                </p>
                            </li>
                            <li className="mt-10">
                                <p>
                                    <strong className="font-bold">
                                        Insuficiência renal crônica:{" "}
                                    </strong>
                                    ocorre a perda parcial da função renal, de
                                    forma lenta, progressiva e irreversível.
                                    Quando é{" "}
                                    <strong className="font-bold">
                                        Terminal
                                    </strong>
                                    , leva ao aumento de toxinas e água no
                                    organismo mais do que ele consegue suportar,
                                    sendo necessário iniciar um tratamento que
                                    substitua a função dos rins.
                                </p>
                            </li>
                        </div>
                        <div>
                            <Image
                                className="mt-10 ml-16 justify-self-center"
                                src="/assets/middle.png"
                                width={400}
                                height={280}
                                alt="cereais"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
