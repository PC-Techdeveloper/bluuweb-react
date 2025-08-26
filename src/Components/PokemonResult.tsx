import { GameState } from '../hooks/use-game-manager';

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null; //No result to show while playing...
  }

  return (
    <div
      className={`alert alert-${
        gameState === GameState.Correct ? 'success' : 'danger'
      } text-center`}
    >
      {gameState === GameState.Correct ? (
        <h2>
          ¡Correcto! <i className="bi bi-arrow-through-heart-fill"></i>
        </h2>
      ) : (
        <h2>
          ¡Error! <i className="bi bi-bookmark-x"></i>
        </h2>
      )}
      <button onClick={loadNewPokemon} className="btn btn-dark mt-3">
        Volver a Jugar
      </button>
    </div>
  );
};

export default PokemonResult;
