export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  tag: string;
}

export const testimonialsList: Testimonial[] = [
  {
    name: "Dr. Ronald Vance",
    role: "Chief Medical Officer",
    company: "Metro Health Dental Clinics",
    quote:
      "Our 4 clinical locations were bleeding after-hours emergency bookings. acstena built an autonomous AI voice receptionist integrated into our EHR. We went from 42% missed calls to zero, capturing 1,420 extra patient bookings every month.",
    metric: "0% Missed Calls (was 42%)",
    tag: "AI Telephony & Voicebot",
  },
  {
    name: "Samantha Reed",
    role: "VP of Freight Operations",
    company: "SwiftLane Logistics",
    quote:
      "We were drowning in Google Sheets and lost rate cards. The custom Next.js CRM portal acstena built transformed our brokerage. Quote turnarounds dropped from 45 minutes to 45 seconds, and pipeline velocity jumped over 300%.",
    metric: "45s Quote Dispatch (was 45m)",
    tag: "Custom Web CRM & Cloud MVP",
  },
  {
    name: "Marcus Sterling",
    role: "Director of Fleet Telematics",
    company: "Midwest Cargo Network",
    quote:
      "Our drivers work across rural dead zones. The offline-first React Native mobile app they built never drops data. Background GPS telemetry and signature scanning work flawlessly under all conditions.",
    metric: "28% Fuel Route Efficiency",
    tag: "Mobile App Development",
  },
  {
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "Veloce Capital",
    quote:
      "From pixel-perfect Figma design tokens to liquid-smooth 60fps Adobe Animate interactive motion graphics, the execution was world-class. Our seed roadshow closed $4.8M ahead of schedule.",
    metric: "$4.8M Capital Secured",
    tag: "Figma UI/UX & Adobe Animate",
  },
];
