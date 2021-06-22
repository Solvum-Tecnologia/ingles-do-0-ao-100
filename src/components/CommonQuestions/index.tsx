import React, { useState, useCallback } from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Container, Content } from './styles';

const questions = [
  {
    id: 1,
    title: 'Pergunta',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum quod, officiis sit iure sequi ipsam magnam voluptatem eum eligendi nemo, at aliquam optio eveniet ullam expedita dolore hic harum?',
  },
  {
    id: 2,
    title: 'Pergunta',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum quod, officiis sit iure sequi ipsam magnam voluptatem eum eligendi nemo, at aliquam optio eveniet ullam expedita dolore hic harum?',
  },
  {
    id: 3,
    title: 'Pergunta',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum quod, officiis sit iure sequi ipsam magnam voluptatem eum eligendi nemo, at aliquam optio eveniet ullam expedita dolore hic harum?',
  },
  {
    id: 4,
    title: 'Pergunta',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum quod, officiis sit iure sequi ipsam magnam voluptatem eum eligendi nemo, at aliquam optio eveniet ullam expedita dolore hic harum?',
  },
];

const CommonQuestions: React.FC = () => {
  const [question, setQuestion] = useState(0);

  const handleQuestion = useCallback(
    (id: number) => {
      if (id === question) {
        setQuestion(0);
        return;
      }

      setQuestion(id);
    },
    [question],
  );

  return (
    <Container>
      <Content>
        <iframe
          data-aos="fade-right"
          src="https://www.youtube.com/embed/HmZKgaHa3Fg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <div className="questions" data-aos="fade-left">
          {questions.map(item => (
            <div
              className={`item ${question === item.id ? 'active' : ''}`}
              key={item.id}
            >
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <button type="button" onClick={() => handleQuestion(item.id)}>
                {item.id !== question ? <FaAngleDown /> : <FaAngleUp />}
              </button>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default CommonQuestions;
