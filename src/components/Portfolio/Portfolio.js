import './Portfolio.css'
const Portfolio = () => {
    return (
        <div className="mt-5 mb-5 container portContainer">
            <h1 className="row">
                Portfolio
            </h1>
            <div className="row cardContainer">
                <div class="card col col-3 p-6 m-3 grayBG" > 
                    <h5 class="card-title text-center ">WEB DESIGN</h5>
                    <hr/>
                </div>
            
                <div class="card col col-3 p-6 m-3 darkBG" >
                    <h5 class="card-title text-center ">BACK-END</h5>
                    <hr/>
                </div>
            
                <div class="card col col-3 p-6 m-3 grayBG" >
                    <h5 class="card-title text-center ">MACHINE LEARNING</h5>
                    <hr/>
                </div>
                <div class="card col col-3 p-6 m-3 darkBG" >
                    <h5 class="card-title text-center ">IMAGE PROCESSING</h5>
                    <hr/>
                </div>
            
                <div class="card col col-3 p-6 m-3 grayBG" >
                    <h5 class="card-title text-center ">DATABASE</h5>
                    <hr/>
                </div>
            
                <div class="card col col-3 p-6 m-3 darkBG" >
                    <h5 class="card-title text-center ">ADMINISTRATOR</h5>
                    <hr/>
                </div>
            </div>

        </div>
    )
}


export default Portfolio