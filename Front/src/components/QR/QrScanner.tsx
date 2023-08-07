import { useState, useEffect, useContext } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./QrScanner.css";
import { UserContext } from "../../contexts/userContext";

export default function QrScanner() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: window.innerWidth / 4,
        fps: 5,
      },
      true
    );

    scanner.render(success, error);

    function success(result: string) {
      scanner.clear();
      setScanResult(result);
      setUser({ ...user, score: user.score + 30, credit: user.credit + 20 });
    }

    function error(err: string) {
      console.warn(error);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="qr-container">
      <div className="qr-box">
        {scanResult ? (
          <div className="qr-box__message">
            <span>נוספו לך 30 נקודות xp</span>
            <span> ו20 אקוינס!</span>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </div>
  );
}
