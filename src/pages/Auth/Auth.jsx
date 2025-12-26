import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                <div className={styles.overlay}>
                    <h2>FINITI<span>GARDEN</span></h2>
                    <p>Mang thiên nhiên vào cuộc sống của bạn</p>
                </div>
            </div>
            <div className={styles.formSide}>
                <div className={styles.formContent}>
                    <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
                    <p>Chào mừng bạn quay trở lại!</p>

                    <form onClick={(e) => e.preventDefault()}>
                        {!isLogin && <input type="text" placeholder="Họ và tên" />}
                        <input type="email" placeholder="Địa chỉ Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <button type="submit">{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</button>
                    </form>

                    <p className={styles.switch}>
                        {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
                        <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Đăng ký ngay' : 'Đăng nhập ngay'}
            </span>
                    </p>
                    <Link to="/" className={styles.backHome}>Quay về trang chủ</Link>
                </div>
            </div>
        </div>
    );
};
export default Auth;