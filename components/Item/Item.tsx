import { useState } from 'react';

export const Item = () => {
  const [add, setAdd] = useState<string>('');
  return (
    <>
      <h1 className="header" data-testid="header">
        {add}
      </h1>
      <button onClick={() => setAdd('new')} data-testid="button" name="btn">
        click
      </button>
    </>
  );
};
