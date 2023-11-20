/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Container, Content } from './styles';

import questions from '~/db/questions';

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
        <div className="title" data-aos="fade-right">
          <h2>
            Aqui responderemos as dúvidas que mais recebemos a respeito do
            curso. Caso tenha algo que não tenha sido esclarecido não tenha
            vergonha de perguntar e nos contate no WhatsApp.
          </h2>
        </div>

        <div className="questions" data-aos="fade-left">
          {questions.map((item) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              className={`item ${question === item.id ? 'active' : ''}`}
              key={item.id}
              onClick={() => handleQuestion(item.id)}
            >
              <div>
                <h3>{item.title}</h3>

                {item.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
              <span>
                {item.id !== question ? <FaAngleDown /> : <FaAngleUp />}
              </span>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default CommonQuestions;
