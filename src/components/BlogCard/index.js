import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const DateText = styled.p`
  color: rgba(0, 0, 0, 0.45);
`;

const Card = styled.div`
  .mdl-card {
    width: 512px;
  }
  > .mdl-card__title {
    color: #fff;
    height: 176px;
    background: url('http://lorempixel.com/128/128/city') center / cover;
  }
  > .mdl-card__menu {
    color: #fff;
  }
`;

const BlogCard = ({
  title, date, description, imageDescription, path,
}) => (
  <Card className="demo-card-wide mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">{title}</h2>
    </div>
    <div className="mdl-card__supporting-text">
      {description}
      <br />
      <br />
      <DateText>{date}</DateText>
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <Link to={path} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Read More
      </Link>
    </div>
    <div className="mdl-card__menu">
      <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i className="material-icons">share</i>
      </button>
    </div>
  </Card>
);

export default BlogCard;
