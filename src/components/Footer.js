import { Link } from "react-router-dom";
import "../styles/Footer.css"
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="z-2 position-relative text-center text-lg-start bg-black text-muted Fixed bottom">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom container" data-aos='fade-down' data-aos-duration='1000'>
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block text-white">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div className="text-white">
            <a
              href="https://instagram.com/novare_iitpkd?igshid=MzNlNGNkZWQ4Mg=="
              className="me-4 text-reset" /*target="_blank" */
            >
              <i className="fab fa-instagram">instagram</i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f">facebook</i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google">youtube</i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter">twitter</i>
            </a>

            {/* <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a> */}
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="" data-aos='fade-down' data-aos-duration='1000'>
          <div className="container text-center text-md-start mt-4">
            {/* <!-- Grid row --> */}
            <div className="row mt-1 text-white">
              {/* <!-- Grid column --> */}
              {/* <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Novare
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-3">Novare</h6>
                <p>
                  <Link to="/about" className="text-reset ">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/articles" className="text-reset">
                    Articles
                  </Link>
                </p>
                <p>
                  <Link to="/Gallery" className="text-reset">
                    Gallery
                  </Link>
                </p>
                <p>
                  <Link to="/trails" className="text-reset">
                    Trails
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-reset">
                    Contact Us
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column -->

              {/* <!-- Grid column --> */}
              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Teams
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  Mail: novare@iitpkdac.in
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>Phone: + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>Phone: + 01 234 567 89
                </p>
                <p>
                  <i className="fas fa-home me-3"></i> Novare Club, IIT Palakkad
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 m-0 text-white" data-aos='fade-down' data-aos-duration='1000'>© {year} Copyright:</div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
