const App = (): JSX.Element => {
  const list: JSX.Element[] = [];

  for (let i = 1; i <= 100; i++) {
    list.push(<div data-testid="list-element" key={i} />);
  }

  return <>{list}</>;
};
export default App;
