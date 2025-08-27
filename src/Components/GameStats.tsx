interface GameStatsProps {
  wins: number;
  losses: number;
  effectiveness: number;
}

export const GameStats: React.FC<GameStatsProps> = ({
  wins,
  losses,
  effectiveness
}) => {
  return (
    <div className="game-stats">
      <h2>Estadísticas del Juego</h2>
      <p>Victorias: {wins}</p>
      <p>Derrotas: {losses}</p>
      <p>Efectividad: {effectiveness.toFixed(2)}%</p>
    </div>
  );
};
