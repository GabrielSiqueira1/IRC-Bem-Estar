import React from "react";
import { Title, TitleBackground, TitleContent, TitleWrapper } from "./title";

const Books = () => {

    return (
    <TitleWrapper numOfPages={4}>
        <TitleBackground></TitleBackground>
            <TitleContent><Title page={0} renderContent={({progress}) => (
                <span className="text-9xl">Foo {progress}</span>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={1} renderContent={({progress}) => (
                <span className="text-9xl">Bar1 {progress}</span>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={2} renderContent={({progress}) => (
                <span className="text-9xl">Bar2 {progress}</span>
            )}
            ></Title>
            </TitleContent>
            <TitleContent><Title page={3} renderContent={({progress}) => (
                <span className="text-9xl">Bar3 {progress}</span>
            )}
            ></Title>
            </TitleContent>
    </TitleWrapper>
    )
}

export default Books