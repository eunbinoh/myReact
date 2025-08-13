import React, { useEffect, useState } from 'react';
import '../assets/style/itemModal.scss';

interface ItemRegistProps {
  isOpen: boolean;
  onClose: () => void;
  tradeItem?: any;
}

const TradeItem: React.FC<ItemRegistProps> = ({ isOpen, onClose, tradeItem }) => {
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

          <div className="form-group">
            <label htmlFor="itemImg">거래 제시 리스트</label>
              <div className="trade-list">
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

export default TradeItem;