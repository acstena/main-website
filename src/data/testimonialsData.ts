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
      "Our 4 clinical locations were bleeding after-hours emergency patient bookings. acstena built an AI phone receptionist connected straight to our appointment calendar. We went from 42% missed calls to zero, capturing 1,420 extra patient appointments every month.",
    metric: "0% Missed Calls (was 42%)",
    tag: "AI Phone Receptionist",
  },
  {
    name: "Samantha Reed",
    role: "VP of Freight Operations",
    company: "SwiftLane Logistics",
    quote:
      "We were drowning in Google Sheets and lost rate cards. The custom cloud portal acstena built transformed our brokerage. Quote turnarounds dropped from 45 minutes to 45 seconds, and team productivity jumped over 300%.",
    metric: "45s Quote Dispatch (was 45m)",
    tag: "Custom Web Portal & CRM",
  },
  {
    name: "Marcus Sterling",
    role: "Director of Fleet Telematics",
    company: "Midwest Cargo Network",
    quote:
      "Our drivers deliver across rural areas where cell phone signal drops constantly. The mobile app acstena built works completely offline. Drivers capture signatures and photos smoothly, and everything syncs automatically.",
    metric: "99.98% Record Reliability",
    tag: "Field Mobile App",
  },
  {
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "Veloce Capital",
    quote:
      "From interactive Figma prototypes to smooth animated graphics and Canva executive pitch decks, the execution was world-class. Our investor roadshow closed oversubscribed ahead of schedule.",
    metric: "Oversubscribed Seed Round",
    tag: "Website Design & Motion",
  },
];
