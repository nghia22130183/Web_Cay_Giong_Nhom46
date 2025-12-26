import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/cartSlice';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.card}>
            <div className={styles.badge}>-20%</div>
            <div className={styles.imagePlaceholder}>
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
                />
            </div>
            <div className={styles.cardInfo}>
                <span className={styles.cateName}>{product.category || 'Cây Cảnh'}</span>
                <h3>{product.name}</h3>
                <div className={styles.priceRow}>
                    <span className={styles.price}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                    </span>
                </div>
                <div className={styles.rating}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span>(12)</span>
                </div>
            </div>

            <button
                className={styles.addBtn}
                onClick={() => dispatch(addToCart(product))}
            >
                Thêm vào giỏ
            </button>
        </div>
    );
};

export default ProductCard;