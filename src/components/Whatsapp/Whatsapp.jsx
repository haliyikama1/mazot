import Link from "next/link";
import styles from "./whatsapp.module.css"
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp(){
    return(
        <>
        <div class={styles.container}>
        <Link href="https://www.google.com">
            <FaWhatsapp size={50} color="green"/>
        </Link>


        </div>
        </>
    )
}