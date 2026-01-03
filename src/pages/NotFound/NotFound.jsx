import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container text-center py-5">
        <h1 style={{ fontSize: '100px' }}>404</h1>
        <h3>Ối! Trang này không tồn tại rồi...</h3>
        <p>Có vẻ như đường dẫn này đã bị "héo" hoặc không tồn tại.</p>
        <Link to="/" className="btn btn-success mt-3">Quay về trang chủ</Link>
    </div>
);
export default NotFound;