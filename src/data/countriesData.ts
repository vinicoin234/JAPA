import { Country } from '../types';

export const COUNTRIES_DATA: Country[] = [
  {
    id: 'canada',
    name: 'Canada',
    region: 'North America',
    flagEmoji: '🇨🇦',
    badge: 'Top Pick for PR',
    popular: true,
    headline: 'Direct permanent residency pathways via Express Entry, PNP, and post-graduation work permits (PGWP).',
    officialPortalUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
    processingTimeOverview: '6 - 24 weeks',
    difficulty: 'Points-Based',
    monthlyCostOfLiving: 'CAD $1,600 - $2,400 (₦1.8M - ₦2.7M)',
    visaOptions: [
      {
        type: 'Express Entry (FSWP / CEC)',
        title: 'Federal Skilled Worker & Provincial Nominee Programs',
        duration: 'Permanent Residence (PR)',
        pathwayToPR: true,
        minDegree: "Bachelor's / HND with WES ECA",
        ieltsScore: 'CLB 7 - 9 (IELTS General: 6.0 - 8.0)',
        proofOfFundsNGN: '₦18,200,000 for single applicant',
        proofOfFundsForeign: 'CAD $14,690',
        processingTime: '6 months',
        summary: 'Merit-based Comprehensive Ranking System (CRS) evaluating age, education, language test scores, and foreign work experience.'
      },
      {
        type: 'Study Permit + PGWP',
        title: 'Designated Learning Institution (DLI) Pathway',
        duration: 'Study duration + up to 3 years PGWP',
        pathwayToPR: true,
        minDegree: 'WAEC / Bachelor’s degree',
        ieltsScore: 'IELTS Academic 6.5 or Duolingo / English waiver',
        proofOfFundsNGN: '₦25,000,000 (Tuition + Living)',
        proofOfFundsForeign: 'CAD $20,635 living expense + 1st year tuition',
        processingTime: '8 - 14 weeks',
        summary: 'Enrol in an eligible Master’s or Post-Graduate Diploma program with open work rights for spouses in graduate programs.'
      }
    ],
    generalRequirements: [
      'Valid International Passport (minimum 12 months validity)',
      'WES or ICES Educational Credential Assessment (ECA)',
      'IELTS General (for PR) or Academic (for Study)',
      '6 months unencumbered bank statement demonstrating Proof of Funds',
      'IOM Medical Exam and Police Character Certificate from Nigerian Police CID Alagbon',
      'Letter of Explanation / Statement of Purpose (SOP)'
    ],
    applicationSteps: [
      '1. Take IELTS General or Academic test in Lagos, Abuja, Port Harcourt, or Ibadan',
      '2. Evaluate university transcripts with WES (World Education Services)',
      '3. Create an IRCC Express Entry profile or secure admission from a Canadian DLI',
      '4. Collate stamped bank statements and biometric capture at VFS Global',
      '5. Submit online application via the IRCC portal and undergo IOM medicals'
    ],
    inDemandJobs: ['Software Engineers & Cloud Architects', 'Registered Nurses & Care Aides', 'Data Analysts', 'Accountants', 'Heavy Equipment Mechanics', 'Supply Chain Managers']
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    flagEmoji: '🇬🇧',
    badge: 'Fast Processing',
    popular: true,
    headline: 'High-demand pathways via Skilled Worker Visas, NHS Health and Care Sponsorship, and Graduate Route.',
    officialPortalUrl: 'https://www.gov.uk/browse/visas-immigration',
    processingTimeOverview: '3 - 8 weeks',
    difficulty: 'Moderate',
    monthlyCostOfLiving: '£1,100 - £1,800 (₦2.1M - ₦3.4M)',
    visaOptions: [
      {
        type: 'Skilled Worker Visa',
        title: 'Certificate of Sponsorship (CoS) Tier 2',
        duration: 'Up to 5 years (ILR settlement eligible)',
        pathwayToPR: true,
        minDegree: 'RQF Level 3+ (Equivalent to OND/HND/Degree)',
        ieltsScore: 'IELTS for UKVI (B1 minimum) or UK ENIC confirmation',
        proofOfFundsNGN: '₦2,500,000 (or sponsor certified maintenance)',
        proofOfFundsForeign: '£1,270 maintenance fee in account for 28 days',
        processingTime: '3 - 4 weeks',
        summary: 'Requires a confirmed job offer from an approved UK Home Office licensed sponsor with standard minimum salary thresholds.'
      },
      {
        type: 'Student Visa + Graduate Route',
        title: 'Higher Education Visa + 2 Years Post-Study Work',
        duration: 'Course length + 2 years post-graduation visa',
        pathwayToPR: true,
        minDegree: 'WAEC / Bachelor’s degree',
        ieltsScore: 'Exempt with WAEC C6 or IELTS Academic 6.5',
        proofOfFundsNGN: '₦28,000,000 (Tuition + Maintenance)',
        proofOfFundsForeign: '£12,006 (£1,334/mo outside London) + Tuition',
        processingTime: '3 - 6 weeks',
        summary: 'Study an accredited Master’s degree or Bachelor’s with eligibility for the 2-year unsponsored Graduate Route visa.'
      }
    ],
    generalRequirements: [
      'Valid Nigerian International Passport',
      'Confirmation of Acceptance for Studies (CAS) or Certificate of Sponsorship (CoS)',
      'Tuberculosis (TB) clearance certificate from approved IOM clinics (Abuja or Lagos)',
      'Proof of funds held for a minimum uninterrupted 28-day period',
      'UK ENIC (formerly UK NARIC) Statement of Comparability if using Nigerian degree for English proficiency',
      'Police Character Clearance'
    ],
    applicationSteps: [
      '1. Secure an eligible job offer with a licensed sponsor or university CAS letter',
      '2. Book and attend your TB Screening at IOM Migration Health Assessment Clinic in Lagos or Abuja',
      '3. Complete online UKVI visa application and pay the Immigration Health Surcharge (IHS)',
      '4. Book biometric appointment at TLScontact or VFS Global (Victoria Island/Ikeja or Abuja)',
      '5. Track passport dispatch and receive Decision Letter & Vignette'
    ],
    inDemandJobs: ['Healthcare Professionals (Doctors, Nurses, Radiographers)', 'Cybersecurity Analysts & Software Developers', 'Secondary Education Teachers (STEM)', 'Civil Engineers', 'Social Workers']
  },
  {
    id: 'germany',
    name: 'Germany',
    region: 'Europe',
    flagEmoji: '🇩🇪',
    badge: 'Chancenkarte Launch',
    popular: true,
    headline: 'Tuition-free public universities, Opportunity Card (Chancenkarte) for job seekers, and EU Blue Card.',
    officialPortalUrl: 'https://www.make-it-in-germany.com/en/',
    processingTimeOverview: '6 - 16 weeks',
    difficulty: 'Moderate',
    monthlyCostOfLiving: '€950 - €1,300 (₦1.6M - ₦2.2M)',
    visaOptions: [
      {
        type: 'Opportunity Card (Chancenkarte)',
        title: 'Points-Based Job Seeker Visa',
        duration: '1 - 2 years with part-time work rights (20 hrs/week)',
        pathwayToPR: true,
        minDegree: 'Recognized 2-year post-secondary degree or higher',
        ieltsScore: 'English B2 (IELTS 6.0) or German A1',
        proofOfFundsNGN: '₦21,500,000 in Blocked Account',
        proofOfFundsForeign: '€12,324 in Sperrkonto (Blocked Account)',
        processingTime: '8 - 12 weeks',
        summary: 'Score 6 points across qualifications, age, language skills, and ties to Germany to legally search for qualified employment.'
      },
      {
        type: 'EU Blue Card',
        title: 'Fast-Track Specialist Residence Title',
        duration: '4 years (PR eligible in 21-27 months)',
        pathwayToPR: true,
        minDegree: 'Recognized University Degree (via Anabin database)',
        ieltsScore: 'Not strictly required if employer conducts business in English',
        proofOfFundsNGN: 'Exempt (Salary contract satisfies funds)',
        proofOfFundsForeign: 'Minimum contract salary €41,041 - €45,300/yr',
        processingTime: '4 - 8 weeks',
        summary: 'Expedited residency permit for tech, engineering, mathematics, and healthcare professionals with a signed job contract.'
      }
    ],
    generalRequirements: [
      'Nigerian International Passport',
      'ZAB / Anabin Statement of Comparability confirming degree equivalence',
      'Blocked Account (Sperrkonto) opened via Expatrio, Coracle, or Fintiba',
      'Travel Health Insurance (Incoming Insurance with min €30,000 coverage)',
      'Curriculum Vitae (Europass format) & Motivation Letter',
      'German Language Certificate (Goethe/TestDaF) or English Certificate (IELTS/TOEFL)'
    ],
    applicationSteps: [
      '1. Verify university degree status on the official Anabin database',
      '2. Fund blocked account through approved provider (Coracle / Expatrio)',
      '3. Book appointment on German Embassy Abuja or Consulate General Lagos booking system',
      '4. Attend in-person visa interview with translated documents and certified copies',
      '5. Fly to Germany, register address (Anmeldung) and convert visa to residence permit'
    ],
    inDemandJobs: ['Software Engineers & DevOps', 'Electrical & Mechanical Engineers', 'Medical Doctors & Nurses', 'Green Energy Technicians', 'Logistics Managers']
  },
  {
    id: 'australia',
    name: 'Australia',
    region: 'Oceania',
    flagEmoji: '🇦🇺',
    badge: 'High Earning Potential',
    popular: true,
    headline: 'Permanent migration pathways through General Skilled Migration (Subclass 189/190/491) and employer sponsorship.',
    officialPortalUrl: 'https://immi.homeaffairs.gov.au/',
    processingTimeOverview: '8 - 30 weeks',
    difficulty: 'Points-Based',
    monthlyCostOfLiving: 'AUD $2,000 - $2,800 (₦2.0M - ₦2.9M)',
    visaOptions: [
      {
        type: 'Subclass 189 / 190 Skilled Independent',
        title: 'Points-Tested Permanent Residency',
        duration: 'Permanent Residence',
        pathwayToPR: true,
        minDegree: "Bachelor's Degree assessed by relevant Assessing Body",
        ieltsScore: 'Superior English (IELTS 8.0/PTE 79) gives max 20 points',
        proofOfFundsNGN: '₦15,000,000 recommended settlement funds',
        proofOfFundsForeign: 'AUD $15,000 - $20,000',
        processingTime: '9 - 18 months',
        summary: 'Submit an Expression of Interest (EOI) via SkillSelect with 65+ points across age, qualification, English proficiency, and work history.'
      },
      {
        type: 'Subclass 482 / SID (Temporary Skills)',
        title: 'Employer Sponsored Work Visa',
        duration: 'Up to 4 years (with PR pathway)',
        pathwayToPR: true,
        minDegree: 'Relevant diploma/degree with minimum 2 years experience',
        ieltsScore: 'IELTS overall 5.0 with minimum 4.5 in each band',
        proofOfFundsNGN: 'Employer sponsorship satisfies funding',
        proofOfFundsForeign: 'Covered by agreed employment package',
        processingTime: '6 - 12 weeks',
        summary: 'Sponsored by an approved Australian business experiencing verified talent shortages in regional or metropolitan areas.'
      }
    ],
    generalRequirements: [
      'Valid Nigerian Passport with at least 6 months validity',
      'Positive Skills Assessment from designated authority (ACS for IT, VETASSESS, Engineers Australia, ANMAC for Nursing)',
      'PTE Academic or IELTS Test Report Form',
      'Bupa Medical Clearance Certificate & Chest X-ray',
      'Nigerian Police Character Certificate and Federal Affidavit'
    ],
    applicationSteps: [
      '1. Complete positive skill assessment with your relevant occupational assessing authority',
      '2. Sit PTE Academic or IELTS to achieve Proficient/Superior English score',
      '3. Lodge SkillSelect Expression of Interest (EOI) for targeted state nominations',
      '4. Receive Invitation to Apply (ITA) and submit full visa application within 60 days',
      '5. Complete Biometrics and health examinations at authorized clinics'
    ],
    inDemandJobs: ['Software Programmers & IT Security', 'Civil & Mining Engineers', 'Registered Nurses & Aged Care Workers', 'Early Childhood Teachers', 'Construction Project Managers']
  },
  {
    id: 'usa',
    name: 'United States',
    region: 'North America',
    flagEmoji: '🇺🇸',
    badge: 'Premier Tech & Academia',
    popular: true,
    headline: 'EB-2 National Interest Waiver (NIW) for professionals, F-1 STEM OPT (3 years work rights), and O-1 extraordinary ability visas.',
    officialPortalUrl: 'https://travel.state.gov/content/travel/en/us-visas.html',
    processingTimeOverview: '8 - 26 weeks',
    difficulty: 'High',
    monthlyCostOfLiving: 'USD $1,800 - $2,800 (₦2.7M - ₦4.2M)',
    visaOptions: [
      {
        type: 'EB-2 NIW (National Interest Waiver)',
        title: 'Direct Green Card without Employer Sponsorship',
        duration: 'Permanent Residence (Green Card)',
        pathwayToPR: true,
        minDegree: "Advanced Degree (Master's or Ph.D.) or Exceptional Ability",
        ieltsScore: 'Not mandatory; applications judged on professional merits',
        proofOfFundsNGN: '₦10,000,000+ personal liquidity',
        proofOfFundsForeign: 'Self-petitioning filing and legal expenses',
        processingTime: '6 - 12 months with Premium Processing',
        summary: 'Proves your proposed endeavor has substantial merit and national importance to the US economy, health, or technology sector.'
      },
      {
        type: 'F-1 Student Visa + STEM OPT',
        title: 'Academic Study + 3-Year Post-Graduation STEM Work',
        duration: 'Degree duration + 36 months OPT authorization',
        pathwayToPR: true,
        minDegree: 'WAEC / Bachelor’s Degree',
        ieltsScore: 'TOEFL 85+ or IELTS Academic 6.5 / Duolingo 110+',
        proofOfFundsNGN: '₦40,000,000 (I-20 financial requirement)',
        proofOfFundsForeign: 'USD $25,000 - $45,000 depending on school',
        processingTime: '6 - 12 weeks',
        summary: 'Attend accredited universities with opportunity to transition to H-1B lottery or EB-2 green card during STEM OPT extension.'
      }
    ],
    generalRequirements: [
      'Nigerian Passport valid for travel to the US (minimum 6 months beyond intended stay)',
      'DS-160 Confirmation barcode page',
      'SEVIS I-901 fee payment receipt (for F-1) or I-797 Approval Notice (for petition visas)',
      'Substantial financial records and proof of binding economic ties',
      'Academic transcripts, degree certificates, and standardized test reports',
      'Well-structured interview responses for consular officer evaluation'
    ],
    applicationSteps: [
      '1. Complete DS-160 nonimmigrant visa application on the CEAC portal',
      '2. Pay MRV visa application fee through GTBank or online portal',
      '3. Schedule consular interview at US Embassy Abuja or US Consulate General Lagos',
      '4. Organize supporting documents, sponsor bank statements, and tax clearances',
      '5. Attend in-person consular interview and collect passport with stamped visa'
    ],
    inDemandJobs: ['Artificial Intelligence Researchers', 'Cloud Infrastructure Engineers', 'Biomedical Scientists', 'Cardiovascular Technologists', 'Quantitative Financial Analysts']
  },
  {
    id: 'ireland',
    name: 'Ireland',
    region: 'Europe',
    flagEmoji: '🇮🇪',
    badge: 'European Tech Capital',
    popular: true,
    headline: 'English-speaking EU member state offering Critical Skills Employment Permits and 2-year Third Level Graduate Scheme (1G).',
    officialPortalUrl: 'https://www.irishimmigration.ie/',
    processingTimeOverview: '4 - 10 weeks',
    difficulty: 'Moderate',
    monthlyCostOfLiving: '€1,200 - €1,800 (₦2.0M - ₦3.1M)',
    visaOptions: [
      {
        type: 'Critical Skills Employment Permit',
        title: 'Fast-Track Work Visa with Stamp 4 Residency',
        duration: '2 years, leading to permanent Stamp 4 residency',
        pathwayToPR: true,
        minDegree: "Bachelor's Degree in relevant field",
        ieltsScore: 'English-speaking native country waiver or IELTS 6.5',
        proofOfFundsNGN: 'Job offer fulfills maintenance criteria',
        proofOfFundsForeign: 'Minimum contract salary €38,000 - €64,000/yr',
        processingTime: '6 - 8 weeks',
        summary: 'Targeted directly at critical shortage lists (ICT, nursing, finance, engineering). Family can join immediately with full work rights.'
      },
      {
        type: 'Stamp 1G Graduate Scheme',
        title: 'Master’s Degree + 2-Year Full Work Permit',
        duration: '1-year Master’s + 24 months Stamp 1G work rights',
        pathwayToPR: true,
        minDegree: 'Bachelor’s degree with minimum 2:2 or 2:1',
        ieltsScore: 'IELTS Academic 6.5 or equivalent',
        proofOfFundsNGN: '₦20,000,000 in personal or sponsor bank account',
        proofOfFundsForeign: '€10,000 proof of maintenance + tuition receipts',
        processingTime: '6 - 10 weeks',
        summary: 'Complete a Level 9 Master’s degree at Trinity, UCD, DCU, or TU Dublin with automatic 2-year post-study work authorization.'
      }
    ],
    generalRequirements: [
      'Valid International Passport',
      'Employment Permit granted by DETE (Department of Enterprise, Trade and Employment)',
      'Private medical insurance with adequate hospital coverage',
      'Evidence of qualification recognition by Quality and Qualifications Ireland (QQI)',
      'Police clearance and 6-month continuous banking history',
      'Proof of accommodation arrangements upon landing'
    ],
    applicationSteps: [
      '1. Secure a job offer on the Critical Skills Occupations List from an Irish entity',
      '2. Employer submits CSEP application on the EPOS system',
      '3. Complete online AVATS visa application for Irish Immigration Service Delivery (ISD)',
      '4. Submit passport and physical documents at VFS Global in Lagos or Abuja',
      '5. Arrive in Dublin/Cork, book appointment at Burgh Quay or local Garda station for IRP card'
    ],
    inDemandJobs: ['Full Stack Engineers', 'DevOps & Site Reliability Engineers', 'Midwives & Intensive Care Nurses', 'Clinical Research Associates', 'Tax & Audit Specialists']
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    region: 'Europe',
    flagEmoji: '🇳🇱',
    badge: 'High English Proficiency',
    popular: false,
    headline: 'Orientation Year (Zoekjaar) visa for top university graduates and Highly Skilled Migrant (Kennismigrant) program.',
    officialPortalUrl: 'https://ind.nl/en',
    processingTimeOverview: '4 - 12 weeks',
    difficulty: 'Moderate',
    monthlyCostOfLiving: '€1,100 - €1,700 (₦1.9M - ₦2.9M)',
    visaOptions: [
      {
        type: 'Highly Skilled Migrant (Kennismigrant)',
        title: 'Sponsored Knowledge Migrant Program',
        duration: 'Up to 5 years (Dutch PR or EU Long-term eligible)',
        pathwayToPR: true,
        minDegree: 'Higher education diploma / university degree',
        ieltsScore: 'Not required by IND (English widely spoken in tech firms)',
        proofOfFundsNGN: 'Sponsored salary contract fulfills proof',
        proofOfFundsForeign: 'Gross monthly salary €3,945 (under 30) or €5,381 (over 30)',
        processingTime: '3 - 6 weeks',
        summary: 'Direct hiring by IND-recognized sponsor companies in Amsterdam, Rotterdam, Eindhoven, and Utrecht, with 30% tax ruling benefit.'
      },
      {
        type: 'Orientation Year (Zoekjaar)',
        title: '1-Year Job Seeker Visa for Graduates',
        duration: '12 months with unrestricted work rights',
        pathwayToPR: true,
        minDegree: "Master's or PhD from top 200 global universities or Dutch university",
        ieltsScore: 'IELTS 6.0 or Dutch university graduation',
        proofOfFundsNGN: '₦22,000,000 in personal account',
        proofOfFundsForeign: '€14,800 living costs proof',
        processingTime: '4 - 8 weeks',
        summary: 'Live in the Netherlands for a year with zero restriction on working in any role while seeking permanent knowledge migrant sponsorship.'
      }
    ],
    generalRequirements: [
      'Valid Nigerian Passport',
      'Recognized employment agreement with an IND-registered sponsor',
      'Legalized birth certificate with Apostille / Ministry of Foreign Affairs stamp',
      'TB test within 3 months of arrival in the Netherlands',
      'Clean criminal record statement and background disclosure',
      'Proof of Dutch basic health insurance (Basisverzekering)'
    ],
    applicationSteps: [
      '1. IND sponsor files TEV (Entry and Residence procedure) directly in the Netherlands',
      '2. IND issues positive recommendation letter within 2 to 4 weeks',
      '3. Collect provisional residence permit (MVV) sticker from Dutch Embassy in Abuja',
      '4. Travel to the Netherlands and perform BSN municipality registration (Gemeente)',
      '5. Collect IND biometric residence card in Amsterdam or Den Bosch'
    ],
    inDemandJobs: ['Semiconductor Engineers (ASML cluster)', 'Fintech Developers', 'Data Science & Machine Learning Engineers', 'Logistics Architects', 'Financial Risk Analysts']
  },
  {
    id: 'uae',
    name: 'United Arab Emirates (Dubai)',
    region: 'Middle East',
    flagEmoji: '🇦🇪',
    badge: 'Zero Income Tax',
    popular: true,
    headline: '10-Year Golden Visa for exceptional talent, Green Visa for freelancers, and tax-free employment residency.',
    officialPortalUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id',
    processingTimeOverview: '2 - 4 weeks',
    difficulty: 'Accessible',
    monthlyCostOfLiving: 'AED 4,500 - 7,500 (₦1.8M - ₦3.0M)',
    visaOptions: [
      {
        type: 'Employment Residence Visa',
        title: 'Company-Sponsored 2-Year Renewable Residency',
        duration: '2 years renewable indefinitely',
        pathwayToPR: false,
        minDegree: 'Attested Degree / Diploma from Nigerian Ministry of Education',
        ieltsScore: 'Not required',
        proofOfFundsNGN: 'Covered entirely by sponsoring mainland or freezone company',
        proofOfFundsForeign: 'Zero personal proof required for sponsored roles',
        processingTime: '10 - 21 days',
        summary: 'Full employment rights in free zones (DIFC, DMCC, Silicon Oasis) or mainland companies with zero personal income taxation.'
      },
      {
        type: 'Green Visa for Freelancing & Self-Employment',
        title: '5-Year Self-Sponsored Residency Permit',
        duration: '5 years without need for a local Emirati sponsor',
        pathwayToPR: false,
        minDegree: "Bachelor's degree or specialized diploma",
        ieltsScore: 'Not required',
        proofOfFundsNGN: '₦16,000,000 documented annual freelance revenue',
        proofOfFundsForeign: 'AED 360,000 proof of income over prior 2 years',
        processingTime: '2 - 3 weeks',
        summary: 'Allows skilled professionals to sponsor themselves, bring first-degree relatives, and operate independently across Dubai and Abu Dhabi.'
      }
    ],
    generalRequirements: [
      'Valid Nigerian Passport with at least 6 months remaining',
      'Attested educational certificates (Nigerian Ministry of Foreign Affairs & UAE Embassy Abuja)',
      'Entry permit / Work permit issued by Ministry of Human Resources (MOHRE)',
      'Emirates ID biometric application and medical fitness test (Blood test & Chest X-ray)',
      'Health insurance policy compliant with Dubai Health Authority (DHA)'
    ],
    applicationSteps: [
      '1. Secure offer letter from UAE employer and sign MOHRE contract',
      '2. Employer initiates electronic entry permit application via ICP or GDRFA portal',
      '3. Travel to Dubai or perform status change inside the country',
      '4. Undergo medical fitness screening at an approved preventive medicine center',
      '5. Fingerprinting for Emirates ID card and issuance of electronic residency visa'
    ],
    inDemandJobs: ['Hospitality Managers', 'Real Estate Executives', 'Front-end & Back-end Engineers', 'Digital Marketing Directors', 'Aviation & Logistics Coordinators']
  }
];
