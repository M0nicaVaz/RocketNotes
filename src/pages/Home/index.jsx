import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiMenu, FiX } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

export function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleSelectedTags(tagName) {
    if (tagName === 'all') {
      return setSelectedTags([]);
    }

    const alreadySelected = selectedTags.includes(tagName);

    if (alreadySelected) {
      const filteredTags = selectedTags.filter((tag) => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes/?title=${search}&tags=${selectedTags}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <FiMenu onClick={() => setIsOpen(!isOpen)} />
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu isOpen={isOpen}>
        <li>
          <FiX onClick={() => setIsOpen(!isOpen)} />
        </li>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleSelectedTags('all')}
            isActive={selectedTags.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTags(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => {
                handleDetails(note.id);
              }}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
