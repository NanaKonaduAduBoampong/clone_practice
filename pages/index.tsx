import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.innerSection}>
          <div className={styles.sectionOne}>
            <div className={styles.innerText}>
              <h1 className={styles.mainText}>
                Let{`'`}s Get You
                <br /> Spiiking.
              </h1>
              <p className={styles.text}>
                {" "}
                <br /> Welcome to our beautiful world of languages. What
                language would you like to
                <br /> hear yourself speak? Let{`'`}s get started.
              </p>
              <div className="m-4">
                <button
                  type="button"
                  className="btn btn-danger btn-md m-3 fs-25"
                >
                  Enroll Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-md my-3"
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/sp.png"
                width={536}
                height={489}
                alt="comm"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className="container-fluid">
          <div className="row d-block d-sm-flex">
            <div className="col pt-5 secondImage">
              <Image
                src="/images/sp-blue.png"
                width={536}
                height={495}
                alt="comm"
              ></Image>
            </div>
            <div className="col text-center pt-5">
              <Image
                src="/images/quotation.png"
                width={55}
                height={55}
                alt=""
              />
              <div className=" mt-4  ">
                <h1 className={styles.finally}>
                  Finally!
                  <br />a language learning
                  <br /> platform made with you
                  <br /> in mind.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdSection}>
        <div className="container-fluid">
          <div className="text-center">
            <h1 className="d-flex justify-content-center mb-5 fw-bold">
              Our Guarantees.
            </h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="container d-flex mx-2 conOne">
                <div className="col m-auto align-items-start px-4 ">
                  <h3 className="pt-5 innerTitle ">Get Fluent</h3>
                  <p className="pt-3 text-muted">
                    Tired of tapping and typing? Our
                    <br />
                    programme will get you speaking.
                  </p>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <Image
                    src="/images/your-voice.png"
                    width={320}
                    height={315}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container d-flex mx-2 conTwo">
                <div className="col m-auto align-items-start px-4 ">
                  <h3 className="pt-5 innerTitle ">Get Results.</h3>
                  <p className="pt-3 text-muted">
                    Are you learning for work, school or
                    <br /> leisure? Get your results or your money
                    <br /> back.
                  </p>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <Image
                    src="/images/better-grades.png"
                    width={320}
                    height={315}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h5 className="d-flex justify-content-center mt-4 outerText">
            COOL RIGHT?
          </h5>
          <h1 className="d-flex justify-content-center mt-3 fw-bold">
            It gets even better
          </h1>
        </div>
      </div>

      {/* <div className="d-flex"> */}
        <div className="container section-three">
          <div className="row justify-content-center d-block d-sm-flex">
            <div className="col mt-auto mb-5 first-section">
              <h1 className="p-2 fw-bold main-text">
                Get connected with native
                <br /> speakers
              </h1>
              <p className="px-2 text-muted">
                We{`'`}ll connect you with native spiikas of your target
                language, you{`'`}ll soon be
                <br /> spiiking with confidence.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-md mx-2 fs-25"
              >
                Enroll Now
              </button>
            </div>
            <div className="col">
              <div className="mt-5">
                <Image
                  src="/images/gets-better.png"
                  width={540}
                  height={595}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      <div className="container-fluid text-center carousel-con">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mt-5 testimonial">Testimonial</p>
              <h2 className="saying">Hear from our learners.</h2>
            </div>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              >
                {/* <div className="icons">
                  <i className="fa fa-angle-left"></i>
                </div> */}
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/images/your-voice.png"
                  width={321}
                  height={231}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="fw-bold">Ruth Fianoo-Vidza</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/your-voice.png"
                  width={321}
                  height={231}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/your-voice.png"
                  width={321}
                  height={231}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sectionFour}>
        <div className="container-fluid">
          <div className="container">
            <div className="row py-4 ">
              <div className="col m-auto">
                <h2
                  className="text-start ms-3"
                  style={{
                    color: "#fff",
                    fontFamily: "Esteban",
                    fontSize: "42px",
                    fontWeight: "bolder",
                  }}
                >
                  Ready to start
                  <br />
                  your journey.
                </h2>
              </div>
              <div className="col">
                <form>
                  <div className="mt-5">
                    <div className="border-bottom">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="exampleInputName1"
                        value="Your name"
                        aria-describedby=""
                        style={{ color: "#4c4c4c", fontSize: "13px" }}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="border-bottom">
                      <input
                        type="email"
                        readOnly
                        className="form-control-plaintext"
                        id="exampleInputEmail1"
                        value="Your-email"
                        style={{ color: "#4c4c4c", fontSize: "13px" }}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="border-bottom">
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="exampleInputPassword1"
                        value="Subject"
                        style={{ color: "#4c4c4c", fontSize: "13px" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputMessage1"
                      className="form-label"
                      style={{ color: "#4c4c4c" }}
                    >
                      Message
                    </label>
                    <div className="border-bottom">
                      <textarea
                        className="form-control-plaintext"
                        placeholder=""
                        id="floatingTextarea"
                        style={{ height: "80px" }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mb-5 btn btn-danger form-button"
                  >
                    Enroll Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionFive}>
        <div className="container-fluid">
          <div className="container">
            <div className="row d-block d-sm-flex">
              <div className="col">
                <div className="mt-5">
                  <Image
                    src="/images/family-photo.jpeg"
                    width={612}
                    height={377}
                    alt="family-pic"
                  />
                </div>
              </div>
              <div className="col mt-5 inner-section">
                <h1
                  style={{
                    color: "#555657",
                    fontSize: "74px",
                    lineHeight: "76px",
                    fontWeight: "300px",
                  }}
                >
                  Giving Back to Our
                  <br /> Community
                </h1>
                <p className="fs-6 my-4">
                  SPiiKA.community is our initiative that brings online
                  education to kids in digitally excluded communities for free.
                </p>
                <Link href="https://www.youtube.com/watch?v=HY_-N2j8K5Q">
                  <a>
                    <button className="btn btn-danger inner-button">
                      Watch Video
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionSix}>
        <div className="container-fluid">
          <h3
            className="my-4 ms-4 fs-3"
            style={{
              fontSize: "30px",
              lineHeight: "40px",
              fontWeight: "400",
              fontFamily: "Esteban",
              verticalAlign: "baseline",
            }}
          >
            Our Corporate Clients
          </h3>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Image
                  src="/images/nsia-logo.png"
                  width={200}
                  height={99}
                  alt="corporate-pic"
                />
              </div>
              <div className="col d-flex justify-content-center">
                <Image
                  src="/images/adansi-logo.png"
                  width={166}
                  height={82}
                  alt="corporate-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionSeven}>
        <div className="container-fluid">
          <p
            className="mt-5 ms-4"
            style={{
              fontSize: "18px",
              color: "red",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Food for thought.
          </p>
          <h2
            className="ms-4"
            style={{
              fontSize: "45px",
              lineHeight: "45px",
              marginBottom: "15px",
            }}
          >
            Our Blogs.
          </h2>
          <div className="container blogs-container">
            <div className="row d-block d-sm-flex">
              <div className="col">
                <div className={styles.gridContent}>
                  <div className={styles.imageContent}>
                    <Link href="https://spiika.com/wp-content/uploads/2022/04/spiika-blog-22.jpg">
                      <a>
                        {" "}
                        <Image
                          src="/images/spiika-blog-22.jpg"
                          width={450}
                          height={220}
                          alt="How to achieve your language goals"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.postLanguage}>
                    <Link href="https://spiika.com/category/foreign-languages/french/">
                      <a>French</a>
                    </Link>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href="https://spiika.com/how-to-achieve-your-language-goals-for-2022/">
                      <a>
                        How to achieve your
                        <br />
                        language goals for 2022
                      </a>
                    </Link>
                  </h2>
                  <div className={styles.postContent}>
                    <p>
                      HOW TO ACHIEVE YOUR GOALS FOR 2022 It{`'`}s imperative
                      <br />
                      to set goals at the beginning of the year and...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={styles.gridContent}>
                  <div className={styles.imageContent}>
                    <Link href="https://spiika.com/fun-ways-to-learn-french/">
                      <a>
                        {" "}
                        <Image
                          src="/images/spiika-blog.jpg"
                          width={450}
                          height={220}
                          alt="How to achieve your language goals"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.postLanguage}>
                    <Link href="https://spiika.com/category/foreign-languages/french/">
                      <a>French</a>
                    </Link>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href="https://spiika.com/how-to-achieve-your-language-goals-for-2022/">
                      <a>FUN WAYS TO LEARN FRENCH</a>
                    </Link>
                  </h2>
                  <div className={styles.postContent}>
                    <p>
                      FUN WAYS TO LEARN FRENCH The French language is said to be
                      a love language but unfortunately the least spoken...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={styles.gridContent}>
                  <div className={styles.imageContent}>
                    <Link href="https://spiika.com/5-simple-things-you-can-do-to-improve-your-french-quickly/">
                      <a>
                        {" "}
                        <Image
                          src="/images/image-asset.jpeg"
                          width={450}
                          height={220}
                          alt="How to achieve your language goals"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className={styles.postLanguage}>
                    <Link href="https://spiika.com/category/foreign-languages/french/">
                      <a>French</a>
                    </Link>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href="https://spiika.com/how-to-achieve-your-language-goals-for-2022/">
                      <a>
                        5 SIMPLE THINGS YOU CAN DO TO IMPROVE YOUR FRENCH
                        QUICKLY
                      </a>
                    </Link>
                  </h2>
                  <div className={styles.postContent}>
                    <p>
                      5 SIMPLE THINGS YOU CAN DO TO IMPROVE YOUR FRENCH QUICKLY
                      DETERMINATION is the key to learning French. The more...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 d-flex justify-content-center">
              <nav aria-label="...">
                <ul className="pagination gap-2 pt-3">
                  <li className="page-item active" aria-current="page">
                    <Link href="/">
                      <a
                        className="page-link border border-dark rounded-0"
                        style={{ color: "#000000", backgroundColor: "#fff" }}
                      >
                        1
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="https://spiika.com/page/2/">
                      <a
                        className="page-link border border-danger"
                        style={{ backgroundColor: "red", color: "#fff" }}
                      >
                        2
                      </a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="https://spiika.com/page/2/">
                      <a
                        className="page-link border border-danger rounded-0 "
                        style={{ color: "#fff", backgroundColor: "red" }}
                      >
                        Next<span aria-hidden="true">&raquo;</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
