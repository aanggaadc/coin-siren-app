export interface ImageData {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface Service {
  icon: ImageData;
  title: string;
  link_text: string;
  link_icon: ImageData;
}

export interface CompanyDetail {
  company_name: string;
  ceo_name: string;
}

export interface CompanyInfo {
  name: string;
  ceo: string;
  details: CompanyDetail[];
}

export interface RegistrationInfo {
  business_cin: string;
  business_registration_number: string;
  CIN: string;
}

export interface AddressInfo {
  korea: string;
  india: string;
}
