

const Footer = () => {
  return (
<footer className="py-5" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top pt-5">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <img 
              src="media/images/logo.svg" 
              alt="Logo" 
              className="mb-3" 
              style={{ width: "130px" }} 
            />
            <p className="text-muted small pe-lg-4">
              © 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="d-flex gap-3 fs-5 text-secondary mt-3">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold mb-3 text-dark">Company</h6>
            <ul className="list-unstyled lh-lg">
              <li><a href="#" className="text-decoration-none text-secondary hover-link">About</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Products</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Pricing</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Referral programme</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Careers</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold mb-3 text-dark">Support</h6>
            <ul className="list-unstyled lh-lg">
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Support portal</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Z-Connect blog</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">List of charges</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Downloads</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold mb-3 text-dark">Account</h6>
            <ul className="list-unstyled lh-lg">
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Open an account</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">Fund transfer</a></li>
              <li><a href="#" className="text-decoration-none text-secondary hover-link">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="mt-5 pt-4 border-top text-muted" style={{ fontSize: "12px", lineHeight: "1.8" }}>
          <p className="mb-3">
            <strong>Zerodha Broking Ltd.:</strong> Member of NSE & BSE – SEBI Registration no.: INZ000031633 
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p className="mb-3">
            Procedure to file a complaint on <strong>SEBI SCORES</strong>: Register on SCORES portal. 
            Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. 
            Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>

          <div className="bg-light p-3 border rounded">
            <p className="mb-0 italic">
              "Investments in securities market are subject to market risks; read all the related documents carefully before investing. 
              Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers."
            </p>
          </div>

          <div className="text-center mt-4 border-top pt-3">
            <a href="#" className="text-muted text-decoration-none me-3">NSE</a>
            <a href="#" className="text-muted text-decoration-none me-3">BSE</a>
            <a href="#" className="text-muted text-decoration-none me-3">MCX</a>
            <a href="#" className="text-muted text-decoration-none">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Adding a small custom style for hover effects */}
      <style>{`
        .hover-link:hover {
          color: #387ed1 !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </footer>
  )
}

export default Footer
