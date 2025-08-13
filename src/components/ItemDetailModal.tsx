import React, { useState, useEffect } from 'react';
import '../assets/style/itemModal.scss';

interface ItemRegistProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (itemData: any) => void;
  targetItem?: any;
}

const ItemDetail: React.FC<ItemRegistProps> = ({ isOpen, onClose, onSubmit, targetItem }) => {
  const initialForm = {
    itemNm: targetItem?.itemNm || '',
    itemDesc: targetItem?.itemDesc || '',
    itemCategory: targetItem?.owner || '',
    itemImg: targetItem?.itemImg || ''
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    setFormData({
      itemNm: targetItem?.itemNm || '',
      itemDesc: targetItem?.itemDesc || '',
      itemCategory: targetItem?.owner || '',
      itemImg: targetItem?.itemImg || ''
    });
  }, [targetItem, isOpen]);

  const [imagePreview, setImagePreview] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({
          ...prev,
          itemImg: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.itemNm || !formData.itemCategory) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    const newItem = {
      itemId: Date.now(),
      itemNm: formData.itemNm,
      itemDesc: formData.itemDesc,
      itemCategory: formData.itemCategory,
      itemImg: formData.itemImg || '/default-image.jpg',
      liker: [],
      buyHoper: [],
      createdAt: new Date().toISOString()
    };

    onSubmit(newItem);
    
    setFormData({
      itemNm: '',
      itemDesc: '',
      itemCategory: '',
      itemImg: ''
    });
    setImagePreview('');
    onClose();
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
          <h2>내 아이템 수정하기</h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemNm">아이템명 *</label>
            <input
              type="text"
              id="itemNm"
              name="itemNm"
              value={formData.itemNm}
              onChange={handleInputChange}
              placeholder="아이템명을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemCategory">카테고리 *</label>
            <select
              id="itemCategory"
              name="itemCategory"
              value={formData.itemCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">카테고리 선택</option>
              <option value="electronics">전자제품</option>
              <option value="fashion">패션</option>
              <option value="home">생활용품</option>
              <option value="books">도서</option>
              <option value="sports">스포츠</option>
              <option value="beauty">뷰티</option>
              <option value="others">기타</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="itemDesc">설명</label>
            <textarea
              id="itemDesc"
              name="itemDesc"
              value={formData.itemDesc}
              onChange={handleInputChange}
              placeholder="아이템에 대한 설명을 입력하세요"
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemImg">이미지</label>
            <input
              type="file"
              id="itemImg"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="미리보기" />
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={handleClose}>
              취소
            </button>
            <button type="submit" className="submit-button" onClick={handleSubmit}>
              수정하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;