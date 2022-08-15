import React from "react";
import styles from "../styles/News.module.css";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <div className={styles.mainSection}>
      <div className="container-fluid">
        <div className="container">
          <div className="row d-block d-sm-flex">
            <div className="col">
              <Image
                src="/images/news_images/Adansi-travel.jpg"
                width={451}
                height={301}
                alt="Adansi-travel"
              />
              <h1 className={styles.newItem}>
                Adansi Travels moves to capacitate its staff with
                French-learning platform SPiiKA
              </h1>
              <h5 className={styles.postAuthor}>
                By The B &amp; FT online{" "}
                <span className={styles.postDate}>- March 26, 2022</span>
              </h5>
              <p className={styles.newsText}>
                You wouldn{`'`}t have bet on a travel and tour brand expanding
                in the middle of the COVID-19 pandemic, right? Well Adansi
                Travels is doing just that. This is the company that has not
                only refused to kowtow{" "}
              </p>
              {/* <div className="mb-3"> */}
              <Link href="https://thebftonline.com/2022/03/26/adansi-travels-moves-to-capacitate-its-staff-with-french-learning-platform-spiika/">
                <a className={styles.noticeText}>Read More</a>
              </Link>
              {/* </div> */}
            </div>
            <div className="col">
              <Image
                src="/images/news_images/Mr.-David-Living-Asiam-Language-Coach-at-Spiika.webp"
                width={451}
                height={301}
                alt="Adansi-travel"
              />
              <h1 className={styles.newItem}>
                Changing the rules, one French SPiiKA at a time
              </h1>
              <h5 className={styles.postAuthor}>
                By The B &amp; FT online{" "}
                <span className={styles.postDate}>- October 16, 2021</span>
              </h5>
              <p className={styles.newsText}>
                The fear of making mistakes, discomfort, embarrassment are among
                the most often cited reasons people have foreign language
                anxiety. “As such, the teachers and learners alike fall into the
                trap of focusing on grammar structure, syntax, and conjugation,
                whilst ignoring speaking,
              </p>
              <div className="mb-5">
                <Link href="https://thebftonline.com/2021/10/16/changing-the-rules-one-french-spiika-at-a-time/">
                  <a className={styles.noticeText}>Read More</a>
                </Link>
              </div>
            </div>
            <div className="col">
              <Image
                src="/images/news_images/spiika.jpg"
                width={451}
                height={301}
                alt="Adansi-travel"
              />
              <h1 className={styles.newItem}>
                Young Startup SPiiKA Sets The Pace For Speaking And Learning
                French
              </h1>
              <h5 className={styles.postAuthor}>
                By Peace FM Online{" "}
                <span className="postDate">- September 26, 2021</span>
              </h5>
              <p className={styles.newsText}>
                The sea does not speak French or maybe it does. The waters that
                cover the southern borders of Ghana, the Gulf of Guinea, is the
                only reason Ghana is not surrounded by French-speaking countries
                on all four cardinals.
              </p>
              <div className="mb-5">
                <Link href="https://www.peacefmonline.com/pages/local/education/202109/451826.php">
                  <a className={styles.noticeText}>Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
