import supabase from "../api";

export const useFetchCurriculum = () => {

    const getCurriculum = () => {

        const { data } = supabase.storage
          .from("curriculo-portfolio")
          .getPublicUrl(`Curriculo 2023.pdf`);
    
        const curriculum = data.publicUrl;

    
        return curriculum;
      };

      return {getCurriculum}
} 