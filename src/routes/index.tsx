import logo from "../assets/logo.png";
import seoCourse from "../assets/seo-course.png";
import digitalmarketing from "../assets/digital-marketing.png"
import googleAdsAI from "../assets/google-ads-ai.png";
import metaAdsAI from "../assets/meta-ads-ai.png";
import republicDayBundle from "../assets/republic-day-bundle.png";
import ultimateComboBundle from "../assets/ultimate-combo-bundle.png";
import allCoursesAccessBundle from "../assets/all-courses-access-bundle.png";
import socialMediaMarketing from "../assets/social-media-marketing.png";
import socialMediaManagement from "../assets/social-media-management.png";
import googleMyBusiness from "../assets/google-my-business.png";
import heroImage from "../assets/hero-image.png";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Phone,
  MessageCircle,
  Star,
  Sparkles,
  Award,
  Users,
  Infinity as InfinityIcon,
  ClipboardCheck,
  GraduationCap,
  Trophy,
  ChevronDown,
  MapPin,
  Mail,
  ArrowRight,
  Search,
  BarChart3,
  Clock,

  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaNectar — Complete Digital Marketing Learning Ecosystem" },
      { name: "description", content: "Master Google Ads, SEO, Meta Ads & Tracking with India's leading digital marketing courses. Lifetime access, certified, taught by practitioners." },
      { property: "og:title", content: "NovaNectar — Digital Marketing Courses" },
      { property: "og:description", content: "Become a Full Stack Digital Marketer. 8 courses in 1 bundle. Lifetime access." },
    ],
  }),
  component: Home,
});

/* ------------------------------ DATA ------------------------------ */

const bundles = [
  {
    title: "Republic Day Bundle (3 in 1)",
    tag: "Combo Package",
    old: "₹7,799",
    price: "₹5,500",
    image: republicDayBundle,
  },
  {
    title: "Ultimate Combo Bundle (4 in 1)",
    tag: "Combo Package",
    old: "₹27,017",
    price: "₹15,999",
    featured: true,
    image: ultimateComboBundle,
  },
  {
    title: "All Courses Access (7 in 1)",
    tag: "Combo Package",
    old: "₹80,488",
    price: "₹33,000",
    image: allCoursesAccessBundle,
  },
];
const flagship = [
  {
    title: "Digital Marketing",
    rating: "5.0",
    reviews: 80,
    old: "₹6,000",
    price: "₹3,999",
    image: digitalmarketing,
  },
  {
    title: "SEO (Search Engine Optimization)",
    rating: "5.0",
    reviews: 39,
    old: "₹6,000",
    price: "₹4,199",
    image: seoCourse,
  },
];

const newLaunches = [
  { title: "AI Landing Page Mastery (Cohort 1) — With Automations & Tracking", instructor: "Shivanshu Sir & Aditya Sir" },
  { title: "Cohort 9 — Performance Marketing for D2C BootCamp (Meta Special)", instructor: "Shivanshu Sir & Sahil Sir" },
  { title: "25 Mar '26 | Live Digital Marketing Course with AI — for Beginners", instructor: "Ankur Sir" },
];

const courses = [
  {
    title: "SEO (Search Engine Optimization)",
    duration: "2 months",
    image: seoCourse,
    price: "₹4,199",
    oldPrice: "₹6,000",
    description:
      "NovaNectar SEO Mastery course: Learn powerful SEO techniques, keyword research, on-page and off-page optimization, and strategies to rank websites higher on Google.",
  },

  {
    title: "Google Ads with AI",
    duration: "2 months",
    image: googleAdsAI,
    price: "₹14,999",
    oldPrice: "₹29,999",
    description:
      "NovaNectar Google Ads with AI course: Master Google Ads campaigns with smart automation, AI-powered targeting, and data-driven optimization to maximize ROI.",
  },

  {
    title: "Meta Ads with AI",
    duration: "2 months",
    image: metaAdsAI,
    price: "₹14,999",
    oldPrice: "₹29,999",
    description:
      "NovaNectar Meta Ads with AI course: Learn how to create, manage, and optimize Facebook and Instagram ad campaigns using AI-powered automation, targeting, and performance tools.",
  },

  {
    title: "Social Media Marketing",
    duration: "2 months",
    image: socialMediaMarketing,
    price: "₹14,999",
    oldPrice: "₹29,999",
    description:
      "NovaNectar Social Media Marketing course: Learn how to grow brands on Instagram, Facebook, YouTube, LinkedIn, and Twitter through content strategy, analytics, trends, and performance marketing.",
  },

  {
    title: "Social Media Management",
    duration: "2 months",
    image: socialMediaManagement,
    price: "₹14,999",
    oldPrice: "₹29,999",
    description:
      "NovaNectar Social Media Management course: Learn how to plan, schedule, manage, and optimize social media content for brands across Instagram, Facebook, YouTube, LinkedIn, and more.",
  },

  {
    title: "Google My Business",
    duration: "2 months",
    image: googleMyBusiness,
    price: "₹14,999",
    oldPrice: "₹29,999",
    description:
      "NovaNectar Google My Business (GMB) course: Learn how to optimize business listings, rank higher on Google Maps, manage reviews, and drive local customers using powerful local SEO strategies.",
  },

  {
    title: "Digital Marketing",
    duration: "2 months",
    image: digitalmarketing,
    price: "₹3,999",
    oldPrice: "₹6,000",
    description:
      "NovaNectar Digital Marketing course: Learn comprehensive digital marketing strategies, including SEO, Google Ads, Meta Ads, and social media marketing to grow your online presence.",
  }
];

const advantages = [
  { icon: InfinityIcon, title: "Lifetime Recordings" },
  { icon: Award, title: "Industry-Recognized Certificate" },
  { icon: Users, title: "Community with Batchmates" },
  { icon: ClipboardCheck, title: "Assignment-Based Learning" },
  { icon: GraduationCap, title: "Industry Top Experts" },
  { icon: Trophy, title: "Lifetime Access" },
];

const alumni = [
  { name: "Sachin Kumar", role: "Assistant Digital Marketing Manager", package: "8+ LPA" },
  { name: "Navin Sharma", role: "Digital Marketing Manager", package: "5.5+ LPA" },
  { name: "Gurdeep", role: "Digital Marketing Manager", package: "7.5+ LPA" },
  { name: "Ranajit Behera", role: "Digital Marketing Manager", package: "6+ LPA" },
  { name: "Vishal Bansal", role: "Associate SEO Analyst", package: "5+ LPA" },
  { name: "Ashish Kumar", role: "Senior Executive Media Operations", package: "6+ LPA" },
];

const faculty = [
  { name: "Shivanshu Sir", role: "Founder, NovaNectar", bio: "B.Tech (CSE) & MBA. Leads a performance-driven agency, managed ₹50Cr+ in ad spend, expert in Paid Media and Tracking." },
  { name: "Afsar Khan", role: "DM Trainer, NovaNectar", bio: "Sales Lead at NovaNectar, B.Tech IIT-Dasuali. Drives client acquisition & growth strategy across GCC region." },
  { name: "Ankur Pratap Singh", role: "Senior Trainer, NovaNectar", bio: "Trained 10,000+ students over 7+ years. Specializes in SEO, Google Ads, and Funnel Building." },
  { name: "Sahil Kannojiya", role: "Founder, Promote Digitally", bio: "BITS Pilani alumnus. Growth strategist scaling D2C and Meta Ads campaigns to 8-figure revenue." },
  { name: "Aditya Singh", role: "Founder, FX Retina", bio: "Digital strategist specializing in lead-gen funnels and marketing automation for startups & service businesses." },
];

const faqs = [
  { q: "How do I create an account?", a: "Click Login/Register, then Sign Up. Enter your email and password to register." },
  { q: "I have issues with Login, what should I do?", a: "Click Forgot Password to reset. If the issue persists, email us with the details." },
  { q: "How do I take a course?", a: "After purchase, the course is added to your “My Courses” section. Click the course image to start." },
  { q: "Do I receive a certificate upon completion?", a: "Yes — every course you complete earns a certificate of achievement you can share on your profiles." },
  { q: "Is there a time limit to complete courses?", a: "No strict time limit — you get lifetime access. We do encourage consistent progress." },
  { q: "Are the courses live or recorded?", a: "Both. Some are self-paced recorded modules; others are live cohorts with mentor support." },
  { q: "Is the content in Hindi or English?", a: "Most courses are taught in Hindi." },
  { q: "What payment methods are accepted?", a: "UPI, debit/credit cards, net banking, and international payments via Razorpay." },
  { q: "Do you offer refunds?", a: "Since content is digital and instantly accessible, refunds aren't offered once access is granted." },
  { q: "What if I miss a live class?", a: "Every session is recorded and uploaded to your dashboard within 4 hours." },
];

/* ----------------------------- COMPONENTS ----------------------------- */

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center"
      aria-label="NovaNectar home"
    >
      <img
        src={logo}
        alt="NovaNectar Learning Platform"
        className="h-16 w-auto object-contain"
      />
    </a>
  );
} // <-- THIS WAS MISSING

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <a href="#courses" className="text-sm font-medium text-foreground/80 hover:text-primary">Courses</a>
          <a href="#bundles" className="text-sm font-medium text-foreground/80 hover:text-primary">Best Combos</a>
          <a href="#faculty" className="text-sm font-medium text-foreground/80 hover:text-primary">Faculty</a>
          <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="View cart" className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-secondary hover:text-foreground">
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </button>
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:inline-block">Login</a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            <a onClick={() => setOpen(false)} href="#courses" className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Courses</a>
            <a onClick={() => setOpen(false)} href="#bundles" className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Digital Products</a>
            <a onClick={() => setOpen(false)} href="#faculty" className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">Faculty</a>
            <a onClick={() => setOpen(false)} href="#faq" className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary">FAQ</a>
            <a onClick={() => setOpen(false)} href="#contact" className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">Login</a>
          </div>
        </nav>
      )}
    </header>
  );
}

function PromoBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-medium sm:flex-row sm:text-sm">
        <span>8 Courses. 1 Bundle. Lifetime Access. Become a Full Stack Digital Marketer 🚀</span>
        <a href="#bundles" className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white hover:bg-white/25">Enroll Today</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Online & Self-Paced
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Complete <span className="text-primary">Digital Marketing</span> Learning Ecosystem
          </h1>
          <ul className="mt-8 space-y-3 text-base text-foreground/80">
            <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /> Online or Self-Paced — choose what works for you.</li>
            <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /> Build skills that everyone values.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#courses" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
              Explore Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#bundles" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              View Bundles
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-6 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-br from-primary to-indigo-700 shadow-2xl" aria-hidden="true" />
            <div className="absolute left-6 top-12 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg ring-1 ring-border">
              <Search className="h-4 w-4 text-rose-500" aria-hidden="true" />
              <span className="text-sm font-bold">SEO</span>
            </div>
            <div className="absolute bottom-24 left-2 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg ring-1 ring-border">
              <span className="grid h-5 w-5 place-items-center rounded-sm bg-blue-600 text-[10px] font-bold text-white" aria-hidden="true">M</span>
              <span className="text-sm font-bold">Meta</span>
            </div>
            <div className="absolute right-2 top-1/3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg ring-1 ring-border">
              <BarChart3 className="h-4 w-4 text-amber-500" aria-hidden="true" />
              <span className="text-sm font-bold">Google Ads</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
  <img
  src={heroImage}
  alt="NovaNectar"
  className="h-80 w-80 rounded-full object-cover border-4 border-white shadow-2xl"
/>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, accent, sub }: { eyebrow?: string; title: string; accent?: string; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title} {accent && <span className="text-primary">{accent}</span>}
      </h2>
      {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Bundles() {
  return (
    <section id="bundles" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Limited Spots" title="Special" accent="Bundles" sub="Secure your seat early — spots fill up fast." />
        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <article key={b.title} className={`relative rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${b.featured ? "border-primary ring-2 ring-primary/30" : "border-border"}`}>
              {b.featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Most Popular</span>}
              <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{b.tag}</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{b.title}</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-foreground">{b.price}</span>
                <span className="text-sm font-medium text-muted-foreground line-through">{b.old}</span>
              </div>
              <button className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Enrol Now</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseThumb({
  image,
  label,
}: {
  image: string;
  label: string;
}) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl">
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover transition duration-300 hover:scale-105"
      />
    </div>
  );
}

function Flagship() {
  return (
    <section id="flagship" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Result-Driven"
          title="Flagship"
          accent="Programs / Courses"
          sub="In-depth learning experiences designed to transform your career and business growth."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {flagship.map((c) => (
            <article
              key={c.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Course Poster */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Flagship
                </span>

              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 min-h-[300px]">

                <h3 className="text-2xl font-bold text-gray-900">
                  {c.title}
                </h3>

                <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                  <span>⭐ {c.rating}</span>
                  <span>•</span>
                  <span>{c.reviews}+ Ratings</span>
                </div>

                <p className="mt-3 text-sm font-medium text-gray-500">
                  👨‍🏫 Premium Instructor
                </p>

                <p className="mt-4 flex-grow text-[15px] leading-6 text-gray-600">
                  Learn through real-world projects, live case studies, AI-powered tools, and industry-focused practical training.
                </p>

                {/* Price */}
                <div className="mt-6 flex items-center gap-3">

                  <span className="text-3xl font-bold text-black">
                    {c.price}
                  </span>

                  <span className="text-red-500 line-through">
                    {c.old}
                  </span>

                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                    SAVE 40%
                  </span>

                </div>

                {/* Button */}
                <button className="mt-auto w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3 text-base font-semibold text-white transition duration-300 hover:from-indigo-700 hover:to-blue-700">
                  VIEW DETAILS →
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

function AllCourses() {
  return (
    <section
      id="courses"
      className="bg-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Library"
          title="All"
          accent="Courses"
          sub="From beginner foundations to advanced mastery — every program built to help you grow in digital marketing."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Poster */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  AI Powered
                </span>

              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 min-h-[360px]">

                <h3 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                  <span>⭐ 4.9</span>
                  <span>•</span>
                  <span>1000+ Students</span>
                </div>

                <p className="mt-3 text-sm font-medium text-gray-500">
                  ⏱ {course.duration}
                </p>

                <p className="mt-4 flex-grow text-[15px] leading-6 text-gray-600 line-clamp-3">
                  {course.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-center gap-3">

                  <span className="text-3xl font-bold text-black">
                    {course.price}
                  </span>

                  <span className="text-red-500 line-through">
                    {course.oldPrice}
                  </span>

                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                    50% OFF
                  </span>

                </div>

                {/* Button */}
                <button
                  className="mt-auto w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3 text-base font-semibold text-white transition duration-300 hover:from-indigo-700 hover:to-blue-700"
                >
                  VIEW DETAILS →
                </button>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
function Advantages() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why NovaNectar" title="NovaNectar" accent="Advantages" sub="Learn directly from practitioners running real campaigns. Practical strategies, updated frameworks, and mentorship to keep you ahead." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ icon: Icon, title }, i) => (
            <div key={title} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Alumni() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Real Results" title="Alumni" accent="Students" sub="Thousands have transformed their careers and businesses with our training." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alumni.map((a) => (
            <article key={a.name} className="rounded-2xl border border-border bg-gradient-to-br from-card to-primary-soft/40 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground" aria-hidden="true">
                  {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{a.name}</h3>
                  <p className="text-sm text-muted-foreground">{a.role}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-background/60 px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Package</span>
                <span className="text-lg font-extrabold text-primary">{a.package}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certification() {
  const items = [
    { title: "Industry-Recognized Certification", desc: "Validate your expertise with credentials respected by top employers globally." },
    { title: "Instant Career Credibility", desc: "Strengthen your resume and LinkedIn profile to boost opportunities and salary." },
    { title: "Gateway to High-Growth Roles", desc: "Open doors to Digital Marketing Specialist, Growth Marketer, and SEO/SEM Expert roles." },
  ];
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 sm:py-20">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Career Boost</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Get Certified by NovaNectar</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/15">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-xl font-bold">0{i + 1}</div>
              <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  return (
    <section id="faculty" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Mentors" title="Faculty &" accent="Experts" sub="Our mentors are top digital marketers running real campaigns. Insider knowledge, proven strategies, guidance you can trust." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <article key={f.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-700 text-xl font-bold text-primary-foreground" aria-hidden="true">
                  {f.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{f.name}</h3>
                  <p className="text-sm font-medium text-primary">{f.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Help Center" title="FAQs About Our" accent="Courses" sub="Everything you might want to ask." />
        <div className="rounded-2xl border border-border bg-card px-6">
          {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get in Touch" title="Connect" accent="With Us" sub="Send us your query — we’ll get back within 24 hours." />
        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We’ll be in touch shortly."); }}
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-foreground">Name <span className="text-destructive" aria-hidden="true">*</span></label>
                <input id="c-name" name="name" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-foreground">Email <span className="text-destructive" aria-hidden="true">*</span></label>
                <input id="c-email" name="email" type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary" />
              </div>
              <div>
                <label htmlFor="c-mobile" className="mb-1.5 block text-sm font-semibold text-foreground">Mobile <span className="text-destructive" aria-hidden="true">*</span></label>
                <input id="c-mobile" name="mobile" type="tel" required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-foreground">Message <span className="text-destructive" aria-hidden="true">*</span></label>
                <textarea id="c-message" name="message" required rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Send Message
            </button>
          </form>
          <div className="space-y-5">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Location</h3>
                <p className="mt-1 text-sm text-foreground">GMS Rd, Haripuram, Kanwali, Dehradun, Uttarakhand 248171</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Phone className="h-5 w-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Contact Us</h3>
                <p className="mt-1 text-sm text-foreground"><a href="tel:+917037050624" className="hover:text-primary">+91 7037050624</a>, <a href="tel:+917037050624" className="hover:text-primary">+91 7037050624</a></p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Mail className="h-5 w-5" aria-hidden="true" /></div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Mail Us</h3>
                <p className="mt-1 text-sm text-foreground"><a href="mailto:info@novanectar.co.in" className="hover:text-primary">info@novanectar.co.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <img
              src={logo}
              alt="NovaNectar"
              className="h-16 brightness-0 invert"
            />

            <p className="mt-5 text-sm leading-7 text-gray-400">
              NovaNectar is a premium digital marketing learning platform
              helping students and professionals master SEO, Google Ads,
              Meta Ads, AI and Full Stack skills through practical learning.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-red-600"
              >
                <Youtube size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#top" className="transition hover:translate-x-1 hover:text-indigo-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#all-courses" className="transition hover:translate-x-1 hover:text-indigo-400">
                  Courses
                </a>
              </li>

              <li>
                <a href="#bundles" className="transition hover:translate-x-1 hover:text-indigo-400">
                  Bundles
                </a>
              </li>

              <li>
                <a href="#faculty" className="transition hover:translate-x-1 hover:text-indigo-400">
                  Faculty
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:translate-x-1 hover:text-indigo-400">
                  FAQs
                </a>
              </li>

            </ul>

          </div>

          {/* Popular Courses */}
          <div>

            <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>SEO Mastery</li>
              <li>Google Ads with AI</li>
              <li>Meta Ads with AI</li>
              <li>Digital Marketing</li>
              <li>Social Media Management</li>
              <li>Social Media Marketing</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-indigo-400" />
                <span>Dehradun, Uttarakhand</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-400" />
                <span>+91 7037050624</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-400" />
                <span>info@novanectar.co.in</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-indigo-400" />
                <span>Mon – Sat : 9 AM – 7 PM</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

          <div>

            <h3 className="text-2xl font-bold">
              Stay Updated 🚀
            </h3>

            <p className="mt-2 text-gray-400">
              Subscribe to receive the latest courses, offers and updates.
            </p>

          </div>

          <div className="flex w-full max-w-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-xl bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-gray-500"
            />

            <button className="rounded-r-xl bg-indigo-600 px-6 font-semibold transition hover:bg-indigo-700">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} NovaNectar. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="transition hover:text-indigo-400">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-indigo-400">
              Terms & Conditions
            </a>

            <a href="#" className="transition hover:text-indigo-400">
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a
        href="tel:+917037050624"
        aria-label="Call us"
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
      >
        <Phone className="h-4 w-4" aria-hidden="true" /> <span className="hidden sm:inline">Call us</span>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=%2B917037050624"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-semibold text-success-foreground shadow-lg hover:opacity-95"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> <span className="hidden sm:inline">Contact us</span>
      </a>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Header />
      <PromoBar />
      <main id="main">
        <Hero />
        <Flagship />
        <Bundles />
        <AllCourses />
        <Advantages />
        <Alumni />
        <Certification />
        <Faculty />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContacts />
    </>
  );
} 
