import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, setPassword, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="bg-zinc-900 text-black min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md p-6 shadow-xl bg-white rounded-2xl border border-zinc-200">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

        <div className="relative">
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-1.5 bg-black text-white rounded-lg absolute right-1 top-1/2 -translate-y-1/2 hover:bg-zinc-800 transition">
            Copy
          </button>
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-2.5 pr-24 outline-none border border-gray-400 rounded-xl"
          />
        </div>

        <div className="mt-5 space-y-4">
          {/* Length */}
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer"
            />

            <label className="whitespace-nowrap font-medium text-zinc-700">
              Length: {length}
            </label>
          </div>

          {/* Options */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                id="numberInput"
                className="h-4 w-4 cursor-pointer"
              />

              <label
                htmlFor="numberInput"
                className="cursor-pointer text-sm font-medium text-zinc-700">
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                id="charInput"
                className="h-4 w-4 cursor-pointer"
              />

              <label
                htmlFor="charInput"
                className="cursor-pointer text-sm font-medium text-zinc-700">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
