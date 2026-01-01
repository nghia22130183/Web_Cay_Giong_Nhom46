import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Profile.module.scss'; // Nhớ import styles này

const Profile = () => {
    const orders = useSelector(state => state.user?.history || []);
    const storedUser = JSON.parse(localStorage.getItem('user')) || { username: 'Khách hàng', email: 'user@example.com' };

    return (
        <div className={styles.profileContainer}>
            <Header />
            <div className="container mt-5 mb-5">
                <div className="row">
                    {/* Cột trái: Thông tin cá nhân */}
                    <div className="col-md-4">
                        <div className={styles.profileCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.avatarWrapper}>👤</div>
                                <h4>{storedUser.username}</h4>
                                <p>{storedUser.email}</p>
                            </div>
                            <div className={styles.cardBody}>
                                <button className={styles.editBtn}>Chỉnh sửa thông tin</button>
                            </div>
                        </div>
                    </div>

                    {/* Cột phải: Lịch sử đơn hàng */}
                    <div className="col-md-8">
                        <h4 className="mb-4 fw-bold text-dark">📦 Lịch sử đơn hàng</h4>

                        {orders.length === 0 ? (
                            <div className={styles.emptyState}>
                                <span className={styles.icon}>🌵</span>
                                <p className="text-muted">Bạn chưa có đơn hàng nào.</p>
                                <a href="/" className="btn btn-outline-success px-4">Mua sắm ngay</a>
                            </div>
                        ) : (
                            orders.map(order => (
                                <div key={order.id} className={styles.orderItem}>
                                    <div className={styles.orderHeader}>
                                        <span className={styles.orderId}>Mã đơn: #{order.id}</span>
                                        <span className={`badge ${styles.statusBadge} bg-info text-dark`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className={styles.orderContent}>
                                        {order.items?.map(item => (
                                            <div key={item.id} className={styles.productRow}>
                                                <div className={styles.productName}>
                                                    {item.name} <span>x{item.quantity}</span>
                                                </div>
                                                <div className="fw-bold">
                                                    {(item.price * item.quantity).toLocaleString()}đ
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.orderFooter}>
                                        <span className={styles.totalText}>Tổng thanh toán:</span>
                                        <span className={styles.totalPrice}>
                                            {(order.totalAmount || order.total).toLocaleString()}đ
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;