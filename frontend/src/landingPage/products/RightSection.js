

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container my-5 py-lg-5">
      <div className="row align-items-center">
        
        {/* Text Column: Appears 1st on Desktop, but we can reorder for mobile if needed */}
        <div className="col-12 col-lg-6 pe-lg-5 order-2 order-lg-1">
          <h1 className="fw-bold display-5 mb-3">{productName}</h1>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
            {productDescription}
          </p>
          
          <div className="mt-4">
            <a 
              href={learnMore} 
              className="text-decoration-none fw-bold text-primary fs-5 border-bottom border-2 border-primary pb-1 transition-all"
            >
              Learn More <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image Column: Appears 2nd on Desktop, 1st on Mobile */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0 order-1 order-lg-2">
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid shadow-sm rounded-4" 
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection
