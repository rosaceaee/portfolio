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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Header from "../Header";
import worklists from "./worksimsi.json";
import useMultilingual, { LanguageType } from "../useMultilingual";
import Modal from "./Modal";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const Works = (langlang) => {
  const [show, setShow] = useState(false);
  const aboutSection = useRef(null);
  const showDalDal = () => {
    setShow((show) => !show);
  };
  const [showModal, setShowModal] = useState(false);

  const [lang, setLang] = useState("ko");
  const [sibal, setSibal] = useState([]);
  const m = useMultilingual(lang);
  const mm = useMultilingual;
  const aa = JSON.stringify(m);
  // console.log(aa);

  const Aa = Object.entries(m("WORKS"));
  const web = JSON.stringify(m("WORKS").yeombyung);
  const worksTit2 = Object.entries(m("WORKS").yeombyung);
  const strWorksTit2 = JSON.stringify(worksTit2);
  const wtf = Array.isArray(JSON.stringify(m("WORKS").yeombyung));
  let oh = worksTit2.map((itm) => itm[1].desc[0]);
  let urlLink = worksTit2.map((itm) => itm[1].link);
  console.log(worksTit2[0]);

  const slidee = Object.entries(m("WORKS").yeombyung);

  let inputArray = [
    { id: 1, name: "name1", value: "value1" },
    { id: 2, name: "name2", value: "value2" },
  ];

  let ids = inputArray.map((item) => item.id);
  let names = inputArray.map((item) => item.name);
  let values = inputArray.map((item) => item.value);

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

  // no use - ToggleItem
  const ToggleItem = ({ descc, subDesc, etcDesc, link, id }) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    return (
      <div
        className="works work-img"
        key={id}
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        {/* 
     <button
       className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
     >
        click this btn for toggle h-info block {id}
      </button>
            */}

        {toggleThisElement && (
          <div className="desc-on">
            <h2>{descc}</h2>
            <p>참여비율: {subDesc}</p>
            <a href={link} target="_blank" className="btn">
              {" "}
              check
            </a>
            <span>{etcDesc}</span>
          </div>
        )}
      </div>
    );
  };

  const ToggleItem2 = ({
    id,
    descc,
    subDesc,
    detailDesc,
    link,
    bg,
    bgg,
    key,
  }) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);

    return (
      <div
        className="works work-img"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        {toggleThisElement && (
          <>
            <div
              style={{
                backgroundImage: `url(${bg})`,
              }}
              className="forCenter"
            >
              <div className="desc-on">
                {/* <h2> {m("WORKS").one[0]}</h2> <p> {Aa[0]} </p> */}
                <div className="top-img-con">
                  <div
                    style={{
                      backgroundImage: `url(${bgg})`,
                    }}
                  />
                </div>
                <h1>
                  {worksTit2[1].map((a, id) => {
                    return (
                      <>
                        <span>{id}</span>
                      </>
                    );
                  })}
                </h1>
                <h2>{descc}</h2>
                <p>참여비율:{subDesc} </p>
                <p className="descText">{detailDesc}</p>
                <a href={link} rel="noreferrer" target="_blank" className="btn">
                  {" "}
                  check
                </a>

                <div style={{ border: "1px solid #F0C66B" }}>
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

  function LangBtn({ setLang }) {
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

  function Parent({ setLang, haha }) {
    const mapper = new Map([
      ["1", "a"],
      ["2", "b"],
    ]);
    // console.log(Array.from(mapper.values()));

    return (
      <>
        {" "}
        <LangBtn setLang={setLang} />
        {/* <Header /> 
        <nav>
          <p>web</p>
          <p onClick={() => scrollDown(aboutSection)}>app </p>
        </nav>*/}
        <section>
          <section className="works-con">
            <h2 className="tit">Works</h2>

            {worksTit2 &&
              worksTit2.map((a, b, key) => {
                const { yummy } = a;

                return (
                  <>
                    <div
                      className="testCon"
                      style={{ backgroundImage: `url(${a[1].bg})` }}
                    >
                      <ToggleItem2
                        key={key}
                        descc={a[1].desc[0]}
                        link={a[1].link}
                        subDesc={a[1].desc[2]}
                        detailDesc={a[1].desc[3]}
                        dd={a[1].render}
                        bgg={a[1].bg}
                      />
                    </div>
                  </>
                );
              })}
            {/* 
            {worklists.web.map((a, id, b) => {
              return (
                <>
                  <div>
                    <ToggleItem
                      id={id}
                      descc={a.desc[0]}
                      link={a.desc[1]}
                      link={row[2]}
                      subDesc={a.desc[2]}
                      etcDesc={a.desc[3]}
                    />
                    ;
                  </div>
                </>
              );
            })}
            */}
          </section>

          <section className="preview-con" ref={aboutSection}>
            <div className="inner">
              <div className="desc-wrap">
                <h2>루시드 영어학원</h2>
                <p>회사 보안 상 상세한 내용은 기재하지 않았습니다.</p>
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
                    <img src={require("../images/pn8.png")} alt="img" />
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
      <main id="worklist">
        <Parent setLang={setLang} />
        {/*
        <section style={{ border: "1px solid", height: "100vh" }}>
          <section className="works-con">
            <h2 className="tit">Web</h2>
            {worklists.web.map((a, id, b) => {
              return (
                <>
                  <div>
                    <ToggleItem
                      id={id}
                      descc={a.desc[0]}
                      link={a.desc[1]}
                      subDesc={a.desc[2]}
                      etcDesc={a.desc[3]}
                    />
                    ;
                  </div>
                </>
              );
            })}
          </section>
          <section className="works-con app-con" ref={aboutSection}>
            <h2 className="tit">App</h2>
            {worklists.app.map((a, id) => {
              return (
                <>
                  <div className="works work-img">
                    <ToggleItem id={id} descc={a.desc} />;
                  </div>
                </>
              );
            })}
          </section>
        </section>
*/}

        {/* 
          <div className="works work-img" onClick={() => test()}>
            <h4>1</h4>
            <div className={show ? "desc-on" : "desc"}>
              <p>웹앱</p>
              <p>파닉스몬스터</p>
              <p>유아이 개선 참여</p>
              <p>https://epublic-phonics.cloubot.com/</p>
            </div>
          </div>{" "}
          <div>
            <h4>피엠</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>ㅁㅁ로펌</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div className="works work-img" onClick={() => test()}>
            <h4>ㅁㅁ로펌</h4>
            <div className={show ? "desc-on" : "desc"}>
              <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
              <p> 디자인, 퍼블리싱 100% (이미지 선정 제외) </p>
            </div>
          </div>
          {/*<h1 ref={targetRef}>asdf</h1>
        </section>
        <section className="works-con app-con" ref={aboutSection}>
          <h2>App</h2>
          <div>
            <h4>교육용1</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>교육용2</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>
          <div>
            <h4>교육용3</h4>
            <p>사내 보안으로 url을 제공할 수 없어 캡처본으로 대체합니다.</p>
            <p> 와꾸짜기 100% </p>
          </div>{" "}
        </section>*/}
      </main>
    </>
  );
};

export default Works;
