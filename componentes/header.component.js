import Link from "next/link"
import style from "../styles.module.css"

function HeaderComponent(){
    return (        
        <div className={style.header}>
            <div className={style.logo}>
                <Link href="/">
                        <a>LAYANE.DEV</a>
                </Link>
            </div>
            <div className={style.toggle}>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Projetos</a>
                    </Link>
                </li>
            </ul>        
        </div>
    ) 
   
}


export default HeaderComponent;