import { useState } from 'react';

export default function SpoilerAlert(props) {
  const { text } = props;
  const [ isHidden, setIsHidden ] = useState(true);

  if (isHidden) {
    return <button onClick={() => setIsHidden(false)}>Spoiler Alert - Click To Reveal</button>
  }

  return <span className="spoiler">{text}</span>
}

