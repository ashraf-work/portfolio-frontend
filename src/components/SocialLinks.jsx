import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function SocialLinks() {
  const socials = [
    {
      name: "Email",
      icon: <TfiEmail className="size-4" />,
      userName: "ashrafcc202@gmail.com",
      link: "mailto:ashrafcc202@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="size-4" />,
      userName: "AshrafWorks",
      link: "https://github.com/ashrafworks",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="size-4" />,
      userName: "in/ashraf-saleem0",
      link: "https://www.linkedin.com/in/ashraf-saleem0",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="size-4" />,
      userName: "ashrafsaleem.dev",
      link: "https://instagram.com/ashrafsaleem.dev",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="size-4" />,
      userName: "ashrafsaleem99",
      link: "https://discord.com/users/1352502889490282323",
    },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        >
          {social.icon}
          <p className="hover:text-blue-400">{social.userName}</p>
        </Link>
      ))}
    </>
  );
}