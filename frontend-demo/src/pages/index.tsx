import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Activity, Shield, Trophy, Users, Search, BarChart2 } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight text-white">
          <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-primary-foreground">
            <BarChart2 className="w-6 h-6" />
          </div>
          BALDONTLIE
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-white">Log in</Button>
          <Link href="/dashboard">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold">
              Enter App
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premium Football Prototype
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Elite Football Intelligence. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Decoded for you.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A polished frontend demo for scouts, analysts, and fans. Explore players, tables,
            match concepts, and simulation-led football product ideas without pretending the
            current data layer is live.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-full text-lg font-semibold shadow-[0_0_40px_rgba(153,255,0,0.3)] transition-all hover:shadow-[0_0_60px_rgba(153,255,0,0.5)] hover:-translate-y-1">
                Enter Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Banners / UI Preview */}
        <div className="mt-24 relative mx-auto max-w-6xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 h-full w-full pointer-events-none" />
          <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md p-4 shadow-2xl overflow-hidden relative glass-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="h-48 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center p-6">
                  {/* Mock Chart Area */}
                  <div className="w-full h-full flex items-end gap-2 px-4 opacity-50">
                     {[40, 70, 45, 90, 65, 85, 100, 55, 75, 60].map((h, i) => (
                       <div key={i} className="flex-1 bg-gradient-to-t from-primary to-green-300 rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                     ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl bg-black/40 border border-white/5 p-5 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" /> <span>Player Compare</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-white">99.9% Match</div>
                  </div>
                  <div className="h-32 rounded-xl bg-black/40 border border-white/5 p-5 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Activity className="w-4 h-4" /> <span>Sentiment Snapshot</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-green-400">+42% Surge</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="h-[21.5rem] rounded-xl bg-black/40 border border-white/5 p-5 flex flex-col">
                   <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Search className="w-4 h-4" /> <span>Trend Snapshot</span>
                    </div>
                    <div className="space-y-4 flex-1">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent animate-pulse" />
                          <div className="flex-1">
                            <div className="h-4 bg-accent rounded w-3/4 mb-2 animate-pulse" />
                            <div className="h-3 bg-accent/50 rounded w-1/2 animate-pulse" />
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
