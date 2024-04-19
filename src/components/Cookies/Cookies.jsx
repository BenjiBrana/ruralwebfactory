'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CookieBanner() {
  const [afficherCookie, setAfficherCookie] = useState(false);

  /*Démarre au bout de 6 secondes*/
  useEffect(() => {
    setTimeout(() => {
      setAfficherCookie(true);
    }, 5000);
  }, []);
  /*Si accepter */
  const handleAccepter = () => {
    const cookieContent = {
      sessionId: '1234567890',
      preferences: {
        language: 'fr',
        theme: 'dark',
      },
      cookiesAccepted: true,
    };
    localStorage.setItem('myCookie', JSON.stringify(cookieContent));
    setAfficherCookie(false);
  };
  /*Si refusé */
  const handleDecliner = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setAfficherCookie(false);
  };
  /*Si plus tard */
  const handlePlusTard = () => {
    setAfficherCookie(false);
  };

  return (
    <>
      {afficherCookie && (
        <div className="z-30 h-auto  tablette:h-full flex flex-row justify-center items-center fixed bottom-0 pt-6 text-textColor w-full text-center text-sm">
          <div className="flex xl:flex-row tablette:flex-col mobile:w-full  w-5/6 py-6  bg-slate-300/90 gap-6 align-middle rounded-xl shadow shadow-black mb-6 items-center justify-evenly mobile:justify-center">
            <Image
              className="tablette:w-32 tablette:h-32 mobile:w-24 mobile:h-24 mx-6 rounded-lg border shadow-lg shadow-black"
              alt="Slide à droite"
              src="/images/ordiCookie.webp"
              width={200}
              height={200}
            />
            <div className="flex flex-col w-2/3 tablette:w-5/6 mobile:w-full">
              <div className="flex flex-col items-center ">
                <h2 className="font-titleFont font-bold text-xl mobile:text-base">
                  Politique en matière de cookies
                </h2>
                <p className="text-lg mobile:text-base text-left tablette:text-sm mobile:w-full mobile:px-4 leading-10 p-2 rounded-md bg-slate-300/50 ">
                  Notre site web utilise des cookies pour améliorer
                  l’expérience utilisateur, mémoriser les préférences
                  et personnaliser le service. <br />
                  Nous utilisons trois types de cookies qui sont : les
                  cookies de session (temporaires), les cookies
                  persistants (mémorisent les préférences sur
                  plusieurs sessions) et les cookies de tiers (définis
                  par d’autres sites web, par exemple pour les
                  analyses). <br />
                  Le site respecte le droit à la confidentialité et
                  s’engage à respecter les lois sur les cookies et la
                  confidentialité. <br />
                  Avant d’utiliser les services, le consentement de
                  l’utilisateur pour l’utilisation des cookies est
                  demandé. <br />
                  Les utilisateurs peuvent refuser les cookies non
                  essentiels et modifier leurs préférences à tout
                  moment. <br />
                  Pour plus d’informations, les utilisateurs sont
                  invités à consulter la politique de confidentialité
                  du site.
                </p>
              </div>
              <div className="flex flex-row mobile:flex-wrap items-center tablette:mt-8 mobile:mt-0 justify-center gap-6 mobile:gap-1 bg-slate-300/50">
                <button
                  className="bg-green-500 btnCookie"
                  onClick={handleAccepter}
                >
                  J'accepte
                </button>
                <button
                  className=" btnCookie"
                  onClick={handlePlusTard}
                >
                  Choissir plus tard
                </button>
                <button
                  className="bg-red-500 btnCookie"
                  onClick={handleDecliner}
                >
                  Je refuse
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
