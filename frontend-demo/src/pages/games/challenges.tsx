import { GamesComingSoonPage } from "@/features/games/components/games-coming-soon-page";

export default function ChallengesPage() {
  return (
    <GamesComingSoonPage
      title="Challenges"
      description="Short-form football strategy missions designed for quick replays, themed objectives, and addictively clean progression loops."
      highlights={[
        "Weekly challenge cards and streak systems",
        "Market XI crossover objectives",
        "Polished frontend shell waiting for backend challenge services",
      ]}
    />
  );
}
