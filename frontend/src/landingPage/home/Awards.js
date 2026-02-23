
const Awards = () => {
  return (
    
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left Column: Image */}
        <div className="col-md-6 col-sm-12 text-center mb-4 mb-md-0">
          <img 
            src="media/images/largestBroker.svg" 
            alt="Largest Broker Badge" 
            className="img-fluid" 
            style={{ width: "90%" }}
          />
        </div>

        {/* Right Column: Content */}
        <div className="col-md-6 col-sm-12 p-lg-5">
          <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
            Largest stock broker in India
          </h2>
          <p className="text-muted mb-4 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail order 
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            {/* List Column 1 */}
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Futures and Options</li>
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Stocks & IPOs</li>
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Commodity derivatives</li>
              </ul>
            </div>
            {/* List Column 2 */}
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Direct mutual funds</li>
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Currency derivatives</li>
                <li className="mb-2"><i className="bi bi-circle-fill me-2 text-primary" style={{fontSize: "8px"}}></i> Bonds and Gov...</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4">
            <img 
              src="media/images/pressLogos.png" 
              alt="Press Mentions" 
              className="img-fluid" 
              style={{ width: "100%", opacity: "0.8" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
