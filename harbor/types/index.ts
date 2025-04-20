export interface Report {
  id?: string;
  latitude: number;
  longitude: number;
  address: string;
  title: string;
  description: string;
  isSOS: boolean;
  isVerified: boolean;
  date: Date;
}