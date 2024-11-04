"use client";

import Image from "next/image";
import styles from "./swiper.module.css";
import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";


export default function SwiperComponent() {
    const [x, setX] = useState(1);
    const [mobile, setMobile] = useState(false);
    const [sizex, setSizex] = useState(50);


    const nextImage = () => {
        if(x < 5){
            setX(x+1)
        }else if( x === 5){
            setX(1)
        }    
    }
    const backImage = () => {
        if(x > 1){
            setX(x-1)
        }else if( x === 1){
            setX(5)
        }    
    }
    
    const checkScreenSize = () => {
        setMobile(window.innerWidth < 1024)
    };


    useEffect(() => {
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);



    }, []);

    useEffect(() => {
        if(mobile) {
            setSizex(35);
        } else {
            setSizex(50);
        }
    }, [mobile]); // mobile değişkenini dependency array'e ekledik

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div class={styles.back}>
                    <p  class={styles.buttons} onClick={backImage}>
                    <IoArrowBackCircle size={sizex}/>
                    </p>
                </div>
                <Image
                    src={`/mazot-${x}.jpg`}
                    layout="fill"
                    objectFit="cover"
                    alt={`Image ${x}`}
                />
            </div>
                <div class={styles.next} >
                <p class={styles.buttons} onClick={nextImage}>
                <IoArrowForwardCircle size={sizex}/>

                </p>
            </div>
        </div>
    );
}