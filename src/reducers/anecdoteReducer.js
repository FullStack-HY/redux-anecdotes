import anecdoteService from 'services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const reducer = (state=[], action) => {
  switch (action.type) {
    case "VOTE_ANECDOTE":
      const anecdoteToBeVoted = state.filter(
        (anecdote) => anecdote.id === action.data.id
      )[0];
      anecdoteToBeVoted.votes += 1;
      return state.map((anecdote) =>
        anecdote.id !== action.data.id ? anecdote : anecdoteToBeVoted
      );
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "INIT":
      return [...action.data]
    default: {
      return state;
    }
  }
};

//Action creators
export const addAnecdote = (anecdote) => {
  return async (dispatch)=>{
    const response = await anecdoteService.createNew(anecdote);
    dispatch({
      type:'NEW_ANECDOTE',
      data: response
    })
  }
 
};

export const voteAnecdote = (id, votes) => {

  return async (dispatch)=>{
    const response = await anecdoteService.voteAnecdote(id, votes);
    dispatch({
      type: "VOTE_ANECDOTE",
      data: { id:response.id }
    })
  }
};

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type:"INIT",
      data: anecdotes
    })
  }
};
export default reducer;
