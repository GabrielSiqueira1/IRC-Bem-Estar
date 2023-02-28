import React from "react";
import Image from "next/image";
import { useCallback, useContext, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Treat: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true);
    }, []);

    return (
        <section
            ref={refContainer}
            className="bg-white min-h-screen flex flex-col max-[600px]:items-center max-[600px]:justify-center
sticky top-0 -z-10"
            style={{
                transform: `transformY(-${progress * 20}vh)`,
            }}
        >
            <div>
                <div className="absolute object-cover opacity-20">
                    <img src="/assets/treat.png" alt="background" />
                </div>
            </div>
            <div className="font-bold p-12 z-10 text-black drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
                <h2 className="text-3xl xl:text-5xl p-5 text-right">
                    <span className="bg-lime-300 pb-5 p-7 border-2 border-lime-500 outline-2 outline-offset-8 border-spacing-96">
                        Tratamentos
                    </span>
                </h2>
            </div>
        </section>
    );
};

export default Treat;
