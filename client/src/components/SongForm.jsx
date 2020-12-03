import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';

const FormStyle = styled.div`
  button {
    border-radius: 3px;
    background-color: black;
    color: white;
  }
  div {
    max-width: 500px;
  }
`;

const SongForm = () => {
  const { setSongs } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: '/api/songs',
        data: formData
      });
      swal('New song added to Moodsic!');
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <FormStyle>
    <Container>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Song Title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            placeholder="Artist"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="number"
            name="runtime"
            placeholder="Runtime"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Youtube Link</Form.Label>
          <Form.Control
            type="url"
            name="youtubeUrl"
            placeholder="https://www.youtube.com/"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
    // </FormStyle>
  );
};

export default SongForm;
