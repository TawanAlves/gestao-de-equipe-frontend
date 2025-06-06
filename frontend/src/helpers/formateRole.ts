export function formateRole(role: string): string {
  const mapa: Record<string, string> = {
    admin: "Administrador",
    member: "Usuário",
  };

  return mapa[role];
}

// import { roleParaTexto } from "@/helpers/roleParaTexto";
// <p>Perfil: {roleParaTexto(user.role)}</p>;
