import PropTypes from "prop-types";

function Heading({ size = "1", content, addClass }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={addClass}>{content}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  content: PropTypes.string,
};

export default Heading; 