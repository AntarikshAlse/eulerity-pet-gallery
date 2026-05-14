import {
  useNavigate,
  useNavigation,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import {
  Container,
  Button,
  DetailContainer,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailDescription,
  DetailMeta,
  MetaItem,
  LoadingContainer,
  Spinner,
  ErrorMessage,
} from "../../components/StyledComponents";
import type { Pet } from "../../types/pet";

export default function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const pets = useRouteLoaderData("pets") as Pet[];

  const pet = pets.find((p) => p.id.toString() === id);

  if (navigation.state === "loading") {
    return (
      <Container>
        <LoadingContainer>
          <Spinner />
          <p>Loading pet details...</p>
        </LoadingContainer>
      </Container>
    );
  }

  // if (error) {
  //   return (
  //     <Container>
  //       <ErrorMessage>Error: {error}</ErrorMessage>
  //       <Button onClick={() => navigate("/")}>Back to Gallery</Button>
  //     </Container>
  //   );
  // }

  if (!pet) {
    return (
      <Container>
        <ErrorMessage>Pet not found!</ErrorMessage>
        <Button onClick={() => navigate("/")}>Back to Gallery</Button>
      </Container>
    );
  }

  return (
    <Container>
      <div style={{ marginBottom: "30px" }}>
        <Button onClick={() => navigate("/")}>← Back to Gallery</Button>
      </div>

      <DetailContainer>
        <DetailImage src={pet.url} alt={pet.title} />
        <DetailContent>
          <DetailTitle>{pet.title}</DetailTitle>
          <DetailDescription>{pet.description}</DetailDescription>

          <DetailMeta>
            <MetaItem>
              <strong>Created</strong>
              <span>
                {new Date(pet.created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </MetaItem>
          </DetailMeta>
        </DetailContent>
      </DetailContainer>
    </Container>
  );
}
