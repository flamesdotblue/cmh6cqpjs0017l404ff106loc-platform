import { Heart, Calendar, CreditCard, FileText, FlaskConical, Activity, Shield, User } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Doctor discovery',
    desc: 'Find specialists by department, rating, and availability with real-time scheduling.',
  },
  {
    icon: Calendar,
    title: 'Appointments',
    desc: 'Book in-clinic or teleconsultations with automated reminders and waitlist.',
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    desc: 'Stripe/Razorpay integration with invoices, receipts, and webhook verification.',
  },
  {
    icon: FileText,
    title: 'Medical records',
    desc: 'Securely access prescriptions, labs, and discharge summaries with audit logs.',
  },
  {
    icon: FlaskConical,
    title: 'Lab & Pharmacy',
    desc: 'Manage tests, results, and inventory with role-based workflows.',
  },
  {
    icon: Activity,
    title: 'Analytics',
    desc: 'Monitor KPIs, patient flow, and revenue trends with role-based dashboards.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'HTTPS, encryption at rest, RBAC, rate limiting, and global compliance.',
  },
  {
    icon: User,
    title: 'Multi-role access',
    desc: 'Patients, doctors, nurses, lab, pharmacy, billing, and admins with fine-grained RBAC.',
  },
];

export default function Features() {
  return (
    <section id="learn" className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Designed for modern hospitals</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A modular full-stack platform that scales with your operations and delivers a delightful patient experience.
          </p>
        </div>
        <a href="#contact" className="hidden rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5 md:block">Request a demo</a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      <div id="book" className="mt-14 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-medium">Ready to experience seamless care?</h3>
            <p className="text-sm text-white/70">Create your patient account to book your first appointment in minutes.</p>
          </div>
          <div className="flex gap-3">
            <a className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-cyan-400" href="#signup">Get started</a>
            <a className="rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5" href="#contact">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      <div className="relative z-10">
        <div className="mb-3 inline-flex rounded-lg border border-white/10 bg-neutral-900 p-2">
          <Icon className="h-5 w-5 text-cyan-400" />
        </div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}
