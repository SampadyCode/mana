import { useRef } from "react";
import Contact from "./Contact";

export default function Footer() {
  const heartClick = ({ target }) => {
    target.classList.toggle("bi-heart");
    target.classList.toggle("bi-heart-fill");
    if (target.classList.toggle("clicked"))
      window?.localStorage.setItem("heart-status", "clicked");
    else window?.localStorage.setItem("heart-status", "default");
  };

  const heart = useRef()

  window.onload = () => {
    if (window?.localStorage.getItem("heart-status") === "clicked")
      heartClick({ target: heart.current });
  };

  return (
    <footer className="footer">
      <i className="bi bi-c-circle"></i> copyright&nbsp;
      {new Date().getFullYear()} -
      <a className="footer__link-samcode" href="https://github.com/sampadycode"> SampadyCode </a>
      <i ref={ heart } onClick={heartClick} className="bi bi-heart footer__icon--heart"></i>
      <i className="bi bi-cup-hot-fill footer__icon--cup"></i>

      <Contact link="mailto:shayanfpg9@duck.com" />
    </footer>
  );
}
