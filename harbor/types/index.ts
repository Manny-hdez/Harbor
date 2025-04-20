export interface Report {
  id: number;
  latitude: number;
  longitude: number;
  address: string;
  title: string;
  description: string;
  isSOS: boolean;
  isVerified: boolean;
  date: Date;
}