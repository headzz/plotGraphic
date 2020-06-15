import React from "react";
import PropTypes from "prop-types";
import { LoadAnimation } from "./styled";

export const Loading = ({ width, height, color }) => (
  <LoadAnimation>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      style={{ transform: "rotate(360deg)" }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1664 1728"
    >
      <path
        d="M462 1394q0 53-37.5 90.5T334 1522q-52 0-90-38t-38-90q0-53 37.5-90.5T334 1266t90.5 37.5T462 1394zm498 206q0 53-37.5 90.5T832 1728t-90.5-37.5T704 1600t37.5-90.5T832 1472t90.5 37.5T960 1600zM256 896q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5T1202 1394t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5zM494 398q0 66-47 113t-113 47t-113-47t-47-113t47-113t113-47t113 47t47 113zm1170 498q0 53-37.5 90.5T1536 1024t-90.5-37.5T1408 896t37.5-90.5T1536 768t90.5 37.5T1664 896zm-640-704q0 80-56 136t-136 56t-136-56t-56-136t56-136T832 0t136 56t56 136zm530 206q0 93-66 158.5T1330 622q-93 0-158.5-65.5T1106 398q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
        fill={color}
      />
      <rect x="0" y="0" width="1664" height="1728" fill="rgba(0, 0, 0, 0)" />
    </svg>
  </LoadAnimation>
);

Loading.defaultProps = {
  color: "#000",
  height: null,
};

Loading.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
};