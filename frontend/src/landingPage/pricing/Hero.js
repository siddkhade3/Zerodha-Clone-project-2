
const Hero = () => {
  return (
<div className="container my-5 py-5">
      {/* Header Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold text-dark">Pricing</h1>
          <p className="lead text-muted mt-3">
            Free equity investments and flat <span className="fw-bold text-primary">₹20</span> intraday and F&O trades
          </p>
          <div className="mx-auto mt-4 border-bottom w-25"></div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row g-4 py-5">
        {/* Card 1: Equity */}
        <div className="col-md-4 text-center">
          <div className="p-4 h-100 border-0 rounded-4 shadow-sm transition-hover">
            <img 
              src="media/images/pricingEquity.svg" 
              alt="Equity" 
              className="img-fluid mb-4" 
              style={{ width: "180px" }} 
            />
            <h2 className="h4 fw-bold">Free equity delivery</h2>
            <p className="text-muted px-lg-3">
              All equity delivery investments (NSE, BSE), are absolutely free — 
              <span className="text-success fw-semibold"> ₹0 brokerage</span>.
            </p>
          </div>
        </div>

        {/* Card 2: Intraday */}
        <div className="col-md-4 text-center">
          <div className="p-4 h-100 border-0 rounded-4 shadow-sm transition-hover bg-light">
            <img 
              src="media/images/intradayTrades.svg" 
              alt="Intraday" 
              className="img-fluid mb-4" 
              style={{ width: "180px" }} 
            />
            <h2 className="h4 fw-bold">Intraday and F&O</h2>
            <p className="text-muted px-lg-3">
              Flat <span className="text-dark fw-bold">₹20</span> or 0.03% (whichever is lower) 
              per executed order on intraday trades.
            </p>
          </div>
        </div>

        {/* Card 3: Mutual Funds */}
        <div className="col-md-4 text-center">
          <div className="p-4 h-100 border-0 rounded-4 shadow-sm transition-hover">
            <img 
              src="media/images/pricingEquity.svg" 
              alt="Mutual Funds" 
              className="img-fluid mb-4" 
              style={{ width: "180px" }} 
            />
            <h2 className="h4 fw-bold">Free direct MF</h2>
            <p className="text-muted px-lg-3">
              All direct mutual fund investments are absolutely free — 
              <span className="text-success fw-semibold"> ₹0 commissions</span> & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
