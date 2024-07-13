"use client"
import { IconCopy } from '@tabler/icons-react';
import React, { useState } from 'react'

const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };
  
    return (
      <button onClick={copyToClipboard} className="copy-button absolute left-0 botom-0 z-20 w-fit">
        {copied ? 'Copied!' : <IconCopy size={20}/>}
      </button>
    );
  };

export default CopyButton