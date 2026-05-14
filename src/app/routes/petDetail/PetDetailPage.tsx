import { useLoaderData } from "react-router-dom";
import type { Pet } from "../../types/pet";

export default function PetDetailPage() {
  const pet: Pet = useLoaderData();

  return (
    <div>
      <img src={pet.url} />
      <h1>{pet.title}</h1>
      <p>{pet.description}</p>
    </div>
  );
}
