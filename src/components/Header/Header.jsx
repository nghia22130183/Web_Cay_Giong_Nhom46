import React from 'react';
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'; // Nhớ chạy: npm install react-icons
import styles from './Header.module.scss';

const Header = () => {
    const categories = [
        "CÂY ĂN TRÁI", "CÂY BONSAI", "CÂY CẢNH", "CÂY CÓ HOA",
        "CÂY ĐỘC LẠ", "CÂY GIA VỊ", "CÂY GIỐNG", "CÂY HOA LEO",
        "CÂY LỚN", "HOA LAN", "PHÂN BÓN - VẬT TƯ"
    ];

    return (
        <header className={styles.container}>
            {/* Tầng 1: Logo - Search - User */}
            <div className={styles.topBar}>
                <div className={styles.logo}>GREEN<span>GARDEN</span></div>

                <div className={styles.searchBox}>
                    <input type="text" placeholder="Tìm cây giống..."/>
                    <button><FaSearch/></button>
                </div>

                <div className={styles.actions}>
                    <div className={styles.item}><FaUser/> Tài khoản</div>
                    <div className={styles.item}><FaShoppingCart/> Giỏ hàng</div>
                </div>
            </div>

            {/* Tầng 2: Navbar Danh mục */}
            <nav className={styles.navBar}>
                <ul>
                    {categories.map((cat, idx) => (
                        <li key={idx}><a href="#">{cat}</a></li>
                    ))}
                </ul>
            </nav>

            {/* Tầng 3: Text Carousel (Chạy chữ) */}
            <div className={styles.carouselText}>
                <p>Giao hàng toàn quốc - Bảo hành cây giống 1 đổi 1 - Hỗ trợ kỹ thuật trọn đời</p>
            </div>
        </header>
    );
};

export default Header;