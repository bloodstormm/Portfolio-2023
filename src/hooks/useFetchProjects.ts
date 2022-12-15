import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ProjectType } from "../types/Projects";
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [projects, setProjects] = useState<ProjectType[]>();

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      if (cancelled) return;

      setLoading(true);
      await axios
        .get("http://localhost:3000/projects")
        .then((resp) => {
          setProjects(resp.data);
          console.log(resp.data);

          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          console.log(error);
        });
      // const foundProject = projects.find(
      //   (project) => project.projectName === projectName
      // );

      // if (foundProject !== undefined) {
      //   setLoading(false);
      // } else {
      //   setError("Projeto não encontrado!");
      //   console.log(foundProject);
      // }
    };

    loadProject();
  }, [projects, loading, error]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { projects, loading, error };
};
