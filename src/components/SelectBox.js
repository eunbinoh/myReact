import '../assets/style/App.css';
import styled from 'styled-components';
import { useState } from 'react';
import category from '../data/category.js'


function SelectBox(props) {
  const Select = styled.div`
    @font-face {
      font-family: "GangwonEdu_OTFBoldA";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    position: relative;
    font-family: GangwonEdu_OTFBoldA;
    top: 280px;
    left: 5px;
    margin: 0;
    margin-right: 5px;
    margin-top: 5px;
    cursor: pointer;

    width: 140px;
    height: 22x;
    display: block;
    padding: 8px 8px;
    font-size: inherit;
    line-height: inherit;

    background-color: #ffffff;
    align-self: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border: 1px solid;
    border-radius: 4px;
    `;
  
  const [value, setValue] = useState('- 전체 -')
  const [isShowOpt, setShowOpt] = useState(false)
  let [cates, setCates ] = useState(category)
  // setCates({tpCode:'01', tpName:'의류/패션잡화'})

  const handleChange = (e) => {
    // const idx = e.target.value
    // const selectTp = cates[idx].tpName
    // setValue(selectTp);
    // console.log(e.target.value);
  };

	return (
    <Select onChange={handleChange}>
      {cates.map((option) => (
        <option
          key={option.tpCode}
          value={option.tpCode}
          defaultValue={cates[0].tpCode}
        >
          {option.tpName}
        </option>
      ))}
    </Select>
	);

  // ⌵
}


export default SelectBox;