import anecdoteService from 'services/anecdotes';

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state=[], action) => {
  // console.log("state now: ", state);
  // console.log("action", action);

  switch (action.type) {
    case "VOTE_ANECDOTE":
      const anecdoteToBeVoted = state.filter(
        (anecdote) => anecdote.id === action.data.id
      )[0];
      anecdoteToBeVoted.votes += 1;
      // console.log(anecdoteToBeVoted);
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
  // const noteToAdd = asObject(content);
  // return {
  //   type: "NEW_ANECDOTE",
  //   data: anecdote
  // };
  return async (dispatch)=>{
    const response = await anecdoteService.createNew(anecdote);
    dispatch({
      type:'NEW_ANECDOTE',
      data: response
    })
  }
 
};

export const voteAnecdote = (id, votes) => {
  // return {
  //   type: "VOTE_ANECDOTE",
  //   data: { id }
  // };
  return async (dispatch)=>{
    const response = await anecdoteService.voteAnecdote(id, votes);
    dispatch({
      type: "VOTE_ANECDOTE",
      data: { id:response.id }
    })
  }
};

export const initAnecdotes = () => {
  // return {
  //   type: "INIT",
  //   data: anecdotes
  // };
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type:"INIT",
      data: anecdotes
    })
  }
};
export default reducer;
