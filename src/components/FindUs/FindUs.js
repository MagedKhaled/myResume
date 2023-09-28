import './FindUs.css'
import facebook from "./images/facebook.svg"
import twitter from "./images/twitter.svg"
import linkedin from "./images/linkedin.svg"
import message from "./images/message-regular.svg"
import phone from "./images/phone-solid.svg"




const FindUs = () => {
    return(
        <div className="w-100 findUsContainer">
        <div className="container">
            <div className="row">
                <div className="col touch">
                    <h5>GET IN TOUCH</h5>
                    
                    <h6><img src={message} alt="" />maged.khaled03@gmail.com</h6>
                    <h6><img src={phone} alt="" />01032748712</h6>
                </div>
                <div className="col buttonDiv">
                    <button className="btn w-50">Contact Me</button>
                </div>
                <div className="col social">
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />


                    </div>
                        
                    <div>Copy rights @2019 KR</div>
                </div>
            </div>

        </div>
        </div> 
    )
}


export default FindUs