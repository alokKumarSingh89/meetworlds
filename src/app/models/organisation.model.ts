export interface Organisation {
  id?: number;

  name: string;

  address1: string;

  address2?: string;

  address3?: string;

  pincode: string;

  phone: string;

  mobile: string;

  email_id: string;

  gstin: string;

  timing?: string;

  logo_path?: string;
}
