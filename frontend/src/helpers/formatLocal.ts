export function formatLocal(local: string): string {
  const mapa: Record<string, string> = {
    ios: "Ilhéus",
    vtco: "Vitória da Conquista",
    ssa: "Salvador",
  };

  return mapa[local] || "Desconhecido";
}

// import { formatLocal } from "@/helpers/formatLocal"
// <p>Perfil: {formatLocal(user.local)}</p>;
