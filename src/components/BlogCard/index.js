import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Card = styled.article`
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.25em;
  transition: all 0.3s ease-out;
  flex: 0 1 100%;
  display: flex;
  overflow: hidden;

  :hover {
    box-shadow: 0 6px 20px #afafaf;

    .action {
      opacity: 0.6;
    }

    .image {
      transform: scale(1.05);
    }
  }

  @media (min-width: 600px) {
    flex: 0 1 calc(50% - 1em);
    margin-bottom: 1.41em;
  }

  @media (min-width: 900px) {
    margin-bottom: 1.3em;
  }
  @media (min-width: 1200px) {
    margin-bottom: 1.25em;
  }

  @media (min-width: 1600px) {
    flex: 0 1 calc(33% - 1em);
  }
`;

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const Title = styled(ResponsiveEllipsis)`
  color: #796be9;
  line-height: 1.3;
  font-size: 1.5em;
  font-weight: 600;
  margin: 1rem 0 0.15rem 0;
  padding: 0 1.25rem;

  @media (min-width: 600px) {
    font-size: 1.41em;
  }
  @media (min-width: 900px) {
    font-size: 1.33em;
  }
  @media (min-width: 1200px) {
    font-size: 1.26em;
  }
`;

const Date = styled.div`
  color: #a9a9a9;
  letter-spacing: 1.5px;
  font-size: 0.82em;
  font-weight: 200;
  margin: 0 0 0.5rem 0;
  padding: 0 1.25rem;

  @media (min-width: 600px) {
    font-size: 0.765em;
  }

  @media (min-width: 900px) {
    font-size: 0.723em;
  }

  @media (min-width: 1200px) {
    font-size: 0.685em;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 11em;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-out;
`;

const Content = styled(ResponsiveEllipsis)`
  color: #a9a9a9;
  line-height: 1.7;
  margin: 0.5rem 0;
  padding: 0 1.25rem;

  @media (min-width: 600px) {
    font-size: 0.945em;
  }

  @media (min-width: 900px) {
    font-size: 0.89em;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
  }
`;

const Actions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
  padding: 1rem 1.25rem;

  @media (min-width: 600px) {
    padding: 0.75rem 1.25rem;
  }
`;

const Action = styled.div`
  color: #5f4de5;
  letter-spacing: 0.75px;
  font-size: 1.12em;
  text-transform: uppercase;

  :hover {
    opacity: 0.6;
  }

  @media (min-width: 600px) {
    font-size: 1.07em;
  }

  @media (min-width: 900px) {
    font-size: 1em;
  }

  @media (min-width: 1200px) {
    font-size: 0.95em;
  }
`;

const BlogCard = ({
  title, date, description, image, imageDescription, path,
}) => (
  <Card>
    <Container to={path}>
      <Title text={title} maxLine="2" />
      <Date>{date}</Date>
      <Image className="image" style={{ backgroundImage: `url(${image})` }} />
      <Content text={description} maxLine="3" />
      <Actions>
        <Action className="action">Read More</Action>
      </Actions>
    </Container>
  </Card>
);

export default BlogCard;
