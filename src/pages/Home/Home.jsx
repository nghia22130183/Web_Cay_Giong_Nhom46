import React from 'react';
import Header from '../../components/Header/Header';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Home.module.scss';


const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.homeWrapper}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>CÂY GIỐNG CHẤT LƯỢNG CAO 2025</h1>
                    <p>Mang không gian xanh và tài lộc về ngôi nhà của bạn</p>
                    <button>MUA NGAY</button>
                </div>
            </section>

            {/* Danh mục trưng bày (Demo) */}
            <section className={styles.products}>
                <h2>CÂY ĂN TRÁI NỔI BẬT</h2>
                <div className={styles.grid}>
                    {[1,2,3,4].map(i => (
                        <div key={i} className={styles.card}>
                            <div className={styles.imagePlaceholder}>Ảnh {i}</div>
                            <h3>Mít Thái Siêu Sớm</h3>
                            <p>45.000đ</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Nút Back to Top */}
            <button className={styles.scrollTopBtn} onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        </div>
    );
};

export default Home;