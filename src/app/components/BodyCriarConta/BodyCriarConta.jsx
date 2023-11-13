'use client';
import React from 'react';
import "./BodyCriarConta.css";
import FormInput from "../FormInput/FormInput";
import "../FormInput/FormInput.css";

const BodyCriarConta = () => {
  const isBrowser = typeof window !== 'undefined';
  const [values, setValues] = isBrowser ? React.useState({
    nome: "",
    email: "",
    nascimento: "",
    cpf: "",
    telefone: "",
    endereco: "",
    cep: "",
    estado: "",
    cidade: "",
    senha: "",
    confirmarSenha: "",
  }) : {};

  const inputs = [
    {
      id: 1,
      name: "nome",
      type: "text",
      placeholder: "Nome completo",
      errorMessage: "Verifique seu nome!",
      label: "Nome",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Insira um endereço de email válido!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "nascimento",
      type: "date",
      placeholder: "Data de nascimento",
      label: "Data de nascimento",
    },
    {
      id: 4,
      name: "cpf",
      type: "number",
      placeholder: "CPF",
      errorMessage: "O CPF utilizado não existe!",
      label: "CPF",
      required: true,
    },
    {
      id: 5,
      name: "telefone",
      type: "tel",
      placeholder: "Telefone",
      errorMessage: "Este número de telefone já está em uso ou não existe!",
      label: "Telefone",
      required: true,
    },
    {
      id: 6,
      name: "cep",
      type: "number",
      placeholder: "CEP",
      errorMessage: "O CEP não existe!",
      label: "CEP",
      required: true,
    },
    {
      id: 7,
      name: "endereco",
      type: "text",
      placeholder: "Endereço",
      errorMessage: "O endereço está incorreto!",
      label: "Endereço",
      required: true,
    },
    {
      id: 8,
      name: "estado",
      type: "text",
      placeholder: "Estado",
      errorMessage: "Verifique se seu estado está correto!",
      label: "Estado",
      required: true,
    },
    {
      id: 9,
      name: "cidade",
      type: "text",
      placeholder: "Cidade",
      errorMessage: "Verifique se sua cidade está correta!",
      label: "Cidade",
      required: true,
    },
    {
      id: 10,
      name: "senha",
      type: "password",
      placeholder: "Senha",
      errorMessage:
        "Sua senha deve conter pelo menos 8 caracteres com 1 letra, 1 número e 1 caractere especial!",
      label: "Senha",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 11,
      name: "confirmarSenha",
      type: "password",
      placeholder: "Confirme sua senha",
      errorMessage: "Suas senhas não coincidem!",
      label: "Confirmar senha",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/seguro-bike/cotacao/cotar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cliente: {
            nome: values.nome,
            email: values.email,
            nascimento: values.nascimento,
            cpf: values.cpf,
            telefone: values.telefone,
            endereco: values.endereco,
            cep: values.cep,
            estado: values.estado,
            cidade: values.cidade,
            senha: values.senha
          },
          bicicleta: {
            modelo: "X3000",
            cor: "AZUL",
            marca: "Caloi",
            ano: "2023",
            tipo: "LAZER",
            numeroSerie: "123456789",
            valor: 3000.0,
            equipamentoAdicional: false
          },
          assistencia: "Básica",
          inicioVigencia: "01/06/2023",
          finalVigencia: "01/06/2024"
        }),
      });

      if (response.ok) {
        console.log('Cotação criada com sucesso!');
      } else {
        console.error('Falha ao criar a cotação');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="criar-conta">
      <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default BodyCriarConta;
