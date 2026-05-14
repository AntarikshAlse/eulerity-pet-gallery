import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  CheckboxWrapper,
  Gallery,
  PetCard,
  PetDescription,
  PetImage,
  PetInfo,
  PetTitle,
} from "./StyledComponents";
import { useSelection } from "../providers/SelectionProviders";
import type { Pet } from "../types/pet";

const GalleryGrid = ({ pets }: { pets: Pet[] }) => {
  const { toggleSelection, selectedIds } = useSelection();
  const navigate = useNavigate();
  return (
    <Gallery>
      {pets.map((pet) => (
        <PetCard
          selected={selectedIds.includes(pet.id)}
          key={pet.id}
          onClick={() => navigate(`/pets/${pet.id}`)}
          style={{ position: "relative" }}
        >
          <CheckboxWrapper
            onClick={(e) => e.stopPropagation()}
            selected={selectedIds.includes(pet.id)}
          >
            <Checkbox
              type="checkbox"
              checked={selectedIds.includes(pet.id)}
              readOnly
            />
          </CheckboxWrapper>
          <PetImage
            src={`${pet.url}&w=640`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={pet.title}
            loading="lazy"
            onClick={(e) => {
              e.stopPropagation();
              toggleSelection(pet.id);
            }}
          />
          <PetInfo>
            <PetTitle>{pet.title}</PetTitle>
            <PetDescription>{pet.description}</PetDescription>
          </PetInfo>
        </PetCard>
      ))}
    </Gallery>
  );
};

export default GalleryGrid;
