import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import item from '../data/item'
import post from '../data/post';
import '../assets/style/style.scss';
import ItemDetailModal from '../components/ItemDetailModal';
import ItemRegistModal from '../components/ItemRegistModal';

export const Context1 = createContext<any>(undefined)

function Mine(): JSX.Element {
  const [items, setItems] = useState<any[]>(item);
  const [posts, setPosts] = useState<any[]>(post);
  const [tab, setTab] = useState<'item' | 'post'>('item');
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState<boolean>(false);
  const [isItemDetailModalOpen, setIsItemDetailModalOpen] = useState<boolean>(false);

  const handleTab = (tabType: 'item' | 'post') => {
    setTab(tabType);
  };

  const openNewItemModalToggle = (isOpen?: boolean) => {
    isOpen ? setIsNewItemModalOpen(true) : setIsNewItemModalOpen(false);
  };

  const openItemDetailModalToggle = (isOpen?: boolean, item?: any) => {
    isOpen ? setIsItemDetailModalOpen(true) : setIsItemDetailModalOpen(false);
  };

  const handleAddSubmit = (itemData: any) => {
    console.log('item modal submit:',itemData);
  };
  const handleUpdateSubmit = (itemData: any) => {
    console.log('item modal submit:',itemData);
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
                  <div className="item-card add-button" onClick={() => openNewItemModalToggle(true)}>+</div>
                );
              } else {
                return (
                  <Card type='item' item={item} key={i} i={item.itemId} onClick={() => openItemDetailModalToggle(true, item)}/>
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
                  <div className="item-card add-button" onClick={() => openNewItemModalToggle(true)}>+</div>
                );
              } else {
              return (
                <Card type='post' item={post} key={i} i={post.postId} onClick={() => openItemDetailModalToggle(true, post)}/>
              );
            }
            })}
          </div>
        </div>}
      </div>
      <ItemRegistModal isOpen={(isNewItemModalOpen)} onClose={() => setIsNewItemModalOpen(false)} onSubmit={handleAddSubmit} />
      <ItemDetailModal isOpen={(isItemDetailModalOpen)} onClose={() => setIsItemDetailModalOpen(false)} onSubmit={handleUpdateSubmit} />
    </div>
  )
}

function Card(props: any): JSX.Element {
  return (
    <div className="item-card">
      <div className="card-image">
        <img src={props.type === 'item' ? props.item.itemImg : props.item.imgFile || '../assets/icon/photo.svg'} alt="photo" />
      </div>
      <div className="card-content">
        <span className='card-title'>{props.type === 'item' ? props.item.itemNm : props.item.context}</span>
        <div className="card-stats">
          <span className="like-count">{props.type === 'item' ? '🤍' + props.item.liker.length : props.item.author}</span>
          <span className="wish-count">❤ {props.type === 'item' ? props.item.buyHoper.length : props.item.likeCnt}</span>
        </div>
      </div>
    </div>
  )
}

export default Mine;