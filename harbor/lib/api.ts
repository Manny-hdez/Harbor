import { supabase } from "./supabase";

export async function postReport(
    patient_id: number,
    visit_id: string,
    course_id: string,
    reportFormData: Report
  ): Promise<boolean> {
    const { error } = await supabase.from("reports").insert([
      {
        patient_id: patient_id,
        visit_id: visit_id,
        course_id: course_id,
        affected_organ: reportFormData.organ,
        onset: reportFormData.onset,
        attribution: reportFormData.attribution,
        grade: reportFormData.grade,
        notes: reportFormData.notes,
        image_keys: reportFormData.imageKeys,
      },
    ]);
  
    if (error) {
      console.error("Error inserting report data:", error);
      return false;
    }
  
    return true;
  }
  