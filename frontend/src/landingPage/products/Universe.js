

function Universe() {
  // Array to keep the code clean and manageable
  const partners = [
    { logo: "media/images/smallcaseLogo.png", desc: "Thematic investment platform" },
    { logo: "media/images/streakLogo.png", desc: "Algo & strategy platform" },
    { logo: "media/images/sensibullLogo.svg", desc: "Options trading platform" },
    { logo: "media/images/zerodhaFundhouse.png", desc: "Asset management" },
    { logo: "media/images/goldenpiLogo.png", desc: "Bonds trading platform" },
    { logo: "media/images/dittoLogo.png", desc: "Insurance" },
  ];

  return (
    <div className="container py-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">The Zerodha Universe</h1>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row g-4 text-center align-items-center">
        {partners.map((partner, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 p-4">
            <div className="partner-card p-3 transition-hover">
              <img 
                src={partner.logo} 
                alt="Partner Logo" 
                className="img-fluid mb-3" 
                style={{ height: '50px', objectFit: 'contain', filter: 'grayscale(20%)' }} 
              />
              <p className="small text-muted mb-0">{partner.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 pt-4">
        <button
          className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-2 shadow-sm border-0"
          style={{ backgroundColor: '#387ed1', minWidth: '200px' }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe
