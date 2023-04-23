import React, { useCallback, useState, useEffect } from "react";
import {
  Redirect,
  useNavigate,
  useHistory,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="lang-con">
        <p>한</p>
        <p>Eng</p>
        <p>日</p>
      </div>
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
    </>
  );
};

export default Header;
