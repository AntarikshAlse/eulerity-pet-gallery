import { useRouteLoaderData } from "react-router-dom";

import { type Pet } from "../../types/pet";
import { useSelection } from "../../providers/SelectionProviders";
import {
  Button,
  Container,
  ControlBar,
  Header,
  SearchInput,
  SecondaryButton,
  SortSelect,
  Spinner,
  Subtitle,
  Title,
} from "../../components/StyledComponents";
import { useCallback, useMemo, useState } from "react";
import { useInfinitePets } from "../../hooks/useInfinitePets";
import GalleryGrid from "../../components/GalleryGrid";

type SortOption = "name-asc" | "name-desc";

const ITEMS_PER_BATCH = 4;
export default function HomePage() {
  const pets = useRouteLoaderData("pets") as Pet[];
  const { clearSelection, selectAll } = useSelection();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_BATCH);

  // Filter pets based on search
  const filteredPets = useMemo(() => {
    return pets.filter(
      (pet) =>
        pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [pets, searchTerm]);

  // Sort pets
  const sortedPets = useMemo(() => {
    const sorted = [...filteredPets];
    switch (sortBy) {
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  }, [filteredPets, sortBy]);

  // Display only up to displayCount
  const displayedPets = sortedPets.slice(0, displayCount);
  const hasMore = displayCount < sortedPets.length;

  // Infinite scroll callback
  const loadMore = useCallback(() => {
    if (hasMore) {
      setDisplayCount((prev) =>
        Math.min(prev + ITEMS_PER_BATCH, sortedPets.length),
      );
    }
  }, [hasMore, sortedPets.length]);

  const observerTarget = useInfinitePets(loadMore);

  const handleSelectAll = () => {
    selectAll(filteredPets.map((p) => p.id));
  };

  return (
    <Container>
      <Header>
        <Title>🐾 Pet Gallery</Title>
        <Subtitle>Browse and select your favorite pets</Subtitle>
      </Header>

      <ControlBar>
        <SearchInput
          type="text"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <SortSelect
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as SortOption);
          }}
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
        </SortSelect>
        <Button onClick={handleSelectAll}>Select All</Button>
        <SecondaryButton onClick={clearSelection}>Clear</SecondaryButton>
      </ControlBar>
      <GalleryGrid pets={displayedPets} />
      {hasMore && (
        <div
          ref={observerTarget}
          style={{ padding: "20px", textAlign: "center" }}
        >
          <Spinner />
        </div>
      )}
    </Container>
  );
}
