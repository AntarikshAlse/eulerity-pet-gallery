import styled from "styled-components";

const GalleryGrid = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default GalleryGrid;
