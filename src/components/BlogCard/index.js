import React from 'react';
import { Media } from 'reactstrap';
import styled from 'styled-components';

import logo from '../../images/kylo.jpg';

const StyledMedia = styled(Media)`
  background: #fff;
  border-radius: 3px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1), -2px 0 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  padding: 2rem 1.75rem;
  :hover {
    box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.1), -4px 0 7px 0 rgba(0, 0, 0, 0.1);
  }
`;

const StyledMediaHeading = styled(Media)`
  font-size: 1.1em;
`;

const DateText = styled.p`
  color: rgba(0, 0, 0, 0.45);
`;

const BlogCard = ({
  title, date, description, imageDescription,
}) => (
  <StyledMedia>
    <Media
      object
      src="http://lorempixel.com/128/128/city"
      alt={imageDescription}
      className="mr-3"
    />
    <Media body>
      <StyledMediaHeading heading className="mb-3">
        {title}
      </StyledMediaHeading>
      {description}
      <DateText className="mt-3 mb-0">{date}</DateText>
    </Media>
  </StyledMedia>
);

export default BlogCard;
