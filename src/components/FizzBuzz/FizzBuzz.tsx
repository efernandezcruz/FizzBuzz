interface IProps {
  number: number;
}

const FizzBuzz = ({ number }: IProps): JSX.Element => {
  let fizzedNum: string | number = '';
  const isMultipleOf3 = number % 3 === 0;
  const isMultipleOf5 = number % 5 === 0;

  if (isMultipleOf3) fizzedNum = 'Fizz';
  if (isMultipleOf5) fizzedNum += 'Buzz';
  if (!isMultipleOf3 && !isMultipleOf5) fizzedNum = number;

  return <div>{fizzedNum}</div>;
};

export default FizzBuzz;
