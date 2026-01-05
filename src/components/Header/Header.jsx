import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt, FaChevronDown, FaHeart } from 'react-icons/fa'; // Thêm FaHeart
import { useAppSelector } from '../../redux/hooks';
import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // State cho ô tìm kiếm

    // Lấy dữ liệu từ Redux
    const { totalQuantity } = useAppSelector(state => state.cart) || { totalQuantity: 0 };
    const wishlistItems = useAppSelector(state => state.wishlist.wishlistItems) || []; // Lấy số lượng yêu thích

    useEffect(() => {
        const checkUser = () => {
            const storedUser = localStorage.getItem('user');
            setUser(storedUser ? JSON.parse(storedUser) : null);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        checkUser();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('storage', checkUser);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('storage', checkUser);
        };
    }, []);

    //xử lý tìm kiếm
    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchTerm.trim()) {
                navigate(`/search?q=${searchTerm}`);
            }
        }
    };

    const handleLogout = () => {
        if (window.confirm("Bạn muốn đăng xuất?")) {
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        }
    };

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
        { name: "VẬT TƯ", slug: "phan-bon-vat-tu" }
    ];

    return (
        <header className={`${styles.container} ${isScrolled ? styles.sticky : ''}`}>
            <div className={styles.topStrip}>
                <marquee scrollamount="5">
                    Giao hàng toàn quốc - Bảo hành 1 đổi 1 trong 7 ngày - Hỗ trợ kỹ thuật trọn đời
                </marquee>
            </div>

            <div className={styles.mainHeader}>
                <div className={styles.logo} onClick={() => navigate('/')}>
                    FINITI<span>GARDEN</span>
                </div>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm cây giống, phân bón..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <button className={styles.searchBtn} onClick={handleSearch}><FaSearch /></button>
                </div>

                <div className={styles.userActions}>
                    <div className={styles.actionItem} onClick={() => navigate('/wishlist')}>
                        <div className={styles.cartIcon}>
                            <FaHeart />
                            {wishlistItems.length > 0 && <span className={styles.cartBadge}>{wishlistItems.length}</span>}
                        </div>
                        <span>Yêu thích</span>
                    </div>

                    {user ? (
                        <div className={styles.accountBox}>
                            <div className={styles.userInfo}>
                                <FaUser />
                                <span>{user.username}</span>
                                <FaChevronDown size={10} />
                            </div>
                            <ul className={styles.userDropdown}>
                                <li onClick={() => navigate('/profile')}>Tài khoản của tôi</li>
                                <li onClick={() => navigate('/orders')}>Đơn mua</li>
                                <li onClick={handleLogout} className={styles.logoutBtn}>
                                    <FaSignOutAlt /> Đăng xuất
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.actionItem} onClick={() => navigate('/auth')}>
                            <FaUser /> <span>Đăng nhập</span>
                        </div>
                    )}

                    <div className={styles.actionItem} onClick={() => navigate('/cart')}>
                        <div className={styles.cartIcon}>
                            <FaShoppingCart />
                            {totalQuantity > 0 && <span className={styles.cartBadge}>{totalQuantity}</span>}
                        </div>
                        <span>Giỏ hàng</span>
                    </div>
                </div>
            </div>

            <nav className={styles.mainNav}>
                <ul>
                    {categories.map((cat, idx) => (
                        <li key={idx} className={location.pathname.includes(cat.slug) ? styles.active : ''}>
                            <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;