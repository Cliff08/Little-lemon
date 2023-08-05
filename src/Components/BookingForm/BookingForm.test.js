import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the first input', () => {
    render(<BookingForm />);
    const first = screen.getByText("Choose date*");
    expect(first).toBeInTheDocument();
})

test('Renders the second input', () => {
    render(<BookingForm />);
    const second = screen.getByText("Choose time*");
    expect(second).toBeInTheDocument();
})

test('Renders the third input', () => {
    render(<BookingForm />);
    const third = screen.getByText("Number of guests*");
    expect(third).toBeInTheDocument();
})

test('Renders the fourth input', () => {
    render(<BookingForm />);
    const fourth = screen.getByText("Occasion*");
    expect(fourth).toBeInTheDocument();
})