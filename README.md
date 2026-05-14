Pet Gallery
Modern React+TypeScript application for browsing, searching.
Features

Architecture Decisions Made:

- State Management: Used React Context API for global selection state with a custom hook (usePets) for data fetching
- Styling: Implemented styled-components for scoped, dynamic styling
- Routing: React Router v7 for SPA with /pets/:id detail routes
- Data Flow: Custom hook pattern to separate concerns between UI and data fetching
- Responsive Design: CSS Grid with media queries for 1/2/4 column layouts
- TypeScript: Full type safety with interfaces for Pet objects and context types
