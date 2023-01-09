import PropTypes from "prop-types";

export default function SimpsonCard({ simpson }) {
  console.log(simpson);
  return (
    <div className="simpson-card">
      <img src={simpson.url} alt={simpson.name} />
      <div>{simpson.name}</div>
    </div>
  );
}

SimpsonCard.propTypes = {
  simpson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

SimpsonCard.defaultProps = {
  simpson: {
    name: "Bart Simpson",
    url: "https://static.wikia.nocookie.net/simpsons/images/a/aa/Bart_simpson.png",
  },
};
