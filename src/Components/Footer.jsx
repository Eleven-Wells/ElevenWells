import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="w-7 h-8 bg-neutral-900 rounded-sm p-1 flex flex-col gap-0.5">
    <div className="w-full h-[55%] bg-white rounded-sm" />
    <div className="w-[60%] h-[30%] bg-white rounded-sm" />
  </div>
)

const forTalentLinks = ['Join EW', 'EW Network', 'Collaborate', 'Careers']
const companyLinks = ['About us', 'Work Archive', 'Blog', 'Contact', 'What we do']

const Footer = () => {
  return (
    <footer className="bg-[#f5f3ef] px-8 pt-14 pb-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Bringing together creative and technical talent to build products that create value.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-2 max-w-[260px]">
              <p className="text-xs font-semibold text-neutral-900">
                Sign up for our newsletter
              </p>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-neutral-400 text-sm py-1 outline-none placeholder:text-neutral-400 text-neutral-900"
              />
              <button className="self-end text-xs font-semibold underline text-neutral-900 hover:text-neutral-600 transition-colors">
                Submit
              </button>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-neutral-900 tracking-wide">
                For Talent
              </h4>
              <ul className="flex flex-col gap-2">
                {forTalentLinks.map(link => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-neutral-900 tracking-wide">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {companyLinks.map(link => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-300 pt-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-5">

          {/* Contact + socials */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-neutral-500">08077564321</p>
            <p className="text-xs text-neutral-500">teamselevenwells@gmail.com</p>
            <div className="flex gap-3 mt-2">
              {['ig', 'fb', 'x', 'pt', 'yt'].map(s => (
                <a key={s} href="#"
                  className="text-xs font-semibold uppercase text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap gap-3 items-center">
            {['Privacy', 'Terms and Condition', 'Accessibility', 'Payment Policy'].map(item => (
              <Link key={item} to="#"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {item}
              </Link>
            ))}
            <span className="text-xs text-neutral-400">© ELEVENWELLS Inc</span>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer