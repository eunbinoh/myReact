import '../assets/style/App.css';


function About() {
  
  return (
    <div className="about-container">
      <div className="introduce-box">
        <div className="left-area">
          <span className="title"> Who is Developer ?</span>
          <span > <p>Name</p> Eunbi Noh </span>
          <span > <p>Developer</p> F/E </span>
          <span > <p>Technician</p> _ </span>
          <span > <p>Career</p> _ </span>
          <span > <p>Skills</p> _ </span>
          <div>
            <img src="/assets/img/FE_SPEC1.png" width="120px;"  height="60px;" />
            <img src="/assets/img/FE_SPEC2.png" width="100px;"  height="60px;" />
          </div>  
          <div>
            <img src="/assets/img/FE_SPEC3.png" width="50px;"  height="50px;" />
            <img src="/assets/img/FE_SPEC4.png" width="50px;"  height="50px;" />
            <img src="/assets/img/FE_SPEC5.png" width="50px;"  height="50px;" />
          </div>

          <button> 문의하기 </button>
        </div>
        <div className="right-area">
          <span className="title"> Projects History</span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>
          <span > _ </span>

          <button> 문의하기 </button>
        </div>

      </div> 
    </div> 
  )
}


export default About;