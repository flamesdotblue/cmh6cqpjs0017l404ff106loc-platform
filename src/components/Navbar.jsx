import { useState } from 'react';
import { Hospital, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <Hospital className="h-6 w-6 text-cyan-400" />
          <span className="font-semibold tracking-tight">MediGrid</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
          <a href="#departments" className="text-sm text-white/80 hover:text-white">Departments</a>
          <a href="#doctors" className="text-sm text-white/80 hover:text-white">Doctors</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5">Log in</button>
          <button className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-cyan-400">Sign up</button>
        </div>
        <button
          aria-label="Toggle menu"
          className="flex items-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-neutral-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#home" className="text-sm text-white/90">Home</a>
            <a onClick={() => setOpen(false)} href="#departments" className="text-sm text-white/90">Departments</a>
            <a onClick={() => setOpen(false)} href="#doctors" className="text-sm text-white/90">Doctors</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-sm text-white/90">Contact</a>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-md border border-white/15 px-4 py-2 text-sm text-white/90">Log in</button>
            <button className="flex-1 rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-950">Sign up</button>
          </div>
        </div>
      )}
    </header>
  );
}
