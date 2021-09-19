import { render } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';

describe('<FizzBuzz/>', () => {
  test('should render Fizz for multiples of 3', async () => {
    const component = render(<FizzBuzz number={3} />);
    expect(await component.findByText('Fizz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={6} />);
    expect(await component.findByText('Fizz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={9} />);
    expect(await component.findByText('Fizz')).toBeInTheDocument();
  });

  test('should render Buzz for multiples of 5', async () => {
    const component = render(<FizzBuzz number={5} />);
    expect(await component.findByText('Buzz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={10} />);
    expect(await component.findByText('Buzz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={20} />);
    expect(await component.findByText('Buzz')).toBeInTheDocument();
  });

  test('should render FizzBuzz for multiples of 3 and 5', async () => {
    const component = render(<FizzBuzz number={15} />);
    expect(await component.findByText('FizzBuzz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={30} />);
    expect(await component.findByText('FizzBuzz')).toBeInTheDocument();
    component.rerender(<FizzBuzz number={45} />);
    expect(await component.findByText('FizzBuzz')).toBeInTheDocument();
  });

  test('should render number for non multiples of 3 and 5', async () => {
    const component = render(<FizzBuzz number={7} />);
    expect(await component.findByText(7)).toBeInTheDocument();
    component.rerender(<FizzBuzz number={13} />);
    expect(await component.findByText(13)).toBeInTheDocument();
    component.rerender(<FizzBuzz number={22} />);
    expect(await component.findByText(22)).toBeInTheDocument();
  });
});
