/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <>
      <h1>Entrainement C2</h1>
      <section className="home">
        <div>
          <p>
            Ces exercices d'entrainement utilisent une API locale piloté par le
            module JSON Server, tu peux voir les ressources de la fausse api{" "}
            <a target="_blank" href="http://localhost:4000" rel="noreferrer">
              ici
            </a>
          </p>
          <p>
            Tous les exercices d'entrainement sont a réaliser dans Simpsons.
          </p>
          <h2>Etapes à réaliser : </h2>
          <ol>
            <li>
              Ne commence pas à coder, prends le temps de découvrir ce template
              de projet fullstack réalisé avec Vitejs (arboresence, règles
              prettier, package.json, ...).
            </li>
            <li>
              Dans <strong>Simpsons.jsx</strong>, fais une requête (fetch ou
              axios comme tu préfères) pour récupérer la liste des simpsons en
              utilisant l'api et enregistre le résultat dans un state.
            </li>
            <li>
              Utilise les données du state pour charger toutes les cartes
              simpson (<strong>SimpsonCard.jsx</strong>) et passe les données de
              state en props.
            </li>
            <li>
              Dans <strong>Simpsons.jsx</strong>, fais une autre requête qui
              permet de charger les catgories de la famille et stock les
              résultats dans un nouveau state.
            </li>
            <li>
              Trouve un moyen de charger les données du state categories dans le
              select
            </li>
            <li>
              Filtre la liste de simpsons family quand le filtre catégories
              change.
            </li>
            <li>
              Ajoute un lien dans <strong>SimpsonCard.jsx</strong> qui pointe
              vers une page dédiée servant à afficher en énorme la meilleur
              citation du personnage. Si le personage n'a pas de citation
              n'affiche pas de lien. Si on bookmark cette page on doit pouvoir
              retrouver la citation.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
