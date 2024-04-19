'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();

  /* Définit l'état pour chaque champ du formulaire */
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    /* Vérifie si tous les champs requis sont remplis */
    if (!nomEntreprise || !email || !phoneNumber || !message) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }
    /* Si tous les champs sont remplis retour à l'accueil */
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center bg-primary p-8 rounded-lg ">
      <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
        Contact
      </h2>
      <form
        action=""
        className="w-1/2 mobile:w-5/6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-left font-titleFont font-bold text-xl uppercase underline pt-4 pb-8">
          Demande d'informations / Devis
        </h3>
        <div className="mb-4">
          <label
            htmlFor="nomEntreprise"
            className="block font-medium"
          >
            Nom de l'Entreprise:
          </label>
          <input
            type="text"
            id="nomEntreprise"
            required
            pattern="[a-zA-Z\s]+"
            maxLength="50"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez le nom de votre entreprise"
            value={nomEntreprise}
            onChange={(e) => setNomEntreprise(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Adresse e-mail:
          </label>
          <input
            type="email"
            id="email"
            required
            maxLength="50"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium">
            Numéro de téléphone:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            required
            pattern="[0-9\s]+"
            minLength="10"
            maxLength="15"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre numéro de téléphone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <p className="font-medium">Vos Besoins:</p>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Création d'un site web
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Refonte de site existant
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Stratégie de marketing numérique
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Conception graphique
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Autres (précisez ci-dessous)
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium">
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            required
            maxLength="500"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Écrivez votre message ici..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-tertinary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-black font-bold shadow-md"
        >
          Envoyer le formulaire
        </button>
      </form>
    </div>
  );
}
