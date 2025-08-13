import React, { useState } from 'react';
import '../assets/style/itemModal.scss';

interface ItemRegistProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (itemData: any) => void;
}

const PostRegist: React.FC<ItemRegistProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    itemNm: '',
    itemDesc: '',
    itemPrice: '',
    itemCategory: '',
    itemImg: ''
  });

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
    
    if (!formData.itemNm || !formData.itemPrice || !formData.itemCategory) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    const newItem = {
      itemId: Date.now(),
      itemNm: formData.itemNm,
      itemDesc: formData.itemDesc,
      itemPrice: parseInt(formData.itemPrice),
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
      itemPrice: '',
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
      itemPrice: '',
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
          <h2>새 글 등록하기</h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemNm">타이틀 *</label>
            <input
              type="text"
              id="itemNm"
              name="itemNm"
              value={formData.itemNm}
              onChange={handleInputChange}
              placeholder="타이틀을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemDesc">내용</label>
            <textarea
              id="itemDesc"
              name="itemDesc"
              value={formData.itemDesc}
              onChange={handleInputChange}
              placeholder="내용을 입력하세요"
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
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostRegist;