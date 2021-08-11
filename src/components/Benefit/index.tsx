import React from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { Content, Container } from './styles';

const Benefit: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="benefit">
          <h2>Benefícios do curso</h2>
          <div className="items">
            <div className="item">
              <span data-aos="zoom-in">
                <FaCheckCircle />
              </span>
              <h3>
                Não perca tempo procurando conteúdos avulsos de inglês na
                internet, o Inglês do Zero ao Cem oferece todo o conteúdo que
                você precisa para sair do Zero e chegar a um nível de
                comunicação avançado em inglês.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="100">
                <FaCheckCircle />
              </span>
              <h3>
                Aprenda e melhore seu inglês quando e onde estiver. Você não
                precisa se deslocar e nem perder tempo indo para algum lugar
                para estudar, as aulas estão disponíveis 24 horas por dia, 7
                dias por semana em apenas alguns cliques.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="200">
                <FaCheckCircle />
              </span>
              <h3>
                Estude no seu próprio tempo. O estudo das aulas acontece de
                forma individual, você pode estudar no seu próprio ritmo sem a
                necessidade de esperar alguém ou ficar para trás.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="300">
                <FaCheckCircle />
              </span>
              <h3>
                Você não está sozinho! A maioria dos cursos só te entrega o
                acesso ao curso e depois te abandona, no Inglês do Zero ao Cem
                você terá acesso direto ao professor e a equipe para tirar
                dúvidas e receber orientações, além de participar dos grupos de
                interação dos alunos no WhatsApp.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="400">
                <FaCheckCircle />
              </span>
              <h3>
                O único curso de inglês que te oferece aula de conversação
                semanal, feedback de pronúncia por WhatsApp, correção individual
                e Plantão de dúvidas exclusivo para alunos.
              </h3>
            </div>

            <div className="item">
              <span data-aos="zoom-in" data-aos-delay="500">
                <FaCheckCircle />
              </span>
              <h3>
                Todas as aulas contém material de apoio, slides e exercícios de
                fixação, e as aulas com muito vocabulário também possuem uma
                lista de estudo e memorização através do aplicativo Quizlet.
              </h3>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Benefit;
