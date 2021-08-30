import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const anecdoteContent = event.target.content.value;
    dispatch(addAnecdote(anecdoteContent));
    event.target.content.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
