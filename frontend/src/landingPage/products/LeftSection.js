import "./LeftSection.css"

function LeftSection({
  imageURL,
  productName,
  productDescription, // Fixed typo from 'productDesription'
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5 py-lg-5">
      <div className="row align-items-center">
        {/* Image Column: Full width on mobile, 6-columns on desktop */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid" 
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>

        {/* Content Column */}
        <div className="col-12 col-lg-6 ps-lg-5">
          <h1 className="fw-bold display-5 mb-3">{productName}</h1>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.7' }}>
            {productDescription}
          </p>

          {/* Action Links */}
          <div className="d-flex align-items-center gap-4 mb-4">
            <a href={tryDemo} className="text-decoration-none fw-bold text-primary fs-5">
              Try Demo <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
            <a href={learnMore} className="text-decoration-none fw-bold text-primary fs-5">
              Learn More <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href={googlePlay} className="transition-hover">
              <img 
                src="media/images/googlePlayBadge.svg" 
                alt="Get it on Google Play" 
                style={{ width: '150px' }} 
              />
            </a>
            <a href={appStore} className="transition-hover">
              <img 
                src="media/images/appstoreBadge.svg" 
                alt="Download on App Store" 
                style={{ width: '150px' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection
