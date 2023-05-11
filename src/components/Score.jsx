
// eslint-disable-next-line react/prop-types
export  const Score = ({scores}) => {
  // eslint-disable-next-line react/prop-types
  const {xScore, oScore} = scores
  return (
    <div className="scoreBoard">
      <span>Victorias de X: {xScore}</span>
      <br />
      <span>Victorias de O: {oScore}</span>
    </div>
  )
}

export default Score