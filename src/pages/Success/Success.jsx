import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => (
    <div className="text-center py-5">
        <div className="display-1 text-success">✔</div>
        <h2>Đặt hàng thành công!</h2>
        <p>Cảm ơn bạn đã tin tưởng cửa hàng cây cảnh của chúng mình.</p>
        <div className="mt-4">
            <Link to="/profile/orders" className="btn btn-primary me-2">Xem đơn hàng</Link>
            <Link to="/" className="btn btn-outline-secondary">Tiếp tục mua sắm</Link>
        </div>
    </div>
);

export default Success;