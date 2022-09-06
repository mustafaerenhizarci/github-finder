import { FaHashtag } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer w-full px-4 h-16 bg-base-300 border-t-2 border-gray-400 drop-shadow-2xl">
      <div className="container py-4 mx-auto h-full flex gap-x-4 justify-center items-center">
        <FaHashtag className="text-3xl" />
        <p className="text-md">
          <span className="text-accent mr-2">{year}</span> ® All rights reserved
        </p>
        <span className="text-2xl font-bold">|</span>
        <p>Mustafa Eren Hızarcı</p>
        <span className="text-2xl font-bold">|</span>
        <a
          className="link link-accent"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mustafaerenhizarci"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
