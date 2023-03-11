import React, {useRef, useContext} from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
    numOfPages: number
    children?: React.ReactNode
}

interface TitleContextValue {
    numOfPages: number
    currentPage: number
}

export const TitleContext = React.createContext<TitleContextValue>({
    numOfPages: 0,
    currentPage: 0
})

export const TitleWrapper: React.FC<WrapperProps> = ({
    children,
    numOfPages
}) => {
    let currentPage = 0
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)
    const { current: elContainer } = refContainer
    if(elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH/0.7
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * (numOfPages+1)
    }

    return (
        <TitleContext.Provider value={{numOfPages, currentPage}}>
            <div ref={refContainer} className="relative bg-black text-white" style={{
                height: numOfPages * 200 + 'vh'
            }}>{children}</div>
        </TitleContext.Provider>
    )
}

interface Prop{
    children?: React.ReactNode
}

export const TitleBackground: React.FC<Prop> = ({children}) => (
    <div className="absolute h-full  w-full">{children}</div>
)

export const TitleContent: React.FC<Prop> = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
)

interface Props{
    page: number
    renderContent: (props: { progress: number }) => any
}

export const Title: React.FC<Props> = ({ page, renderContent }) => {
    const {currentPage, numOfPages} = useContext(TitleContext)
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.99 && page < numOfPages - 1){
        opacity = Math.max(0, (1.0 - progress)*4)
    }

    return (
        <div ref={refContainer} className = "absolute top-0 w-full" style={{
            pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined, opacity
        }}>
            {renderContent({progress})}
        </div>
    )
}