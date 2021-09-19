import classes from './FizzBuzz.module.css';

interface IProps {
  number: number;
}

const FizzBuzz = ({ number }: IProps): JSX.Element => {
  let fizzedNum: number | string = '';
  const isMultipleOf3 = number % 3 === 0;
  const isMultipleOf5 = number % 5 === 0;

  if (isMultipleOf3) fizzedNum = 'Fizz';
  if (isMultipleOf5) fizzedNum += 'Buzz';
  if (!isMultipleOf3 && !isMultipleOf5) fizzedNum = number;

  return (
    <div data-testid="list-element" className={classes.Element}>
      {fizzedNum}
    </div>
  );
};

export default FizzBuzz;
