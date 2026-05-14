import React from "react";
import { Container, DetailContent } from "../../components/StyledComponents";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <DetailContent>
        <h2>Welcome to Pet Gallery</h2>
        <p>
          Pet Gallery is modern web application built with React and TypeScript
          for browsing adorable pets.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Browse pet collection with responsive grid</li>
          <li>Search pets by name or description</li>
          <li>Sort by name</li>
          <li>Detailed view for each pet</li>
          <li>Persistent selection across pages</li>
          <li>Infinte scroll for easy browsing</li>
        </ul>

        <h3>Technologies</h3>
        <ul>
          <li>
            <strong>React 19</strong> - UI library
          </li>
          <li>
            <strong>TypeScript</strong> - Type safety
          </li>
          <li>
            <strong>React Router</strong> - Client-side routing
          </li>
          <li>
            <strong>Styled Components</strong> - CSS-in-JS styling
          </li>
        </ul>

        <h3>Design Highlights</h3>
        <ul>
          <li>Mobile-first responsive design (1, 2, 4 column layouts)</li>
          <li>Global context for selection state persistence</li>
          <li>Custom hook for data fetching and state management</li>
          <li>Smooth animations and transitions</li>
        </ul>
      </DetailContent>
    </Container>
  );
};

export default AboutPage;
