import { useState } from "react";
// import { Tweet } from "./components/Tweet";
import { AppRoutes } from './Routes';

function App() {
  return (
    <AppRoutes />
  );
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',
  // ]);

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5']);
  // }

  // return (
  //   <div>
  //     {tweets.map((tweet) => {
  //       return <Tweet text={ tweet } />
  //     })}

  //     <button onClick={ createTweet }>Adicionar Tweet</button>
  //   </div>
  // )
}

export default App;
