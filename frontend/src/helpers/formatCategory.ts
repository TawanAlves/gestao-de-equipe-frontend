export function formatCategory(category: string): string {
  const mapa: Record<string, string> = {
    // Todo: Mudar em Prod
    s: "Iniciante",
    p: "Pré",
    o: "Oficial",
  };

  return mapa[category] || "Desconhecido";
}

// import { formatCategory } from "@/helpers/formatCategory"
// <p>Perfil: {formatCategory(user.category)}</p>;
