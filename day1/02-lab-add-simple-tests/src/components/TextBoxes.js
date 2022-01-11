import { useState } from 'react';

export default function TextBoxes(props) {
  const { count } = props;
  const [ value, setValue ] = useState('');

  return (
    <div>
      {new Array(count).fill(null).map((_, index) => (
        <input key={index} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      ))}
    </div>
  );
}

TextBoxes.defaultProps = {
  count: 5,
};
