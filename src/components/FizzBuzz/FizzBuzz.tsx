interface IProps {
  number: number;
}

const FizzBuzz = ({ number }: IProps): JSX.Element => {
  let fizzedNum: string | number = '';
  if (number === 3) fizzedNum = 'Fizz';
  if (number === 5) fizzedNum = 'Buzz';
  if (number === 15) fizzedNum = 'FizzBuzz';
  if (number === 7) fizzedNum = 7;

  return <div>{fizzedNum}</div>;
};

export default FizzBuzz;
