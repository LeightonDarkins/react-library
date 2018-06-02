import React from "react";
import PropTypes from "prop-types";

import "./UserInfo.scss";

const UserInfo = ({ name, imageSrc, jobTitle }) => {
  return (
    <div className="UserInfo">
      <h1>{name}</h1>
      <img alt={`profile picture for ${name}`} src={imageSrc} />
      <h2>{jobTitle}</h2>
    </div>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
};

export default UserInfo;
