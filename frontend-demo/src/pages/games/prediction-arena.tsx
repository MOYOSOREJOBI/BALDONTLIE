import { GamesComingSoonPage } from "@/features/games/components/games-coming-soon-page";

export default function PredictionArenaPage() {
  return (
    <GamesComingSoonPage
      title="Prediction Arena"
      description="A premium prediction surface for high-context fixture calls, scenario ladders, and football forecasting competition."
      highlights={[
        "Scenario-based predictions instead of flat score picks",
        "Live rounds, streak pressure, and league tables",
        "Backend-ready structure reserved for future integrations",
      ]}
    />
  );
}
