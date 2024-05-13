import React, { useState } from 'react';
import Film from './Film';

export default function FilmList() {
    const [films, setFilms] = useState([{
        id: 1,
        title: "Star Wars",
        rating: ""
    }]);


    function deleteItem(id) {
        setFilms(films.filter((item) => item.id !== id));
    }

    return (
        <div>
            <form>
                <fieldset>

                    <label for="title-field">Titel:</label>
                    <input type="text" id="title-field" class="form-control" placeholder="Titel här..."/>

                    <label for="rating-field">Betyg:</label>

                    <select type="text" id="rating-field" class="form-control">
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" class="btn btn-success mt-3" value="Spara film"/>

                </fieldset>
                <h1>Inlagda filmer</h1>
            </form>
            <ul className="list-group">
                {films.map(film => <Film key={film.id} item={film} deleteItem={deleteItem} />)}
            </ul>
        </div>
    )
}