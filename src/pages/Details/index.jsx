import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Modal } from '../../components/Modal';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleModal() {
    setIsOpen(!isOpen);
  }

  async function handleRemove() {
    await api.delete(`/notes/${params.id}`);
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleModal} />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleGoBack} />
          </Content>
        </main>
      )}

      <Modal isOpen={isOpen}>
        <button onClick={handleModal}>Cancelar</button>
        <button onClick={handleRemove}>Excluir</button>
      </Modal>
    </Container>
  );
}
