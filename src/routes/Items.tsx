import '../assets/style/style.css';
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';
import item from '../data/item'
import category from '../data/category'
import Select from 'react-select'
interface ItemProps {
  item: {
    itemId: string;
    itemImg: string;
    itemNm: string;
    owner: string;
    liker: any[];
    buyHoper: any[];
    itemDesc: string;
  };
  i: number;
}

function Items(): JSX.Element {
  const [items, setItems] = useState<any[]>(item);
  const [cates, setCates] = useState<any[]>(category);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('NEW');
  const [loading, setLoading] = useState<boolean>(false);

  const selectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: '1px solid #dee2e6',
      borderRadius: '6px',
      minHeight: '38px',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.25)' : 'none',
      borderColor: state.isFocused ? '#007bff' : '#dee2e6',
      '&:hover': {
        borderColor: '#007bff',
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '2px 12px',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#212529',
      fontSize: '14px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#6c757d',
      padding: '0 8px',
      '&:hover': {
        color: '#007bff',
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '6px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid #dee2e6',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: '14px',
      padding: '10px 12px',
      backgroundColor: state.isFocused ? 'rgba(0, 123, 255, 0.1)' : 'white',
      color: state.isFocused ? '#007bff' : '#212529',
      '&:active': {
        backgroundColor: '#007bff',
      },
    }),
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
  };

  const handleCategoryChange = (selectedOption: any) => {
  };

  return (
    <div className="item-container">
      <div className="filter-box">
        <span>CATEGORY</span>
        <Select
          defaultValue={cates[0]}
          name="cate"
          options={cates}
          styles={selectStyles}
          classNamePrefix="select"
          className="basic-single"
          isClearable={false}
          isSearchable={false}
          onChange={handleCategoryChange}
        />
        
        <div style={{ position: 'relative', flex: 1 }}>
          <input 
            type="text"
            placeholder="아이템명 / 소유자명으로 검색"
            value={searchTerm}
            onChange={handleSearch}
          />

        </div>

        <button 
          className={sortBy === 'NEW' ? 'active' : ''}
          onClick={() => handleSort('NEW')}
        >
          NEW▽
        </button>
        <button 
          className={sortBy === 'NAME' ? 'active' : ''}
          onClick={() => handleSort('NAME')}
        >
          NAME▽
        </button>
        <button 
          className={sortBy === 'POPULAR' ? 'active' : ''}
          onClick={() => handleSort('POPULAR')}
        >
          POPULAR▽
        </button>
      </div>

      <div className="item-list">
        <div className="row">
          {loading ? (
            Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="item-card loading">
                <div style={{ width: '100%', height: '230px' }}></div>
                <div className="card-title">
                  <span></span>
                </div>
                <div className="card-row2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-row3">
                  <span></span>
                </div>
              </div>
            ))
          ) : items.length > 0 ? (
            items.map((x, i) => (
              <Card item={x} key={x.itemId || i} i={i + 1} />
            ))
          ) : (
            // 빈 상태
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <div className="empty-title">아이템이 없습니다</div>
              <div className="empty-description">
                다른 카테고리를 선택하거나 검색어를 변경해보세요.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ item, i }: ItemProps): JSX.Element {
  const navigate = useNavigate();
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/assets/images/placeholder.jpg'; 
  };

  const getDisplayTitle = (title: string, maxLength: number = 14) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  const getDisplayDescription = (desc: string, maxLength: number = 19) => {
    return desc.length > maxLength ? desc.substring(0, maxLength) + ' ..' : desc;
  };

  return (
    <div 
      className="item-card" 
      onClick={() => {
        navigate(`/detail/${item.itemId}`, { state: { item: item } });
      }}
      role="button"
      tabIndex={0}
    >
      <img 
        src={item.itemImg} 
        alt={item.itemNm}
        onError={handleImageError}
        loading="lazy"
      />
      
      <div className="card-title">
        <span title={item.itemNm}>
          {getDisplayTitle(item.itemNm)}
        </span>
      </div>
      
      <div className="card-row2">
        <span title={item.owner}>{item.owner}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>🤍{item.liker?.length || 0}</span>
          <span>❤ {item.buyHoper?.length || 0}</span>
        </div>
      </div>
      
      <div className="card-row3">
        <span title={item.itemDesc}>
          {getDisplayDescription(item.itemDesc)}
        </span>
      </div>
    </div>
  );
}

export default Items;