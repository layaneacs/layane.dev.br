import Link from "next/link";
import Head from "next/head"
import BarraComponent from "../componentes/header.component";

function AboutPage(){
    return (
        <div>
            <Head>
                <title>Sobre</title>
            </Head>  
            <BarraComponent/>
                  
        </div>
    ) 
   
}


export default AboutPage;