import "./Hero.css"

const Hero = () => {
  return (
<div className="container-fluid border-bottom bg-light px-0">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center py-5">
            {/* Badge for extra professional touch */}
            <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 fw-semibold">
              Cutting-Edge FinTech
            </span>
            
            {/* Title with responsive font sizing */}
            <h1 className="display-3 fw-bold text-dark mb-3 tracking-tight">
              Technology
            </h1>
            
            {/* Subtitle with improved line height and max-width for readability */}
            <h3 className="text-muted fw-normal mx-auto mb-4 fs-4 fs-md-3" style={{ maxWidth: '700px', lineHeight: '1.6' }}>
              Experience sleek, modern, and intuitive trading platforms designed for the next generation of investors.
            </h3>
            
            {/* Enhanced Link with Hover Effect styling */}
            <div className="mt-4">
              <a 
                href="#offerings" 
                className="btn btn-link text-decoration-none fw-bold fs-5 group p-0 transition-all"
                style={{ color: '#0052ff' }}
              >
                Explore investment offerings
                <i className="fa fa-long-arrow-right ms-2 transition-transform" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
