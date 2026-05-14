import type { Pet } from "../../types/pet";

export async function petsLoader() {
  const res = await fetch("https://eulerity-hackathon.appspot.com/pets");

  if (!res.ok) {
    throw new Response("Failed to fetch pets", {
      status: res.status,
    });
  }

  const pets = await res.json();
    // add ids locally
    return pets.map((pet: Omit<Pet, "id">, index: number) => ({
      ...pet,
      id: index,
    }));
}