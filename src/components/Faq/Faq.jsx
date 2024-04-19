'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const faqs = [
  {
    id: 'faq1',
    title:
      'Pourquoi est-ce important d’avoir un conseil en transformation numérique ?',
    contenu:
      'Le conseil en transformation numérique est crucial car il aide les entreprises à intégrer efficacement les technologies numériques dans leurs opérations quotidiennes. Cela peut conduire à une amélioration de l’efficacité, une augmentation de la productivité et une compétitivité accrue sur le marché.',
  },
  {
    id: 'faq2',
    title:
      'Pourquoi est-ce important de faire un audit aux entreprises ?',
    contenu:
      'Un audit d’entreprise est important car il fournit une évaluation indépendante des processus et des contrôles financiers d’une entreprise. Cela permet de s’assurer que l’entreprise est gérée efficacement et en toute sécurité, ce qui peut renforcer la confiance des investisseurs et des parties prenantes.',
  },
  {
    id: 'faq3',
    title:
      'Pourquoi est-ce important d’avoir une stratégie de communication et de webmarketing ?',
    contenu:
      'Avoir une stratégie de communication et de webmarketing est essentiel car elle permet à une entreprise de toucher efficacement son public cible, de promouvoir ses produits ou services et de renforcer sa présence en ligne. Cela peut conduire à une augmentation de la notoriété de la marque et à une croissance des ventes.',
  },
  {
    id: 'faq4',
    title: 'Pourquoi est-ce important de créer une identité visuelle',
    contenu:
      'La création d’une identité visuelle est importante car elle aide à définir comment une entreprise est perçue par le public. Une identité visuelle forte et cohérente peut aider à renforcer la reconnaissance de la marque, à établir la crédibilité et à différencier l’entreprise de ses concurrents.',
  },
  {
    id: 'faq5',
    title: 'Pourquoi est-ce important de créer un site web ?',
    contenu:
      'La création d’un site web est importante car elle offre à une entreprise une présence en ligne, ce qui est crucial dans le monde numérique d’aujourd’hui. Un site web peut aider à atteindre un public plus large, à promouvoir les produits ou services de l’entreprise et à établir une crédibilité.',
  },
  {
    id: 'faq6',
    title: 'Pourquoi est-ce important de gérer les réseaux sociaux ?',
    contenu:
      'La gestion des réseaux sociaux est importante car elle permet à une entreprise d’interagir directement avec son public, de renforcer l’engagement et de surveiller les commentaires et les opinions des clients. Cela peut conduire à une meilleure satisfaction de la clientèle et à une amélioration de la réputation de la marque.',
  },
  {
    id: 'faq7',
    title:
      'Pourquoi est-ce important de mener une campagne publicitaire ?',
    contenu:
      'Les campagnes publicitaires sont importantes car elles permettent à une entreprise de promouvoir ses produits ou services à un public cible. Une campagne publicitaire efficace peut augmenter la notoriété de la marque, stimuler les ventes et améliorer la part de marché.',
  },
  {
    id: 'faq8',
    title:
      'Pourquoi est-ce important de faire du community management ?',
    contenu:
      'Le community management est important car il permet à une entreprise de gérer et d’engager une communauté en ligne autour de sa marque ou de son produit. Cela peut conduire à une plus grande fidélité à la marque, à une meilleure satisfaction de la clientèle et à une augmentation de l’engagement des utilisateurs.',
  },
];
export default function Faq() {
  const [open, setOpen] = useState(null);
  /* Ouvre l'élément cliqué/Ferme l'élément si ouvert*/
  const handleClickOpen = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <section
        id="faq"
        className="flex flex-col tablette:h-auto bg-primary w-full mt-10"
      >
        <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
          FAQ
        </h2>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex flex-col items-center w-full mb-4"
          >
            <h3
              onClick={() => handleClickOpen(faq.id)}
              className="faq justify-between font-titleFont font-bold bg-secondary rounded-t-lg w-full"
            >
              {faq.title}
              {open === faq.id ? (
                <Image
                  className="animate-spin-slow h-6 w-6"
                  src="/logo/chevron_up.svg"
                  alt="Logo chevron up"
                  title="Logo pour fermer la réponse"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  className="animate-spin-slow h-6 w-6"
                  src="/logo/chevron_down.svg"
                  alt="Logo chevron down"
                  title="Logo pour voir la réponse"
                  width={24}
                  height={24}
                />
              )}
            </h3>

            <div
              className={`w-1/2 tablette:w-4/6 mobile:w-4/5 border rounded-b-lg faq-content overflow-hidden transition-opacity duration-300 ${
                open === faq.id
                  ? 'opacity-100 max-h-full transition-max-h duration-500'
                  : 'opacity-0 max-h-0 transition-max-h duration-300'
              }`}
            >
              <p
                className={`rounded-b-lg p-4 ${
                  open !== faq.id && 'hidden'
                }`}
              >
                {faq.contenu}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center my-12">
          <Link
            href="/Contact"
            className="cta mobile:scale-90 mobile:hover:scale-100"
          >
            Vous n'avez pas trouvé votre réponse, cliquez ici
          </Link>
        </div>
      </section>
    </div>
  );
}
