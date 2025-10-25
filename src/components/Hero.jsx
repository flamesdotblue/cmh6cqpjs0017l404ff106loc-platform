import Spline from '@splinetool/react-spline';
import { Shield, Calendar, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative mx-auto flex min-h-[84vh] max-w-7xl items-center px-4 py-16 md:px-6">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Unified Hospital Platform
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Streamlined care for patients, doctors, and administrators
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Book appointments, access records, manage billing, and run operations on a secure, compliant, and modern healthcare stack.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-cyan-400"
            >
              Book an appointment
            </a>
            <a
              href="#learn"
              className="rounded-md border border-white/15 px-5 py-3 text-sm text-white/90 hover:bg-white/5"
            >
              Learn more
            </a>
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-3 text-xs text-white/70">
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <Shield className="h-4 w-4 text-cyan-400" /> HIPAA-ready
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <Calendar className="h-4 w-4 text-cyan-400" /> Smart scheduling
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <CreditCard className="h-4 w-4 text-cyan-400" /> Secure payments
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0">
            <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
