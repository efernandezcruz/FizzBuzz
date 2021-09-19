import classes from './App.module.css';
import FizzBuzz from './components/FizzBuzz/FizzBuzz';

const App = (): JSX.Element => {
  const list: JSX.Element[] = [];

  for (let i = 1; i <= 100; i++) {
    // Using index as a key is not recommended, but since the array elements
    // won't be altered at runtime its ok in this case.
    list.push(<FizzBuzz key={i} number={i} />);
  }

  return <div className={classes.Container}>{list}</div>;
};
export default App;
