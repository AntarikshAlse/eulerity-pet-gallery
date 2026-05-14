import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 20px;
  margin: -20px -20px 30px -20px;
  text-align: center;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 10px 0 0 0;
  font-size: 1.1rem;
  opacity: 0.9;
`;

export const ControlBar = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SortSelect = styled.select`
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  background: white;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 18px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #f0f0f0;
  color: #333;

  &:hover {
    background: #e0e0e0;
  }
`;

export const Stats = styled.div`
  padding: 10px 15px;
  background: #f5f5f5;
  border-radius: 6px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PetCard = styled.div<{ selected?: boolean }>`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  border: 3px solid ${(props) => (props.selected ? "#667eea" : "transparent")};
  position: relative;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

export const PetImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const PetInfo = styled.div`
  padding: 15px;
`;

export const PetTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #333;
`;

export const PetDescription = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PetMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #999;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  accent-color: #667eea;
`;

export const CheckboxWrapper = styled.div<{ selected?: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: smokewhite;
  display: ${(props) => (props.selected ? "block" : "none")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  padding: 10px 15px;
  border: 2px solid #667eea;
  background: ${(props) => (props.active ? "#667eea" : "white")};
  color: ${(props) => (props.active ? "white" : "#667eea")};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #667eea;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
`;

export const Spinner = styled.div`
  border: 4px solid #f0f0f0;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #c33;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1rem;
`;

export const NavBar = styled.nav`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const NavLink = styled.a<{ active?: boolean }>`
  display: block;
  padding: 15px 0;
  color: ${(props) => (props.active ? "#667eea" : "#666")};
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  border-bottom: 3px solid
    ${(props) => (props.active ? "#667eea" : "transparent")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #667eea;
  }
`;

export const DetailContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

export const DetailImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
`;

export const DetailContent = styled.div`
  padding: 30px;
`;

export const DetailTitle = styled.h1`
  margin: 0 0 15px 0;
  color: #333;
  font-size: 2rem;
`;

export const DetailDescription = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 0 0 20px 0;
`;

export const DetailMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    color: #667eea;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  span {
    color: #333;
    font-size: 1.1rem;
  }
`;
