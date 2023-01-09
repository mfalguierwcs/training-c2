import SimpsonCard from "../components/SimpsonCard";

export default function Simpsons() {
  return (
    <>
      <h1>Mes simpsons</h1>
      <form className="center mb-1">
        <label htmlFor="gender-select">
          Filtrer par : <select id="gender-select">
            <option value="">Genre</option>
          </select>
        </label>
      </form>
      <ul className="simpson-list">
        <li className="simpson-item">
          <SimpsonCard />
        </li>
      </ul>
    </>
  );
}
