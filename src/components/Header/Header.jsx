import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link, useNavigate
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAppSelector } from '../../redux/hooks'; // Import Redux để lấy số lượng giỏ hàng
import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();
    // Lấy số lượng giỏ hàng (nếu chưa setup redux thì mặc định là 0)
    const { totalQuantity } = useAppSelector(state => state.cart) || { totalQuantity: 0 };

    // Cập nhật danh sách có slug để khớp với router
    const categories = [
        { name: "CÂY ĂN TRÁI", slug: "cay-an-trai" },
        { name: "CÂY BONSAI", slug: "cay-bonsai" },
        { name: "CÂY CẢNH", slug: "cay-canh" },
        { name: "CÂY CÓ HOA", slug: "cay-co-hoa" },
        { name: "CÂY ĐỘC LẠ", slug: "cay-doc-la" },
        { name: "CÂY GIA VỊ", slug: "cay-gia-vi" },
        { name: "CÂY GIỐNG", slug: "cay-giong" },
        { name: "CÂY HOA LEO", slug: "cay-hoa-leo" },
        { name: "CÂY LỚN", slug: "cay-lon" },
        { name: "HOA LAN", slug: "hoa-lan" },
        { name: "PHÂN BÓN - VẬT TƯ", slug: "phan-bon-vat-tu" }
    ];

    const messages = [
        "Giao hàng tận nơi toàn quốc",
        "Bảo hành cây giống 1 đổi 1",
        "Hỗ trợ kỹ thuật trọn đời",
    ];

    return (
        <header className={styles.container}>
            {/* Tầng 1: Logo - Search - User */}
            <div className={styles.topBar}>
                <div className={styles.logo} onClick={() => navigate('/')}>
                    FINITI<span>GARDEN</span>
                </div>

                <div className={styles.searchBox}>
                    <input type="text" placeholder="Tìm cây giống..." />
                    <button><FaSearch /></button>
                </div>

                <div className={styles.actions}>
                    <div className={styles.item} onClick={() => navigate('/auth')}><FaUser /> Tài khoản</div>
                    <div className={styles.item} onClick={() => navigate('/cart')}>
                        <div className={styles.cartWrapper}>
                            <FaShoppingCart />
                            {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
                        </div>
                        Giỏ hàng
                    </div>
                </div>
            </div>

            {/* Tầng 2: Navbar Danh mục */}
            <nav className={styles.navBar}>
                <ul>
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                            {/* Dùng Link thay cho thẻ a href="#" */}
                            <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Tầng 3: Text Carousel */}
            <div className={styles.carouselText}>
                <div className={styles.runningContent}>
                    {messages.map((msg, index) => (
                        <span key={index} className={styles.msgItem}>{msg}</span>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;