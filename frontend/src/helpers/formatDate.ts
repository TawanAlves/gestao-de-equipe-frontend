export function formatDateBR(dataISO: string): string {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function calculateAge(birthDateISO: string): number {
  const birthDate = new Date(birthDateISO);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const currentMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();
  const currentDay = today.getDate();
  const birthDay = birthDate.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}
// import { formatDateBR } from "@/helpers/formatDateBR";
// <p>Data: {formatDateBR(user.createdAt)}</p>
