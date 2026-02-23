import OpenAccount from "../OpenAccount"


const Hero = () => {
  return (

    <div className="container py-5 mt-5">
      <div className="row align-items-center justify-content-center text-center">
        {/* Image Section - Scaled for responsiveness */}
        <div className="col-12 mb-5">
          <img 
            src="media/images/homeHero.png" 
            alt="Investment Hero" 
            className="img-fluid" 
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
        <OpenAccount/>
      </div>
    </div>
  )
}

export default Hero
