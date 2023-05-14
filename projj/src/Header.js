import React, { useCallback, useState, useEffect } from "react";
import { render } from "react-dom";
import {
  Redirect,
  useNavigate,
  useHistory,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";
import worklists from "./pages/works.json";
import useMultilingual, { LanguageType } from "./useMultilingual";

const Header = (langlang) => {
  const navigate = useNavigate();
  const { title, author, description } = worklists;
  const [val, setVal] = useState(false);
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("ko");
  const m = useMultilingual(lang);

  const changeLang = ({ target: { value } }) => {
    return value && setLang(value);
  };

  function ChangeToKo() {
    return (
      <>
        {worklists &&
          worklists.lang.ko.map((e, i) => {
            //   console.log(e.name[0]);
            return (
              <>
                {e.web[0].title}
                {e.web[1].title}
              </>
            );
          })}
      </>
    );
  }

  const [toggled, toggle] = useState("");
  return (
    <div className="dd">
      <div className="header-con">
        <div className="left">
          <Link to="/works">
            {" "}
            <h5>WORK1S</h5>
          </Link>
        </div>
        <p onClick={() => navigate(-1) || navigate("/")}> back</p>

        <div className="right">
          <p>mail</p>
        </div>
      </div>
    </div>
  );

  const ToJa = () => {
    const [val, setVal] = useState("");

    const ChangeToKo = () => {
      return (
        <>
          <h5 style={{ border: "1px solid blue" }}>
            {val &&
              worklists &&
              worklists.lang.ko.map((e, i) => {
                //   console.log(e.name[0]);
                return (
                  <>
                    {e.web[0].title}
                    {e.web[1].title}
                  </>
                );
              })}
          </h5>
        </>
      );
    };

    const ChangeToJaa = () => {
      return (
        <>
          <h5 style={{ border: "1px solid red" }}>
            {val &&
              worklists &&
              worklists.lang.ja.map((e, i) => {
                //   console.log(e.name[0]);
                return (
                  <>
                    {e.web[0].title}
                    {e.web[1].title}
                  </>
                );
              })}
          </h5>
        </>
      );
    };

    return (
      <>
        <div
          style={{ border: "1px solid red" }}
          value="ja"
          onClick={() => setVal((a) => !a)}
        >
          日dlfdlf
        </div>{" "}
        <div onClick={() => setVal((b) => !b)}>KOOOOO</div>
        <div className="workbtm">
          <ChangeToJaa />
        </div>
        <ChangeToKo />
      </>
    );

    {
      /*
            
                        <h1 onClick={() => toggle(key)}>{title}</h1>
toggled && key == 1  
            {toggled === key ? (
              <>
                <p>{text}</p>
              </>
            ) : null}

            {toggled && key == 3 ? (
              <>
                <p>{text}</p>
              </>
            ) : null}
            
            
                  {worklists &&
        worklists.lang.ja.map((e, i) => {
          //   console.log(e.name[0]);
          return (
            <>
              {e.web[0].title}
              {e.web[1].title}
            </>
          );
        })}
            */
    }
  };

  function ChangeToJa() {
    //alert('changed');
    return (
      <>
        {worklists &&
          worklists.lang.ja.map((e, i) => {
            //   console.log(e.name[0]);
            return (
              <>
                {e.web[0].title}
                {e.web[1].title}
              </>
            );
          })}
      </>
    );
  }

  // console.log(worklists);

  return (
    <>
      <div className="lang-con">
        <p value="ko">한</p>
        <ToJa />
      </div>

      <h5>
        {worklists &&
          worklists.lang.ko.map((e, i) => {
            //   console.log(e.name[0]);
            return (
              <>
                {e.web[0].title}
                {e.web[1].title}
              </>
            );
          })}
      </h5>

      <div>
        <span value="val" onClick={() => setShow(!show)}>
          koko click
        </span>

        <div value="ko">가나다가나다</div>
        {show && <div> shown </div>}

        {/*

                <p
          value="val"
          onClick={() => {
            setVal("ja");
            alert("triggered");
          }}
        >
          goToJa
        </p>


                <h3>
          {worklists && worklists.lang.web.map((a) => {
            {
              a.title
            }
          })}
        </h3>


        {worklists.lang.map((item) =>
          item === "ko" ? <div>{item.name}</div> : <div>sddd</div>
        )}
        */}
      </div>
      <div className="header-con">
        <p>가나다</p>
        <div className="left">
          <Link to="/works">
            {" "}
            <h5>WORK1S</h5>
          </Link>
        </div>
        <p onClick={() => navigate(-1) || navigate("/")}> back</p>

        <div className="right">
          <p>mail</p>
        </div>
      </div>
    </>
  );
};

export default Header;
