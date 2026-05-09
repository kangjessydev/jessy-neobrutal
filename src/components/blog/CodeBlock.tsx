'use client';
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'css' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative my-12 group">
      {/* Yellow Shadow */}
      <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3"></div>
      
      <div className="relative bg-dark border-4 border-dark overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-white border-b-4 border-dark p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-dark bg-[#ff69b4]"></div>
            <div className="w-3 h-3 rounded-full border-2 border-dark bg-[#ffd700]"></div>
            <div className="w-3 h-3 rounded-full border-2 border-dark bg-[#adff2f]"></div>
          </div>
          <button 
            onClick={handleCopy}
            className={`font-lexend font-black text-[10px] uppercase px-3 py-1 border-2 border-dark transition-all active:translate-y-1 ${
              copied ? 'bg-secondary' : 'bg-primary hover:bg-dark hover:text-white'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-x-auto text-sm md:text-base text-gray-300 font-mono">
          <pre><code>{code}</code></pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
