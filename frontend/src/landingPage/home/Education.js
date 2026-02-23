import OpenAccount from "../OpenAccount"

const Education = () => {
  return (
<section className="container py-5 my-lg-5">
      <div className="row align-items-center g-5">
        {/* Left Column: Illustration */}
        <div className="col-12 col-md-6 text-center">
          <img 
            src="media/images/education.svg" 
            className="img-fluid" 
            style={{ maxWidth: "85%", height: "auto" }}
            alt="Education Illustration"
          />
        </div>

        {/* Right Column: Content */}
        <div className="col-12 col-md-6">
          <h2 className="display-6 fw-bold mb-4 text-dark">
            Free and open market education
          </h2>
          
          {/* Feature 1 */}
          <div className="mb-5">
            <p className="text-muted fs-5 leading-relaxed">
              Varsity, the largest online stock market education book in the world 
              covering everything from the basics to advanced trading.
            </p>
            <a 
              href="#" 
              className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center gap-2 custom-link"
            >
              Explore Varsity <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="mt-4">
            <p className="text-muted fs-5 leading-relaxed">
              TradingQ&A, the most active trading and investment community in 
              India for all your market related queries.
            </p>
            <a 
              href="#" 
              className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center gap-2 custom-link"
            >
              Join the community <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Education
