'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const articles = [
  {
    id: 'image1',
    image: '/images/cdi_freelance.webp',
    titleImage: "Photo de l'article CDI ou Freelance",
    alt: 'Illustration CDI ou Freelance',
    titleArticle: 'CDI ou Freelance, comment choisir ?',
    contenu:
      'Découvrez les clés pour faire le choix crucial entre un contrat à durée indéterminée (CDI) et le statut de freelance, pour optimiser votre carrière professionnelle.',
  },
  {
    id: 'image2',
    image: '/images/communication_webmarketing.webp',
    titleImage: "Photo de l'article communication et web marketing",
    alt: 'Illustration communication et web marketing',
    titleArticle:
      'Le SEA est-il essentiel, ou le SEO seul peut-il être adéquat ?',
    contenu:
      'Plongez dans le débat entre SEA et SEO pour découvrir si le référencement payant est vraiment indispensable ou si une stratégie SEO bien ficelée peut suffire à propulser votre présence en ligne.',
  },
];

export default function MySlider() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    /* Slide automatique au bout d'un certain temps*/
    const interval = setInterval(() => {
      setPage((prev) => (prev === articles.length ? 1 : prev + 1));
    }, 5000);
    /* Evite le slide automatique si on viens de changer manuellement */
    return () => clearInterval(interval);
  }, []);
  /*Page précédente*/
  const handlePagePrecedante = () => {
    setPage((prev) => (prev === 1 ? articles.length : prev - 1));
  };
  /*Page suivante*/
  const handlePageSuivante = () => {
    setPage((prev) => (prev === articles.length ? 1 : prev + 1));
  };

  return (
    <section className="relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center bg-primary">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 scale-75 rounded-lg transition-opacity duration-500 ${
            page === index + 1
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Titre de l'article */}
          <div className=" absolute left-1/2  border-2 border-textColor/20 -translate-x-1/2 top-0 -translate-y-full w-full py-3 px-6 bg-secondary rounded-t-lg">
            <h2 className="text-4xl mobile:text-xl tracking-widest py-6 font-titleFont text-black font-bold text-center">
              {article.titleArticle}
            </h2>
          </div>
          {/* Image de l'article */}
          <Image
            className="h-full w-full object-cover tablette:object-cover max-w-full border-x-2 border-textColor/50"
            priority
            src={article.image}
            alt={article.alt}
            title={article.titleImage}
            width={1800}
            height={580}
          />
          {/* Contenu de l'article */}
          <div className="absolute  left-1/2 border-2  border-textColor/20 -translate-x-1/2 bottom-0 translate-y-full w-full py-3 px-6 bg-secondary rounded-b-lg">
            <p className="text-2xl mobile:text-base mt-4 py-3 font-bold w-full text-center text-black">
              {article.contenu}
            </p>
          </div>
        </div>
      ))}
      {/* Slide précédent */}
      <div
        onClick={handlePagePrecedante}
        className="z-10 absolute flex h-16  -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10  hover:shadow-tertinary  hover:shadow-md"
      >
        <span className="flex hover:bg-tertinary/50 hover:border-tertinary py-1 transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  ">
          <Image
            className="mx-4 w-auto h-auto"
            alt="Slide à droite"
            src="/logo/circle-chevron-left-solid.svg"
            width={40}
            height={40}
          />
        </span>
      </div>
      {/* Slide suivant */}
      <div
        onClick={handlePageSuivante}
        className="z-10 absolute bg-primary/10 flex h-16 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md"
      >
        <span className="flex hover:bg-tertinary/50 py-1  hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  ">
          <Image
            className="mx-4 w-auto h-auto"
            alt="slide à gauche"
            src="/logo/circle-chevron-right-solid.svg"
            width={40}
            height={40}
          />
        </span>
      </div>
    </section>
  );
}
