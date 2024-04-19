import Image from 'next/image';
import Link from 'next/link';
const formations = [
  {
    id: 'formation1',
    titleImg: 'Photo formation 1',
    alt: 'formaion 1',
    lien: 'images/developpeur_web.webp',
    class: 'article',
    titleFormation: 'Formation Développeur Web et Web Mobile',
    contenu:
      'Devenez un maître du code et créez des sites web et applications mobiles captivants tout en respectant les normes et standards de sécurité informatique ! Rejoignez notre formation et transformez votre passion en carrière. Durée : 1 an 🌐👩‍💻 ',
  },
  {
    id: 'formation2',
    titleImg: 'Photo formation 2',
    alt: 'formation 2',
    lien: 'images/uxdesigner.webp',
    class: 'articleReverse',
    titleFormation: 'UX Designer',
    contenu:
      'Transformez votre passion pour le design en une carrière passionnante ! Rejoignez notre formation UX/UI Designer et en seulement un an, apprenez les fondamentaux du web, l’UX/UI design, le SEO, le marketing et bien plus encore. Vous serez prêt(e) à créer des expériences utilisateur exceptionnelles et à façonner l’avenir du numérique ! Durée : 1 an 🌐👩‍💻.',
  },
  {
    id: 'card3',
    titleImg: 'Photo formation 3',
    alt: 'formation 3',
    lien: 'images/concepteur_developpeur_application.webp',
    class: 'article',
    titleFormation: "Formation Concepteur Développeur d'Application",
    contenu:
      "Devenez un maître de la programmation, transformez votre passion en carrière lucrative, découvrez les secrets du développement d’applications, et lancez-vous dans l’univers passionnant de la conception et développement  d'applications mobiles et web ! Durée : 1 an 🌐👩‍💻.",
  },
];
export default function Formations() {
  return (
    <section
      id="Formations"
      className="flex flex-col items-center bg-primary mb-40"
    >
      <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
        Nos Formations
      </h2>
      {formations.map((formation) => (
        <article className={formation.class} key={formation.id}>
          <Image
            className="2xl:w-4/12 lg:w-3/8 tablette:w-3/6 mobile:w-2/3 rounded-lg shadow-2xl"
            src={`/${formation.lien}`}
            alt={formation.alt}
            title={formation.titleImg}
            width={500}
            height={500}
          />
          <div className="flex flex-col justify-evenly 2xl:w-1/4 xl:w-2/6 lg:w-2/6 tablette:w-2/3 mobile:w-10/12 tablette:py-12  h-3/4">
            <h3 className="font-titleFont font-bold text-3xl mobile:text-2xl leading-10 tablette:pb-8 tablette:text-center">
              {formation.titleFormation}
            </h3>
            <p className="xl:text-xl lg:text-lg  leading-10">
              {formation.contenu}
            </p>
            <Link href="/Contact" className="cta">
              Pour plus d'informations, cliquez ici
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
