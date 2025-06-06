export function formatRole(role: string): string {
  const mapa: Record<string, string> = {
    admin: "Administrador",
    member: "Usuário",
  };

  return mapa[role];
}

// import { formatRole } from "@/helpers/formatRole";
// <p>Perfil: {formatRole(user.role)}</p>;
