export interface TravelResource {
  id: string;
  title: string;
  category: 'Documentation' | 'Testing' | 'Financial' | 'Health' | 'Official Portals';
  countryScope: string; // e.g. "All Countries", "UK & Canada", "Schengen"
  description: string;
  officialUrl?: string;
  keySteps: string[];
  tips: string;
}

export const TRAVEL_RESOURCES: TravelResource[] = [
  {
    id: 'res-passport',
    title: 'Nigerian International Passport Renewal & Fresh Application',
    category: 'Documentation',
    countryScope: 'All Countries',
    description: 'Guidelines for booking NIS online appointments, capturing biometrics, and securing a standard 32-page or 64-page passport with 5 or 10 years validity.',
    officialUrl: 'https://passport.immigration.gov.ng/',
    keySteps: [
      'Fill application on the official NIS portal (passport.immigration.gov.ng)',
      'Pay official processing fee online (avoid unauthorized intermediaries)',
      'Print Application Form, Payment Receipt, and Guarantor’s form with NIN verification',
      'Attend biometric appointment at your selected Immigration Command office'
    ],
    tips: 'Ensure your National Identification Number (NIN) names and date of birth match your birth certificate exactly.'
  },
  {
    id: 'res-wes',
    title: 'WES & UK ENIC Academic Credential Evaluation Guide',
    category: 'Documentation',
    countryScope: 'Canada, US & UK',
    description: 'How to verify Nigerian university degrees, HNDs, and transcripts for Canadian Express Entry (WES ECA) and UK Visas (UK ENIC).',
    officialUrl: 'https://www.wes.org/ca/evaluations-and-fees/education/immigration/',
    keySteps: [
      'Create account on WES (ECA for IRCC) or UK ENIC portal',
      'Obtain unique reference number',
      'Request your Nigerian university / polytechnic to send electronic transcripts directly via institutional email/ETX-NG',
      'Upload color copy of degree certificate / diploma'
    ],
    tips: 'For Canadian Express Entry, ensure you specifically order the "ECA for IRCC" report, not standard academic evaluation.'
  },
  {
    id: 'res-ielts',
    title: 'IELTS & PTE Academic English Language Booking',
    category: 'Testing',
    countryScope: 'UK, Canada, Australia, Ireland',
    description: 'Booking IELTS General/Academic (British Council or IDP) or PTE Academic in Lagos, Abuja, Port Harcourt, and Ibadan.',
    officialUrl: 'https://www.britishcouncil.org.ng/exam/ielts',
    keySteps: [
      'Choose General Training (for Canada/Australia PR) or Academic (for university admission / Nursing UKVI)',
      'Select computer-delivered testing for fastest result release (3 - 5 days)',
      'Upload valid international passport data page during booking',
      'Attend test center with original physical passport'
    ],
    tips: 'Australia and Canada now accept PTE Core / PTE Academic, which often has faster turnaround and flexible test dates.'
  },
  {
    id: 'res-pof',
    title: 'Proof of Funds (POF) & Bank Statement Guidelines',
    category: 'Financial',
    countryScope: 'Canada, UK, Germany, Ireland',
    description: 'Official rules on liquid unencumbered cash, 28-day holding periods (UKVI), 6-month continuous balance (IRCC), and Gift Deeds.',
    officialUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html',
    keySteps: [
      'Funds must be liquid (savings, investment money market funds, or fixed deposits with liquidation rights)',
      'Obtain official bank reference letter on bank letterhead with branch manager contacts',
      'Include 6-month stamped bank statement with turnover analysis',
      'If using gift deeds from parents/spouse, attach notarized gift deed and donor’s bank source'
    ],
    tips: 'Avoid sudden large lump sum deposits immediately before printing bank statements without clear documentation of source.'
  },
  {
    id: 'res-tb',
    title: 'IOM Tuberculosis Screening & Medical Certificates',
    category: 'Health',
    countryScope: 'UK, Canada, Australia, New Zealand',
    description: 'Mandatory chest X-ray and sputum tests at accredited International Organization for Migration (IOM) clinics in Lagos and Abuja.',
    officialUrl: 'https://nigeria.iom.int/',
    keySteps: [
      'Book appointment via IOM online appointment system (Lagos Ikeja clinic or Abuja Garki clinic)',
      'Bring original passport, passport photographs, and appointment slip',
      'Undergo digital chest X-ray and medical examination',
      'Collect official IOM Medical Certificate valid for 6 months'
    ],
    tips: 'Book at least 6 weeks before planned visa submission as peak travel season slots fill up rapidly.'
  },
  {
    id: 'res-police',
    title: 'Nigerian Police Character Clearance Certificate',
    category: 'Documentation',
    countryScope: 'All Countries',
    description: 'How to obtain an authentic Police Character Certificate from the Central Criminal Registry (CID Alagbon, Lagos or Force HQ, Abuja).',
    officialUrl: 'https://possap.gov.ng/',
    keySteps: [
      'Apply online via POSSAP (Police Specialized Services Automation Project)',
      'Generate Remita RRR and pay official government tariff',
      'Take payment slip to CID Alagbon or State Police Headquarters for biometric fingerprint roll',
      'Receive signed Police Clearance Certificate'
    ],
    tips: 'Verify that the certificate is signed by a Gazetted Police Officer and bears the official embossed stamp.'
  }
];
