import PropTypes from "prop-types";
import React from "react";
import { MessageStyled } from "./styled";

/**
 * @component
 * @name Message
 * @description Responsible for creating the area where the message of which filter was selected is shown.
 * @namespace screens screens/Home/components/Message
 * @param {element} children The message that will appear inside the component
 *
 */
const Message = ({ children }) => <MessageStyled>{children}</MessageStyled>;

export default Message;

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
