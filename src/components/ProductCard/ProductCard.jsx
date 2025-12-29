import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/cartSlice';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); // 2. Khởi tạo navigate

    // Hàm xử lý chuyển trang chi tiết
    const handleGoToDetail = () => {
        navigate(`/product/${product.id}`);
    };

    // Hàm xử lý thêm vào giỏ hàng (ngăn chuyển trang khi bấm nút)
    const handleAddToCart = (e) => {
        e.stopPropagation(); // 3. Ngăn chặn sự kiện click lan ra ngoài thẻ card
        dispatch(addToCart(product));
        // Bạn có thể thêm thông báo toast ở đây nếu muốn chuyên nghiệp hơn
    };

    return (
        <div className={styles.card} onClick={handleGoToDetail}>
            {/* Badge giảm giá tự động nếu có oldPrice */}
            {product.oldPrice && (
                <div className={styles.badge}>
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>
            )}

            <div className={styles.imagePlaceholder}>
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=No+Image'}
                />
            </div>

            <div className={styles.cardInfo}>
                <span className={styles.cateName}>{product.category || 'Cây Cảnh'}</span>
                <h3>{product.name}</h3>

                <div className={styles.priceRow}>
                    <span className={styles.price}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </span>
                    {product.oldPrice && (
                        <span className={styles.oldPrice}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.oldPrice)}
                        </span>
                    )}
                </div>

                <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < (product.rating || 5) ? "#ffc107" : "#e4e5e9"} />
                    ))}
                    <span>({product.reviews || 0})</span>
                </div>
            </div>

            <button
                className={styles.addBtn}
                onClick={handleAddToCart}
            >
                Thêm vào giỏ
            </button>
        </div>
    );
};

export default ProductCard;