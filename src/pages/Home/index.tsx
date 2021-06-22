import React from 'react';

import Benefit from '../../components/Benefit';
import Button from '../../components/Button';
import CommonQuestions from '../../components/CommonQuestions';
import Documentary from '../../components/Documentary';
import Feedback from '../../components/Feedback';
import Footer from '../../components/Footer';
import Sessions from '../../components/Sessions';
import SumUp from '../../components/SumUp';

import { Container, Content, Preview } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <div>
            <div className="logo">
              <img src="/assets/images/logo.svg" alt="INGLÊS DO 0 AO 100" />
            </div>

            <div className="text-men">
              <div className="text">
                <h2 data-aos="zoom-in">inglês do zero ao cem</h2>
                <h3 data-aos="fade-up" data-aos-delay="400">
                  um dos cursos com mais recurso para aprendizado e prática de
                  inglês do brasil.
                </h3>
              </div>

              <div className="men">
                <img
                  data-aos="fade-up"
                  data-aos-delay="800"
                  src="/assets/images/men.svg"
                  alt="men"
                />
              </div>
            </div>
          </div>
        </Content>

        <Preview>
          <div>
            <h2 data-aos="zoom-in">
              Já perdeu alguma oportunidade por não falar inglês?
            </h2>
            <iframe
              data-aos="fade-up"
              src="https://www.youtube.com/embed/HmZKgaHa3Fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Button>Sim, Quero aprender inglês</Button>
          </div>
        </Preview>
      </Container>

      <Benefit />

      <Documentary />

      <Sessions />

      <Feedback />

      <CommonQuestions />

      <SumUp />

      <Footer />
    </>
  );
};

export default Home;
