import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function YatlaraMazotServisi() {
    return (
        <>
            <Head>
                <title>Yatlara Mazot Servisi | Konforlu ve Güvenilir Yakıt Teslimatı</title>
                <meta name="description" content="Yatlara mazot servisi hizmetimiz, denizlerde kesintisiz yolculuk için güvenilir yakıt desteği sunar. Hızlı teslimat ve yüksek kaliteli mazot hizmetimizle tanışın." />
                <meta name="keywords" content="yatlara mazot servisi, yat mazot hizmeti, deniz yakıt servisi, yat yakıt teslimatı" />
            </Head>
            <div className={styles.container}>
            <div className={styles.imgContainer}>
                        <Image
                            src={'/jeneratöre-mazot.jpg'}
                            layout='fill'
                            objectFit='cover'
                            alt='Mazot Teslimatı Görseli'
                        />
                    </div>
                <div className={styles.content}>
                    <h1>Yatlara Mazot Servisi: Denizlerde Güvenli ve Kesintisiz Enerji</h1>

                    <p>Yatların denizde uzun süre güvenle yol alabilmesi için yüksek kaliteli mazot tedariği büyük önem taşır. Mazot servisi hizmetimiz, yat sahiplerine güvenli, hızlı ve kaliteli yakıt teslimatı sağlayarak deniz yolculuklarının konforunu artırır.</p>

                    <h2>Yat Yakıt Servisi: Neden Bizi Tercih Etmelisiniz?</h2>

                    <p>Yatlara özel mazot teslimatı hizmetimizle size şu avantajları sunuyoruz:</p>
                    <ul>
                        <li><strong>Hızlı ve Güvenilir Teslimat:</strong> Yatınızın bulunduğu marina veya limana en kısa sürede yakıt ulaştırılır.</li>
                        <li><strong>Yüksek Kaliteli Mazot:</strong> Motor performansını artıran ve deniz araçları için özel olarak seçilmiş yakıt.</li>
                        <li><strong>Esnek Teslimat Saatleri:</strong> Tatillerinizde veya yolculuk planlarınıza göre uygun saatlerde teslimat sağlanır.</li>
                    </ul>

                    <h2>Yatlara Yakıt Teslimatı Süreci</h2>

                    <p>Yat yakıtı teslimatı sürecimiz, deniz koşullarına uygun şekilde güvenli ve hızlı bir süreçle yürütülmektedir. Sürecimiz şu adımları içerir:</p>
                    <ol>
                        <li><strong>İhtiyaç Belirleme:</strong> Yatın yakıt kapasitesi ve yolculuk mesafesine göre mazot miktarı belirlenir.</li>
                        <li><strong>Teklif Oluşturma:</strong> Size özel fiyatlandırma yapılır ve teslimat planı oluşturulur.</li>
                        <li><strong>Güvenli Teslimat:</strong> Marina veya limana zamanında, güvenilir bir şekilde mazot teslim edilir.</li>
                    </ol>

                    <h2>Hizmet Bölgelerimiz ve İletişim Bilgileri</h2>

                    <p>Yatlara yönelik mazot servisimiz, İstanbul ve çevresindeki tüm marina ve limanlarda hızlı teslimat ve yüksek kaliteli yakıt avantajları sunar. Yatınızın ihtiyaç duyduğu yakıtı güvenle temin etmek için bize ulaşabilirsiniz.</p>
                    <p><Link href="/istanbul-mazot-servisi">İstanbul mazot servisi</Link> içeriğimiz de ilginizi çekebilir.</p>
                    <h2>Sıkça Sorulan Sorular</h2>

                    <p><strong>Yatlara mazot servisi hangi bölgelerde yapılmaktadır?</strong><br />
                    İstanbul ve çevresindeki marina ve limanlarda güvenilir mazot teslimatı sağlıyoruz.</p>

                    <p><strong>Yakıt kalitesi hakkında bilgi alabilir miyim?</strong><br />
                    Teslim ettiğimiz yakıt, deniz araçları için yüksek kalite standartlarına uygundur ve yat motorlarınızı korur.</p>

                    <p><strong>Teslimat süresi ne kadar?</strong><br />
                    Planlanan teslimat süremiz ihtiyaçlarınıza göre belirlenmekte olup, esnek hizmet sunmaktayız.</p>
                </div>
            </div>
        </>
    );
}
