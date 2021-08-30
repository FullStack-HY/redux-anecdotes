import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => {
    if (state.filter !== ""){
      return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter.toLowerCase()))
    }
    return state.anecdotes
  });
  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteAnecdote(id));
  };

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
