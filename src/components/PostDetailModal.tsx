import React, { useState, useEffect } from 'react';
import '../assets/style/itemModal.scss';

interface ItemRegistProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
  targetPost?: any;
}

const PostDetail: React.FC<ItemRegistProps> = ({ isOpen, onClose, onSubmit, targetPost }) => {
  const initialForm = {
    postId: targetPost?.postId || '',
    context: targetPost?.context || '',
    author: targetPost?.author || '',
    imgFile: targetPost?.imgFile || ''
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    setFormData({
      postId: targetPost?.postId || '',
      context: targetPost?.context || '',
      author: targetPost?.author || '',
      imgFile: targetPost?.imgFile || ''
    });
  }, [targetPost, isOpen]);

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
          imgFile: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.postId || !formData.author) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    const newItem = {
      itemId: Date.now(),
      postId: formData.postId,
      context: formData.context,
      author: formData.author,
      imgFile: formData.imgFile || '/default-image.jpg',
      liker: [],
      buyHoper: [],
      createdAt: new Date().toISOString()
    };

    onSubmit(newItem);
    
    setFormData({
      postId: '',
      context: '',
      author: '',
      imgFile: ''
    });
    setImagePreview('');
    onClose();
  };

  const handleClose = () => {
    setFormData({
      postId: '',
      context: '',
      author: '',
      imgFile: ''
    });
    setImagePreview('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>글 수정하기</h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="postId">타이틀 *</label>
            <input
              type="text"
              id="postId"
              name="postId"
              value={formData.postId}
              onChange={handleInputChange}
              placeholder="타이틀을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="context">내용</label>
            <textarea
              id="context"
              name="context"
              value={formData.context}
              onChange={handleInputChange}
              placeholder="내용을 입력하세요"
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imgFile">이미지</label>
            <input
              type="file"
              id="imgFile"
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

export default PostDetail;