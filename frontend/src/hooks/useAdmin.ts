// hooks/useAdmin.ts
import { useAuth } from "../contexts/AuthContext";
export function useAdmin() {
  const { user } = useAuth();
  return user?.role === "admin";
}

// import { useAdmin } from "@/hooks/useAdmin";
// const isAdmin = useAdmin();
// return (
//   <>
//     {isAdmin && <button>Botão restrito para admin</button>}
//   </>
// );
