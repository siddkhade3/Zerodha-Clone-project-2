

const OpenAccount = () => {
  return (
        <section className="py-5 py-md-9 border-bottom">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-xl-6">
            
            {/* Badge for extra professional flair */}
            <span className="badge rounded-pill bg-soft-primary text-primary mb-3 px-3 py-2 fw-semibold" 
                  style={{ backgroundColor: '#e7f0ff', letterSpacing: '0.5px' }}>
              TRUSTED BY 10M+ USERS
            </span>

            <h1 className="display-3 fw-bolder text-dark mb-3 tracking-tight">
              Invest in <span style={{ color: "#387ed1" }}>everything.</span>
            </h1>

            <p className="lead text-secondary mb-5 px-md-4 lh-base">
              Experience a seamless online platform to trade stocks, derivatives, 
              mutual funds, and more with zero hidden fees.
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button 
                className="btn btn-primary btn-lg px-5 py-3 fs-5 shadow rounded-pill hover-lift"
                style={{ 
                  backgroundColor: "#387ed1", 
                  border: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease" 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(56, 126, 209, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Sign up for free
              </button>
              
              <button className="btn btn-outline-dark btn-lg px-5 py-3 fs-5 rounded-pill">
                Learn more
              </button>
            </div>

            <p className="small text-muted mt-4">
              <i className="bi bi-shield-check me-1"></i> 
              SEC & FINRA Regulated
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenAccount
