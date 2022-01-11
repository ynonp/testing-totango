import { useState } from 'react';

export default function ListWithFilters(props) {
  const { items, renderItem } = props;
  const [ search, setSearch ] = useState('');
  
  return (
    <div>
      <form>
        <label>Filter
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
      </form>
      <ul>
        {items.filter(it => it.includes(search)).map(renderItem)}
      </ul>
    </div>
  );
}

ListWithFilters.defaultProps = {
  renderItem: (item) => <li>{item}</li>
};
