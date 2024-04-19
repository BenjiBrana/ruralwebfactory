import Image from 'next/image';
import Link from 'next/link';
const articles = [
  {
    id: 'article1',
    titleImg: 'Photo conseil pour la transformation numérique',
    alt: 'Transformation numérique',
    lien: 'images/transformation_numérique.webp',
    class: 'article',
    titleArticle: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'article2',
    titleImg: 'Photo audit d’entreprise',
    alt: 'Audit d’entreprise',
    lien: 'images/audit_entreprise.webp',
    class: 'articleReverse',
    titleArticle: 'Audit d’entreprise',
    contenu:
      'Un audit d’entreprise est une évaluation complète de votre entreprise qui identifie les domaines d’amélioration et les opportunités de croissance. Nos auditeurs expérimentés examinent tous les aspects de votre entreprise, y compris les finances, les opérations, la gestion et la stratégie. Nous vous fournissons un rapport détaillé avec des recommandations sur la façon d’améliorer votre entreprise.',
  },
  {
    id: 'article3',
    titleImg: 'Photo concernant la commmunication et le webmarketing',
    alt: 'Communication et webmarketing',
    lien: 'images/communication_webmarketing.webp',
    class: 'article',
    titleArticle: 'Stratégie de communication et de webmarketing',
    contenu:
      'Une stratégie de communication efficace est essentielle pour atteindre votre public cible et promouvoir votre entreprise. Nous utilisons les dernières techniques de webmarketing, y compris le SEO, le marketing par e-mail, les médias sociaux et le marketing de contenu, pour augmenter votre visibilité en ligne et attirer plus de clients.',
  },
  {
    id: 'article4',
    titleImg: 'Photo concernant la campagnes publicitaires',
    alt: 'Campagnes publicitaires',
    lien: 'images/campagnes_publicitaires.webp',
    class: 'articleReverse',
    titleArticle: 'Offre et mise en place de campagnes publicitaires',
    contenu:
      'Nous créons des campagnes publicitaires innovantes qui captent l’attention de votre public cible et promeuvent votre entreprise. Nous gérons tous les aspects de la campagne, de la conception à la mise en œuvre, pour vous assurer un retour sur investissement maximal.',
  },
  {
    id: 'article5',
    titleImg: 'Photo concernant la Création d’identité visuelle',
    alt: 'Création d’identité visuelle',
    lien: 'images/identite_visuelle.webp',
    class: 'article',
    titleArticle: 'Création d’identité visuelle',
    contenu:
      'Une identité visuelle forte est essentielle pour se démarquer de la concurrence. Notre équipe de designers crée une identité visuelle unique pour votre entreprise qui reflète vos valeurs et votre vision. Que vous ayez besoin d’un nouveau logo, d’une refonte de site web ou d’une campagne de branding complète, nous avons les compétences et l’expérience nécessaires pour vous aider.',
  },
  {
    id: 'article6',
    titleImg:
      'Photo concernant le Développement web et reseaux sociaux',
    alt: 'Développement web et reseaux sociaux',
    lien: 'images/dev_web_rs.webp',
    class: 'articleReverse',
    titleArticle: 'Développement web et gestion des réseaux sociaux',
    contenu:
      'Une identité visuelle forte est essentielle pour se démarquer de la concurrence. Notre équipe de designers crée une identité visuelle unique pour votre entreprise qui reflète vos valeurs et votre vision. Que vous ayez besoin d’un nouveau logo, d’une refonte de site web ou d’une campagne de branding complète, nous avons les compétences et l’expérience nécessaires pour vous aider.',
  },
  {
    id: 'article7',
    titleImg: 'Photo concernant le community management',
    alt: 'Community management',
    lien: 'images/community_management.webp',
    class: 'article',
    titleArticle: 'Service de community management',
    contenu:
      'Une communauté en ligne engagée peut être un atout précieux pour votre entreprise. Nous gérons votre communauté en ligne, en publiant du contenu intéressant, en répondant aux commentaires et en encourageant l’interaction. Nous travaillons pour renforcer votre marque et créer un lien fort avec vos clients.',
  },
];
export default function NosServices() {
  return (
    <div>
      <section id="Services" className="flex flex-col bg-primary">
        <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
          Nos Services
        </h2>
        {articles.map((article) => (
          <article className={article.class} key={article.id}>
            <Image
              className="2xl:w-4/12 lg:w-3/8 tablette:w-3/6 mobile:w-2/3 rounded-lg shadow-2xl"
              src={`/${article.lien}`}
              alt={article.alt}
              title={article.titleImg}
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-evenly 2xl:w-1/4 xl:w-2/6 lg:w-2/6 tablette:w-2/3 mobile:w-10/12 tablette:py-12  h-full">
              <h3 className="font-titleFont font-bold text-3xl mobile:text-2xl leading-10 tablette:pb-8 tablette:text-center">
                {article.titleArticle}
              </h3>
              <p className="xl:text-xl lg:text-lg  leading-10">
                {article.contenu}
              </p>
              <Link href="/Contact" className="cta">
                Pour plus d'informations, cliquez ici
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
