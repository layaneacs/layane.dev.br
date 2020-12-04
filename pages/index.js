import Link from "next/link";
import style from "../styles.module.css"
import Head from "next/head"
import BarraComponent from "../componentes/header.component";

function Home({user}){
    return (        
        <div>
            <Head>
                <title>Home {user}</title>
            </Head>
            <BarraComponent />
            
            
        </div>
    ) 
   
}


Home.getInitialProps=()=>{
   return {user: "layane"}
}

export default Home;