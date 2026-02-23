

const Team = () => {
  return (
<div className="container py-5">
      {/* Section Header */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center">
          <h2 className="fw-bold text-dark mb-4">People</h2>
          <div 
            className="mx-auto border-top border-2" 
            style={{ width: "50px", borderColor: "#eee !important" }}
          ></div>
        </div>
      </div>

      <div className="row align-items-center justify-content-center px-lg-5">
        {/* Profile Column: Stacks on mobile, centered */}
        <div className="col-12 col-md-5 col-lg-4 text-center mb-5 mb-md-0">
          <div className="position-relative d-inline-block">
            <img
              src="media/images/mypic.jpg"
              alt="Nithin Kamath"
              className="img-fluid rounded-circle shadow-sm border border-5 border-white"
              style={{ maxWidth: "250px", width: "100%" }}
            />
          </div>
          <h4 className="mt-4 fw-bold text-dark mb-1">Siddhas Khade</h4>
          <p className="text-muted small fw-medium">Founder, CEO</p>
        </div>

        {/* Bio Column: Stacks on mobile, left-aligned on desktop */}
        <div 
          className="col-12 col-md-7 col-lg-6 text-secondary"
          style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
        >
          <p>
            Siddhas bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="font-italic">Playing basketball is his zen.</p>
          
          {/* Social Links */}
          <div className="mt-4">
            <span className="text-dark small fw-bold text-uppercase me-2">Connect:</span>
            <a href="#" className="text-primary text-decoration-none me-3 hover-link">Homepage</a>
            <span className="text-light">|</span>
            <a href="#" className="text-primary text-decoration-none mx-3 hover-link">TradingQnA</a>
            <span className="text-light">|</span>
            <a href="#" className="text-primary text-decoration-none ms-3 hover-link">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
