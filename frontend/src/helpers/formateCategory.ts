export function formateCategory(category: string): string {
  const mapa: Record<string, string> = {
    // Todo: Mudar em Prod
    s: "Iniciante",
    p: "Pré",
    o: "Oficial",
  };

  return mapa[category] || "Desconhecido";
}

// import { formateCategory } from "@/helpers/formateCategory"
// <p>Perfil: {formateCategory(user.category)}</p>;
