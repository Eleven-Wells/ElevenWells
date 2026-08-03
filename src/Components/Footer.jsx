import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3EF] text-[#2D2D2D] px-6 py-20 md:px-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 8h12v32H8V8z" fill="#1A1A1A" />
                <path d="M28 8h12v32H28V8z" fill="#1A1A1A" />
                <path d="M20 20l8 8" stroke="#1A1A1A" strokeWidth="8" strokeLinecap="square" />
              </svg>
            </div>

            {/* Tagline */}
            <p className="text-[#5A5A5A] text-[1.5rem] leading-[1.6] mb-12 txt">
              Bringing together creative and technical talent to build products
              that create value.
            </p>

            {/* Newsletter */}
            <div className="mb-12">
              <h4 className="text-[#2D2D2D] font-semibold text-[1.6rem] mb-5 txtx">
                Sign up for our newsletter
              </h4>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[#2D2D2D] pb-2 text-[0.95rem] text-[#2D2D2D] placeholder-[#8A8A8A] focus:outline-none focus:border-[#8B4545] transition-colors"
                  />
                </div>
                <button className="text-[#2D2D2D] text-[1.3rem] font-medium pb-2 hover:text-[#8B4545] transition-colors txt">
                  Submit
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-8">
              <p className="text-[#2D2D2D] text-[0.95rem]">08077564321</p>
              <p className="text-[#2D2D2D] text-[0.95rem]">
                teamselevenwells@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon href="#">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="#">
                <BsTwitterX />
              </SocialIcon>
              <SocialIcon href="#">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="#">
                <IoLogoYoutube />
              </SocialIcon>
            </div>
          </div>

          {/* Right Column — Link Columns */}
          <div className="flex gap-16 lg:gap-24 lg:justify-end">
            {/* For Talent */}
            <div>
              <h4 className="text-[#2D2D2D] font-semibold text-[1.8rem] mb-6 txtx">
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

            {/* Company */}
            <div>
              <h4 className="text-[#2D2D2D] font-semibold text-[1.8rem] mb-6 txtx">
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
        
        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#D8D4CC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[#5A5A5A] text-[1.1rem]">
            © EVELENWELLS Inc
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

/* --- Subcomponents --- */

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="text-[#2D2D2D] hover:text-[#8B4545] transition-colors text-2xl"
  >
    {children}
  </a>
);

const FooterLink = ({ children }) => (
  <a
    href="#"
    className="text-[#5A5A5A] text-[1.2rem] hover:text-[#2D2D2D] transition-colors txt"
  >
    {children}
  </a>
);

const BottomLink = ({ children }) => (
  <a
    href="#"
    className="text-[#5A5A5A] text-[0.85rem] hover:text-[#2D2D2D] transition-colors"
  >
    {children}
  </a>
);

export default Footer;