import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  interface User {
    name: string;
    email: string;
    age: number;
  }

  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const str = 'abcabbcabcdefg'

  const handleCounter = (str: string) => {
    // setCounter((prev) => prev + 1);

    // // //
    
    // Recorrer TODO el string (for loop)
    // debo almacenar 'longest substring found' en una variable


    // en CADA STRING que voy a recorrer, 

    for(let i = 0; i <str.length ; i++){
      let maxLength = 0;
      let currentStrings : object = {};

      for(let j = 0; j <str.length ; j++){
        if(!currentStrings[str[j]] ===)
      }

    }
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="container">
      Ben test
      <div className="counter-container">
        <h3>{counter}</h3>
        <button onClick={handleCounter}>Increment</button>
      </div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}























