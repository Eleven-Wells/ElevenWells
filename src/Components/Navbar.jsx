import React,  { useState, useEffect } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
   const [open, setOpen] = useState(false);

    // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

   const links = [
    "Work Archive",
    "About Us",
    "What We Do",
    "Collaborate",
  ];

  return (
    <motion.header
     initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
    className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="flex justify-between items-start py-6">

          {/* Left */}

          <div className="hidden lg:flex flex-col space-y-2">

            <h2 className="font-black tracking-wider">
              ELEVENWELLS
            </h2>

            {links.map((link) => (
              <a key={link} className='text-white txt hover:translate-x-2 transition' href="#">
                {link}
              </a>
            ))}

          </div>

          {/* Logo */}

          <div className="absolute left-1/2 -translate-x-1/2">
            {/* <img 
              src="/logo.svg"
              alt="logo"
              className="h-12"
            />*/}
          <AiTwotoneHtml5 className='text-6xl'/>
          </div>

          {/* Desktop Button */}

          
            <button className="hidden lg:flex bg-white rounded-xl px-4 py-2 items-center gap-3 hover:scale-105 transition txtx">

              Get In Touch

              <span className="bg-black text-white rounded-lg w-7 h-7 flex items-center justify-center">
                <FaAngleRight />
              </span>

            </button>

          {/* Mobile Menu */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white ml-auto"
          >
            {open ? (
              <HiX size={35} />
            ) : (
              <HiMenuAlt3 size={35} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
     <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 text-white z-[100] bg-black/60 backdrop-blur-md shadow-md"

          >

            {/* Close */}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
            >
              <IoClose size={40} />
            </button>

            <div className="h-full flex flex-col justify-center items-center">

              <motion.h1

                initial={{ y: -40, opacity: 0 }}

                animate={{ y: 0, opacity: 1 }}

                className="text-4xl font-black tracking-wider mb-12"

              >

                ELEVENWELLS

              </motion.h1>

              <div className="flex flex-col gap-8 text-3xl">

                {links.map((link, i) => (

                  <motion.a

                    key={link}

                    initial={{ x: -60, opacity: 0 }}

                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: i * 0.1,
                      },
                    }}

                    href="#"

                    className="hover:text-gray-400 txt"

                  >

                    {link}

                  </motion.a>

                ))}

              </div>

              <motion.button

                initial={{ y: 40, opacity: 0 }}

                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                }}

                className="flex mt-16 text-black rounded-xl px-8 bg-white py-2 items-center gap-3 txtx"

              >

                Get In Touch <span className="bg-black text-white rounded-lg w-7 h-7 flex items-center justify-center">
                <FaAngleRight />
              </span>

              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
      
    </motion.header>
  )
}

export default Navbar