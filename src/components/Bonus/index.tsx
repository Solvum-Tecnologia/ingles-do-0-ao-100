import React from 'react';
import { FaPhotoVideo, FaBook, FaHeadphones } from 'react-icons/fa';
import { useCountUp } from 'react-countup';
import { Container, Content } from './styles';

const Bonus: React.FC = () => {
  const { countUp: countVideos, start: startVideos } = useCountUp({
    duration: 3,
    end: 365,
    start: 0,
    startOnMount: false,
  });

  const { countUp: countText, start: startText } = useCountUp({
    duration: 3,
    end: 60,
    start: 0,
    startOnMount: false,
  });

  const { countUp: countSentences, start: startSentences } = useCountUp({
    duration: 3,
    end: 91,
    start: 0,
    startOnMount: false,
  });

  document.addEventListener('aos:in:test', () => {
    startVideos();
    startText();
    startSentences();
  });

  return (
    <Container>
      <Content data-aos="zoom-in" data-aos-id="test">
        <div className="title">
          <h2>Bônus exclusivos para a próxima turma</h2>
        </div>
        <div className="items">
          <div className="item">
            <span>
              <FaPhotoVideo />
            </span>
            <h2>+{countVideos}</h2>
            <h3> vídeos com expressões do dia a dia em inglês</h3>
          </div>

          <div className="item">
            <span>
              <FaBook />
            </span>
            <h2>E-book</h2>
            <h3>English for travel – Inglês para viagens</h3>
          </div>

          <div className="item">
            <span>
              <FaHeadphones />
            </span>
            <h2>+{countText}</h2>
            <h3>textos com áudio gravados por falantes nativos</h3>
          </div>

          <div className="item">
            <span>
              <FaHeadphones />
            </span>
            <h2>+{countSentences}</h2>
            <h3>Frases úteis com áudio gravados por falantes nativos</h3>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Bonus;
