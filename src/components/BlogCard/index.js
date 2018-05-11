import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Card = styled.article`
  border: 1px solid black;
  margin-bottom: 2em;

  img {
    display: block;
    border: 0;
    width: 100%;
    height: auto;
  }

  @media (min-width: 600px) {
    flex: 0 1 calc(50% - 1em);
  }
  @media (min-width: 900px) {
    flex: 0 1 calc(33% - 1em);
  }
`;

const Heading = styled.div`
  padding: 10px 30px;
`;

const Date = styled.h3`
  color: rgba(0, 0, 0, 0.6);
`;

const BlogCard = ({
  title, date, description, imageDescription, path,
}) => (
  <Card>
    <Link to={path}>
      <Heading>
        <h2 className="header-text">{title}</h2>
        <Date>{date}</Date>
      </Heading>
      <picture className="thumbnail">
        <img
          src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
          alt={imageDescription}
        />
      </picture>
      <div className="card-content">
        <p>{description}</p>
        <br />
        Read More!
      </div>
    </Link>
  </Card>
);

export default BlogCard;
