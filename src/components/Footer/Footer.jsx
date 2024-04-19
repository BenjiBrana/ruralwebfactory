import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  const liensReseauxSociaux = [
    {
      id: 'rs1',
      title: 'Lien Linkedin',
      alt: 'Logo Linkedin',
      lien: 'logo_linkedin.webp',
      url: 'https://www.linkedin.com/',
    },
    {
      id: 'rs2',
      title: 'Lien Facebook',
      alt: 'Logo Facebook',
      lien: 'logo_fb.webp',
      url: 'https://www.facebook.com/',
    },
    {
      id: 'rs3',
      title: 'Lien X',
      alt: 'Logo X',
      lien: 'logo_x.webp',
      url: 'https://twitter.com/',
    },
    {
      id: 'rs4',
      title: 'Lien Youtube',
      alt: 'Logo Youtube',
      lien: 'logo_ytb.webp',
      url: 'https://www.youtube.com/?hl=FR',
    },
  ];
  return (
    <footer className="flex tablette:flex-col mt-8 py-5 border-t bg-secondary text-textColor">
      <div className="reseauxSociaux flex w-1/4 justify-evenly items-center tablette:w-full tablette:justify-center tablette:gap-8 tablette:mt-8 ">
        {liensReseauxSociaux.map((lienReseauSocial) => (
          <div key={lienReseauSocial.id}>
            <Link
              className="cursor-pointer"
              target="_blank"
              href={lienReseauSocial.url}
            >
              <Image
                className="imgCircle h-9 w-9 hover:scale-110"
                src={`/logo/${lienReseauSocial.lien}`}
                alt={lienReseauSocial.alt}
                title={lienReseauSocial.title}
                width={35}
                height={35}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="contact flex flex-col flex-1  justify-between items-center gap-10  tablette:order-3">
        <div className="flex flex-col items-center">
          <h2 className="titleFont text-xl font-bold">
            Rural Web Factory
          </h2>
          <h3 className="titleFont text-s">Aubeterre-sur-Dronne</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">
            <Link
              href="/Candidature"
              className="flex gap-4 items-center cursor-pointer  text-textColor text-center text-md font-bold hover:scale-110"
            >
              <Image
                className="h-8 w-8"
                src="/logo/laptop-code.svg"
                alt="Logo Travail"
                title="Recrutement"
                width={32}
                height={32}
              />
              Nous recrutons | Rejoigniez-nous
            </Link>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-s">
            &copy; RuralWebFactory | 2024
          </span>
          <span className="text-xs hover:scale-110">
            Site réalisé par{' '}
            <a
              className="hover:font-bold"
              href="https://branabenjamin.fr"
            >
              Brana Benjamin
            </a>
          </span>
        </div>
      </div>
      <div className="mentions flex flex-1 justify-evenly gap-4 xl:flex-row lg:flex-col tablette:flex-row mobile:flex-col mobile:items-center tablette:my-16">
        <ul className="flex xl:flex-col lg:flex-row tablette:flex-col gap-4 justify-center">
          <li className="hover:scale-110">
            <a href="/MentionsLegales">Mentions légales</a>
          </li>
          <li>
            <a className="" href="#">
              Confidentialité
            </a>
          </li>
          <li>
            <a className="" href="#">
              Cookies{' '}
            </a>
          </li>
        </ul>
        <ul className="flex xl:flex-col lg:flex-row tablette:flex-col  gap-4 justify-center">
          <li className="flex">
            <a className="flex gap-4 items-center " href="#">
              <Image
                className="imgCircle"
                src="/logo/logo_accessibilite.webp"
                alt="Logo accessibilité"
                title="Accessibility"
                width={32}
                height={32}
              />
              Accessibilité : non conforme
            </a>
          </li>
          <li className="flex">
            <a className="flex gap-4 items-center" href="#">
              <Image
                className="imgCircle"
                src="/logo/logo_faciliti.webp"
                alt="Logo facil'iti"
                title="Facil'iti"
                width={32}
                height={32}
              />
              Facil'iti
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-2 items-center justify-center ">
          <Link href="https://tree-nation.com/fr" target="_blank">
            <Image
              className="rounded-md mr-4 w-36 h-16"
              src="/logo/logo_netZero.webp"
              alt="Logo net zéro"
              title="net zéro"
              width={144}
              height={64}
            />
          </Link>
          <Link href="https://fr.trustpilot.com/" target="_blank">
            <Image
              className="rounded-md mr-4 w-36 h-16"
              src="/logo/trustpilot.webp"
              alt="Logo trustpilot"
              title="trustpilot"
              width={144}
              height={64}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
