
import "./Hero.css"

const Hero = () => {
  return (
<section className="container-fluid text-white py-5" id="supportHero" style={{
      background: 'linear-gradient(90deg, #387ed1 0%, #22518f 100%)',
      minHeight: '400px'
    }}>
      {/* Top Header Row */}
      <div className="container d-flex justify-content-between align-items-center mb-5">
        <h4 className="fw-bold m-0">Support Portal</h4>
        <a href="#" className="text-white text-decoration-none border-bottom border-white pb-1">
          Track Tickets
        </a>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Left Column: Search */}
          <div className="col-lg-7">
            <h1 className="display-6 fw-normal mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            
            <div className="position-relative mb-4">
              <input 
                type="text"
                className="form-control form-control-lg border-0 shadow-sm ps-4 py-3" 
                placeholder="Eg. how do I activate F&O, help with account, etc." 
                style={{ borderRadius: '4px' }}
              />
            </div>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <a href="#" className="text-white text-decoration-underline small">Track account opening</a>
              <a href="#" className="text-white text-decoration-underline small">Track segment activation</a>
              <a href="#" className="text-white text-decoration-underline small">Intraday margins</a>
              <a href="#" className="text-white text-decoration-underline small">Kite user manual</a>
            </div>
          </div>

          {/* Right Column: Featured */}
          <div className="col-lg-5 ps-lg-5">
            <h2 className="fs-4 fw-bold mb-4">Featured</h2>
            <ol className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-white lh-lg">1. Current Takeovers and Delisting - January 2024</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white lh-lg">2. Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
