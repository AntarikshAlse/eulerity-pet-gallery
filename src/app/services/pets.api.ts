import { type Pet } from "../types/pet";

export async function getPets(): Promise<Pet[]> {
  const response = await fetch("https://eulerity-hackathon.appspot.com/pets");

  if (!response.ok) {
    throw new Error("Failed to fetch pets");
  }

  const pets = await response.json();
  // add ids locally
  return pets.map((pet: Omit<Pet, "id">, index: number) => ({
    ...pet,
    id: index,
  }));
}