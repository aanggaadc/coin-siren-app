import type {
  ImageData,
  ContactInfo,
  Service,
  CompanyInfo,
  RegistrationInfo,
  AddressInfo,
} from "./company.type";

export interface MainContent {
  company_primary_data_?: {
    logo: ImageData;
    description: string;
    contact: ContactInfo;
  };
  services?: Service[];
  company?: CompanyInfo;
  registration?: RegistrationInfo;
  address?: AddressInfo;
}

export interface IPrimeCompanyData {
  company_primary_data_?: {
    logo: ImageData;
    description: string;
    contact: ContactInfo;
  };
  services?: Service[];
}

export interface ISecondaryCompanyData {
  company: CompanyInfo;
  registration: RegistrationInfo;
  address: AddressInfo;
}

interface JobDescription {
  job_type: string;
  short_brief: string;
  question: string;
  description: string;
}

interface DeveloperSectionLgScreen {
  question: string;
}

interface SalaryLgScreen {
  average: string;
  note: string;
}

interface ReplacementPolicyLgScreen {
  maximum_replacements: string;
  note: string;
}

interface WorkingHoursLgScreen {
  maximum_hours: string;
  details: string;
}

interface CheckboxSmScreen {
  title: string;
}

export interface SlideItemLgScreen {
  icon: string;
  title: string;
}

export interface ILeftContent {
  job_description: JobDescription;
  developer_section_lg_screen: DeveloperSectionLgScreen;
  salary_lg_screen: SalaryLgScreen;
  replacement_policy_lg_screen: ReplacementPolicyLgScreen;
  working_hours_lg_screen: WorkingHoursLgScreen;
  checkboxes_sm_screen: CheckboxSmScreen[];
  slide_items_lg_screen: SlideItemLgScreen[];
}

export interface IRightContent {
  image: string;
  flag_icon: string;
  name: string;
  job: string;
  description: string;
  sub_description: string;
  detail_1: string;
  detail_2: string;
}
