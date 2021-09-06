import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from 'services/anecdotes';
import { notificationSet } from 'reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const anecdoteContent = event.target.content.value;

    //Without async action creators
    // anecdoteService.createNew(anecdoteContent)
    // .then(response => {
    //   console.log('response: ', response)
    //   dispatch(addAnecdote(response))
    //   event.target.content.value = "";
    // })

    //With async action creators
    dispatch(addAnecdote(anecdoteContent))
    .then(()=>{
      // dispatch(notificationSet(`New anecdote ${anecdoteContent}`))
      // setTimeout(()=>{
      //   dispatch(notificationRemove())
      // }, 5000)
      dispatch(notificationSet(anecdoteContent, 5000))
      event.target.content.value = ""
    })
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
