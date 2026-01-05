import React from 'react';
import { useNavigate } from 'react-router-dom';
//chưa cài react-icons thì thêm tạm comment 3 dòng Fa ở dưới
import { FaCheckCircle, FaArrowRight, FaHome } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Sucess.module.scss';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.successWrapper}>
            <Header />
            <div className={styles.container}>
                <div className={styles.contentCard}>
                    <div className={styles.iconBox}>
                        <FaCheckCircle />
                    </div>
                    <h2 className={styles.title}>Đặt hàng thành công!</h2>
                    <p className={styles.message}>
                        Cảm ơn bạn! Đơn hàng của bạn đã được hệ thống ghi nhận.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button
                            className={styles.viewOrderBtn}
                            onClick={() => navigate('/profile')}
                        >
                            Xem đơn hàng tại Profile <FaArrowRight />
                        </button>

                        <button
                            className={styles.homeBtn}
                            onClick={() => navigate('/')}
                        >
                            <FaHome /> Tiếp tục mua sắm
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Success;