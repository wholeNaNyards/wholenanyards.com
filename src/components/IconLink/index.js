import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

const StyledAnchor = styled(OutboundLink)`
  color: #f2f0fd;
  padding-left: 1em;

  :hover {
    opacity: 0.6;
  }
`;

const StyledIcon = styled.i`
  font-size: 1.375em;
  vertical-align: middle;
`;

const IconLink = ({ iconClass, to }) => (
  <StyledAnchor href={to}>
    <StyledIcon className={`${iconClass}`} />
  </StyledAnchor>
);

IconLink.propTypes = {
  iconClass: PropTypes.string,
  to: PropTypes.string,
};

IconLink.defaultProps = {
  iconClass: '',
  to: '',
};

export default IconLink;
