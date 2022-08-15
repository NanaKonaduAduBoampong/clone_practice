import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="container-fluid">
        <div className="widgets_wrapper">
          <div className="container footer-container">
            <div className="row">
              <div className="col">
                <div className="image_widget">
                  <Image
                    src="/images/logo.png"
                    width={127}
                    height={38}
                    alt="spiika-logo"
                  />
                </div>
                <div className="widgets_block">
                  <span className="icon-blue">
                    <i className="bi bi-facebook"></i>
                  </span>
                  <span className="icon-twitter-blue">
                    {" "}
                    <i className="bi bi-twitter"></i>
                  </span>
                  <span className="icon-red">
                    {" "}
                    <i className="bi bi-instagram"></i>
                  </span>
                </div>
              </div>
              <div className="col">
                <div className="widget_title">
                  <h3
                    className="fw-bold"
                    style={{
                      fontSize: "23px",
                      fontFamily: "Esteban",
                      color: "#020202",
                    }}
                  >
                    Quick Links
                  </h3>
                  <p>
                    <Link href="https://spiika.com/">
                      <a>Home</a>
                    </Link>
                    <br />
                    <Link href="https://spiika.com/blog/">
                      <a>Blogs</a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="widget_title">
                  <h3
                    className="fw-bold"
                    style={{
                      fontSize: "23px",
                      fontFamily: "Esteban",
                      color: "#020202",
                    }}
                  >
                    Support
                  </h3>
                  <p>
                    <Link href="https://wa.me/+233%2059%20111%202825">
                      <a>Online Support</a>
                    </Link>
                    <br />
                    <Link href="mailto:info@spiika.com">
                      <a>Write Us</a>
                    </Link>
                    <br />
                    <Link href="tel:0249509765">
                      <a>Call</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <div className="row">
            <div className="container">
              <div className="col col-one">
                <div className="copyright">
                  © 2021 SPiiKA. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
