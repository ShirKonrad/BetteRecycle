import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./QrScanner.css";

export default function QrScanner() {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: 300,
        fps: 5,
      },
      true
    );

    scanner.render(success, error);

    function success(result: string) {
      scanner.clear();
      setScanResult(result);
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
        {scanResult ? <div>{scanResult}</div> : <div id="reader"></div>}
      </div>
    </div>
  );
}
