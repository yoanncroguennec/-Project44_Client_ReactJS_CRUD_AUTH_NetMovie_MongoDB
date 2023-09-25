import { useState, useEffect } from "react";

import "./home.css";
import { Typography } from "@mui/material";
import { ListMovies } from "../index";
import { useSpring, animated } from "react-spring"
import Router from "../../routes/AppRoutes";
import { Route, Routes } from "react-router-dom";

export default function Home() {
const [flip, setFlip] = useState(false)
const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    // reverse: flip,
    delay: 0.5,
    // onRest: () => setFlip(!flip)
})

  const [show, setShow] = useState(false);
  const delay = 5;

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return show ? (
    <animated.div style={props}>
      <Router />
    </animated.div>
  ) : (
    <animated.div style={props}>
      <div className='rootHome'>
        <div className='netflix'>
          <span className='left'></span>
          <span className='center'></span>
          <span className='right'></span>
        </div>
        <h3>Net Movies</h3>
      </div>
    </animated.div>
  );
}
