import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Card = styled.article`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  margin-bottom: 2em;
  transition: all 0.3s ease-out;

  :hover {
    box-shadow: 0 6px 20px #afafaf;

    a {
      opacity: 0.6;
    }
  }

  @media (min-width: 600px) {
    flex: 0 1 calc(50% - 1em);
    margin-bottom: 0;
  }

  @media (min-width: 900px) {
    margin-bottom: 1em;
  }
  @media (min-width: 1400px) {
    flex: 0 1 calc(33% - 1em);
  }
`;

const Title = styled.div`
  color: #796be9;
  line-height: 120%;
  letter-spacing: -0.031em;
  font-size: 1.5em;
  margin: 1rem 0 0.15rem 0;
  padding: 0 1.25rem;
`;

const Date = styled.div`
  font-size: 0.9em;
  color: #a9a9a9;
  margin: 0 0 0.5rem 0;
  padding: 0 1.25rem;
  letter-spacing: 0.15px;

  @media (min-width: 600px) {
    font-size: 0.8em;
  }

  @media (min-width: 1200px) {
    font-size: 0.7em;
  }
`;

const Image = styled.img`
  display: block;
  border: 0;
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  color: #7f7f7f;
  margin: 0.5rem 0;
  padding: 0 1.25rem;
  line-height: 150%;
  font-family: 'Spectral', serif;

  @media (min-width: 900px) {
    font-size: 0.95em;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
  }
`;

const Actions = styled.div`
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Action = styled.a`
  font-size: 0.85em;
  font-weight: 500;
  text-transform: uppercase;
  color: #5f4de5;
  letter-spacing: 0.75px;

  @media (min-width: 900px) {
    font-size: 0.8em;
  }

  @media (min-width: 1200px) {
    font-size: 0.75em;
  }
`;

const BlogCard = ({
  title, date, description, imageDescription, path,
}) => (
  <Card>
    <Link to={path}>
      <Title>{title}</Title>
      <Date>By wholeNaNyards / {date}</Date>
      <Image
        src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
        alt={imageDescription}
      />
      <Content>{description}</Content>
      <Actions>
        <Action>Read More</Action>
      </Actions>
    </Link>
  </Card>
);

export default BlogCard;
