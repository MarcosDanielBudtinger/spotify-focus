import React, { FormEvent, useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './App.css';
import { MusicCard } from './components/MusicCard/MusicCard';
import { Album } from './interfaces/Album';
import { api } from './servicos/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [albums, setAlbums] = useState<Album[]>([]);
  const [cityName, setCityName] = useState('');
  const [search, setSearch] = useState('');
  const [showSpinner, setShowSpinner] = useState('sp-disable');


  useEffect(() => {
    api.get(`${cityName}`)
      .then(response => {
        setAlbums(response.data);
        setShowSpinner('sp-disable');
      });
    setSearch('');
  }, [cityName]);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    setCityName(search);
    setShowSpinner('sp-enable');
  }

  return (
    <>
      <Container className="pdt2">
        <h1>SpotiFocus</h1>
      </Container>
      <Container >
        <Form onSubmit={handleSearch} >
          <p> Pesquise aqui a cidade</p>
          <Col>
            <Row className="text-left">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Cidade" value={search}
                    onChange={event => setSearch(event.target.value)} size="sm" required />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" size="sm" type="submit">
                  Pesquisar
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
        <Row>
          {cityName ? <span className="city-selected-text">Playlists sugeridas para a cidade de {cityName} </span> : <span></span>}
          <div className={showSpinner}>
            <Spinner animation="border" variant="primary" /> carregando...
          </div>
        </Row>
        <Row xs={1} md={4} className="g-4">
          {albums.map(album =>
          (
            <MusicCard key={album.id} name={album.name} imgUrl={album.images[0].url} />
          ))}
        </Row>
      </Container>

    </>
  );
}

export default App;
