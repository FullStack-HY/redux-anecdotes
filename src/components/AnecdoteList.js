import React from "react";
import { useSelector, connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { notificationSet } from 'reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => {
    if (state.filter !== ""){
      return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter.toLowerCase()))
    }
    return state.anecdotes
  });

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id, votes) => {
    let votedAnecdote = anecdotes.find(anecdote => anecdote.id === id);
    props.voteAnecdote(id, votes+1);
    props.notificationSet(`+1 vote for ${votedAnecdote.content}`, 5000);
  };

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.votes)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  notificationSet,
  voteAnecdote
}

const ConnectedAnecdoteList = connect(
  null,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList;
