import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import item from '../data/item'
import post from '../data/post';
import '../assets/style/style.scss';
import ItemDetailModal from '../components/ItemDetailModal';
import ItemRegistModal from '../components/ItemRegistModal';
import PostRegistModal from '../components/PostRegistModal';
import PostDetailModal from '../components/PostDetailModal';

export const Context1 = createContext<any>(undefined)

function Mine(): JSX.Element {
  const [items, setItems] = useState<any[]>(item);
  const [posts, setPosts] = useState<any[]>(post);
  const [tab, setTab] = useState<'item' | 'post'>('item');
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState<boolean>(false);
  const [isItemDetailModalOpen, setIsItemDetailModalOpen] = useState<boolean>(false);
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState<boolean>(false);
  const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState<boolean>(false);
  const [targetItem, setTargetItem] = useState<any>(null);
  const [targetPost, setTargetPost] = useState<any>(null);

  const handleTab = (tabType: 'item' | 'post') => {
    setTab(tabType);
  };

  const openNewItemModalToggle = (isOpen?: boolean) => {
    isOpen ? setIsNewItemModalOpen(true) : setIsNewItemModalOpen(false);
  };

  const openItemDetailModalToggle = (isOpen?: boolean, item?: any) => {
    isOpen ? setIsItemDetailModalOpen(true) : setIsItemDetailModalOpen(false);
    if(item) setTargetItem(item);
  };

  const openNewPostModalToggle = (isOpen?: boolean) => {
    isOpen ? setIsNewPostModalOpen(true) : setIsNewPostModalOpen(false);
  };

  const openPostDetailModalToggle = (isOpen?: boolean, post?: any) => {
    isOpen ? setIsPostDetailModalOpen(true) : setIsPostDetailModalOpen(false);
    if(post) setTargetPost(post);
  };

  const handleAddSubmit = (itemData: any) => {
    console.log('item modal submit:',itemData);
  };
  const handleUpdateSubmit = (itemData: any) => {
    console.log('item modal submit:',itemData);
  };

  const handleAddPostSubmit = (postData: any) => {
    console.log('post modal submit:',postData);
  };
  const handleUpdatePostSubmit = (postData: any) => {
    console.log('post modal submit:',postData);
  };

  return (
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="filter-buttons">
            <button className={tab === 'item' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleTab('item')}>MY ITEM</button>
            <button className={tab === 'post' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleTab('post')}>MY POST</button>
          </div>
        </div>
        {tab === 'item' && <div className="item-box">
          <div className="row">
            {items.map((item, i) => {
              if (i === 0) {
                return (
                  <div key="add-card" className="item-card add-button" onClick={() => openNewItemModalToggle(true)}>+</div>
                );
              } else {
                return (
                  <Card type='item' item={item} key={item.itemId || i} i={item.itemId} onClick={() => openItemDetailModalToggle(true, item)}/>
                );
              }
            })}
          </div>
        </div>}
        {tab === 'post' && <div className="item-box">
          <div className="row">
            {posts.map((post, i) => {
              if (i === 0) {
                return (
                  <div className="item-card add-button" onClick={() => openNewPostModalToggle(true)}>+</div>
                );
              } else {
              return (
                <Card type='post' item={post} key={i} i={post.postId} onClick={() => openPostDetailModalToggle(true, post)}/>
              );
            }
            })}
          </div>
        </div>}
      </div>
      <ItemRegistModal isOpen={(isNewItemModalOpen)} onClose={() => setIsNewItemModalOpen(false)} onSubmit={handleAddSubmit} />
      <ItemDetailModal isOpen={(isItemDetailModalOpen)} onClose={() => setIsItemDetailModalOpen(false)} onSubmit={handleUpdateSubmit} targetItem={targetItem} />
      <PostRegistModal isOpen={(isNewPostModalOpen)} onClose={() => setIsNewPostModalOpen(false)} onSubmit={handleAddPostSubmit} />
      <PostDetailModal isOpen={(isPostDetailModalOpen)} onClose={() => setIsPostDetailModalOpen(false)} onSubmit={handleUpdatePostSubmit} targetPost={targetPost} />
    </div>
  )
}

type CardProps = {
  type: 'item' | 'post';
  item: any;
  onClick?: () => void;
  i?: any;
};

function Card({ type, item, onClick }: CardProps): JSX.Element {
  return (
    <div className="item-card" onClick={onClick}>
      <div className="card-image">
        <img src={type === 'item' ? item.itemImg : item.imgFile || '../assets/icon/photo.svg'} alt="photo" />
      </div>
      <div className="card-content">
        <span className='card-title'>{type === 'item' ? item.itemNm : item.context}</span>
        <div className="card-stats">
          <span className="like-count">{type === 'item' ? '🤍' + item.liker.length : item.author}</span>
          <span className="wish-count">❤ {type === 'item' ? item.buyHoper.length : item.likeCnt}</span>
        </div>
      </div>
    </div>
  )
}

export default Mine;