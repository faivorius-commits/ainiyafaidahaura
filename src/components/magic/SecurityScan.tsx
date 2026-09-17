import { useEffect, useState } from "react";

type SecurityScanProps = {
  onComplete: () => void;
};

const messages = [
  "INITIALIZING SECURITY LAYER",
  "SCANNING DIGITAL SPACE",
  "VERIFYING CONNECTION",
  "CHECKING ACCESS",
];

export function SecurityScan({ onComplete }: SecurityScanProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return Math.min(value + 2, 100);
      });
    }, 55);

    const stepTimer = setInterval(() => {
      setStep((value) => {
        if (value >= messages.length) {
          clearInterval(stepTimer);
          return messages.length;
        }

        return value + 1;
      });
    }, 650);

    const completeTimer = setTimeout(() => {
      setGranted(true);
    }, 3400);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 4400);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`security-scan ${
        granted ? "security-scan-exit" : ""
      }`}
      aria-label="Security verification"
    >
      {/* Background atmosphere */}
      <div className="security-stars" />
      <div className="security-grid" />
      <div className="security-vignette" />

      {/* Neon scanning beam */}
      <div className="security-scan-line" />

      {/* Main content */}
      <div className="security-content">

        {/* Magical symbol */}
        <div className="security-symbol" aria-hidden="true">
          ✦
        </div>

        {/* Brand */}
        <p className="security-brand">
          AINIYA'S UNIVERSE
        </p>

        {/* Protocol heading */}
        <div className="security-divider">
          <span />
          <span>SECURITY PROTOCOL</span>
          <span />
        </div>

        {/* Main terminal */}
        <div className="security-panel">

          {/* Header */}
          <div className="security-panel-header">
            <span>SYSTEM STATUS</span>

            <span className="security-active">
              <i />
              ACTIVE
            </span>
          </div>

          {/* Terminal output */}
          <div className="security-messages">
            {messages.slice(0, step).map((message, index) => (
              <div
                className="security-message"
                key={message}
              >
                <span className="security-index">
                  0{index + 1}
                </span>

                <span>
                  {message}
                </span>

                <span className="security-check">
                  ✓
                </span>
              </div>
            ))}

            {/* Current scanning process */}
            {step < messages.length && (
              <div className="security-message security-current">
                <span className="security-index">
                  0{step + 1}
                </span>

                <span>
                  {messages[step]}
                  <span className="security-typing-dots">
                    ...
                  </span>
                </span>

                <span className="security-cursor" />
              </div>
            )}
          </div>

          {/* Progress information */}
          <div className="security-progress-info">
            <span>SECURITY CHECK</span>

            <span>
              {String(progress).padStart(3, "0")}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="security-progress">
            <div
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Technical information */}
          <div className="security-code">
            <span>ENCRYPTED CONNECTION</span>
            <span>SHA-256</span>
          </div>
        </div>

        {/* Access granted */}
        <div
          className={`security-granted ${
            granted ? "show" : ""
          }`}
        >
          <span className="security-granted-symbol">
            ✦
          </span>

          <span>ACCESS GRANTED</span>

          <span className="security-granted-symbol">
            ✦
          </span>
        </div>

        {/* Bottom status */}
        <p className="security-entering">
          {granted
            ? "ENTERING MY UNIVERSE..."
            : "PLEASE WAIT..."}
        </p>
      </div>

      {/* Decorative corner brackets */}
      <div
        className="security-corner security-corner-tl"
        aria-hidden="true"
      />

      <div
        className="security-corner security-corner-tr"
        aria-hidden="true"
      />

      <div
        className="security-corner security-corner-bl"
        aria-hidden="true"
      />

      <div
        className="security-corner security-corner-br"
        aria-hidden="true"
      />
    </div>
  );
            }
