import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MastHead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Middle from "../components/middle";
import Books from "../components/books";
import Recipes from "../components/recipes";
import Footer from "../components/footer";
import Treat from "../components/treat";
import Tratamento from "../components/tratamentos";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>IRC - Bem Estar</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MastHead />
            <AboutUs />
            <Middle />
            <Treat />
            <Tratamento />
            <Books />
            <Recipes />
            <Footer />
        </div>
    );
};

export default Home;
