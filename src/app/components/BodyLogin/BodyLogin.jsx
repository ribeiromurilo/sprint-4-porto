'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import "./BodyLogin.css";
import FormInput from "../FormInput/FormInput";
import "../FormInput/FormInput.css";

const BodyLogin = () => {
  const [values, setValues] = useState({
    email: "",
    senha: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Insira um endereço de email válido!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "senha",
      type: "password",
      placeholder: "Senha",
      errorMessage: "Email ou senha incorretos!",
      label: "Senha",
      pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(values.senha);

    if (isValidEmail && isValidPassword) {
      console.log('Login bem-sucedido!');
    } else {
      // Caso contrário, exibe mensagem de erro
      console.error('Email ou senha inválidos!');
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const allFieldsFilled = Object.values(values).every((value) => value.trim() !== '');

  return (
    <div className="entrar">
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <p>
          Não tem uma conta?{" "}
          <Link href="/CriarConta">Crie aqui!</Link>
        </p>
        <Link href="/Perfil">
          <button className="button-entrar" disabled={!allFieldsFilled}>
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default BodyLogin;