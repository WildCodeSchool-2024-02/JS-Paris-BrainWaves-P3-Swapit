import "./CategoriesNavBar.css";

function CategoriesNavBar() {
  return (
    <div>
      <div className="categoriesContainerNavBar">
        <div className="allProduct">Tous&nbsp;les&nbsp;produits</div>
        <div className="categoriesNavBar">
          <a href="Smartphones" className="href">Smartphones</a>
          <a href="Ordinateurs" className="href">Ordinateurs</a>
          <a href="Tablettes" className="href">Tablettes</a>
          <a href="Vidéo" className="href">Son&nbsp;&&nbsp;Vidéo</a>
          <a href="Consoles" className="href">Consoles</a>
          <a href="Accessoires" className="href">Accessoires</a>
          <a href="Drônes" className="href">Drônes</a>
          <a href="Sécurité" className="href">Sécurité</a>
          <a href="Composants" className="href">Composants</a>
          <a href="Réseaux" className="href">Réseaux&nbsp;&&nbsp;Connectivité</a>
          <a href="Appareil-ménagers" className="href">Appareils&nbsp;ménagers</a>
        </div>
      </div>
    </div>
  );
}

export default CategoriesNavBar;
