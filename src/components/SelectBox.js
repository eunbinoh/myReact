import '../assets/style/App.css';
import styled from 'styled-components';
import { useState } from 'react';
import category from '../data/category.js'

function SelectBox(props) {
  const SelectBox = styled.div`
    position: relative;
    width: 200px;
    padding: 3px;
    border-radius: 12px;
    background-color: #ffffff;
    align-self: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    top: 9px;
    left: 5px;
    margin-right: 5px;
    cursor: pointer;
    &::before {
      content: "⌵";
      position: absolute;
      top: 0px;
      right: 8px;
      color: black;
      font-size: 20px;
    }
  `;
  const Label = styled.label`
    font-size: 14px;
    margin-left: 4px;
    text-align: center;
    height: 14px !important;
  `;
  const SelectOpts = styled.ul`
    position: absolute;
    list-style: none;
    top: 38px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 300px;
    max-height: ${(props) => (props.show ? "none" : "0")};
    padding: 0;
    border-radius: 8px;
    background-color: #222222;
    color: #fefefe;
  `;
  const Option = styled.li`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #595959;
    }
  `;
  const [value, setValue] = useState('01');
  const [isShowOpt, setShowOpt] = useState(false);
  let [cates, setCates ] = useState(category)

  const handleOnChangeValue = (e) => {
    console.log(e.target.value)
    const { text } = e.target.value;
    setValue(text);
  };

 
  return (
    <SelectBox onClick={() => setShowOpt((bool) => !bool)}>
      <Label>{}</Label>
      <SelectOpts show={isShowOpt}>
        {       
          cates.map((data)=>{
            return (
              <Option
                key={data.tpCode}
                value={data.tpCode}
                onClick={handleOnChangeValue}
              > {data.tpName} </Option>
            )
          })
        }
      </SelectOpts>
    </SelectBox>
  )
}


export default SelectBox;