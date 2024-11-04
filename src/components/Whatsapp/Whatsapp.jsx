import Link from "next/link";
import styles from "./whatsapp.module.css"
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp(){
    return(
        <>
        <div class={styles.container}>
        <Link href="https://wa.me/905525673636?text=Merhabalar%20mazot%20siparişi%20vermek%20için%20sizlere%20yazıyorum.">
            <FaWhatsapp size={50} color="green"/>
        </Link>


        </div>
        </>
    )
}