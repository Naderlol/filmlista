import React, { useState, useRef } from "react";
import Film from "./Film";

export default function FilmList() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "Star Wars",
      rating: 5,
    },
  ]);
  const inputRef = useRef();
  const ratingRef = useRef();
  const formRef = useRef();

  function addMovie(event) {
    event.preventDefault();
    const newId = films.length > 0 ? films[films.length - 1].id + 1 : 1;
    const rating = ratingRef.current.value;
    const newFilm = {
      id: newId,
      title: inputRef.current.value,
      rating: parseInt(rating),
    };

    setFilms([...films, newFilm]);
    formRef.current.reset();
  }

  function deleteItem(id) {
    setFilms(films.filter((item) => item.id !== id));
  }

  return (
    <div>
      <form ref={formRef} onSubmit={addMovie}>
        <fieldset>
          <label htmlFor="title-field">Titel:</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            placeholder="Titel här..."
            ref={inputRef}
          />

          <label htmlFor="rating-field">Betyg:</label>
          <select type="text" id="rating-field" className="form-control" ref={ratingRef}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit" className="btn btn-success mt-3">
            Spara film
          </button>
        </fieldset>
      </form>
      <h1>Inlagda filmer</h1>
      <ul className="list-group">
        {films.map((film) => (
          <Film key={film.id} item={film} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
