import { useCallback, useEffect, useState } from 'react';
import { pokemonService } from '../services/pokemon.services';
import type { Pokemon } from '../types/pokemon.intarface';

export const GameState = {
  Playing: 'playing',
  Correct: 'correct',
  Wrong: 'wrong'
} as const;

export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.Playing);

  // Estado para las estadísticas
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;
      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput
      );

      if (isValid) {
        setGameState(GameState.Correct);
        setWins((prevWins) => prevWins + 1);
      } else {
        setGameState(GameState.Wrong);
        setLosses((prevLosses) => prevLosses + 1);
      }
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameState(GameState.Playing);
    try {
      const randomPokemon = await pokemonService.getRandomPokemon();
      setPokemon(randomPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  // Calcular el porcentaje de efectividad
  const totalGames = wins + losses;
  const effectiveness = totalGames > 0 ? (wins / totalGames) * 100 : 0;

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
    wins,
    losses,
    effectiveness
  };
};
