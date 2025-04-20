import { supabase } from "./supabase";
import { Report } from "@/types";

export async function getAllReports(): Promise<Report[] | null> {
  const { data, error } = await supabase
    .from("reports")
    .select("*");

  if (error) {
    console.error("Error fetching all reports:", error);
    return null;
  }
  console.log(data);

  const mappedReports: Report[] = data.map((report) => ({
    id: report.id,
    latitude: report.latitude,
    longitude: report.longitude,
    address: report.address,
    title: report.title,
    description: report.description,
    isSOS: report.is_sos,
    isVerified: report.is_verified,
    date: new Date(report.date),
  }));

  return mappedReports;
}