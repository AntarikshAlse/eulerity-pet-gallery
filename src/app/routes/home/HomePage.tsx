import { useLoaderData, useNavigate } from "react-router-dom";

import { type Pet } from "../../types/pet";
import GalleryGrid from "../../components/GalleryGrid";
import { useSelection } from "../../providers/SelectionProviders";

export default function HomePage() {
  const pets = useLoaderData() as Pet[];
  const navigate = useNavigate();

  const createSrcSet = (url: string) => {
    const widths = [320, 640, 960, 1200];

    return widths.map((width) => `${url}&w=${width} ${width}w`).join(", ");
  };

  const { toggleSelection, selectedIds } = useSelection();
  console.log("🚀 ~ HomePage ~ selectedIds:", selectedIds);

  return (
    <GalleryGrid>
      {pets.map((pet) => (
        <article
          key={pet.title}
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => {
            navigate(pet.title);
          }}
        >
          <div
            style={{
              background: `${selectedIds.includes(pet.title) ? "green" : "blue"}`,
              borderRadius: "5px",
              width: "10px",
              padding: "5px",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              toggleSelection(pet.title);
            }}
          ></div>
          <img
            src={`${pet.url}&w=640`}
            srcSet={createSrcSet(pet.url)}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={pet.title}
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "200px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <h1>{pet.title}</h1>
          <p>{pet.description}</p>
        </article>
      ))}
    </GalleryGrid>
  );
}
