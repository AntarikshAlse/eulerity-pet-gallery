import { type Pet } from "../types/pet";

export async function getPets(): Promise<Pet[]> {
  const response = await fetch("https://eulerity-hackathon.appspot.com/pets");

  if (!response.ok) {
    throw new Error("Failed to fetch pets");
  }

  return response.json();
}

export async function getPet(id: string): Promise<Pet> {
  const response = await fetch(`/pets/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch pet");
  }

  return response.json();
}