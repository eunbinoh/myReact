import React, { useEffect, useState } from 'react';
import '../assets/style/itemModal.scss';
import hopes from '../data/hopes';

interface ItemRegistProps {
  isOpen: boolean;
  onClose: () => void;
  tradeItem?: any;
}

const TradeItemModal: React.FC<ItemRegistProps> = ({ isOpen, onClose, tradeItem }) => {
  const initialForm = {
    itemNm: tradeItem?.itemNm || '',
    itemDesc: tradeItem?.itemDesc || '',
    itemCategory: tradeItem?.itemCategory || '',
    itemImg: tradeItem?.itemImg || ''
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    setFormData({
      itemNm: tradeItem?.itemNm || '',
      itemDesc: tradeItem?.itemDesc || '',
      itemCategory: tradeItem?.itemCategory || '',
      itemImg: tradeItem?.itemImg || ''
    });
  }, [tradeItem, isOpen]);

  const [imagePreview, setImagePreview] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 댓글모달 연결
  };

  const handleAccept = (hopeNo: string) => {
    console.log(hopeNo);
  };
  const handleReject = (hopeNo: string) => {
    console.log(hopeNo);
  };
  const handleReply = (hopeNo: string) => {
    console.log(hopeNo);
  };

  const handleClose = () => {
    setFormData({
      itemNm: '',
      itemDesc: '',
      itemCategory: '',
      itemImg: ''
    });
    setImagePreview('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>아이템 거래</h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="itemNm">아이템명 </label>
            <input
              type="text"
              id="itemNm"
              name="itemNm"
              value={formData.itemNm}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemDesc">설명</label>
            <textarea
              id="itemDesc"
              name="itemDesc"
              value={formData.itemDesc}
              readOnly
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemImg">이미지</label>
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="미리보기" />
              </div>
            )}
          </div>

          <div className="trade-list-group">
            <label className="section-title">거래 제시 리스트 ({hopes.length})</label>
            <div className="trade-list-container">
              {hopes.length === 0 ? (
                <div className="empty-state">
                  <span>아직 거래 제안이 없습니다.</span>
                </div>
              ) : (
                <div className="trade-list">
                  {hopes.map((hope, i) => (
                    <div key={hope.hopeNo} className="trade-comment">
                      <div className="comment-header">
                        <div className="user-info">
                          <div className="user-avatar">
                            <span>{hope.hoper.charAt(0).toUpperCase()}</span>
                          </div>
                          <div className="user-details">
                            <span className="username">{hope.hoper}</span>
                            <span className="comment-date">{hope.writeDate.toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className={`status-badge status-${hope.status}`}>
                          <span>
                            {hope.status === '10' ? '제안' : 
                            hope.status === '20' ? '수락' : 
                            '거절된 제안'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="comment-body">
                        <p className="trade-proposal">{hope.context}</p>
                      </div>
                      
                      {hope.status === '10' && (
                        <div className="comment-actions">
                          <button className="action-btn accept-btn" disabled onClick={() => handleAccept(hope.hopeNo)}>
                            수락
                          </button>
                          <button className="action-btn reject-btn" disabled onClick={() => handleReject(hope.hopeNo)}>
                            거절
                          </button>
                          <button className="action-btn reply-btn" disabled onClick={() => handleReply(hope.hopeNo)}>
                            답글
                          </button>
                        </div>
                      )}
                      
                      {hope.status === '20' && (
                        <div className="accepted-notice">
                          <span>✓ 이 제안을 수락했습니다</span>
                        </div>
                      )}
                      
                      {hope.status === '30' && (
                        <div className="rejected-notice">
                          <span>✗ 이 제안을 거절했습니다</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={handleClose}>
              닫기
            </button>
            <button type="submit" className="submit-button" onClick={handleSubmit}>
              제안하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TradeItemModal;