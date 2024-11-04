import Link from "next/link";
import styles from "./phone.module.css"
import { FiPhoneCall  } from "react-icons/fi";

export default function Phone(){
    return(
        <>
        <div class={styles.container}>
        <Link href="https://www.google.com">
            <FiPhoneCall     size={50} color="black"/>
        </Link>


        </div>
        </>
    )
}