import { type LoaderFunctionArgs } from "react-router-dom";
import { getPet } from "../../services/pets.api";

export async function petDetailLoader({
  params,
}: LoaderFunctionArgs) {
  return await getPet(params.id!);
}