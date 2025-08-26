import ReactConfetti from 'react-confetti';
import { GameState, useGameManager } from '../hooks/use-game-manager';
import PokemonDisplay from './PokemonDisplay';
import PokemonForm from './PokemonForm';
import PokemonResult from './PokemonResult';

const AppPokemon = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    gameState,
    handlePokemonNameSubmit
  } = useGameManager();

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      {gameState === GameState.Correct && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
        />
      )}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay
            pokemon={pokemon}
            isLoading={isLoading}
            gameState={gameState}
          />
          <PokemonForm
            handlePokemonNameSubmit={handlePokemonNameSubmit}
            gameState={gameState}
          />
          <PokemonResult
            loadNewPokemon={loadNewPokemon}
            gameState={gameState}
          />
        </div>
      </div>
    </div>
  );
};

export default AppPokemon;
