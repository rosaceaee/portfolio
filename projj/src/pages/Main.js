import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Scrollbar, A11y } from "swiper";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useMultilingual, { LanguageType } from "../useMultilingual";
import Modal from "./Modal";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { ReactComponent as GitHub } from "../images/github.svg";
import { ReactComponent as Mail } from "../images/mail.svg";
import "../styles/new_common.scss";

const Main = () => {
  const [show, setShow] = useState(false);
  const aboutSection = useRef(null);
  const showDalDal = () => {
    setShow((show) => !show);
  };
  const [showModal, setShowModal] = useState(false);

  const [lang, setLang] = useState("ko");
  const m = useMultilingual(lang);
  // console.log(aa);

  const v = ["About", "Works"];
  const worksTit2 = Object.entries(m("WORKS").langs);
  const maindesc = Object.entries(m("ABOUT").langs);

  let inputArray = [
    { id: 1, name: "name1", value: "value1" },
    { id: 2, name: "name2", value: "value2" },
  ];
  const tabTop = useRef(null);
  const tabWork = useRef(null);
  const tabBottom = useRef(null);

  const changeLang = ({ target: { value } }) => {
    return value && setLang(value);
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const openModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const ToggleItem2 = ({ descc, subDesc, detailDesc, link }) => {
    const [toggleThisElement, setToggleThisElement] = useState(true);

    return (
      <div>
        {toggleThisElement && (
          <>
            <div className="forCenter">
              <div className="desc-on">
                {/* <h2> {m("WORKS").one[0]}</h2> <p> {Aa[0]} </p> */}
                <div className="add-slide-con">
                  {descc === "Meta exam" ? <MetaSlides /> : ""}
                  {descc === "Phonics monster" ? <Pm /> : ""}
                  {descc === "LMS" ? <Lms /> : ""}
                </div>
                <h2>{descc}</h2>
                <p>{subDesc} </p>
                <p className="descText">{detailDesc}</p>
                <a href={link} rel="noreferrer" target="_blank" className="btn">
                  {" "}
                  Go
                </a>

                <div>
                  {showModal ? (
                    <>
                      <p onClick={openModal}>a</p>
                      <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const Greeting = ({
    name,
    position,
    infodesc,
    infodescTwo,
    infodescThree,
    hitokoto,
    hitokotoDesc,
    holidayDesc,
  }) => {
    return (
      <div className="aboutBox">
        <>
          {" "}
          <img src={require("../images/profile.png")} alt="profileimg" />
          <div className="wrap">
            <h2>{name}</h2>
            <p>{position}</p>
            <div className="cirwrap">
              <div className="cir">
                <p>{infodesc}</p>
              </div>{" "}
              <div className="cir">
                <p>{infodescTwo}</p>{" "}
              </div>
              <div className="cir">
                <p>{infodescThree}</p>{" "}
              </div>
            </div>
            <div className="about-desc-wrap">
              <h5>{hitokoto}</h5>
              <p>{hitokotoDesc}</p>
              <p>{holidayDesc}</p>
            </div>

            <div className="skill-con">
              <h3>Working With...</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="css3-simple"
              >
                <path
                  fill="#61dbfb"
                  d="M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z"
                ></path>
              </svg>

              <svg
                fill="#61dbfb"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
              >
                <g id="5151e0c8492e5103c096af88a51ef0ed">
                  <path
                    display="inline"
                    d="M499.161,364.63c0,0-63.554,171.386-282.354,131.488c-3.443-0.641-6.745-1.838-10.089-2.849
                        c-0.782-0.229-1.572-0.479-2.354-0.703c-3.285-1.022-6.537-2.07-9.769-3.197c-0.37-0.129-0.723-0.25-1.098-0.383
                        c-2.944-1.035-5.872-2.134-8.762-3.244c-0.757-0.295-1.51-0.582-2.263-0.89c-3.114-1.23-6.212-2.516-9.277-3.859
                        c-0.565-0.249-1.11-0.499-1.684-0.752c-2.683-1.193-5.332-2.429-7.959-3.685c-0.682-0.346-1.368-0.666-2.055-0.99
                        c-0.374-0.187-0.777-0.374-1.16-0.565c-1.696-0.848-3.352-1.729-5.023-2.604c-1.289-0.665-2.599-1.313-3.88-2
                        c-2.366-1.289-4.699-2.599-7.02-3.938c-0.861-0.491-1.73-0.965-2.583-1.46c-3.152-1.854-6.271-3.78-9.344-5.727
                        c-0.869-0.557-1.729-1.147-2.586-1.722c-2.004-1.297-4.009-2.595-5.972-3.95c-0.208-0.142-0.407-0.291-0.611-0.437
                        c-0.761-0.516-1.484-1.044-2.241-1.593c-2.071-1.439-4.121-2.911-6.15-4.408c-0.981-0.74-1.959-1.484-2.932-2.229
                        c-1.838-1.402-3.667-2.837-5.481-4.284c-0.902-0.723-1.817-1.438-2.719-2.17c-2.212-1.822-4.417-3.677-6.575-5.548
                        c-0.408-0.357-0.84-0.707-1.256-1.081c-0.042-0.017-0.071-0.05-0.117-0.088c-2.449-2.146-4.853-4.346-7.236-6.591
                        c-0.719-0.657-1.435-1.36-2.158-2.05c-1.78-1.71-3.543-3.432-5.277-5.178c-0.72-0.707-1.431-1.422-2.121-2.138
                        c-2.241-2.304-4.454-4.611-6.616-6.97c-0.079-0.107-0.158-0.17-0.253-0.274c-0.038-0.041-0.092-0.096-0.129-0.142
                        c-2.212-2.437-4.383-4.928-6.508-7.427c-0.595-0.703-1.193-1.422-1.78-2.133c-1.584-1.909-3.144-3.813-4.674-5.743
                        c-0.636-0.803-1.272-1.613-1.9-2.42c-1.717-2.217-3.414-4.45-5.057-6.721c-0.308-0.424-0.636-0.84-0.932-1.256
                        c-0.063-0.07-0.116-0.146-0.158-0.216c-1.904-2.633-3.742-5.315-5.547-8.001c-0.561-0.824-1.089-1.672-1.63-2.521
                        c-1.306-1.987-2.587-3.976-3.826-5.988c-0.648-1.031-1.264-2.066-1.888-3.103c-1.127-1.879-2.229-3.759-3.298-5.655
                        c-0.611-1.073-1.214-2.121-1.805-3.223c-0.329-0.582-0.686-1.182-1.006-1.792c-0.562-1.016-1.069-2.075-1.618-3.111
                        c-0.848-1.626-1.709-3.26-2.528-4.915c-34.557-69.094-40.196-153.694,5.048-218.723l35.314-44.789
                        c-39.843,77.007-21.936,170.778,27.908,238.76c1.8,2.475,3.643,4.916,5.526,7.356c0.583,0.736,1.168,1.477,1.751,2.184
                        c1.567,1.996,3.168,3.967,4.786,5.918c0.583,0.686,1.152,1.359,1.747,2.066c2.163,2.554,4.375,5.09,6.646,7.564
                        c0.108,0.12,0.212,0.229,0.316,0.345c2.146,2.342,4.333,4.653,6.558,6.933c0.69,0.698,1.393,1.389,2.096,2.088
                        c1.747,1.783,3.531,3.514,5.344,5.235c0.686,0.682,1.376,1.339,2.088,2.017c2.449,2.279,4.919,4.545,7.435,6.758
                        c0.262,0.229,0.532,0.44,0.773,0.652c2.329,2.025,4.687,3.997,7.074,5.96c0.832,0.678,1.68,1.355,2.528,2.029
                        c1.875,1.509,3.772,2.978,5.681,4.437c0.911,0.699,1.846,1.41,2.791,2.108c2.075,1.539,4.171,3.053,6.288,4.55
                        c0.719,0.486,1.418,1.015,2.146,1.505c2.188,1.514,4.417,2.986,6.654,4.425c0.84,0.558,1.672,1.14,2.52,1.681
                        c3.086,1.954,6.205,3.875,9.357,5.73c0.811,0.466,1.622,0.902,2.42,1.352c2.379,1.376,4.762,2.731,7.19,4.029
                        c1.314,0.731,2.666,1.393,3.996,2.096c1.988,1.023,3.976,2.063,5.988,3.044c0.761,0.374,1.501,0.724,2.246,1.077
                        c2.566,1.235,5.14,2.425,7.743,3.605c0.616,0.267,1.214,0.545,1.834,0.811c3.032,1.327,6.096,2.6,9.186,3.817
                        c0.794,0.316,1.589,0.62,2.387,0.937c2.811,1.089,5.643,2.146,8.508,3.156c0.445,0.158,0.89,0.32,1.322,0.478
                        c3.194,1.099,6.408,2.146,9.648,3.136c0.827,0.258,1.655,0.508,2.503,0.757c3.318,0.981,6.616,2.042,10.018,2.812
                        C351.039,452.521,445.783,434.173,499.161,364.63z M182.44,254.758c4.907,7.024,10.338,15.386,16.846,21.031
                        c2.354,2.598,4.824,5.13,7.34,7.621c0.632,0.648,1.285,1.272,1.938,1.908c2.437,2.371,4.932,4.704,7.494,6.97
                        c0.108,0.079,0.204,0.188,0.308,0.263c0.029,0.033,0.054,0.041,0.075,0.074c2.845,2.487,5.781,4.887,8.758,7.244
                        c0.662,0.508,1.318,1.036,1.988,1.552c2.99,2.291,6.039,4.545,9.166,6.69c0.096,0.066,0.17,0.134,0.266,0.2
                        c1.376,0.956,2.782,1.846,4.175,2.761c0.674,0.433,1.31,0.898,1.983,1.306c2.237,1.435,4.496,2.828,6.795,4.167
                        c0.325,0.2,0.641,0.366,0.961,0.553c1.975,1.14,3.992,2.267,6.005,3.356c0.698,0.391,1.414,0.74,2.129,1.114
                        c1.389,0.724,2.786,1.468,4.2,2.171c0.212,0.1,0.433,0.199,0.637,0.287c2.882,1.418,5.788,2.79,8.762,4.079
                        c0.632,0.283,1.289,0.532,1.934,0.799c2.375,1.006,4.77,1.992,7.178,2.915c1.022,0.387,2.059,0.757,3.073,1.127
                        c2.191,0.815,4.383,1.556,6.595,2.296c1.003,0.319,1.984,0.648,2.986,0.956c3.144,0.973,6.254,2.212,9.535,2.753
                        C472.501,366.942,511.5,236.873,511.5,236.873c-35.16,50.633-103.243,74.791-175.897,55.936c-3.223-0.849-6.403-1.776-9.56-2.77
                        c-0.974-0.292-1.922-0.607-2.883-0.928c-2.245-0.728-4.479-1.501-6.694-2.308c-1.011-0.37-2.025-0.74-3.02-1.123
                        c-2.425-0.932-4.824-1.896-7.198-2.902c-0.653-0.283-1.306-0.533-1.942-0.824c-2.981-1.299-5.917-2.663-8.812-4.094
                        c-1.493-0.729-2.953-1.499-4.425-2.254c-0.849-0.437-1.701-0.875-2.549-1.312c-1.88-1.021-3.751-2.08-5.594-3.154
                        c-0.437-0.252-0.894-0.491-1.339-0.755c-2.283-1.339-4.537-2.718-6.77-4.134c-0.687-0.438-1.352-0.915-2.038-1.366
                        c-1.477-0.954-2.944-1.921-4.392-2.902c-3.11-2.146-6.138-4.399-9.128-6.678c-0.69-0.543-1.376-1.073-2.059-1.616
                        c-31.796-25.111-57-59.423-68.994-98.33c-12.555-40.352-9.847-85.647,11.914-122.406l-26.735,37.738
                        c-32.715,47.085-30.939,110.113-5.419,159.91C172.252,238.95,177.063,247.046,182.44,254.758z M360.5,196.506
                        c1.393,0.52,2.782,0.981,4.191,1.458c0.616,0.189,1.231,0.401,1.851,0.584c1.988,0.626,3.963,1.352,6.018,1.738
                        c93.284,18.023,118.58-47.869,125.317-57.566c-22.165,31.91-59.405,39.57-105.111,28.481c-3.605-0.881-7.572-2.185-11.058-3.416
                        c-4.462-1.591-8.849-3.404-13.124-5.456c-8.121-3.899-15.848-8.629-23.025-14.045c-40.891-31.029-66.291-90.221-39.61-138.425
                        L291.51,29.76c-19.287,28.386-21.179,63.638-7.801,94.991C297.823,158.025,326.745,184.132,360.5,196.506z"
                  ></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="java-script"
              >
                <path
                  fill="#61dbfb"
                  d="M14.478,14.8829a4.06111,4.06111,0,0,1-2.18725-.39825,1.4389,1.4389,0,0,1-.53547-1.01019.22184.22184,0,0,0-.22662-.21942c-.31659-.00385-.63312-.003-.94965-.00043a.2113.2113,0,0,0-.23138.18628,2.33854,2.33854,0,0,0,.75305,1.84454,3.99135,3.99135,0,0,0,2.22827.8382,8.06151,8.06151,0,0,0,2.53308-.10755,3.12591,3.12591,0,0,0,1.67823-.90442,2.33824,2.33824,0,0,0,.396-2.23077,1.869,1.869,0,0,0-1.2304-1.09454c-1.28077-.4494-2.66431-.41541-3.97-.7569-.22668-.07135-.50366-.1488-.60467-.38879a.85461.85461,0,0,1,.28418-.95478,2.5576,2.5576,0,0,1,1.34875-.33581,4.07051,4.07051,0,0,1,1.88416.26959,1.43564,1.43564,0,0,1,.68677.99219.243.243,0,0,0,.2276.23565c.31433.00641.62878.00171.94311.00214a.22791.22791,0,0,0,.24732-.16772,2.43369,2.43369,0,0,0-1.18665-2.106,5.8791,5.8791,0,0,0-3.2182-.49243V8.08341a3.50546,3.50546,0,0,0-2.17615.87438,2.1746,2.1746,0,0,0-.43438,2.26264,1.92964,1.92964,0,0,0,1.21838,1.06177c1.27649.46106,2.67554.31311,3.96442.72082.25116.08521.54364.21552.6206.49506a.9907.9907,0,0,1-.26965.94616A2.97065,2.97065,0,0,1,14.478,14.8829Zm5.81891-8.44537q-3.73837-2.114-7.47845-4.22418a1.67742,1.67742,0,0,0-1.63733,0Q7.4556,4.31715,3.72968,6.42075a1.54242,1.54242,0,0,0-.8042,1.34271V16.2377a1.55266,1.55266,0,0,0,.8352,1.355c.71351.38837,1.40674.81629,2.13318,1.17884a3.06373,3.06373,0,0,0,2.73822.07525,2.1275,2.1275,0,0,0,.99482-1.92114c.00555-2.79669.00085-5.59351.00213-8.39026a.21981.21981,0,0,0-.20727-.25415c-.31739-.00513-.63526-.003-.95264-.00085a.20935.20935,0,0,0-.228.21368c-.00427,2.77875.00086,5.55829-.00256,8.33746a.94053.94053,0,0,1-.609.88373,1.53242,1.53242,0,0,1-1.23993-.16595q-.99152-.56-1.983-1.11988a.23714.23714,0,0,1-.13464-.23529q0-4.19383,0-8.38726a.2589.2589,0,0,1,.157-.2602Q8.1423,5.4553,11.85419,3.35953a.258.258,0,0,1,.29163.00043Q15.859,5.452,19.57184,7.5455a.262.262,0,0,1,.15613.26142Q19.72733,12,19.72712,16.19376a.242.242,0,0,1-.13294.23828q-3.65643,2.06753-7.31677,4.12909c-.11658.06494-.25458.16943-.39093.09076-.6391-.36176-1.27039-.73755-1.90735-1.10273a.20589.20589,0,0,0-.22968-.01379,5.21834,5.21834,0,0,1-.88208.41162c-.13806.05591-.30792.07184-.40295.19989a1.31566,1.31566,0,0,0,.43127.31061q1.11741.647,2.236,1.29285a1.62967,1.62967,0,0,0,1.65539.046q3.7261-2.101,7.45185-4.20392a1.55627,1.55627,0,0,0,.83563-1.35474V7.76346A1.53956,1.53956,0,0,0,20.29694,6.43753Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="react"
              >
                <path
                  fill="#61dbfb"
                  d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"
                ></path>
              </svg>
            </div>
          </div>
        </>
      </div>
    );
  };

  function LangBtn({ lang }) {
    return (
      <>
        {" "}
        <div className="set-lang-btn" onClick={changeLang}>
          <button value="ko">한국어</button>
          <button value="en">Eng</button>
          <button value="ja">日</button>
        </div>
      </>
    );
  }

  function Parent() {
    // console.log(Array.from(mapper.values()));

    return (
      <>
        {" "}
        <section style={{ margin: "0 1rem" }}>
          <section className="works-container">
            <h2 className="tit">Works</h2>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 1600: 3, 1024: 2, 600: 1 }}
            >
              <Masonry>
                {worksTit2 &&
                  worksTit2.map((a, index, key, btnn, descc) => {
                    return (
                      <>
                        {" "}
                        <div className="works-wrap">
                          <div
                            className="testCon"
                            // style={{ backgroundImage: `url(${a[1].bg})` }}
                            style={{
                              backgroundImage:
                                index < 2 ? "none" : `url(${a[1].bg})`,
                              display: index < 3 ? "none" : "",
                            }}
                          ></div>
                          <ToggleItem2
                            key={key}
                            descc={a[1].desc[0]}
                            link={a[1].link}
                            subDesc={a[1].desc[2]}
                            detailDesc={a[1].desc[3]}
                            dd={a[1].render}
                            bgg={a[1].bg}
                          />
                        </div>{" "}
                      </>
                    );
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </section>
        </section>
      </>
    );
  }

  function MetaSlides(e) {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoHeight={true}
          navigation
          className="meta-slide-wrap"
        >
          <SwiperSlide>
            <img src={require("../images/meta1.jpg")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/meta2.jpg")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/meta3.jpg")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/meta4.jpg")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/print_screenshot.png")} alt="img" />
          </SwiperSlide>
          <SwiperSlide style={{ display: "none" }}>
            <img src={require("../images/creo.png")} alt="img" />
          </SwiperSlide>
        </Swiper>{" "}
      </>
    );
  }

  function Pm() {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          className="meta-slide-wrap"
        >
          <SwiperSlide>
            <img src={require("../images/pn1.png")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/pm12.png")} alt="img" />
          </SwiperSlide>
        </Swiper>{" "}
      </>
    );
  }

  function Lms() {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          className="meta-slide-wrap"
        >
          <SwiperSlide>
            <img src={require("../images/1.png")} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../images/bookr_after.png")} alt="img" />
          </SwiperSlide>
        </Swiper>{" "}
      </>
    );
  }

  const swiperRef = useRef();
  const swipernavv = useRef();
  const [burger, setBurger] = useState(false);

  const burgerr = () => {
    //take current value of responsive and flip it
    setBurger((prev) => !prev);
  };
  return (
    <>
      <main id="main" className="maincon">
        {/*<LangBoxx />*/}{" "}
        <section className={burger ? "nav-wrap active" : "nav-wrap hide"}>
          {" "}
          <div className="left-nav">
            <div>
              <div className="pagi" />
            </div>
            <LangBtn setLang={setLang} />{" "}
            <footer>
              {" "}
              <a href="https://github.com/rosaceaee/" target="_blank">
                <GitHub />
              </a>
            </footer>
          </div>
          {/*<div>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                Prev
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                Next
              </button>
            </div>
            */}{" "}
        </section>{" "}
        {}
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          allowTouchMove={false}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          pagination={{
            el: ".pagi",
            clickable: true,
            renderBullet: (index, className) => {
              return '<h3 class="' + className + '">' + v[index] + "</h3>";
            },
          }}
          Navigation={true}
          modules={[Mousewheel, Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="main-swiper"
        >
          <SwiperSlide>
            {" "}
            <section className="main-center-con top-main">
              <div className="me" ref={tabTop}>
                {" "}
                <div className="greeting">
                  <div className="desc">
                    {maindesc &&
                      maindesc.map((a) => {
                        return (
                          <>
                            {" "}
                            <div className="about-wrap">
                              {" "}
                              <Greeting
                                name={a[1].desc[0]}
                                position={a[1].desc[1]}
                                infodesc={a[1].desc[2]}
                                infodescTwo={a[1].desc[3]}
                                infodescThree={a[1].desc[4]}
                                hitokoto={a[1].desc[5]}
                                hitokotoDesc={a[1].desc[6]}
                                holidayDesc={a[1].desc[7]}
                              />
                            </div>{" "}
                          </>
                        );
                      })}
                  </div>

                  <div className="nextBtn">
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="184px"
                        height="184px"
                        viewBox="-6.96 -6.96 37.92 37.92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g
                          id="SVGRepo_bgCarrier"
                          stroke-width="0"
                          transform="translate(0,0), scale(1)"
                        >
                          <path
                            transform="translate(-6.96, -6.96), scale(1.185)"
                            d="M16,29.67152639850974C18.495720792277826,29.312715341026042,20.035224604209056,26.889539899512286,21.927115217842854,25.22277130308843C23.525075907289356,23.814956984281945,25.034827761199264,22.436669609571936,26.220238279571074,20.66742643120827C27.6062849849453,18.598730700597564,29.305845583139668,16.562232068911122,29.397039126252906,14.073796569843452C29.49472435630486,11.408219754892631,28.5768104236399,8.627206014560144,26.732079711414123,6.700599993614333C24.917010328316145,4.804971770624688,22.194185867146032,4.013237122174282,19.576987737107913,3.8178985100682485C17.247937685319357,3.644066273440737,15.228322679873488,5.086137995938722,12.967801990484764,5.673281933208562C10.611100827425284,6.285407629001833,7.984007363959868,5.918975859078492,6.0083573133007775,7.3421923277672985C3.810790660263004,8.925272818465187,1.841221361422532,11.2288599236253,1.5222516913801787,13.91841404729803C1.2047635649490902,16.595475786573992,3.038642496800771,18.96506398250981,4.350638740902372,21.320085027380376C5.5651759965232435,23.500168095167723,6.837887814182813,25.64652935249196,8.866103485483348,27.10055965425155C10.962881415279451,28.603742323197864,13.44632774033315,30.038669168162897,16,29.67152639850974"
                            // fill="#66b5ff"
                            strokewidth="0"
                          ></path>
                        </g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#fff5f0"
                          stroke-width="1.7759999999999998"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
                            stroke="#fff5f0"
                            stroke-width="1.536"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="main-center-con worklist-con">
              <div id="worklist" ref={tabWork}>
                <Parent setLang={setLang} />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </main>{" "}
      <button onClick={burgerr} className={burger ? "burger open" : "burger"}>
        <div></div>
      </button>
    </>
  );
};

export default Main;
