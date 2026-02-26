import "./globals.css";

export const metadata = {
  title: "Shivam Chaurasiya - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="container">
            <div className="logo">Shivam Chaurasiya</div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <li>
                <a href="/admin">Admin</a>
              </li> */}
            </ul>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <div className="container">
            <p>&copy; 2026 Shivam Chaurasiya. All rights reserved.</p>
            <div className="social-links">
              <a
                href="https://in.linkedin.com/in/shivam-chaurasiya-98ba14233"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="https://github.com/shivamchaurasiya1050" target="_blank">
                GitHub
              </a>
              <a href="https://twitter.com/yourusername" target="_blank">
                Twitter
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamchaurasiya1050@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
