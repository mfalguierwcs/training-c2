/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <h1>Entrainement C2</h1>
      <section className="home">
        <div>
          <p>
            Ces exos d'entrainement utilisent une API locale utilisant JSON
            Server, tu peux voir les ressources de l'api{" "}
            <a target="_blank" href="http://localhost:4000" rel="noreferrer">
              ici
            </a>
          </p>
          <p>
            Tous les exercices d'entrainement sont a réaliser dans My simpsons.
          </p>
          <h2>Etapes à réaliser : </h2>
          <ol>
            <li>
              Ne commence pas à coder prend le temps de découvrir ce template de
              projet fullstack réalisé avec Vitejs (arboresence, règles
              prettier, package.json, ...).
            </li>
            <li>
              Pour commencer dans <strong>Simpsons.jsx</strong>, fais une
              requête (fetch ou axios comme tu préfères) pour récupérer la liste
              des simpsons en utilisant l'api et enregistre le résultat dans un
              state.
            </li>
            <li>
              Utilise les données du state pour charger toutes les cartes
              simpson (<strong>SimpsonCard.jsx</strong>) et passe en props un
              objet simpson.
            </li>
            <li>
              Dans <strong>Simpsons.jsx</strong>, fais une autre requête qui
              permet de charger les genres et stock les résultats dans un autre
              state.
            </li>
            <li>
              Trouve un moyen de charger les données du state genre dans le
              select
            </li>
            <li>Filtre la liste de simpsons quand le filtre genre change.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
