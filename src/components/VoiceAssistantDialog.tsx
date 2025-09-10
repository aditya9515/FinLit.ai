import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Mic, MicOff, Volume2 } from 'lucide-react';

interface VoiceAssistantDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAssistantDialog({ isOpen, onClose }: VoiceAssistantDialogProps) {
  const [isListening, setIsListening] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    setResponse('');
    
    // Simulate listening for 2 seconds
    setTimeout(() => {
      setIsListening(false);
      setTranscript("Tell me about my expenses this month");
      
      // Simulate AI processing and response
      setTimeout(() => {
        setIsResponding(true);
        setResponse("Based on your data, you've spent ₹1,900 this month. Your major expenses include food (₹800), transportation (₹400), and utilities (₹300). You're within your budget and have saved ₹900 so far.");
        
        // Stop responding after 3 seconds
        setTimeout(() => {
          setIsResponding(false);
        }, 3000);
      }, 500);
    }, 2000);
  };

  const reset = () => {
    setIsListening(false);
    setIsResponding(false);
    setTranscript('');
    setResponse('');
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <span>FIn AI Assistant</span>
            <Volume2 className="w-5 h-5 text-primary" />
          </DialogTitle>
          <DialogDescription>
            Your voice-activated financial assistant. Ask questions about your finances
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Voice Visualization */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Mic Button */}
              <Button
                onClick={startListening}
                disabled={isListening || isResponding}
                className="w-20 h-20 rounded-full"
                size="lg"
              >
                {isListening ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </Button>
              
              {/* Listening Animation */}
              {isListening && (
                <div className="absolute inset-0 animate-ping">
                  <div className="w-20 h-20 rounded-full bg-primary opacity-30"></div>
                </div>
              )}
              
              {/* Voice Wave Animation */}
              {isResponding && (
                <div className="absolute -top-2 -left-2 w-24 h-24 flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 bg-primary rounded-full animate-pulse" style={{ height: '20px', animationDelay: '0ms' }}></div>
                    <div className="w-1 bg-primary rounded-full animate-pulse" style={{ height: '30px', animationDelay: '150ms' }}></div>
                    <div className="w-1 bg-primary rounded-full animate-pulse" style={{ height: '25px', animationDelay: '300ms' }}></div>
                    <div className="w-1 bg-primary rounded-full animate-pulse" style={{ height: '35px', animationDelay: '450ms' }}></div>
                    <div className="w-1 bg-primary rounded-full animate-pulse" style={{ height: '28px', animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center">
            {isListening && (
              <p className="text-sm text-muted-foreground animate-pulse">
                Listening... Speak now
              </p>
            )}
            {isResponding && (
              <p className="text-sm text-muted-foreground">
                FIn AI is responding...
              </p>
            )}
            {!isListening && !isResponding && (
              <p className="text-sm text-muted-foreground">
                Tap the mic to ask about your finances
              </p>
            )}
          </div>

          {/* Transcript */}
          {transcript && (
            <div className="p-3 bg-muted rounded">
              <h4 className="text-sm font-medium mb-1">You said:</h4>
              <p className="text-sm">{transcript}</p>
            </div>
          )}

          {/* Response */}
          {response && (
            <div className="p-3 bg-primary/10 rounded">
              <h4 className="text-sm font-medium mb-1 flex items-center space-x-1">
                <Volume2 className="w-4 h-4" />
                <span>FIn AI:</span>
              </h4>
              <p className="text-sm">{response}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button variant="outline" onClick={reset} className="flex-1">
              Reset
            </Button>
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}