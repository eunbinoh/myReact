import { useState } from 'react';
import '../assets/style/App.css';
import project from '../data/projects.js';

/** mehaHub */
function Project_3() {
  const [projects, setProject] = useState(project);

  return (
    <div className="projects">
      <div className='container-area'>
      {
        projects.map((p,i)=>{
          return(
            <>
              <div key={i} i={++i} className="mobile_frame" >
                <img src={ p.imgSrc } />
                <div className="descript">
                  <span> {p.desc} </span>
                </div>
              </div> 
              <img class="scroll" src="../assets/icon/scrollTo.png" />
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Project_3;