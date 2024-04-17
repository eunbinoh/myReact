import '../assets/style/App.css';


function About() {
  
  return (
    <div className="about-container">
      <div className="introduce-box">
        <div className="left-area">
          <span className="title"> Who is Developer ?</span>
          <span > <p>Name</p> Eunbi Noh </span>
          <span > <p>Stack</p> Frontend Developer</span>
          <span > <p>Career</p> Corp.BIZBEE (2021.09- ) </span>
          <span > <p>Tech</p> Vue, React </span>
          <span > <p>Tool </p> IntelliJ, VScode </span>
          <span > <p>Skills</p> _ </span>
          <div className="skill-icons">
            <img src="/assets/img/FE_SPEC1_1.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC1_2.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC1_3.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC2_1.png" width="40px;"  height="30px;" />
            <img src="/assets/img/FE_SPEC2_2.png" width="40px;"  height="30px;" />
          </div>  
          <div className="skill-icons">
            <img src="/assets/img/FE_SPEC4.png" width="40px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC3.png" width="40px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC7.png" width="45px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC8.png" width="33px;"  height="35px;" />
            <img src="/assets/img/FE_SPEC5.png" width="37px;"  height="32px;" />
            <img src="/assets/img/FE_SPEC6.png" width="40px;"  height="35px;" />
          </div>

          {/* <button> 
            _GitLab
            <img width="20px;" height="20px" src="../assets/icon/git-lab.svg" /> 
          </button> */}
        </div>
        <div className="right-area">
          <span className="title"> Projects</span>

          <div className="projects">
            <div className="project-box">
                <span >      
                <img width="20px;" height="20px" src="../assets/icon/time.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/hope.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/trade.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/user.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/view.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/vip.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/water.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/gift.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/like-post.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/like.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/mail.svg" /> 
              </span>
              <span > 
                <img width="20px;" height="20px" src="../assets/icon/cate-baby.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-beauty.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-cloth.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-digital.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-hobby.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-home.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-sports.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-ticket.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cate-tree.svg" /> 
              </span>
              <span > 
                <img width="20px;" height="20px" src="../assets/icon/add.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/remove.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/delete.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/more.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/save.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/search.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/setting.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/alert.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/no-alert.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/notice.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/help.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/edit.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/filter.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/list.svg" /> 
              </span>
              <span > 
                <img width="20px;" height="20px" src="../assets/icon/drop.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/fast.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/password.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/lock.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/unlock.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/fragile.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/money.svg" /> 
              </span>
              <span > 
                <img width="20px;" height="20px" src="../assets/icon/photo.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/nice.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/sad.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/sun.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cloud.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/cherry.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/duck.svg" /> 
                <img width="20px;" height="20px" src="../assets/icon/flower.svg" /> 
              </span>
            </div>
          </div>

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