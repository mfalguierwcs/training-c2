import SimpsonCard from "../components/SimpsonCard";

export default function Simpsons() {
  return (
    <>
      <h1>Famille Simpsons</h1>
      <form className="center mb-1">
        <label htmlFor="categories">
          Afficher :{" "}
          <select id="categories">
            <option value="">Tous</option>
          </select>
        </label>
      </form>
      <div className="simpson-list">
        <SimpsonCard />
      </div>
    </>
  );
}
