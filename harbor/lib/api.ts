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
  console.log(data)

  return data as Report[];
}