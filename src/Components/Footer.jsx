import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { usePortfolio } from "../context/PortfolioContext";

const Footer = () => {
  const { organization, loading } = usePortfolio();

  const socialLinks = [
    { key: "instagram", href: organization.instagram, icon: <FaInstagram /> },
    { key: "facebook", href: organization.facebook, icon: <FaFacebookF /> },
    { key: "X", href: organization.X, icon: <BsTwitterX /> },
    { key: "youtube", href: organization.youtube, icon: <IoLogoYoutube /> },
  ].filter((link) => link.href?.trim());

  return (
    <footer className="bg-[#F5F3EF] px-6 py-20 font-sans text-[#2D2D2D] md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-md">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 8h12v32H8V8z" fill="#1A1A1A" />
                <path d="M28 8h12v32H28V8z" fill="#1A1A1A" />
                <path
                  d="M20 20l8 8"
                  stroke="#1A1A1A"
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>

            <p className="txt mb-12 text-[1.5rem] leading-[1.6] text-[#5A5A5A]">
              Bringing together creative and technical talent to build products
              that create value.
            </p>

            <div className="mb-12">
              <h4 className="txtx mb-5 text-[1.6rem] font-semibold text-[#2D2D2D]">
                Sign up for our newsletter
              </h4>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-[#2D2D2D] bg-transparent pb-2 text-[0.95rem] text-[#2D2D2D] placeholder-[#8A8A8A] transition-colors focus:border-[#8B4545] focus:outline-none"
                  />
                </div>
                <button className="txt pb-2 text-[1.3rem] font-medium text-[#2D2D2D] transition-colors hover:text-[#8B4545]">
                  Submit
                </button>
              </div>
            </div>

            <div className="mb-8 space-y-2">
              {!loading && organization.phoneNumber?.trim() && (
                <p className="text-[0.95rem] text-[#2D2D2D]">
                  {organization.phoneNumber}
                </p>
              )}
              {!loading && organization.email?.trim() && (
                <p className="text-[0.95rem] text-[#2D2D2D]">
                  {organization.email}
                </p>
              )}
            </div>

            {!loading && socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.key} href={link.href}>
                    {link.icon}
                  </SocialIcon>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-16 lg:justify-end lg:gap-24">
            <div>
              <h4 className="txtx mb-6 text-[1.8rem] font-semibold text-[#2D2D2D]">
                For Talent
              </h4>
              <ul className="space-y-4 text-[1.4rem]">
                <li>
                  <FooterLink>Join EW</FooterLink>
                </li>
                <li>
                  <FooterLink>EW Network</FooterLink>
                </li>
                <li>
                  <FooterLink>Collaborate</FooterLink>
                </li>
                <li>
                  <FooterLink>Careers</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="txtx mb-6 text-[1.8rem] font-semibold text-[#2D2D2D]">
                company
              </h4>
              <ul className="space-y-4 text-[1.4rem]">
                <li>
                  <FooterLink>about us</FooterLink>
                </li>
                <li>
                  <FooterLink>Work Archive</FooterLink>
                </li>
                <li>
                  <FooterLink>Blog</FooterLink>
                </li>
                <li>
                  <FooterLink>Contact</FooterLink>
                </li>
                <li>
                  <FooterLink>What we do</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[#D8D4CC] pt-8 md:flex-row md:items-center">
          <span className="text-[1.1rem] text-[#5A5A5A]">
            © {organization.name?.trim() || "Eleven Wells"}
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[1.4rem]">
            <BottomLink>Privacy</BottomLink>
            <BottomLink>Terms and Condition</BottomLink>
            <BottomLink>Accessibility</BottomLink>
            <BottomLink>Payment Policy</BottomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-2xl text-[#2D2D2D] transition-colors hover:text-[#8B4545]"
  >
    {children}
  </a>
);

const FooterLink = ({ children }) => (
  <a
    href="#"
    className="txt text-[1.2rem] text-[#5A5A5A] transition-colors hover:text-[#2D2D2D]"
  >
    {children}
  </a>
);

const BottomLink = ({ children }) => (
  <a
    href="#"
    className="text-[0.85rem] text-[#5A5A5A] transition-colors hover:text-[#2D2D2D]"
  >
    {children}
  </a>
);

export default Footer;
