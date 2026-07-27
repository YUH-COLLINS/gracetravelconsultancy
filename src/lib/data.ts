export type CountryInfo = {
  slug: string;
  name: string;
  flag: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  programs: string[];
  tuitionRange: string;
  livingCost: string;
  requirements: string[];
  visaProcess: string[];
  universities: string[];
  timeline: string[];
  faq: { question: string; answer: string }[];
};

export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "study", href: "/study-abroad" },
  { key: "blog", href: "/blog" },
  { key: "testimonials", href: "/testimonials" },
  { key: "contact", href: "/contact" },
  { key: "admin", href: "/admin/login" },
];

export const SERVICES = [
  {
    id: "programme-matching",
    title: "Programme Matching",
    description:
      "We shortlist courses that fit your academic background, budget and career plan, and tell you honestly when a target is unrealistic.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    subServices: [
      "Academic profile review",
      "Budget alignment",
      "Career pathway mapping",
      "Destination feasibility advice",
    ],
  },
  {
    id: "applications-admissions",
    title: "Applications & Admissions",
    description:
      "Transcripts, motivation letters, references and portal submissions, followed up with institutions until your offer arrives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    subServices: ["SOP & motivation letters", "Portal submissions", "Offer follow-up", "Admission tracking"],
  },
  {
    id: "scholarships-funding",
    title: "Scholarships & Funding",
    description:
      "We flag the scholarships and fee waivers you are genuinely eligible for and help you meet their deadlines.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b2d1ea?q=80&w=1200&auto=format&fit=crop",
    subServices: ["Scholarship matching", "Eligibility checks", "Deadlines planning", "Funding document support"],
  },
  {
    id: "student-visa-support",
    title: "Student Visa Support",
    description:
      "Financial proof, accommodation evidence, insurance and interview preparation, all reviewed before submission.",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop",
    subServices: ["Financial documents", "Interview prep", "Insurance guidance", "Submission quality check"],
  },
  {
    id: "language-preparation",
    title: "Language Preparation",
    description:
      "German courses from A1.1 to B2.2, plus guidance on IELTS, TOEFL, TCF and HSK requirements per destination.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    subServices: ["German A1.1-B2.2", "IELTS/TOEFL support", "TCF guidance", "HSK pathway advice"],
  },
  {
    id: "arrival-settling",
    title: "Arrival & Settling In",
    description:
      "Flights, insurance, airport pickup and first-week essentials arranged before you leave home.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    subServices: ["Flight booking", "Airport pickup", "Accommodation prep", "First-week checklist"],
  },
];

const defaultFaq = [
  {
    question: "Can I apply without IELTS?",
    answer: "Some destinations and institutions offer pathways without IELTS depending on your profile and programme.",
  },
  {
    question: "How early should I start?",
    answer: "Start 6-10 months before intake for better admission and visa preparation.",
  },
];

export const COUNTRIES: CountryInfo[] = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1600&auto=format&fit=crop",
    overview:
      "The widest choice of universities and courses, strong funding options, and OPT opportunities after graduation.",
    benefits: ["Large programme variety", "Research and innovation ecosystem", "OPT work pathway"],
    programs: ["Computer Science", "Business", "Public Health", "Engineering", "Data Analytics"],
    tuitionRange: "$12,000 – $45,000 / year",
    livingCost: "$900 – $2,500 / month",
    requirements: ["Offer letter", "Proof of funds", "SEVIS fee", "Visa interview"],
    visaProcess: ["University admission", "I-20 issuance", "DS-160 + appointment", "F-1 interview"],
    universities: ["Arizona State University", "University of South Florida", "Northeastern University"],
    timeline: ["Begin 10 months before intake", "Apply early for scholarships", "Visa interview prep essential"],
    faq: defaultFaq,
  },
  {
    slug: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop",
    overview:
      "A strong option for students seeking affordable fees, a dynamic culture, and growing postgraduate opportunities.",
    benefits: ["Low tuition options", "Large higher-education network", "Unique international exposure"],
    programs: ["Business", "Engineering", "Environmental Studies", "International Relations"],
    tuitionRange: "$2,000 – $12,000 / year",
    livingCost: "$500 – $1,200 / month",
    requirements: ["Admission letter", "Financial proof", "Passport", "Health coverage"],
    visaProcess: ["Admission", "Consular documents", "Visa filing", "Travel readiness"],
    universities: ["University of São Paulo", "UNICAMP", "PUC-Rio"],
    timeline: ["Start 7 months early", "Prepare Portuguese/English requirements", "Confirm visa window"],
    faq: defaultFaq,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    heroImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Globally recognised degrees, strong post-study work options, and clear pathways for many graduates.",
    benefits: ["PGWP opportunities", "High academic quality", "Multicultural communities"],
    programs: ["Nursing", "Project Management", "IT", "Business", "Health Sciences"],
    tuitionRange: "CAD 14,000 – CAD 35,000 / year",
    livingCost: "CAD 1,200 – CAD 2,000 / month",
    requirements: ["DLI offer", "Financial proof", "Medical", "Biometrics"],
    visaProcess: ["Admission", "Tuition deposit", "Study permit application", "Biometrics"],
    universities: ["Laurentian University", "Cape Breton University", "University of Manitoba"],
    timeline: ["Start 8-10 months early", "Document prep 3 months before", "Visa timing varies by season"],
    faq: defaultFaq,
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
    overview:
      "One-year Master's programmes, globally respected degrees, and Graduate Route work opportunities after study.",
    benefits: ["Shorter Master's duration", "English-taught programmes", "Graduate Route"],
    programs: ["Business", "Cybersecurity", "Law", "Public Policy", "Engineering"],
    tuitionRange: "£12,000 – £30,000 / year",
    livingCost: "£800 – £1,800 / month",
    requirements: ["CAS", "Proof of funds", "English proficiency", "TB test where required"],
    visaProcess: ["Admission + CAS", "Financial proofs", "Visa filing", "Biometrics"],
    universities: ["University of Essex", "University of Leicester", "Coventry University"],
    timeline: ["Start 8 months early", "CAS closer to intake", "Visa 3-8 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Low tuition at public universities, many English- and French-taught programmes, and strong EU career links.",
    benefits: ["Affordable public institutions", "Rich academic ecosystem", "Part-time work rights"],
    programs: ["Business", "Fashion", "Engineering", "Hospitality", "Data Science"],
    tuitionRange: "€2,770 – €15,000 / year",
    livingCost: "€800 – €1,400 / month",
    requirements: ["Passport", "Academic records", "Language proof", "Financial evidence"],
    visaProcess: ["Campus France", "Admission", "Visa appointment", "Biometrics"],
    universities: ["Sorbonne University", "INSEEC", "NEOMA Business School"],
    timeline: ["Apply 6-10 months before", "Campus France early", "Visa 1-3 months"],
    faq: defaultFaq,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Low or no tuition at many public universities, plus strong pathways in engineering, healthcare and technical training.",
    benefits: ["Low tuition", "Strong technical programmes", "Ausbildung pathways"],
    programs: ["Engineering", "Nursing pathways", "AI", "Automotive", "Architecture"],
    tuitionRange: "€0 – €6,000 / year",
    livingCost: "€900 – €1,300 / month",
    requirements: ["Admission", "Blocked account", "Language proof", "Health insurance"],
    visaProcess: ["Admission", "Blocked account", "Embassy application", "Visa issuance"],
    universities: ["TU Berlin", "University of Stuttgart", "IU International University"],
    timeline: ["Start 9-12 months before", "Language prep early", "Visa 8-12 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    heroImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1600&auto=format&fit=crop",
    overview:
      "One of the broadest English-taught degree catalogs in continental Europe and strong post-study orientation options.",
    benefits: ["Many English programmes", "Applied and research tracks", "Orientation year option"],
    programs: ["Logistics", "Business", "Computer Science", "Design", "Sustainability"],
    tuitionRange: "€8,000 – €20,000 / year",
    livingCost: "€900 – €1,500 / month",
    requirements: ["Admission letter", "Financial proof", "Insurance", "Residence permit paperwork"],
    visaProcess: ["Admission", "MVV/TRP handling", "Biometrics", "Arrival registration"],
    universities: ["Fontys University", "HAN University", "University of Twente"],
    timeline: ["Start 8 months before", "Housing early", "Permit lead time varies"],
    faq: defaultFaq,
  },
  {
    slug: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    heroImage: "https://images.unsplash.com/photo-1543950423-42cfc9b5dcc3?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Affordable public universities at the centre of Europe, with strong programmes in law, policy and international relations.",
    benefits: ["EU institution proximity", "Multi-language instruction", "Competitive fees"],
    programs: ["International Relations", "Law", "Political Science", "Business"],
    tuitionRange: "€2,500 – €12,000 / year",
    livingCost: "€800 – €1,300 / month",
    requirements: ["Admission offer", "Funds proof", "Insurance", "Accommodation proof"],
    visaProcess: ["Admission", "D-visa application", "Interview/verification", "Residence card"],
    universities: ["KU Leuven", "Ghent University", "Vrije Universiteit Brussel"],
    timeline: ["Start 7 months before", "Language requirements vary", "Visa 4-10 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    heroImage: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Strong reputation in engineering, technology and sustainability with many English-taught Master's programmes.",
    benefits: ["Innovation ecosystem", "English-friendly lifestyle", "Strong graduate outcomes"],
    programs: ["Sustainability", "Engineering", "Computer Science", "Design"],
    tuitionRange: "SEK 80,000 – 170,000 / year",
    livingCost: "SEK 8,000 – 12,000 / month",
    requirements: ["University admission", "Financial proof", "Insurance", "Residence permit"],
    visaProcess: ["Admission", "Permit filing", "Biometrics", "Decision and arrival"],
    universities: ["KTH Royal Institute of Technology", "Lund University", "Uppsala University"],
    timeline: ["Start 8 months early", "Apply via UniversityAdmissions", "Permit lead time varies"],
    faq: defaultFaq,
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    heroImage: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Tailor-made diploma and degree pathways in business, IoT and hospitality, with select intakes open without IELTS.",
    benefits: ["Practical applied learning", "Some intakes without IELTS", "Pathways to Bachelor's"],
    programs: ["Business & Entrepreneurship", "IoT", "Hospitality Management", "IT"],
    tuitionRange: "€6,000 – €14,000 / year",
    livingCost: "€700 – €1,200 / month",
    requirements: ["Admission requirements vary", "Financial evidence", "Insurance", "Residence permit"],
    visaProcess: ["Admission", "Permit application", "Identity check", "Decision"],
    universities: ["Metropolia UAS", "Haaga-Helia UAS", "Tampere University"],
    timeline: ["Start 7 months before", "Check intake rules", "Permit processing window"],
    faq: defaultFaq,
  },
  {
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    heroImage: "https://images.unsplash.com/photo-1551867633-194f125bddfa?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Popular for nursing, healthcare and medicine programmes in the Schengen area at affordable fees.",
    benefits: ["Affordable fees", "Schengen mobility", "Strong medical faculties"],
    programs: ["Medicine", "Dentistry", "Nursing", "Health Sciences"],
    tuitionRange: "€4,000 – €16,000 / year",
    livingCost: "€500 – €900 / month",
    requirements: ["Admission tests/interviews", "Proof of funds", "Insurance", "Visa documents"],
    visaProcess: ["Admission", "Visa D application", "Embassy file", "Residence permit"],
    universities: ["University of Debrecen", "Semmelweis University", "University of Pécs"],
    timeline: ["Start 8 months before", "Medical programme selection", "Visa 4-10 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    heroImage: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Access to globally respected education quality with strong options for students holding previous degrees.",
    benefits: ["High academic standards", "Global reputation", "Strong specialised schools"],
    programs: ["Hospitality", "Business", "Engineering", "Life Sciences"],
    tuitionRange: "CHF 1,500 – CHF 20,000 / year",
    livingCost: "CHF 1,500 – CHF 2,500 / month",
    requirements: ["Offer letter", "Funds proof", "Insurance", "Accommodation documents"],
    visaProcess: ["Admission", "Cantonal/consular process", "Biometrics", "Permit issuance"],
    universities: ["University of Zurich", "EPFL", "EHL Hospitality Business School"],
    timeline: ["Start 8-10 months early", "Check cantonal specifics", "Permit timelines vary"],
    faq: defaultFaq,
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    heroImage: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1600&auto=format&fit=crop",
    overview:
      "EU-recognised degrees at lower cost, with a growing range of English-taught programmes.",
    benefits: ["Affordable tuition", "Lower living cost", "EU-recognised degrees"],
    programs: ["Medicine", "Business", "Computer Science", "Logistics"],
    tuitionRange: "€2,500 – €9,000 / year",
    livingCost: "€500 – €900 / month",
    requirements: ["Admission letter", "Funds proof", "Insurance", "Passport"],
    visaProcess: ["Admission", "Consulate appointment", "Document review", "Decision"],
    universities: ["Vistula University", "University of Wroclaw", "Lazarski University"],
    timeline: ["Start 6-8 months early", "Prepare legalised docs", "Visa 4-10 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    flag: "🇧🇬",
    heroImage: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Affordable EU option with straightforward admissions and strong popularity in medical pathways.",
    benefits: ["Affordable EU study", "Medical programme access", "Simple admissions"],
    programs: ["Medicine", "Dentistry", "Pharmacy", "Business", "IT"],
    tuitionRange: "€3,000 – €8,000 / year",
    livingCost: "€450 – €850 / month",
    requirements: ["Admission docs", "Medical checks", "Financial proof", "Visa documents"],
    visaProcess: ["Admission", "Long stay visa", "Interview", "Residence permit"],
    universities: ["Varna Free University", "Medical University of Sofia", "Sofia University"],
    timeline: ["Start 7 months early", "Medical intakes specific", "Visa 6-10 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    heroImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Modern EU universities with competitive fees and a growing international student community.",
    benefits: ["Competitive tuition", "International campuses", "Strong IT and engineering"],
    programs: ["FinTech", "Engineering", "Business", "Public Policy"],
    tuitionRange: "€2,000 – €6,000 / year",
    livingCost: "€450 – €850 / month",
    requirements: ["Academic records", "Financial proof", "Insurance", "Accommodation proof"],
    visaProcess: ["Admission", "TRP filing", "Biometrics", "Arrival registration"],
    universities: ["Vilnius Business College", "Vilnius University", "KTU"],
    timeline: ["Start 6-8 months early", "Permit timing varies", "Housing prep early"],
    faq: defaultFaq,
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    overview:
      "English-taught programmes in a small, safe, English-speaking EU country and manageable first European study step.",
    benefits: ["English-speaking environment", "Affordable living", "Safe and student-friendly"],
    programs: ["Business", "Hospitality", "IT", "Healthcare"],
    tuitionRange: "€5,000 – €12,000 / year",
    livingCost: "€650 – €1,000 / month",
    requirements: ["Offer letter", "Bank statements", "Insurance", "Accommodation proof"],
    visaProcess: ["Admission", "Visa filing", "Submission", "Travel readiness"],
    universities: ["Global College Malta", "21 Academy", "University of Malta"],
    timeline: ["Start 6 months early", "Prepare evidence early", "Visa 4-8 weeks"],
    faq: defaultFaq,
  },
  {
    slug: "china",
    name: "China",
    flag: "🇨🇳",
    heroImage: "https://images.unsplash.com/photo-1510332981392-36692ea3a195?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Affordable programmes in IT, engineering, business and health sciences, including options without HSK4 requirements.",
    benefits: ["Affordable tuition", "Strong STEM options", "Expanding English programmes"],
    programs: ["Software Engineering", "Business", "Mechanical Engineering", "Public Health"],
    tuitionRange: "$2,500 – $10,000 / year",
    livingCost: "$450 – $1,000 / month",
    requirements: ["Admission letter", "Financial support documents", "Medical check", "Visa paperwork"],
    visaProcess: ["Admission", "JW documents", "X1/X2 visa filing", "Arrival registration"],
    universities: ["Zhejiang University", "Soochow University", "Beijing Normal University"],
    timeline: ["Start 6-9 months early", "Check language route", "Visa 3-7 weeks"],
    faq: defaultFaq,
  },
];

export const INSTITUTIONS = [
  {
    name: "Varna Free University",
    country: "Bulgaria",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Global College Malta",
    country: "Malta",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "21 Academy",
    country: "Malta",
    image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Laurentian University",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Vilnius Business College",
    country: "Lithuania",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Vistula University",
    country: "Poland",
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1000&auto=format&fit=crop",
  },
];

export const FAQ_ITEMS = [
  "How long does a student visa process take?",
  "Can I apply without IELTS?",
  "Which countries are most affordable?",
  "Do you assist with scholarships?",
  "Can you support rejected visa files?",
  "Do you arrange flights and airport pickup?",
  "How early should I start my application?",
  "Can I switch countries during processing?",
  "Do you provide accommodation guidance?",
  "Do you offer language preparation support?",
  "How can I book a consultation?",
  "Can I apply from outside Douala?",
  "What documents are required first?",
  "How do I track my file progress?",
  "Can I apply for multiple countries?",
  "Do you support postgraduate applicants?",
  "Can families apply with students?",
  "What if my budget is limited?",
  "Do you have partner universities?",
  "Can I work while studying abroad?",
].map((question, index) => ({
  question,
  answer:
    "Requirements vary by destination and profile. Book a consultation and our team will map a practical, realistic plan from admissions to visa submission.",
  id: index + 1,
}));

export const PARTNERS = [
  "Varna Free University",
  "Global College Malta",
  "21 Academy",
  "Laurentian University",
  "Vilnius Business College",
  "Vistula University",
];
