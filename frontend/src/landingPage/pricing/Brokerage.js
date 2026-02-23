

const Brokerage = () => {
  return (
<div className="container py-5 my-5 border-top">
      <div className="row align-items-start">
        {/* Left Column: Information List */}
        <div className="col-lg-8 pe-lg-5">
          <div className="d-flex align-items-center mb-4">
            <h3 className="fs-5 fw-bold text-primary mb-0">
              <i className="bi bi-info-circle me-2"></i> Important Brokerage Details
            </h3>
          </div>
          
          <ul className="list-unstyled text-muted" style={{ fontSize: "13px", lineHeight: "1.8" }}>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span><strong>Call & Trade and RMS auto-squareoff:</strong> Additional charges of ₹50 + GST per order.</span>
            </li>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span>Digital contract notes will be sent via e-mail.</span>
            </li>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</span>
            </li>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span>For <strong>NRI account (non-PIS)</strong>, 0.5% or ₹100 per executed order for equity (whichever is lower).</span>
            </li>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span>For <strong>NRI account (PIS)</strong>, 0.5% or ₹200 per executed order for equity (whichever is lower).</span>
            </li>
            <li className="mb-3 d-flex align-items-top">
              <span className="text-primary me-2">•</span>
              <span>If the account is in <strong>debit balance</strong>, any order placed will be charged ₹40 per executed order instead of ₹20.</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Quick Links */}
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="d-grid gap-3">
            <a href="#" className="btn btn-outline-primary py-3 fw-bold shadow-sm rounded-3 transition-hover">
              <i className="bi bi-calculator me-2"></i> Brokerage calculator
            </a>
            <a href="#" className="btn btn-outline-secondary py-3 fw-bold shadow-sm rounded-3 transition-hover">
              <i className="bi bi-list-ul me-2"></i> List of charges
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
