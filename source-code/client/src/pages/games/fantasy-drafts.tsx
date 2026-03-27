import { GamesComingSoonPage } from "@/features/games/components/games-coming-soon-page";

export default function FantasyDraftsPage() {
  return (
    <GamesComingSoonPage
      title="Fantasy Drafts"
      description="A sharper draft experience built around tactical roles, squad balance, and player-fit intelligence instead of generic fantasy mechanics."
      highlights={[
        "Draft room built for role tiers and chemistry",
        "Live squad construction surfaces",
        "Future-ready placeholders for backend draft logic",
      ]}
    />
  );
}
