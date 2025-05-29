import React, { Component } from "react";
import Screen from "../../components/Screen/BaseScreen";
import Logo from "../../assets/Rectangle.png";
import {
  TextInput,
  PasswordInput,
  SendButton,
  ContainerFlex,
} from "./LoginCss";

const Login: React.FC = () => {
  return (
    <ContainerFlex>
      <img
        src={Logo}
        className="rounded mx-auto d-block mb-93"
        style={{ width: "240px", height: "280px", marginBottom: "93px" }}
        alt="logo"
      />
      <TextInput placeholder="Usuário" />
      <PasswordInput placeholder="Senha" />

      <SendButton value="Enviar" style={{ marginTop: "40px" }} />

      <a href="#" style={{ textDecoration: "none", color: "#7F7F7F" }}>
        Esqueceu a senha?
        <span style={{ fontWeight: "bold" }}>Clique aqui</span>
      </a>
    </ContainerFlex>
  );
};

export default Login;
