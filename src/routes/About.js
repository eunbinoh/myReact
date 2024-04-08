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
            <img src="/assets/img/FE_SPEC1_1.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC1_2.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC1_3.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC2_1.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC2_2.png" width="40px;"  height="30px;" />
          </div>  
          <div>
            <img src="/assets/img/FE_SPEC4.png" width="40px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC3.png" width="40px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC7.png" width="45px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC8.png" width="33px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC5.png" width="37px;"  height="32px;" />
            <img src="/assets/img/FE_SPEC6.png" width="40px;"  height="35px;" />
          </div>

          <button> 
            _GitLab
            <img width="20px;" height="20px" src="../assets/icon/git-lab.svg" /> 
          </button>
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

          <button>
              _Email 
            <img width="20px;" height="20px" src="../assets/icon/mail.svg" /> 
           </button>
        </div>

      </div> 
    </div> 
  )
}


export default About;