import React, {Fragment} from 'react'

const PollResult = ({results}) => (
  <ul>
    {results && results.map(vote => (
      <li>
        <b>{vote.text}</b> {vote.votes === undefined ? <Fragment>nenhum voto</Fragment> : <Fragment>{`${vote.votes} voto(s)`}</Fragment>}  <PollResult results={vote.options} />
      </li>
    ))}
  </ul>
)

export default PollResult