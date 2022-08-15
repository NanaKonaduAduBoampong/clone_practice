import React from "react";
import styles from "../styles/Team.module.css";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
   
    <div className={styles.content}>
      <div className={styles.content_wrapper}>
        <div className={styles.section_one}>
          <div className="container-fluid">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h2 className={styles.innerText}>Our Team</h2>
              </div>
            </div>
          </div>
        </div>

      
       <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-0 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block  justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Group-1-8.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Stephanie Diatta</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love adventure so much that I have already moved to 3
                    different countries. Also, years ago, I was so focused
                    preparing for an oral exam that I went there in slippers.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block   justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Eyram.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Michelle Djamson</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Customer Acquisition{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Asante Twi and Fante
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    When I was a kid I wondered why I didn{`'`}t have a wiener
                    like my male friends so I used to pee upstanding.
                  </p>
                  <div className="mt-5">
                    <Link href="https://web.facebook.com/stephanie.diatta.562">
                      <i className="bi bi-facebook icon-circled"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                      <i className="bi bi-linkedin icon-circled"></i>
                    </Link>
                  </div>
                </div>
                <div className="col d-block  justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Mildred-Ayishetu-Nelson.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>
                    Mildred-Ayishetu-Nelson
                  </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love adventure so much that I have already moved to 3
                    different countries. Also, years ago, I was so focused
                    preparing for an oral exam that I went there in slippers.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
        </div>
       </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/amanda.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Amanda Cartey</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Customer Acquisition{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Twi, English, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I like to eat boiled tilapia with ice cream.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-12.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>
                    Alice Serwaa Owusu-Addo
                  </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Accounts{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Asante Twi and Ewe
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I can eat Kenkey for a month and I sometimes sleep with my
                    glasses on throughout the night.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/edem.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Yvonne Edem Cole</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Customer Acquisition
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Twi and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love to walk with my eyes closed...👀
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Group-1-7.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>
                    Agbavitor Selorm Kwadzo
                  </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Ewe and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love boiled yam with mayonnaise...🤭
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-1.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Zulaiha Hamza</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Hausa, Twi, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I can sew a dress with just a needle and thread.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-12.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Eugenia Esenam Creppy</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Twi, Ewe and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I am a fan of Korean series,I watch it throughout the night
                    till morning 🙈.I can also read the mind sometimes😂
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container ">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Odonyo-Adzika.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Odonyo Adzika</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French and English
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I{`'`}m born of Ghanaian parents with coined names from
                    Ghanaian local dialects but I don{`'`}t know a word of any
                    Ghanaian dialect🌚
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-5.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Sandra Owusu-Asiedu</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love to meet people online, but I tend to be awkward with
                    physical interaction. 😫. You actually experience me in my
                    most comfortable element on the screen.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-110.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Dellah Lukutor</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Co-Founder
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Ewe, Twi, Ga, and Adangme
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    My mind is almost always at a different place from where I
                    {`'`}m physically located.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Group-1-6.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Mabel Oppong-Adjei</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I can{`'`}t dance to save my life but my foreign friends
                    think I am the best in the game. I talk to myself a lot more
                    than I talk to actual people. Also, I don{`'`}t eat freshly
                    killed chicken.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/David.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>David-Living Asiam </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Ewe, English, Twi, Ga, French, and Spanish
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I eat banana with light soup to deal with stress.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-13.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>
                    Joycelyn Naa Amerley Okyere
                  </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I like to laugh extremely loud till I can{`'`}t breath
                    anymore. I also like to crack funny jokes to get those
                    around me to laugh the same way.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Group-1-11.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Margeret Adoboe </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I had to organize some people to send text messages and call
                    into a radio programme I was hosting because there were no
                    callers. I was a student journalist by then.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-15.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Etornam Fianoo-Vidza</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Founder
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Spanish, Ewe, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I only like movies in which people die, the more kills, the
                    better.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-9.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Alphonse Dayi Zekpa</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Ewe, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    Instead of the job I have, I{`'`}ve always dreamed of being
                    an archeologist like Indiana Jones in his movies.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Helene.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Helene Esimebia Kpobi</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French and English
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    Always waking up after 12am to eat and go back to bed🥱🥱
                    and I don{`'`}t eat vegetables😕
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Janice-Kanyire-Annyaah.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Janice Kanyire Annyaah</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Dagaare, Dagbani, English, French, and Portuguese
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I can eat kenkey for breakfast, lunch and supper every
                    single day without getting fed up.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-1-2.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Joshua Shamo Abbey</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I can talk for the whole world. I like ladies and eat a lot.
                    I eat six times in the evening usually. I{`'`}m a fun of
                    Barbie and Korean series.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/LORETTA.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Loretta Selorm Amartey</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Ewe, And Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    Hi, I{`'`}m Loretta you can call me Lottie. I{`'`}m
                    passionate about teaching, lover of music and cats. I bet
                    you would love to be a part of my class because I am a
                    limited edition. There is only one me. Lol
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Dzikunu-Yvette-Edinam.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Dzikunu Yvette Edinam </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French, English, Spanish, Ewe, Twi, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I{`'`}m your French friendly gym rat( Je suis une véritable
                    rat de gymnase).
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Group-14.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Attie Biletchi Charles</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French, English, Nzema, and Agni
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    Dancing and chilling.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Emmanuel-Kofi-Adu.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Emmanuel Kofi Adu</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Twi, Ga, English, Spanish, basic Turkish, and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I have intense conversation with insects, especially ants
                    and cockroaches to find out why they bit/bite me and what
                    they{`'`}re doing in my room respectively😕.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Anatu.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Anatu Lambon </h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Customer Acquisitio{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Twi, and Bimoba
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I am attracted to men with bulgy eyes with long eyelashes.
                    Also, a day without bread is like a car without an
                    engine😛😛😛
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Nathaniel-Asah-Awuku.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Nathaniel Asah Awuku</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    wi, English, French, Fantse, Twi, and Ga
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I usually communicate with my inner self so I{`'`}m usually
                    quiet on the outside but a talker inside.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Juliet-Doku.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Juliet Doku</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Ga, and Twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I like to wake up at dawn just to bake, eat and go back to
                    bed.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Derrick-Adjei.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Derrick Adjei Kankam</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, Twi, and French
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I like to spend most of my time indoors.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Eyram-Pearl.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Eyram Pearl</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Ewe, Twi , Fante , Ga, English, French, and Spanish
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love taking pictures of nature and this really comes in
                    handy when I have to take quick shots of people before they
                    realize it.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Edna-Ahenfoa-Aidoo.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Edna Ahenfoa Aidoo</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Fante, Chinese, and Spanish
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    Dancing on the streets is my toxic trait.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Musa-Haudu.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Musa Haudu</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Chief Photographer
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    Ewe, Ife, Akposso, French, and English
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I{`'`}m never satisfied with any work I do. I always think I
                    can do it better.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Nina-Abena-Amoah.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Nina Abena Amoah</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French, English, and Ewe
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I talk a lot when I am watching a movie so people around me
                    get a little bored😄
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section_two}>
          <div className="container-fluid">
            <div className="container">
              <div
                className="row my-5 mx-auto d-block d-sm-flex"
                style={{ verticalAlign: "baseline" }}
              >
                <div className="col d-block justify-content-center text-center section_column">
                  <Image
                    src="/images/team_images/Marianne-Sekyi-Yorke.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Marianne Sekyi-Yorke</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher{" "}
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    French and English
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I used to dislike French a lot.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col d-block justify-content-center text-center ">
                  <Image
                    src="/images/team_images/Loretta-Selorm-Amartey.png"
                    width={300}
                    height={300}
                    alt=""
                  />
                  <h3 className={styles.profileName}>Loretta Selorm Amartey</h3>
                  <p className={styles.profileRole}>
                    {" "}
                    <span id="role">Role: </span>Teacher
                  </p>
                  <p className={styles.profileLanguage}>
                    <span id="speaks" style={{ fontWeight: "bold" }}>
                      Speaks:{" "}
                    </span>{" "}
                    English, French, Ewe and twi
                  </p>
                  <p className={styles.profileBio}>
                    <span id="weird" style={{ fontWeight: "bold" }}>
                      Weird thing:
                    </span>
                    I love all kinds of biscuits and I tend to suck them to
                    enjoy the flavors better.
                  </p>
                  <Link href="https://web.facebook.com/stephanie.diatta.562">
                    <i className="bi bi-facebook icon-circled"></i>
                  </Link>
                  <Link href="https://www.linkedin.com/in/st%C3%A9phanie-diatta-b32b38167">
                    <i className="bi bi-linkedin icon-circled"></i>
                  </Link>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  
  );
};

export default Team;
