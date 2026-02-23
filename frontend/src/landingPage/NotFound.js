import { Link } from 'react-router-dom'; // Assuming you use react-router

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center col-md-8 col-lg-6">
        {/* Large stylized 404 text */}
        <h1 className="display-1 fw-bold text-primary mb-0">404</h1>
        
        {/* Subtle divider or icon */}
        <div className="mb-4">
           <hr className="w-25 mx-auto border-2 border-primary opacity-75" />
        </div>

        <h2 className="h4 fw-semibold text-dark">Whoops! Page Not Found</h2>
        <p className="text-muted mb-5 px-4">
          The link you followed might be broken, or the page may have been removed. 
          Don't worry, it happens to the best of us!
        </p>

        {/* Professional Button Action */}
        <Link 
          to="/" 
          className="btn btn-primary btn-lg px-5 shadow-sm rounded-pill fw-medium transition-all"
        >
          Back to Homepage
        </Link>

        {/* Optional: Simple graphic or light background element */}
        <div className="mt-5 pt-3">
          <small className="text-uppercase tracking-widest text-secondary fw-bold">
            Error Code: 0x404_SEC_ALPHA
          </small>
        </div>
      </div>
    </div>
  );
}

export default NotFound;