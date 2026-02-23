import "./Stats.css"

const Stats = () => {
  return (
//  <div className="container p-3">
//       <div className="row p-5">
//         <div className="col-6 p-5">
//           <h1 className="fs-2 mb-5">Trust with confidence</h1>
//           <h2 className="fs-4">Customer-first always</h2>
//           <p className="text-muted">
//             That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
//             worth of equity investments.
//           </p>
//           <h2 className="fs-4">No spam or gimmicks</h2>
//           <p className="text-muted">
//             No gimmicks, spam, "gamification", or annoying push notifications.
//             High quality apps that you use at your pace, the way you like.
//           </p>
//           <h2 className="fs-4">The Zerodha universe</h2>
//           <p className="text-muted">
//             Not just an app, but a whole ecosystem. Our investments in 30+
//             fintech startups offer you tailored services specific to your needs.
//           </p>
//           <h2 className="fs-4">Do better with money</h2>
//           <p className="text-muted">
//             With initiatives like Nudge and Kill Switch, we don't just
//             facilitate transactions, but actively help you do better with your
//             money.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
//           <div className="text-center">
//             <a href="" className="mx-5" style={{ textDecoration: "none" }}>
//               Explore our products{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//             <a href="" style={{ textDecoration: "none" }}>
//               Try Kite demo{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>


<div className="container py-5 my-lg-5">
      <div className="row align-items-center">
        {/* Text Content Column */}
        <div className="col-lg-6 px-4 px-md-5">
          <h1 className="display-5 fw-bold mb-4 text-dark">Trust with confidence</h1>
          
          <div className="mb-4">
            <h2 className="h4 fw-semibold border-start border-primary border-4 ps-3">Customer-first always</h2>
            <p className="text-muted leading-relaxed">
              That's why <strong>1.3+ crore</strong> customers trust Zerodha with <strong>₹3.5+ lakh crores</strong> 
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 fw-semibold border-start border-primary border-4 ps-3">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications. 
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 fw-semibold border-start border-primary border-4 ps-3">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+ 
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="h4 fw-semibold border-start border-primary border-4 ps-3">Do better with money</h2>
            <p className="text-muted">
              With initiatives like <strong>Nudge</strong> and <strong>Kill Switch</strong>, we don't just 
              facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Image and CTA Column */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <div className="p-2">
            <img 
              src="media/images/ecosystem.png" 
              alt="Ecosystem"
              className="img-fluid mb-4 transition-up" 
              style={{ maxWidth: "100%", height: "auto" }} 
            />
          </div>
          
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mt-3">
            <a href="#" className="fw-bold text-decoration-none d-inline-flex align-items-center justify-content-center hover-link">
              Explore our products 
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
            <a href="#" className="fw-bold text-decoration-none d-inline-flex align-items-center justify-content-center hover-link text-primary">
              Try Kite demo 
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
