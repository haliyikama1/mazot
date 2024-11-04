import SwiperComponent from "@/components/Swiper/SwiperComponent";
import styles from "./page.module.css";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
    <>
    <div class={styles.container}>
      <SwiperComponent />
      <Content />
      
    </div>
    </>
  );
}
