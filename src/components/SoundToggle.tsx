import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);

  useEffect(() => {
    // Initialize Web Audio API
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    audioContextRef.current = new AudioContext();

    return () => {
      stopSound();
      audioContextRef.current?.close();
    };
  }, []);

  const startSound = () => {
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;

    // Create ambient underwater sound layers
    const frequencies = [
      { freq: 80, gain: 0.02 },   // Deep rumble
      { freq: 120, gain: 0.015 }, // Low hum
      { freq: 200, gain: 0.01 },  // Mid tone
    ];

    frequencies.forEach(({ freq, gain: gainValue }) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const filterNode = context.createBiquadFilter();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(freq, context.currentTime);

      filterNode.type = "lowpass";
      filterNode.frequency.setValueAtTime(400, context.currentTime);

      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(gainValue, context.currentTime + 2);

      oscillator.connect(filterNode);
      filterNode.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start();

      oscillatorsRef.current.push(oscillator);
      gainNodesRef.current.push(gainNode);
    });

    // Add subtle bubble sounds
    const createBubble = () => {
      if (isMuted || !audioContextRef.current) return;

      const context = audioContextRef.current;
      const bubbleOsc = context.createOscillator();
      const bubbleGain = context.createGain();

      bubbleOsc.type = "sine";
      bubbleOsc.frequency.setValueAtTime(800 + Math.random() * 400, context.currentTime);

      bubbleGain.gain.setValueAtTime(0.005, context.currentTime);
      bubbleGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);

      bubbleOsc.connect(bubbleGain);
      bubbleGain.connect(context.destination);

      bubbleOsc.start();
      bubbleOsc.stop(context.currentTime + 0.3);

      // Random bubble intervals
      setTimeout(createBubble, Math.random() * 3000 + 2000);
    };

    setTimeout(createBubble, 1000);
  };

  const stopSound = () => {
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;

    gainNodesRef.current.forEach((gainNode) => {
      gainNode.gain.linearRampToValueAtTime(0, context.currentTime + 1);
    });

    setTimeout(() => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
        } catch (e) {
          // Oscillator might already be stopped
        }
      });
      oscillatorsRef.current = [];
      gainNodesRef.current = [];
    }, 1000);
  };

  const toggleSound = () => {
    if (isMuted) {
      startSound();
    } else {
      stopSound();
    }
    setIsMuted(!isMuted);
  };

  return (
    <Button
      onClick={toggleSound}
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 bg-black/30 backdrop-blur-sm border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
      aria-label={isMuted ? "Unmute ocean sounds" : "Mute ocean sounds"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-cyan-300" />
      ) : (
        <Volume2 className="h-5 w-5 text-cyan-300" />
      )}
    </Button>
  );
};

export default SoundToggle;
