import React from "react";
import { useCallback, useContext, useRef, useState } from 'react';
import { ScrollContext } from "../utils/scroll-observer";
import s from '../styles/middle.module.css'
import Image from 'next/image'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if(progress >= 0 && progress < 1) return 1
    return 0.2
}

const Middle: React.FC = () => {
    const {scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
    let progress = 0

    const { current: elContainer } = refContainer
    if(elContainer){
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH/2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }


    return (
        <div ref={refContainer} className="text-white bg-black">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div className={s.skillText}
                    style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>A insuficiência renal crônica é uma doença renal crônica progressiva e contínua, com os rins perdendo sua <strong>capacidade de filtragem</strong> do sangue e parando, aos poucos de funcionar, comprometendo também outras funções tradicionais dos rins.</div>
                    <div className="items-center justify-center text-center self-center content-center p-10 w-auto">
                        <div className={s.skillText}
                        style={{
                            opacity: opacityForBlock(progress, 0)
                        }}>
                        <Image 
                            src="/assets/middle.png"
                            width={600}
                            height={480}
                            alt="cereais" />
                        </div>
                    </div>
                    <span className={`${s.skillText} inline-block after:content-['_']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        Por isso a alimentação é essencial. Nas fases inicias da IRC, uma alimentação saudável <strong>inclui diversos cereais, sobretudo cereais integrais </strong>, frutas e legumes frescos.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                    Uma mudança fundamental para a sua alimentação pode ser a limitação da ingestão de proteínas, que vai lhe ajudar a preservar a função renal e a reduzir a quantidade de <strong>substâncias indesejáveis</strong> no sangue. Os alimentos ricos em proteínas são: carne, peixe, frango, ovos e produtos lácteos.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Middle