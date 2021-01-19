import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main />

      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            font-size: 62.5%;
            font-family: sans-serif;
          }
        `}
      </style>
    </div>
  );
}

export default App;
