import { useState, useEffect } from "react";
import supabase from "../api";
import { PostgrestError } from "@supabase/supabase-js";

import { ProjectType } from "../types/Projects";

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState<ProjectType[]>();
  const [error, setError] = useState<PostgrestError>();

  const [cancelled, setCancelled] = useState(false);

  // Função para pegar as imagens de acordo com o nome do projeto
  // O nome do arquivo precisa ser o mesmo do titulo, e tudo em minusculo
  const getImage = (projectName: string) => {
    const { data } = supabase.storage
      .from("portfolio-ncls-images")
      .getPublicUrl(`ProjectImages/${projectName.toLowerCase()}/main`);

    const imageUrl = data.publicUrl;

    return imageUrl;
  };

  const getDetailImages = (projectName: string, detailImage: number) => {
    const { data } = supabase.storage
      .from("portfolio-ncls-images")
      .getPublicUrl(
        `ProjectImages/${projectName.toLowerCase()}/detail${detailImage}`
      );

    const imageUrl = data.publicUrl;

    return imageUrl;
  };

  useEffect(() => {
    const loadProject = async () => {
      // memory leak
      if (cancelled) return;

      setLoading(true);

      const { data, error } = await supabase
        .from("projetos")
        .select()
        .order("created_at", { ascending: false });

      // Criei essa constante para poder tipar o retorno do supabase
      const response: ProjectType[] = data!;

      setProjects(response);
      setError(error!);

      setLoading(false);
    };

    loadProject();
  }, [projects, error]);

  // Setando todas as imagens do projeto de acordo com o nome do mesmo
  projects?.map(
    (project) => (
      (project.image = getImage(project.name)),
      (project.imageDetail1 = getDetailImages(project.name, 1)),
      (project.imageDetail2 = getDetailImages(project.name, 2))
    )
  );

  useEffect(() => {
    return () => setCancelled(true);
  }, [projects, error]);

  return { projects, loading, error };
};
