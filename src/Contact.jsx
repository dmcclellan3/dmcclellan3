import { Link } from "react-router-dom"


function Contact(){
    <Link to='/'>{'<- Back'}</Link> 
    return(
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card" style={{ width: "22rem" }}>
              <img
                src='blog photo.jpeg'
                className="card-img-top"
                alt="contact card photo"
              />
              <div className="card-body">
                <h4>Duke McClellan</h4>
                <div className="card-text" id="icons">
                  <img src="./Contact-Card-Icons/Email.svg"alt="gmail" />
                  <img src="./Contact-Card-Icons/Github.svg" alt="github" />
                  <img src="./Contact-Card-Icons/Instagram.svg" alt="instagram" />
                  <img src="./Contact-Card-Icons/Facebook.svg" alt="facebook" />
                  <img src="https://icons8.com/icon/114445/linkedin-circled" alt="LinkedIn" />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Contact