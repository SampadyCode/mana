import { useState } from "react";
import { useSize } from "../Hook/hooks.jsx";
import Menu from "./Menu.jsx";
import Search from "./Search.jsx";

export default function Header() {
  const [width, setWidth] = useState(window?.innerWidth);
  window?.addEventListener("resize", () => {
    setWidth(window?.innerWidth);
  });

  const [status, setStatus] = useState(false);

  const MenuBtnClick = () => {
    if (status) setStatus(false);
    else setStatus(true);
  };

  const [searchBox, setSearchBox] = useState(false);
  const SearchBoxClick = () => {
    if (searchBox) setSearchBox(false);
    else setSearchBox(true);

    MenuBtnClick();
  };

  return (
    <>
      <span className="header--top"></span>
      <header className="header">
        <img
          src=""
          alt="لیگ علمی مانا"
          className="header__logo fibo-1--ci bg-main"
        />
        <h1 className="header__title">لیگ علمی مانا</h1>

        {width >= useSize("xl") ? (
          <Menu SearchBoxClick={SearchBoxClick}></Menu>
        ) : (
          <button
            onClick={MenuBtnClick}
            className="header__menu-icon bi bi-list"
          ></button>
        )}
      </header>

      <Search
        open={searchBox}
        close={() => {
          setSearchBox(false);
        }}
      />

      {width < useSize("xl") ? (
        <Menu
          SearchBoxClick={SearchBoxClick}
          status={status && !searchBox}
          function={MenuBtnClick}
        />
      ) : (
        ""
      )}
    </>
  );
}
