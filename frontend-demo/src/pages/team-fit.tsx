import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { mockPlayers } from "@/data/mock";

export default function TeamFit() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleMatchmaker = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1 flex items-center gap-3">
          <Layers className="w-8 h-8 text-primary" /> Tactical Fit Finder
        </h1>
        <p className="text-muted-foreground">Discover players that perfectly match a club's tactical system and current squad needs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Setup Column */}
        <Card className="glass-card bg-card/40 lg:col-span-1 border-white/5 h-fit">
          <CardHeader>
            <CardTitle className="text-lg font-display">Target Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Target Club</label>
              <select className="w-full p-3 rounded-lg bg-background border border-border text-white focus:outline-none focus:border-primary">
                <option>Real Madrid CF</option>
                <option>Arsenal FC</option>
                <option>Bayern Munich</option>
                <option>Manchester City</option>
                <option>FC Barcelona</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Tactical System</label>
              <select className="w-full p-3 rounded-lg bg-background border border-border text-white focus:outline-none focus:border-primary">
                <option>4-3-3 Attacking (Fluid)</option>
                <option>4-2-3-1 Possession</option>
                <option>3-4-2-1 High Press</option>
                <option>5-3-2 Counter Attack</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Key Needs</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">Creative Midfielder</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">High Press Intensity</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-white/10">U23</Badge>
                <Badge variant="outline" className="cursor-pointer border-dashed border-white/30 text-muted-foreground">+ Add Requirement</Badge>
              </div>
            </div>
            <Button 
              className="w-full bg-primary text-primary-foreground font-bold"
              onClick={handleMatchmaker}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Running AI Models...</>
              ) : (
                <><Sparkles className="w-4 h-4 mr-2" /> Run AI Matchmaker</>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Column */}
        <div className="lg:col-span-2 space-y-4">
          {!showResults && !isAnalyzing && (
            <div className="h-full flex flex-col items-center justify-center min-h-[400px] border border-dashed border-white/10 rounded-xl bg-card/10 text-muted-foreground">
              <Layers className="w-12 h-12 mb-4 opacity-20" />
              <h3 className="text-lg font-medium text-white mb-2">Configure profile to find matches</h3>
              <p className="max-w-sm text-center text-sm">Select a club, system, and specific tactical needs, then run the matchmaker to scan the global database.</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="h-full flex flex-col items-center justify-center min-h-[400px] border border-white/5 rounded-xl bg-card/20">
              <div className="w-16 h-16 relative mb-6">
                <div className="absolute inset-0 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-b-blue-500 border-l-blue-500 border-t-transparent border-r-transparent rounded-full animate-spin direction-reverse"></div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2 animate-pulse">Scanning 38,400+ Profiles...</h3>
              <p className="text-sm text-muted-foreground">Cross-referencing stylistic fit and expected impact.</p>
            </div>
          )}

          {showResults && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-semibold">Top System Fits</h2>
                <Badge className="bg-primary/20 text-primary border-primary/30">3 Matches Found</Badge>
              </div>
              
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                <Card className="glass-card bg-card/40 border-primary/20 hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-primary group-hover:w-3 transition-all" />
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-accent flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(118,255,3,0.3)]">M</div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Moyosore Jobi</h3>
                          <p className="text-sm text-muted-foreground">Bayer Leverkusen • 21 yo • CAM/CM</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-3xl font-display font-bold text-primary drop-shadow-[0_0_8px_rgba(118,255,3,0.5)]">98%</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Match Score</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div className="text-sm"><span className="font-medium text-white block">Role Fit</span>Perfect for advancing play in half-spaces.</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div className="text-sm"><span className="font-medium text-white block">Pressing</span>Matches desired intensity metrics (18.4 PP90).</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div className="text-sm"><span className="font-medium text-white block">Age Profile</span>Fits long-term project perfectly at 21.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card bg-card/40 border-white/5 hover:border-white/20 transition-all cursor-pointer group" style={{ animationDelay: '150ms' }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-accent flex items-center justify-center font-bold text-lg">J</div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Jamal Musiala</h3>
                          <p className="text-sm text-muted-foreground">Bayern Munich • 21 yo • CAM/LW</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-3xl font-display font-bold text-green-400">94%</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Match Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card bg-card/40 border-white/5 hover:border-white/20 transition-all cursor-pointer group" style={{ animationDelay: '300ms' }}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-accent flex items-center justify-center font-bold text-lg">X</div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">Xavi Simons</h3>
                          <p className="text-sm text-muted-foreground">RB Leipzig • 21 yo • CAM/RW</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-3xl font-display font-bold text-yellow-400">88%</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Match Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
