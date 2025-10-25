export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-semibold">MediGrid</h4>
            <p className="mt-2 text-sm text-white/70">A secure, scalable hospital platform for patient care and operations.</p>
          </div>
          <div>
            <h5 className="text-sm font-medium">Company</h5>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#departments" className="hover:text-white">Departments</a></li>
              <li><a href="#doctors" className="hover:text-white">Doctors</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium">Contact</h5>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>Email: hello@medigrid.health</li>
              <li>Support: support@medigrid.health</li>
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} MediGrid. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white/80">Privacy</a>
            <a href="#terms" className="hover:text-white/80">Terms</a>
            <a href="#security" className="hover:text-white/80">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
