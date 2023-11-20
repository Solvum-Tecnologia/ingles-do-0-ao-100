import React from 'react';

import { Container, Content } from './styles';
import BuyButton from '../BuyButton';

const Abstract: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="view-left">
          <div className="background" data-aos="fade-right" />

          <div className="item">
            <div>
              <h3 data-aos="fade-down" data-aos-delay="200">
                O que é o curso Inglês do Zero ao Cem?
              </h3>
              <p data-aos="fade-up" data-aos-delay="300">
                Um curso de inglês completo com um método diferenciado e focado
                em um ensino leve e descontraído com explicações claras e
                diretas de forma que todo aluno entenda e absorva o conteúdo da
                melhor forma possível.
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                O conteúdo é apresentado de forma cronológica, lógica e
                organizada e aulas conduzem o aluno não apenas a assistir mas
                também a praticar a parte ativa do idioma.
              </p>
            </div>

            <iframe
              data-aos="fade-left"
              data-aos-delay="400"
              src="https://www.youtube.com/embed/UTbddj2enh0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="view-right">
          <div className="background" data-aos="fade-left" />

          <div className="item">
            <iframe
              data-aos-delay="400"
              data-aos="fade-right"
              src="https://www.youtube.com/embed/j29Qw6B9j_E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div>
              <h3 data-aos="fade-down" data-aos-delay="400">
                Como acessar as aulas do curso?
              </h3>
              <p data-aos="fade-up" data-aos-delay="400">
                No vídeo acima você verá como acessar todos os recursos que o
                Inglês do Zero ao Cem oferece de forma simples, totalmente
                online e até mesmo offline por meio do aplicativo Hotmart
                sparkles.
              </p>
            </div>
          </div>
        </div>

        <BuyButton />
      </Content>
    </Container>
  );
};

export default Abstract;
