import Hex from "crypto-js/enc-hex"
import { useState } from "react";
import styles from './App.module.css';

import InputSection from "./components/ui/InputSection";
import OutputSection from "./components/ui/OutputSection";
import HmacSHA256 from 'crypto-js/hmac-sha256';

function App() {
  const [rawSha, setRawSha] = useState('');
  const [convEscapedUnicodeSha, setConvEscapedUnicodeSha] = useState('');

  const generateHMACSHA256 = (secret, data) => {
    const bytes = HmacSHA256(data, secret);
    return bytes.toString(Hex);
  }

  const generateShaHandler = (secret, data) => {
    const amendedData = data.replace(/\\u0026/g, "&");
    setRawSha(generateHMACSHA256(secret, data));
    setConvEscapedUnicodeSha(generateHMACSHA256(secret, amendedData));
  }

  const resetShaHandler = () => {
    setRawSha('');
    setConvEscapedUnicodeSha('');
  }

  return (
    <div className={styles.app}>
      <InputSection generateShaHandler={generateShaHandler} resetShaHandler={resetShaHandler} />
      <OutputSection rawSha={rawSha} convEscapedUnicodeSha={convEscapedUnicodeSha} />
    </div>
  );
}

export default App;
