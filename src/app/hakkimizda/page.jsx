import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Hakkimizda() {
    return (
        <>
            <Head>
                <title>ACT Akaryakıt | Güvenilir ve Kaliteli Mazot Hizmetinde Lider</title>
                <meta name="description" content="ACT Akaryakıt, kaliteli mazot satışı ve güvenilir teslimat hizmetleriyle sektör lideridir. Endüstriyel ve ticari çözümler için güvenli yakıt tedariğinde yanınızdayız." />
                <meta name="keywords" content="ACT Akaryakıt, kaliteli mazot, güvenilir yakıt hizmeti" />
            </Head>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image
                        src={'/arcmazot.png'}
                        layout='fill'
                        objectFit='cover'
                        alt='ACT Akaryakıt Görseli'
                    />
                </div>
                <div className={styles.content}>
                    <h1>Hakkımızda</h1>

                    <p>Kurulduğumuz günden itibaren <strong>müşteri memnuniyeti</strong> ve <strong>kaliteli hizmet</strong> prensiplerimizle, akaryakıt sektöründe güvenilir bir marka olmayı başardık. ACT Akaryakıt olarak, başta İstanbul olmak üzere Türkiye genelinde geniş bir müşteri kitlesine hizmet veriyoruz.</p>

                    <h2>Misyonumuz</h2>
                    <p>Müşterilerimize en iyi mazot tedarik hizmetini sunmayı amaçlayan firmamız, son teknoloji depolama ve dağıtım çözümleriyle mazot kalitesini koruyarak güvenli teslimatlar yapmaktadır. Ürünlerimiz, yüksek kalite standartlarına uygun şekilde sunulmakta ve yakıt verimliliğini artırmaktadır.</p>

                    <h2>Kaliteli Mazot Satışı</h2>
                    <p>Kaliteli mazot tedarikinde güvenilir bir isim olan ACT Akaryakıt, sadece mazot satışıyla değil, hızlı ve güvenilir teslimat süreçleriyle de öne çıkmaktadır. Ürünlerimiz, jeneratörlerden iş makinelerine, yatlardan araç filolarına kadar geniş bir kullanım alanına sahiptir.</p>
                    <ul>
                        <li><strong>Yüksek Standartlar:</strong> Uluslararası kalite standartlarına uygun mazot tedarik ederiz.</li>
                        <li><strong>Filtrelenmiş ve Saf Mazot:</strong> Ekipmanların uzun ömürlü çalışmasını destekler.</li>
                        <li><strong>Hızlı ve Güvenli Teslimat:</strong> Siparişler zamanında ve güvenli şekilde teslim edilir.</li>
                    </ul>

                    <h2>Neden ACT Akaryakıt?</h2>
                    <p>Uzman kadromuz ve güçlü altyapımız sayesinde müşterilerimize yenilikçi ve güvenilir yakıt çözümleri sunmaktayız. Akaryakıt sektöründeki tecrübemizle müşteri memnuniyetini ön planda tutuyor ve iş sürekliliğinizi sağlıyoruz.</p>

                </div>
            </div>
        </>
    );
}
