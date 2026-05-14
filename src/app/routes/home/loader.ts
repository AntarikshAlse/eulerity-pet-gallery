export async function petsLoader() {
  const res = await fetch("https://eulerity-hackathon.appspot.com/pets");

  if (!res.ok) {
    throw new Response("Failed to fetch pets", {
      status: res.status,
    });
  }

  return res.json();
}