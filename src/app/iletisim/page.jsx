import Head from 'next/head';
import styles from './page.module.css';

export default function Iletisim() {
    return (
        <>
            <Head>
                <title>ACT Akaryakıt | İletişim</title>
                <meta name="description" content="ACT Akaryakıt ile iletişime geçin. Kaliteli mazot hizmetlerimiz hakkında bilgi alın veya destek için bizimle irtibat kurun." />
                <meta name="keywords" content="ACT Akaryakıt iletişim, mazot hizmetleri, akaryakıt iletişim" />
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>İletişim</h1>
                    <p className={styles.text}>ACT Akaryakıt olarak kaliteli ve güvenilir mazot hizmetlerimiz hakkında daha fazla bilgi almak veya destek talep etmek için bizimle iletişime geçebilirsiniz.</p>
                    
                    <h2 className={styles.subheading}>İletişim Bilgilerimiz</h2>
                    <p className={styles.text}><strong>Telefon:</strong> <a href="tel:+905525673636" className={styles.link}>+90 552 567 36 36</a></p>
                    <p className={styles.text}><strong>Email:</strong> <a href="mailto:info@actakaryakit.com" className={styles.link}>info@actakaryakit.com</a></p>
                    <p className={styles.text}><strong>Adres:</strong> İstanbul, Türkiye</p>
                    
                    <p className={styles.note}>Her sayfanın sol tarafında yer alan sabit arama ve WhatsApp butonları aracılığıyla bize hızlıca ulaşabilirsiniz. Sizi en kısa sürede bilgilendirmek için buradayız.</p>
                </div>
            </div>
        </>
    );
}
