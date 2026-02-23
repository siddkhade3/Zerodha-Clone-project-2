

const Hero = () => {
  return (
<div className="container py-5 my-lg-5">
      {/* Main Heading Section */}
      <div className="row text-center mb-5 pb-lg-5">
        <div className="col-12 mx-auto col-lg-10">
          <h1 className="display-5 fw-semibold lh-base text-dark px-2">
            We pioneered the discount broking model in India.
            <span className="d-block text-muted fs-3 mt-2">
              Now, we are breaking ground with our technology.
            </span>
          </h1>
        </div>
      </div>

      {/* Content Section with Responsive Columns */}
      <div 
        className="row border-top pt-5 text-secondary justify-content-center" 
        style={{ lineHeight: "1.9", fontSize: "1.05rem" }}
      >
        {/* Left Column - stacks on small screens (col-12) and splits on large (col-lg-5) */}
        <div className="col-12 col-lg-5 pe-lg-5 mb-4 mb-lg-0">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <strong className="text-dark"> Zerodha</strong>, a combination of Zero and "Rodha", 
            the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over <span className="fw-bold text-dark">1+ Crore clients</span> place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-5 ps-lg-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-primary fw-medium text-decoration-none border-bottom border-primary pb-1">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#" className="text-primary text-decoration-none fw-medium">blog</a> or see what 
            the <a href="#" className="text-primary text-decoration-none fw-medium">media</a> is saying about us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
