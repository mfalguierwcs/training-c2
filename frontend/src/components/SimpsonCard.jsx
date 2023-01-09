import PropTypes from "prop-types";

export default function SimpsonCard({ simpson }) {
  console.log(simpson);
  return <div className="simpson-card">{simpson.name}</div>;
}

SimpsonCard.propTypes = {
  simpson: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

SimpsonCard.defaultProps = {
  simpson: {
    name: "Bart",
  },
};
