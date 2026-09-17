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

        return value + 1;
      });
    }, 70);

    const stepTimer = setInterval(() => {
      setStep((value) => Math.min(value + 1, messages.length));
    }, 1500);

    const completeTimer = setTimeout(() => {
      setGranted(true);
    }, 7200);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className={`security-scan ${granted ? "security-scan-ready" : ""}`}>
      <div className="security-stars" />
      <div className="security-grid" />
      <div className="security-vignette" />

      <div className="security-scan-line" />

      <div className="security-content">

        <div className="security-symbol">✦</div>

        <p className="security-brand">
          AINIYA'S UNIVERSE
        </p>

        <div className="security-divider">
          <span />
          <span>SECURITY PROTOCOL</span>
          <span />
        </div>

        <div className="security-panel">

          <div className="security-panel-header">
            <span>SYSTEM STATUS</span>

            <span className="security-active">
              <i />
              {granted ? "VERIFIED" : "ACTIVE"}
            </span>
          </div>

          <div className="security-messages">

            {messages.slice(0, step).map((message, index) => (
              <div className="security-message" key={message}>
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

            {step < messages.length && (
              <div className="security-message security-current">

                <span className="security-index">
                  0{step + 1}
                </span>

                <span>
                  {messages[step]}...
                </span>

                <span className="security-cursor" />

              </div>
            )}

          </div>

          <div className="security-progress-info">
            <span>SECURITY CHECK</span>
            <span>{progress}%</span>
          </div>

          <div className="security-progress">
            <div style={{ width: `${progress}%` }} />
          </div>

          <div className="security-code">
            <span>ENCRYPTED CONNECTION</span>
            <span>SHA-256</span>
          </div>

        </div>

        <div className={`security-granted ${granted ? "show" : ""}`}>
          <span className="security-granted-symbol">✦</span>

          <span>
            ACCESS GRANTED
          </span>

          <span className="security-granted-symbol">✦</span>
        </div>

        {!granted && (
          <p className="security-entering">
            SECURITY CHECK IN PROGRESS...
          </p>
        )}

        {granted && (
          <div className="security-enter-wrapper">

            <p className="security-entering">
              THE GATEWAY IS READY
            </p>

            <button
              type="button"
              className="security-enter-button"
              onClick={onComplete}
            >
              <span>✦</span>
              CONTINUE TO SYSTEM
              <span>✦</span>
            </button>

          </div>
        )}

      </div>

      <div className="security-corner security-corner-tl" />
      <div className="security-corner security-corner-tr" />
      <div className="security-corner security-corner-bl" />
      <div className="security-corner security-corner-br" />

    </div>
  );
}
