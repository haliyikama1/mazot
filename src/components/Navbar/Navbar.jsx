"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";



export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState("none");
  const [hizmetler, setHizmetler] = useState(false);
  const [menü, setMenü] = useState(false)
  const turnHizmetler = () => {
    setHizmetler(!hizmetler)
  }
  

  const clickEvent = () => {
    if(open === "none"){
        setOpen("flex")
    }else {
        setOpen("none")
    }
    setMenü(!menü)
  }



  useEffect(() => {
    // İlk render'da ekran genişliğini kontrol et
    checkScreenSize();
    
    // Pencere boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkScreenSize);
    
    // Temizleme fonksiyonu
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const checkScreenSize = () => {
    setMobile(window.innerWidth < 1024);
  };

  return (
    <header>
      <nav class={styles.nav}>
        {mobile ? (
            <>
            
                <div className={styles.mobileView} onClick={clickEvent}>{menü ? (<> <IoMdClose size={20} /> </>) : (<> <RiMenu2Fill size={20}/> </>)}</div>
                <div style={{display: `${open}`}} class={styles.open}>
                    <ul>
                        <li>Ana Sayfa</li>
                        <li>Hakkımızda</li>
                        <li>İletişim</li>
                        <li>
                          <p onClick={turnHizmetler} class={styles.bune} >Hizmetler {hizmetler ? (<FaArrowUp size={10} />) : (<FaArrowDown size={10} />)}</p>
                          
                          {hizmetler ? 
                          <>
                          <ul class={styles.ahahah}>
                            <li>
                              <Link href="/istanbul-mazot-servisi">
                              İstanbul Mazot Servisi
                              </Link>
                            </li>
                            <li>
                              <Link href="/jeneratore-mazot-servisi">
                                Jeneratör Mazot Servisi
                              </Link>
                            </li>
                            <li>
                              <Link href="/akaryakit-tankina-mazot-servisi">
                              Akaryakıt Tankına Mazot Servisi
                              </Link>
                            </li>
                            <li>
                            <Link href="/akaryakit-tanki-kurulum">
                              Akaryakıt Tankı Kurulum ve Temizleme Hizmeti
                            </Link>
                            </li>
                            <li>
                            <Link href="/santiyelere-mazot-servisi">
                              Şantiyelere Mazot Servisi
                            </Link>
                              </li>
                     
                            <li>
                            <Link href="/okullara-mazot-servisi">
                              Okullara Mazot Servisi
                            </Link>  
                            </li>
                            <li>
                            <Link href="/yatlara-mazot-servisi">
                              Yatlara Mazot Servisi
                            </Link>  
                            </li>
                          <li><span class={styles.spa}>      <Link href="/otellere-mazot-servisi">
                              Otellere Mazot Servisi
                            </Link>  </span></li>
                          </ul>
                          </>: ''}
                        </li>
                    </ul>
                </div>
            </>
        ) : (
          <>
          <ul className={styles.container}>
            <li>
              <Link href="/">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim">
                İletişim
              </Link>
            </li>
            <li class={styles.importantli} onClick={turnHizmetler}>              
              <p class={styles.important}>Hizmetler {hizmetler ? (<FaArrowUp size={10} />) : (<FaArrowDown size={10} />)}</p>
                 
              
              {hizmetler ? ( <ul class={styles.dropdowncontainer}>
                <li>
                  <Link href="/istanbul-mazot-servisi">
                  İstanbul Mazot Servisi
                  </Link>
                </li>
                <li>
                  <Link href="/jeneratore-mazot-servisi">
                    Jeneratör Mazot Servisi
                  </Link>
                </li>
                <li>
                  <Link href="/akaryakit-tankina-mazot-servisi">
                  Akaryakıt Tankına Mazot Servisi
                  </Link>
                </li>
                <li>
                <Link href="/akaryakit-tanki-kurulum">
                   Akaryakıt Tankı Kurulum ve Temizleme Hizmeti
                </Link>
                </li>
                <li>
                <Link href="/santiyelere-mazot-servisi">
                  Şantiyelere Mazot Servisi
                </Link>
                  </li>
                <li>
                <Link href="/otellere-mazot-servisi">
                  Otellere Mazot Servisi
                </Link>  
                </li>
                <li>
                <Link href="/okullara-mazot-servisi">
                  Okullara Mazot Servisi
                </Link>  
                </li>
                <li>
                <Link href="/yatlara-mazot-servisi">
                  Yatlara Mazot Servisi
                </Link>  
                </li>
              </ul> ) : ''
              }
                            
            </li>
          </ul>
      
          </>
        )}
      </nav>
    </header>
  );
}