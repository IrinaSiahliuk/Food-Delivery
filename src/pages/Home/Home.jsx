import React, { useContext } from "react";

import { Store } from "app";
import { useEffect } from "react";

function Home() {
  const [store, setStore] = useContext(Store);

  console.log(store);

  return (
    <div>
      {store.counter}
      <button
        onClick={() => {
          setStore((pre) => {
            return {
              ...pre,
              counter: pre.counter + 1,
            };
          });
        }}
      >
        CLICK
      </button>
    </div>
  );
}

export default Home;
