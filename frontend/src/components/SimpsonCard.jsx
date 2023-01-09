import PropTypes from "prop-types";

export default function SimpsonCard({ simpson }) {
  return (
    <div className="simpson-card">
      <img src={simpson.url} alt={simpson.name} />
      <div>
        <p>
          <strong>{simpson.name}</strong>
        </p>
        <p>{simpson.gender}</p>
        <p>"{simpson.best_quote}"</p>
      </div>
    </div>
  );
}

SimpsonCard.propTypes = {
  simpson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    best_quote: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

SimpsonCard.defaultProps = {
  simpson: {
    name: "Bart Simpson",
    best_quote: "Eat my shorts!",
    gender: "Homme",
    url:
      "https://static.wikia.nocookie.net/simpsons/images/a/aa/Bart_simpson.png",
  },
};
