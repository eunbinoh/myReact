import '../App.css';
import styled from "styled-components";

let CustomBtn = styled.button
`
    background : ${ props => props.bg };
    color : white;
    margin : 5px;
    padding : 7px;
    border : 1px solid orange;
    border-radius : 8px;
`
let Box = styled.div
`
    background : gray;
    padding : 10px;
`

function About() {
  

  return (
    <div className="about-container">
        <div className="row">
          <div>_</div>
          <div>
            introduce Master
          </div>
          <CustomBtn>
            Send Email 
          </CustomBtn>
        </div>
    </div> 
  )
}


export default About;