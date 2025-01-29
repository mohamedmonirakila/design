import { motion } from "framer-motion";

const hoverEffect = {
  scale: 1.1,
  boxShadow: "0px 0px 8px rgb(255,198,49)",
};

const socialIcons = [
  { src: "/images/facebook.png", alt: "facebook-icon" },
  { src: "/images/instagram.png", alt: "instagram-icon" },
  { src: "/images/twitter.png", alt: "twitter-icon" },
  { src: "/images/whatsapp.png", alt: "whatsapp-icon" },
];

const FooterBottom = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top copyrights">
      <p>© 2025 All rights reserved Copyrights.</p>
      <ul className="list-unstyled d-flex">
        {socialIcons.map((icon, index) => (
          <li key={index} className={index === 0 ? "ms-0" : "ms-3"}>
            <a className="link-body-emphasis" href="#">
              <motion.img
                src={icon.src}
                alt={icon.alt}
                style={{ borderRadius: "50%" }}
                whileHover={hoverEffect}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBottom;
