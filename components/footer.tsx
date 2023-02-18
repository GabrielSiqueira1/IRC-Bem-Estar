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

const Footer: React.FC = () => {
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
                    }}>Com a progressão da IRC, você pode precisar adaptar ainda mais sua alimentação: as fases posteriores exigem uma redução mais rigorosa da sua ingestão de proteínas, passando de uma alimentação com baixo teor de proteínas para uma alimentação com quase zero teor em proteínas.</div>
                    <div className="items-center justify-center text-center self-center content-center p-10 w-auto">
                        <div className={s.skillText}
                        style={{
                            opacity: opacityForBlock(progress, 0)
                        }}>
                        <Image 
                            src="/assets/footer.png"
                            width={600}
                            height={480}
                            alt="cereais" />
                        </div>
                    </div>
                    <span className={`${s.skillText} inline-block after:content-['_']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        Assim que observar uma diminuição no seu volume urinário ou um inchaço nos tornozelos e nos pés, está na hora de reduzir também a ingestão de líquidos. Seu nefrologista ou nutricionista vai apoiá-lo no cálculo da quantidade certa da ingestão diária de líquidos. Não se esqueça: a comida salgada provoca sede!
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                    Uma vez que o potássio pode se acumular mais rapidamente em seu organismo, a ingestão deve ser reduzida para evitar arritmias cardíacas.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer