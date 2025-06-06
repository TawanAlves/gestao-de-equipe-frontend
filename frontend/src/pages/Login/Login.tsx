import React, { useState } from "react";
import Logo from "../../assets/Rectangle.png";
import { useAuth } from "../../contexts/AuthContext";

import {
  TextInput,
  PasswordInput,
  SendButton,
  ContainerFlex,
} from "./LoginCss";
import api from "@/services/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async () => {
    try {
      const response = await api.post("/login", { email, password });

      const { token, user } = response.data;
      await login(token, user);
      console.log("Usuário logado com sucesso:", user, token);
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Email ou senha inválidos.");
    }
  };

  return (
    <ContainerFlex>
      <img
        src={Logo}
        className="rounded mx-auto d-block mb-93"
        style={{ width: "240px", height: "280px", marginBottom: "93px" }}
        alt="logo"
      />
      <TextInput
        placeholder="Usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SendButton
        value="Enviar"
        style={{ marginTop: "40px" }}
        onClick={handleSubmit}
      />
      <button
        type="button"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          textDecoration: "none",
          color: "#7F7F7F",
          cursor: "pointer",
          font: "inherit",
        }}
        onClick={() =>
          alert("Função de recuperação de senha ainda não implementada.")
        }
      >
        Esqueceu a senha?
        <span style={{ fontWeight: "bold" }}> Clique aqui</span>
      </button>
    </ContainerFlex>
  );
};

export default Login;
