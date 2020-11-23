import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';

const FormStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  input {
    padding: 0.5em;
    margin: 0.5em;
    border-radius: 3px;
  }
  button {
    border-radius: 3px;
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
    <FormStyle>
      <form onSubmit={submitForm}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Song Titles"
            onChange={handleChange}
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            onChange={handleChange}
          />
        </label>
        <label>
          Runtime:
          <input
            type="number"
            name="runtime"
            placeholder="Runtime"
            onChange={handleChange}
          />
        </label>
        <label>
          Youtube Link:
          <input
            type="url"
            name="youtubeUrl"
            placeholder="Youtube URL"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </FormStyle>
  );
};

export default SongForm;
