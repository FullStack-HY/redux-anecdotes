import React, { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "components/Filter";
import Notification from "components/Notification";
import { initAnecdotes } from 'reducers/anecdoteReducer'
import { useDispatch } from "react-redux";
import anecdoteService from 'services/anecdotes';

const App = () => {
  const dispatch = useDispatch()
  //Without asynchronous action creators we have to communicate with the server from within our component
  // useEffect(()=>{
  //   anecdoteService.getAll()
  //   .then(anecdotes => {
  //     dispatch(initAnecdotes(anecdotes))
  //   })
  // },[])

  //With async action creators we can simply dispatch an action
  dispatch(initAnecdotes())
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
