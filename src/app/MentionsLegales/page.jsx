import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2 mobile:w-3/4 flex flex-col gap-4 leading-10 mt-10 items-start">
        <h2 className="font-titleFont font-bold text-2xl mobile:text-lg">
          Mentions Légales
        </h2>

        <h3 className="h3Style">Informations légales</h3>
        <p>
          Nom de l'entreprise : Rural Web Factory
          <br />
          Adresse du siège social : rue moignard 16390
          Aubeterre-sur-dronne
        </p>
        <h3 className="h3Style">Responsable de la publication</h3>
        <p>Mme Catherine DEREIX DE LAPLANE</p>
        <h3 className="h3Style">Hébergeur</h3>
        <p>
          Nom de l'hébergeur : Vercel Inc. <br />
          Adresse de l'hébergeur : 340 S Lemon Ave #4133 Walnut, CA
          91789 USA <br />
          Numéro de téléphone de l'hébergeur : (559) 288-7060
        </p>
        <h3 className="h3Style">Propriété intellectuelle</h3>
        <p>
          Tous les éléments de ce site web, y compris les textes,
          graphiques, logos, animations, sont la propriété exclusive
          de Rural Web Factory, à l'exception des marques, logos ou
          contenus appartenant à d'autres sociétés partenaires ou
          auteurs.
        </p>
        <h3 className="h3Style">Limitation de responsabilité</h3>
        <p>
          Rural Web Factory ne peut être tenu responsable des erreurs
          rencontrées sur le site, problèmes techniques,
          interprétation des informations publiée et conséquences de
          leur utilisation. L'utilisateur reconnaît utiliser ces
          informations sous sa responsabilité exclusive.
        </p>
        <h3 className="h3Style">Création du site web</h3>
        <p>
          Ce site web a été conçu et réalisé par Brana Benjamin. Avec
          une attention particulière portée à la convivialité, au
          design et à l'accessibilité, Brana Benjamin s'efforce de
          créer des expériences web exceptionnelles qui mettent
          l'utilisateur au premier plan.
        </p>
      </div>
    </div>
  );
}
