import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I am the AnythingFootball AI. Ask me about stats, player predictions, or to compare tactical systems.' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `I analyzed the data. Based on current sentiment and xG models, that's a fascinating insight. Want me to pull up a detailed comparison chart?` 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[0_0_30px_rgba(153,255,0,0.3)] bg-primary text-primary-foreground hover:scale-105 transition-transform z-50 p-0"
        >
          <Bot className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl z-50 bg-background/95 backdrop-blur-xl border-white/10 animate-in slide-in-from-bottom-5">
          <CardHeader className="p-4 border-b border-border/50 flex flex-row items-center justify-between bg-card/50 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">AnythingFootball AI</h3>
                <p className="text-[10px] text-primary">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8 border border-border bg-card flex items-center justify-center">
                    {msg.role === 'ai' ? <Bot className="w-4 h-4 text-primary" /> : <div className="text-xs">You</div>}
                  </Avatar>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-secondary text-foreground rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border/50 bg-card/30">
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Ask about football..." 
                className="bg-background/50 border-border"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button size="icon" className="bg-primary text-primary-foreground shrink-0" onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
