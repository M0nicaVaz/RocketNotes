import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Snackbar } from '../../components/Snackbar';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleClose(event) {
    event.preventDefault();
    setIsOpen(!isOpen);

    return null;
  }

  async function handleNewNote() {
    if (!title) {
      setIsOpen(true);
      setAlertMessage('Digite o título da nota!');

      return null;
    }

    if (newTag) {
      setIsOpen(true);
      setAlertMessage('Você deixou uma tag no campo para adicionar!');

      return null;
    }

    if (newLink) {
      setIsOpen(true);
      setAlertMessage('Você deixou um link no campo para adicionar!');

      return null;
    }

    try {
      await api.post('/notes', {
        title,
        description,
        tags,
        links,
      });
    } catch (e) {
      alert(e.message);
    }

    navigate(-1);
    return null;
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={handleGoBack} />
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Snackbar isOpen={isOpen} onClose={handleClose}>
            {alertMessage}
          </Snackbar>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
