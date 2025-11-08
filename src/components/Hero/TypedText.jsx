import React, { useEffect, useState } from "react";

export default function TypedText({ strings = [], speed = 100, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setBlink(v => !v);
    }, 500);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (index >= strings.length) {
      setIndex(0);
      return;
    }
    if (!reverse && subIndex === strings[index].length) {
      // pause then start delete
      const t = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(t);
    }
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((i) => (i + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(s => s + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings, speed, pause]);

  return (
    <span className="font-medium text-primary">
      {strings[index].substring(0, subIndex)}
      <span className="inline-block ml-1" style={{ width: 10 }}>{blink ? "|" : " "}</span>
    </span>
  );
}
