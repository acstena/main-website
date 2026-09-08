export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface DirectChannel {
  type: "email" | "phone";
  value: string;
  label: string;
}
