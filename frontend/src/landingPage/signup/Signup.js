


const Signup = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-5 col-xl-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Create Account</h2>
                <p className="text-muted small">Join our community today</p>
              </div>

              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg bg-light border-0 fs-6" 
                    placeholder="Enter your name" 
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg bg-light border-0 fs-6" 
                    placeholder="name@example.com" 
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Password</label>
                  <input 
                    type="password" 
                    className="form-control form-control-lg bg-light border-0 fs-6" 
                    placeholder="Min. 8 characters" 
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg fw-bold shadow-sm rounded-3">
                    Sign Up
                  </button>
                </div>

                {/* Divider */}
                <div className="position-relative my-4">
                  <hr className="text-muted" />
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted small">
                    OR
                  </span>
                </div>

                {/* Footer Link */}
                <div className="text-center">
                  <p className="small text-muted mb-0">
                    Already have an account? <a href="/login" className="text-decoration-none fw-bold">Login</a>
                  </p>
                </div>
              </form>

            </div>
          </div>
          
          {/* Bottom Trust Badge/Legal */}
          <div className="text-center mt-4">
            <p className="text-muted extra-small" style={{ fontSize: '0.8rem' }}>
              By signing up, you agree to our <strong>Terms of Service</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
