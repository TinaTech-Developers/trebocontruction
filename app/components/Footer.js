import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2"> Trebo Construction</h2>
          <p className="text-sm text-green-100">
            Trusted professionals for all your construction and plumbing needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-green-100 text-sm">
            32416 Mabvazuva, Estate
            <br />
            Ruwa, Zimbabwe
          </p>
          <p className="mt-2 text-green-100 text-sm">
            Email: info@treboconstruction.co.zw
          </p>
          <p className="text-green-100 text-sm">Phone: +(263) 77-702-8258</p>
          <p className="text-green-100 text-sm">Phone: +(27) 61-708-7622</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Replace with real icons/links */}
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0zM12.9 12H11v6H9v-6H8v-2h1V8.7c0-1 .4-2.3 2.3-2.3H13v2h-1.1c-.3 0-.9.2-.9.9V10h2l-.1 2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.23 5.924c-.793.352-1.644.59-2.538.698a4.448 4.448 0 0 0 1.954-2.46 8.934 8.934 0 0 1-2.828 1.084 4.427 4.427 0 0 0-7.548 4.036A12.57 12.57 0 0 1 3.11 4.97a4.424 4.424 0 0 0 1.372 5.907 4.398 4.398 0 0 1-2.007-.554v.056a4.428 4.428 0 0 0 3.548 4.338 4.447 4.447 0 0 1-2.003.076 4.43 4.43 0 0 0 4.135 3.07A8.898 8.898 0 0 1 2 19.54a12.545 12.545 0 0 0 6.794 1.993c8.152 0 12.61-6.748 12.61-12.6 0-.193-.005-.385-.014-.576a9.005 9.005 0 0 0 2.213-2.297z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-green-100 text-sm mt-8">
        &copy; {new Date().getFullYear()} BuildFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
