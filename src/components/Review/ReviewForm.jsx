import React, { useState } from 'react';

const ReviewForm = ({ productId }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") {
            alert("Vui lòng nhập nội dung đánh giá!");
            return;
        }

        // Giả lập gửi dữ liệu lên Server/Redux
        console.log("Dữ liệu đánh giá:", { productId, rating, comment });

        // Hiển thị thông báo thành công
        setSubmitted(true);
        setComment("");
        setRating(5);

        // Tự động ẩn thông báo sau 3 giây
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="card p-3 mt-4" style={{ borderRadius: '15px', border: '1px solid #eee' }}>
            <h5 className="fw-bold mb-3">Đánh giá sản phẩm</h5>

            {submitted && (
                <div className="alert alert-success py-2">
                    Cảm ơn bạn đã gửi đánh giá!
                </div>
            )}

            <div className="mb-3">
                <p className="mb-1 text-muted small">Chọn số sao:</p>
                {[1, 2, 3, 4, 5].map(star => (
                    <span
                        key={star}
                        style={{
                            cursor: 'pointer',
                            fontSize: '28px',
                            color: star <= rating ? '#ffc107' : '#e4e5e9',
                            transition: 'color 0.2s'
                        }}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>

            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Hãy chia sẻ cảm nhận của bạn về loại cây này nhé..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ borderRadius: '10px' }}
                />
            </div>

            <button
                className="btn btn-success px-4"
                onClick={handleSubmit}
                style={{ borderRadius: '8px', fontWeight: '600' }}
            >
                Gửi bình luận
            </button>
        </div>
    );
};

// CỰC KỲ QUAN TRỌNG: Phải có dòng này để không bị lỗi màn hình trắng
export default ReviewForm;