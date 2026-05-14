import { useLoaderData } from "react-router-dom";
import { type Pet } from "../types/pet";
export function usePets() {
  const pets = useLoaderData() as Pet[];

  const isEmpty = pets.length === 0;

  return {
    pets,
    isEmpty,
  };
}
