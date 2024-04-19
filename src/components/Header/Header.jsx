'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  /* indique si menu ouvert (fermer par defaut)*/
  const [menuOpen, setMenuOpen] = useState(false);
  /* Si élément cliquer, défilement jusqu'à l'encre cible */
  function handleMenuItemClick(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      toggleMenu();
    }
  }
  /* Empeche le défilement si le menu est ouvert */
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  /* Gestionnaire d'évenement au clique sur un élément du menu */
  useEffect(() => {
    const itemMenus = document.querySelectorAll('.itemMenu');

    function handleClick(event) {
      const targetId = event.currentTarget
        .querySelector('a')
        .getAttribute('href');
      handleMenuItemClick(targetId);
      toggleMenu();
    }

    itemMenus.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      itemMenus.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const items = [
    { id: 'Services', name: 'Services' },
    { id: 'Realisations', name: 'Réalisations' },
    { id: 'Formations', name: 'Formations' },
    { id: 'Offres', name: 'Offres' },
    { id: 'Contact', name: 'Contact' },
  ];

  return (
    <header className="relative border-b text-textColor">
      <div className="ml-4 cursor-pointer fixed mt-4 z-20">
        <Link href="/">
          <Image
            className="imgCircle tablette:w-1/2 mobile:w-1/3  "
            src="/logo/circle_rwf.webp"
            alt="Logo RWF"
            title="Logo Rural Web Factory"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <nav
        className={`flex justify-between pt-4 fixed right-1 items-start ${
          menuOpen
            ? 'bg-primary/90 z-40  w-full'
            : 'bg-transparent z-10'
        }`}
      >
        <ul
          className={`flex flex-col ${
            menuOpen ? 'h-screen' : 'hidden'
          } items-center gap-2 w-full justify-evenly tablette:justify-center`}
        >
          {items.map((item) => (
            <li
              className={`itemMenu font-bold text-3xl mobile:text-lg uppercase leading-10 hover:bg-textColor/80 hover:text-primary scale-95 hover:scale-125 hover:text-4xl mobile:hover:text-xl hover:rounded-lg w-1/2 py-4 text-center transition-all ${
                menuOpen ? 'fade-out' : ''
              }`}
              key={item.id}
            >
              <Link href={`/${item.id}`} onClick={toggleMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="h-12 w-12 cursor-pointer justify-center items-center tablette:flex mr-2 mobile:mr-1"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <>
              <Image
                id="closeIcon"
                className="h-8 w-8 mobile:h-12 mobile:w-12 hover:bg-red-500/70 hover:border-black/50 hover:border-2 rounded-full p-1"
                src="/logo/close.svg"
                alt="Logo fermeture"
                title="Logo Rural Web Factory"
                width={30}
                height={30}
              />
              {/* <div className="btnGroup">
                <button
                  className="buttonMode bg-blue-500/50"
                  id="nightModeBtn"
                >
                  <Image
                    className="moon  h-5 w-5"
                    src="/logo/moon.svg"
                    alt="Logo dark mode"
                    title="Logo pour activer le dark mode"
                    width={30}
                    height={30}
                  />
                </button>
                <button
                  className="buttonMode bg-yellow-500/50"
                  id="dayModeBtn"
                >
                  <Image
                    className="sun  h-5 w-5"
                    src="/logo/sun.svg"
                    alt="Logo light mode"
                    title="Logo pour activer le light mode"
                    width={30}
                    height={30}
                  />
                </button>
              </div> */}
            </>
          ) : (
            <Image
              id="menuIcon"
              className="h-10 w-10 z-10 bg-primary/70 hover:bg-tertinary/70 rounded-full p-1 shadow-lg shadow-black "
              src="/logo/burger_Menu.svg"
              alt="Logo burger menu"
              title="Logo pour ouvrir le menu"
              width={30}
              height={30}
            />
          )}
        </div>
      </nav>
      <section className="flex tablette:flex-col items-center bg-textColor">
        <div className="w-full flex  justify-center h-16">
          <h1 className="flex items-end font-titleFont font-bold text-4xl mobile:text-2xl  p-2 text-primary">
            Rural <b className="pl-1 text-tertinary ">W</b>eb Factory
          </h1>
        </div>
        <div className="search flex justify-center my-10 w-full">
          <input
            className="border border-borderColor shadow shadow-white w-1/4 rounded-l-lg px-2 tablette:w-2/4"
            type="search"
            name="search"
            title="search bar"
            id="search"
            placeholder="Saisissez votre recherche"
          />
          <button
            className="btn shadow rounded-r-lg shadow-white"
            type="submit"
          >
            <img
              className="border border-borderColor rounded-r-lg"
              src="/logo/logo_search.webp"
              alt="Logo search"
              title="Logo de recherche"
              width="45"
              height="45"
            />
          </button>
        </div>
      </section>
    </header>
  );
}
