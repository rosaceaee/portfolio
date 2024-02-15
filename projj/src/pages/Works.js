import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Scrollbar, A11y } from "swiper";
import useMultilingual, { LanguageType } from "../useMultilingual";
import Modal from "./Modal";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const Works = ({ langu }) => {
  const [show, setShow] = useState(false);
  const aboutSection = useRef(null);
  const showDalDal = () => {
    setShow((show) => !show);
  };
  const [showModal, setShowModal] = useState(false);

  const [lang, setLang] = useState("ko");
  const m = useMultilingual(lang);
  // console.log(aa);

  const worksTit2 = Object.entries(m("WORKS").langs);
  console.log(worksTit2[0]);

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
                <span>{descc === "meta exam" ? "dd" : "nn"}</span>
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
  //const final = worklists.map(({id, name}: {id: string, name: string}) => ({id, name}));

  function LangBtn({ lang }) {
    return (
      <>
        {" "}
        <div className="set-lang-btn" onClick={changeLang}>
          <button value="ko">Ko</button>
          <button value="en">Eng</button>
          <button value="ja">Ja</button>
        </div>
      </>
    );
  }

  function Parent({ setLang }) {
    const mapper = new Map([
      ["1", "a"],
      ["2", "b"],
    ]);
    // console.log(Array.from(mapper.values()));

    return (
      <>
        {" "}
        <LangBtn setLang={setLang} />
        <section style={{ margin: "0 1rem" }}>
          <section className="works-container">
            <h2 className="tit">Works</h2>

            <Swiper
              direction={"horizontal"}
              slidesPerView={2}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
            >
              {" "}
              {worksTit2 &&
                worksTit2.map((a, b, key) => {
                  return (
                    <>
                      {" "}
                      <SwiperSlide>
                        <div className="works-wrap">
                          <div
                            className="testCon"
                            style={{ backgroundImage: `url(${a[1].bg})` }}
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
                      </SwiperSlide>
                    </>
                  );
                })}
            </Swiper>
          </section>

          <section className="preview-con" ref={aboutSection}>
            <h3 style={{ textAlign: "center", marginTop: "3rem" }}>
              {" "}
              일부 작업물은 보안상 공개가 어려워 스크린샷 일부로 대체합니다.
            </h3>
            <div className="inner">
              <div className="desc-wrap">
                <h2>루시드 영어학원</h2>
                <p></p>
              </div>
              <div className="swiper-wrap">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  Navigation
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <img src={require("../images/lucid1.jpeg")} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={require("../images/lucid2.jpeg")} alt="img" />
                  </SwiperSlide>
                </Swiper>{" "}
              </div>
            </div>
            <div className="inner">
              <div className="desc-wrap">
                <h2>meta exam</h2>
                <p>영어 시험 웹앱 작업, 퍼블리싱 100% 참여</p>
              </div>
              <div className="swiper-wrap">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  Navigation
                  pagination={{ clickable: true }}
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
                </Swiper>{" "}
              </div>
            </div>
            <div className="inner">
              <div className="desc-wrap">
                <h2>phonics monster</h2>
                <p>반응형 작업</p>
              </div>
              <div className="swiper-wrap">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  Navigation
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <img src={require("../images/pn1.png")} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={require("../images/pm12.png")} alt="img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={require("../images/sea.png")} alt="img" />
                  </SwiperSlide>
                </Swiper>{" "}
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }

  return (
    <>
      <main id="worklist" langu={langu}>
        <Parent setLang={setLang} />
      </main>
    </>
  );
};

export default Works;
