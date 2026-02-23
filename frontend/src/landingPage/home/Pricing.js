

const Pricing = () => {
  return (
    <section className="container py-5 my-lg-5">
      <div className="row align-items-center justify-content-between">
        {/* Left Column: Value Proposition */}
        <div className="col-12 col-md-5 col-lg-4 mb-5 mb-md-0">
          <h2 className="display-6 fw-bold mb-4 text-dark">
            Unbeatable pricing
          </h2>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.6' }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a 
            href="#" 
            className="text-primary fw-bold text-decoration-none d-inline-flex align-items-center gap-2 pricing-link"
          >
            See full pricing table 
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Column: Pricing Cards */}
        <div className="col-12 col-md-7">
          <div className="row g-4 text-center">
            {/* Card 1 */}
            <div className="col-6">
              <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h3 className="display-4 fw-bold text-primary mb-2">₹0</h3>
                  <p className="text-secondary small fw-medium text-uppercase ls-1">
                    Free equity delivery and <br className="d-none d-lg-block" /> direct mutual funds
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-6">
              <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h3 className="display-4 fw-bold text-primary mb-2">₹20</h3>
                  <p className="text-secondary small fw-medium text-uppercase ls-1">
                    Intraday and <br className="d-none d-lg-block" /> F&O trades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Pricing
