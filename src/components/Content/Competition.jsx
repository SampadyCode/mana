import { useContext, useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
import { DataContext, equal } from "../Mana";

export default function Competition() {
  const [data, setData] = useState([]);
  const CtxVal = useContext(DataContext);

  useEffect(() => {
    if (equal(data, []) && CtxVal) {
      setData(CtxVal.slice(0, 20));
      scroll(document.querySelectorAll(".user"));
    } else if (!equal(CtxVal.slice(0, 20), data)) {
      setData(CtxVal.slice(0, 20));
      CtxVal.forEach((obj, i) => {
        if (!equal(obj, data[i])) {
          document.querySelectorAll(".user")[i]?.scrollIntoView();
        }
      });
    }
  }, [data, CtxVal]);

  const els = data?.map((val, i) => {
    return (
      <Link key={`user-${i + 1}`} to={`/team/${val.team.replace(" ", "-")}`}>
        <User {...val} index={i} />
      </Link>
    );
  });

  return <main className="parent">{els}</main>;
}

function scroll(elements, stop = 10000) {
  window?.scroll(0, 0);

  let ComponentH = 0;
  document
    .querySelectorAll(".header--top , .header , .footer")
    .forEach((el) => {
      ComponentH += el.clientHeight;
    });

  const transform =
    ~~((window?.innerHeight - ComponentH) / (elements[1]?.clientHeight + 10)) -
    1; // index 1 because in the index 0 for the large width maybe we're don't have overflow

  let i = transform;

  window?.setTimeout(() => {
    const inter = window?.setInterval(() => {
      if (i + transform <= elements.length) {
        elements[i]?.scrollIntoView();
        i += transform;
      } else {
        window?.clearInterval(inter);
        scroll(elements);
      }
    }, 5000);
  }, stop);
}
