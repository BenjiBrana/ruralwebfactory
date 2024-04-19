'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function FilAriane() {
  /*Obtenir url et stockage des url*/
  const url = usePathname();
  const [segments, setSegments] = useState([]);
  /*Exécution au changement d'url, filtre les segments vide, ajoute des / et mets à jour le segment */
  useEffect(() => {
    const path = url.split('/').filter((crumb) => crumb !== '');
    path.unshift('/');
    setSegments(path);
  }, [url]);

  return (
    <div className="flex flex-row mt-6 ml-6 text-xl">
      {segments.map((pathSegment, index) => (
        <div className="flex flex-row" id="filAriane" key={index}>
          <span>
            {pathSegment === '/' ? (
              <Link href="/" key={pathSegment}>
                <Image
                  className="rounded-full h-6 w-6"
                  src="/logo/home.svg"
                  alt="Logo home"
                  title="Logo retour accueil"
                  width={24}
                  height={24}
                />
              </Link>
            ) : (
              <Link href={`/${pathSegment}`} key={pathSegment}>
                {pathSegment}
              </Link>
            )}
          </span>
          {index !== segments.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </div>
      ))}
    </div>
  );
}
