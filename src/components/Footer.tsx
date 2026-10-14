
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (<>

   <section className="border-t border-gray-200">
      <footer className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">

          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center text-center md:items-start md:text-left ">
            <img
              src={logo} className="md:grid h-9 w-auto"
            />

            <p className="text-sm relative text-gray-500 max-w-sm leading-6">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <ul className="flex items-center justify-center gap-6 text-base  md:font-medium text-gray-600 md:text-gray-700 md:justify-start">
              <li>
                <a href="https://github.com/" target="_blank" className='hover'>
                  GitHub
                </a>
              </li>
                <li className="md:hidden">
                 <span>•</span>
                </li>
              <li>
                <a href="https://x.com/" target="_blank" className='hover'>
                  Twitter
                </a>
              </li>
              <li className="md:hidden">
             <span>•</span>
              </li>

              <li>
                <a href="https://www.linkedin.com/" target="_blank" className='hover'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className='hidden md:block'>
            <h2 className="text-sm font-bold text-gray-800 mb-4">
              PRODUCT
            </h2>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className='hover'>
                  Home
                </a>
              </li>

              <li>
                <a href="#technology" className='hover'>
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className='hover'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className='hidden md:block'>
            <h2 className="text-sm font-bold text-gray-800 mb-4">
              COMPANY
            </h2>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className='hover'>
                  About
                </a>
              </li>

              <li>
                <a href="#" className='hover'>
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className='hover'>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className='hidden md:block'>
            <h2 className="text-sm font-bold text-gray-800 mb-4">
              LEGAL
            </h2>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className='hover'>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className='hover'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center gap-4 border-t border-gray-200 py-6 text-sm text-gray-400 md:flex-row md:justify-between md:gap-3">

          <p>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <ul className="flex gap-6">
            <li>
              <a href="#" className='hover'>
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className='hover'>
                Terms
              </a>
            </li>
          </ul>

        </div>

      </footer>
    </section>

  

  </>
   
  )
};

export default Footer;
