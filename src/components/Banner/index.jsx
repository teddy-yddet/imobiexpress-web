import React from "react";
import { Container, Text } from "./styles";

const Banner = () => {
  return (
    <Container>
      <Text>
        <h2>Disciplina: Desenvolvimento de Sistemas WEB</h2>
        <p>
          Este trabalho faz parte das atividades do 5º semestre do Curso de
          Tecnologia em Análise e Desenvolvimento de Sistemas
        </p>
        <span>Anuncie seu imóvel</span>
      </Text>
    </Container>
  );
};

export default Banner;
