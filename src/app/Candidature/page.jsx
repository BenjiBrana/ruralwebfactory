'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Candidature() {
  const router = useRouter();

  /* Définit l'état pour chaque champ du formulaire*/
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    /* Vérifie si tous les champs requis sont remplis*/
    if (!cv || !email || !prenom || !nom || !message) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }
    /* Si tous les champs sont remplis retour à l'accueil*/
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center bg-primary p-8 rounded-lg ">
      <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
        Candidature Libre
      </h2>
      <form
        action=""
        className="w-1/2 mobile:w-5/6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-left font-titleFont font-bold text-xl uppercase underline pt-4 pb-8">
          Informations du Candidat
        </h3>
        <div className="mb-4">
          <label htmlFor="nom" className="block font-medium">
            Nom:
          </label>
          <input
            type="text"
            id="nom"
            required
            pattern="[a-zA-Z\s]+"
            maxLength="50"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prenom" className="block font-medium">
            Prénom:
          </label>
          <input
            type="text"
            id="prenom"
            required
            pattern="[a-zA-Z\s]+"
            maxLength="50"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
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
          <label htmlFor="cv" className="block font-medium">
            Télécharger CV:
          </label>
          <input
            type="file"
            id="cv"
            required
            className="w-full border rounded-md p-2 shadow-md"
            value={cv}
            onChange={(e) => setCv(e.target.value)}
          />
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
          Envoyer la candidature
        </button>
      </form>
    </div>
  );
}
