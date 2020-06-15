import { Flex } from "@components/Flex";
import { Calendar } from "@components/Icon/Calendar";
import { Text } from "@components/Text";
import { GREY_LVL_2 } from "@configuration/constants";
import { showText } from "@configuration/functions";
import PropTypes from "prop-types";
import React from "react";

import { MessageSectionStyled } from "./styled";

/**
 * @component
 * @name MessageSection
 * @description Responsible for showing which filter was selected.
 * @namespace screens screens/Home/components/Message
 *
 */
export const MessageSection = ({ filterType }) => (
  <MessageSectionStyled>
    <Flex>
      <Calendar width="32px" height="32px" color={GREY_LVL_2} />
      <Text color={GREY_LVL_2}>Você está vendo o período</Text>
      <Text bold color={GREY_LVL_2}>
        {showText(filterType)}
      </Text>
    </Flex>
  </MessageSectionStyled>
);

MessageSection.propTypes = {
  filterType: PropTypes.number.isRequired,
};
