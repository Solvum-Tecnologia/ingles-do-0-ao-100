import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';

export const ButtonWhatsapp: React.FC = () => {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=555511996138587&text=Hello%2C%20Ingl%C3%AAs%20do%20Zero!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <FaWhatsapp />
        </div>

        <div className="text">Atendimento por WhatsApp</div>
      </a>
    </Container>
  );
};
