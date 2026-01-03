import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeFromCart } from '../../redux/cartSlice';
import { addOrder } from '../../redux/orderSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaTrash, FaArrowLeft, FaCheckCircle, FaUserEdit } from 'react-icons/fa';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, totalAmount } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // State lưu thông tin khách hàng
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) return;

        // Kiểm tra validation đơn giản
        if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
            alert("Vui lòng điền đầy đủ thông tin giao hàng!");
            return;
        }

        dispatch(addOrder({
            items: cartItems,
            totalAmount: totalAmount,
            customerInfo: customerInfo // Truyền thông tin khách vừa nhập vào
        }));

        navigate('/success');
    };

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Giỏ hàng của bạn</h2>

                {cartItems.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Giỏ hàng đang trống</p>
                        <Link to="/" className={styles.continueBtn}><FaArrowLeft /> Tiếp tục mua sắm</Link>
                    </div>
                ) : (
                    <div className={styles.cartContent}>
                        <div className={styles.items}>
                            {/* Danh sách sản phẩm */}
                            {cartItems.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <img src={item.image} alt={item.name} />
                                    <div className={styles.info}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.price}>{item.price.toLocaleString()}đ</p>
                                    </div>
                                    <span>SL: {item.quantity}</span>
                                    <button onClick={() => dispatch(removeFromCart(item.id))} className={styles.remove}><FaTrash /></button>
                                </div>
                            ))}

                            {/* Form thông tin khách hàng */}
                            <div className={styles.shippingForm}>
                                <h4 className="mt-4 mb-3"><FaUserEdit /> Thông tin giao hàng</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" name="name" className="form-control" placeholder="Họ và tên người nhận" onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" name="phone" className="form-control" placeholder="Số điện thoại" onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea name="address" className="form-control" placeholder="Địa chỉ nhận hàng chi tiết" onChange={handleInputChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.summary}>
                            <h3>Tóm tắt đơn hàng</h3>
                            <div className={styles.row}><span>Tạm tính:</span> <span>{totalAmount.toLocaleString()}đ</span></div>
                            <div className={styles.total}><span>Tổng cộng:</span> <span>{totalAmount.toLocaleString()}đ</span></div>

                            <button className={styles.checkoutBtn} onClick={handleCheckout}>
                                <FaCheckCircle /> XÁC NHẬN THANH TOÁN
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;