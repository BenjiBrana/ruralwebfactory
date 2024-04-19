import Image from 'next/image';
import Link from 'next/link';
const cards = [
  {
    id: 'card1',
    titleImg: 'Photo card 1',
    alt: 'card 1',
    lien: 'images/greenscape.webp',
    titleCard: 'GreenScape ',
    contenu:
      'GreenScape est une entreprise spécialisée dans l’urban mining et la récupération de ressources à partir des déchets électroniques. Leur vision est de créer un avenir plus vert en favorisant la récupération intelligente des déchets électroniques. 🌿🌎',
  },
  {
    id: 'card2',
    titleImg: 'Photo card 2',
    alt: 'card 2',
    lien: 'images/buildcraft.webp',
    titleCard: 'BuildCraft ',
    contenu:
      'BuildCraft est une entreprise innovante spécialisée dans la construction durable. Notre équipe de passionnés du bâtiment allie expertise technique et créativité pour concevoir des structures modernes et écologiques. 🏗️🌿',
  },
  {
    id: 'card3',
    titleImg: 'Photo card 3',
    alt: 'card 3',
    lien: 'images/socialhub.webp',
    titleCard: 'SocialHub ',
    contenu:
      'SocialHub est une plateforme novatrice qui connecte les individus, favorise les échanges et renforce les liens sociaux. Notre mission est de créer un espace virtuel où les gens peuvent partager des idées, collaborer et célébrer ensemble. 🌐🤝.',
  },
  {
    id: 'card4',
    titleImg: 'Photo card 4',
    alt: 'card 4',
    lien: 'images/cafe_gourmard.webp',
    titleCard: 'Café Gourmard',
    contenu:
      'Café Gourmard est un charmant café-barista qui allie passion pour le café et art de la dégustation. Notre équipe de baristas talentueux prépare des boissons exquises dans une ambiance chaleureuse. Venez savourer l’arôme et la convivialité chez nous ! ☕🌟',
  },
  {
    id: 'card5',
    titleImg: 'Photo card 5',
    alt: 'card 5',
    lien: 'images/autofix.webp',
    titleCard: 'AutoFix ',
    contenu:
      'AutoFix est un réseau de garages spécialisé dans la réparation et la carrosserie automobile. Nos professionnels hautement qualifiés offrent des services pour toutes les marques et technologies. 🚗🔧',
  },
  {
    id: 'card6',
    titleImg: 'Photo card 6',
    alt: 'card 6',
    lien: 'images/justicelink.webp',
    titleCard: 'JusticeLink ',
    contenu:
      'JusticeLink est un cabinet d’avocats spécialisé dans divers domaines juridiques. Notre équipe d’avocats expérimentés s’engage à fournir des services juridiques de haute qualité à nos clients. 📚 ⚖️',
  },
];
export default function Realisation() {
  return (
    <div>
      <section
        id="Realisations"
        className="flex flex-col  items-center bg-primary mb-20"
      >
        <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
          Nos Réalisation
        </h2>

        <div className="cards flex flex-row tablette:flex-col  flex-wrap justify-evenly tablette:items-center mobile:w-5/6  h-full w-3/4">
          {cards.map((card) => (
            <div className="card cursor-pointer" key={card.id}>
              <div className="card-image w-full">
                <Image
                  className="rounded-t-lg shadow-2xl w-full mx-auto  "
                  src={`/${card.lien}`}
                  alt={card.alt}
                  title={card.titleImg}
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-body p-4 ">
                <h3 className="card-title font-bold font-titleFont py-4">
                  {card.titleCard}
                </h3>
                <p className="card-text">{card.contenu}</p>
              </div>
              <Link href="/" className="cta mb-6">
                Visiter le site
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
