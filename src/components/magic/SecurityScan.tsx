import { useEffect, useState } from "react";

const messages = [
  "> initializing security layer...",
  "> scanning interface...",
  "> verifying credentials...",
  "> integrity check: OK",
  "> access granted_",
];

export function SecurityScan({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setIndex((current) => {
        if (current < messages.length - 1) return current + 1;
        return current;
      });
    }, 650);

    const progressTimer = setInterval(() => {
      setProgress((current) => Math.min(current + 2, 100));
    }, 45);

    const finishTimer = setTimeout(() => {
      setClosing(true);

      setTimeout(() => {
        onComplete();
      }, 700);
    }, 3900);

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`security-scan ${closing ? "security-scan-closing" : ""}`}
    >
      <div className="security-stars" />

      <div className="security-grid" />

      <div className="security-scan-line" />

      <div className="security-content">
        <div className="security-symbol">◈</div>

        <p className="security-title">DIGITAL SECURITY LAYER</p>

        <div className="security-terminal">
          {messages.slice(0, index + 1).map((message, i) => (
            <div
              key={message}
              className={`security-message ${
                i === index ? "security-message-active" : ""
              }`}
            >
              {message}
            </div>
          ))}
        </div>

        <div className="security-progress">
          <div
            className="security-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="security-status">
          <span>SECURITY CHECK</span>
          <span>{progress}%</span>
        </div>

        {index === messages.length - 1 && (
          <div className="security-access">ACCESS GRANTED ✓</div>
        )}
      </div>
    </div>
  );
}
