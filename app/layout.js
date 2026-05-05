
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Shivam Chaurasiya - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
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
