import SimpsonCard from "../components/SimpsonCard";

export default function Simpsons() {
  return (
    <>
      <h1>My simpsons list</h1>
      <form className="center mb-1">
        <label htmlFor="gender-select">
          Filter by <select id="gender-select">
            <option value="">Please select a gender</option>
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
