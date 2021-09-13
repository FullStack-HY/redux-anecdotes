import React from 'react'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    const filterValue = event.target.value
    props.changeFilter(filterValue);
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: value => {
      dispatch( {type:'CHANGE', data:value})
    }
  }
}

const ConnectedFilter = connect(
  null, 
  mapDispatchToProps
)(Filter)
export default ConnectedFilter