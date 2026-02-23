import "./CreateTicket.css"


function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening", "Offline Account Opening", 
        "Company, Partnership and HUF", "NRI Account Opening", 
        "Charges at Zerodha", "GETTING STARTED"
      ]
    },
    // Adding duplicates for demonstration based on your snippet
    { title: "Your Account", icon: "fa-user-o", links: ["Login Help", "Profile", "Nominee", "Transfer Shares"] },
    { title: "Trading and Platforms", icon: "fa-bar-chart", links: ["Kite", "Console", "Coin", "API"] },
    { title: "Funds", icon: "fa-credit-card", links: ["Adding Funds", "Withdrawals", "Adding Bank Accounts"] },
    { title: "Console", icon: "fa-circle-o-notch", links: ["Reports", "Ledger", "Portfolio", "60 Day Challenge"] },
    { title: "Coin", icon: "fa-money", links: ["Mutual Funds", "SIP", "NPS", "Corporate Bonds"] },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-start">
          <h1 className="fw-normal fs-3 text-muted">To create a ticket, select a relevant topic</h1>
        </div>
      </div>

      <div className="row g-4">
        {categories.map((cat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="p-4 h-100 ticket-card">
              <h4 className="fs-5 mb-4 text-dark">
                <i className={`fa ${cat.icon} me-2 text-muted`} aria-hidden="true"></i> 
                {cat.title}
              </h4>
              <ul className="list-unstyled">
                {cat.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a 
                      href="#" 
                      className="text-decoration-none text-primary fw-light d-block"
                      style={{ fontSize: '0.95rem', transition: '0.2s' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CreateTicket;
