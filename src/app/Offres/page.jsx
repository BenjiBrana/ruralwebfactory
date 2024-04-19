import Image from 'next/image';
import Link from 'next/link';
const offres = [
  {
    id: 'offre1',
    titleImg: 'Photo offre bronze',
    alt: 'offre bronze',
    lien: 'images/bronze.webp',
    titleoffre: 'OFFRE BRONZE',
    contenu: (
      <>
        <li>- Conseil pour la transformation numérique</li>
        <li>- Audit financier de base</li>
        <li>- Développement web et gestion des réseaux sociaux</li>
      </>
    ),
  },
  {
    id: 'offre2',
    titleImg: 'Photo offre silver',
    alt: 'offre silver',
    lien: 'images/silver.webp',
    titleoffre: 'OFFRE SILVER',
    contenu: (
      <>
        <li>- Conseil pour la transformation numérique</li>
        <li>- Audit financier de base</li>
        <li>- Développement web et gestion des réseaux sociaux</li>
        <li>- Stratégie de communication et de webmarketing</li>
      </>
    ),
  },
  {
    id: 'offre3',
    titleImg: 'Photo offre gold',
    alt: 'offre gold',
    lien: 'images/gold.webp',
    titleoffre: 'OFFRE GOLD',
    contenu: (
      <>
        <li>- Conseil pour la transformation numérique</li>
        <li>- Audit financier de base</li>
        <li>- Stratégie de communication et de webmarketing</li>
        <li>- Offre et mise en place de campagnes publicitaires</li>
        <li>- Création d’identité visuelle</li>
        <li>- Développement web et gestion des réseaux sociaux</li>
        <li>- Service de community management</li>
      </>
    ),
  },
];
export default function Offres() {
  return (
    <div>
      <section
        id="Offres"
        className="flex flex-col  items-center bg-primary mb-20"
      >
        <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
          Nos Offres
        </h2>

        <div className="offres flex flex-row flex-wrap justify-evenly  h-full w-3/4">
          {offres.map((offre) => (
            <div className="card" key={offre.id}>
              <div className="w-full">
                <Image
                  className="rounded-t-lg shadow-2xl w-full"
                  src={`/${offre.lien}`}
                  alt={offre.alt}
                  title={offre.titleImg}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col h-full leading-6 p-4">
                <h3 className="font-bold font-titleFont py-4">
                  {offre.titleoffre}
                </h3>
                <ul className="flex-1 p-2 pb-4">{offre.contenu}</ul>
                <Link href="/Contact" className="cta">
                  Devis gratuit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
