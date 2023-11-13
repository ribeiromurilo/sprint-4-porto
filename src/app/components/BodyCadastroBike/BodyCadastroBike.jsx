'use client';
import { useState } from "react";
import Link from 'next/link';
import "./BodyCadastroBike.css";
import FormInput from "../FormInput/FormInput";
import "../FormInput/FormInput.css";

const BodyCadastroBike = () => {
  const [values, setValues] = useState({
    numeroDeSerie: "",
    marca: "",
    modelo: "",
    valor: "",
    ano: "",
    cor: "",
  });

  const inputs = [
    {
      id: 1,
      name: "numeroDeSerie",
      type: "text",
      placeholder: "Número de série",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Número de série",
      required: true,
    },
    {
      id: 2,
      name: "marca",
      type: "text",
      placeholder: "Marca",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Marca",
      required: true,
    },
    {
      id: 3,
      name: "modelo",
      type: "text",
      placeholder: "Modelo",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Modelo",
      required: true,
    },
    {
      id: 4,
      name: "valor",
      type: "number",
      placeholder: "R$",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Valor",
      required: true,
    },
    {
      id: 5,
      name: "ano",
      type: "number",
      placeholder: "Ano",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Ano",
      required: true,
    },
    {
      id: 6,
      name: "cor",
      type: "text",
      placeholder: "Cor",
      errorMessage: "Este campo não pode estar em branco!",
      label: "Cor",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/seguro-bike/cotacao/cotar-bicicleta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bicicleta: {
            numeroSerie: values.numeroDeSerie,
            marca: values.marca,
            modelo: values.modelo,
            valor: values.valor,
            ano: values.ano,
            cor: values.cor,
          },
        }),
      });

      if (response.ok) {
        console.log('Bicicleta cadastrada com sucesso!');
      } else {
        console.error('Falha ao cadastrar a bicicleta');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="cadastro-bike">
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar Bike</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Cadastrar Bicicleta</button>
        <Link href="/CadastroBike2">
          <button>Continuar</button>
        </Link>
      </form>
    </div>
  );
};

export default BodyCadastroBike;
