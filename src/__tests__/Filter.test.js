import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../components/ItemForm'; // Correct path

test('adds a new item to the list when the form is submitted', () => {
  const handleAddItem = jest.fn();

  render(<ItemForm onAddItem={handleAddItem} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Ice Cream' } });
  fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Dessert' } });
  fireEvent.click(screen.getByRole('button', { name: /Add to List/i }));

  expect(handleAddItem).toHaveBeenCalledWith({ name: 'Ice Cream', category: 'Dessert' });
  expect(handleAddItem).toHaveBeenCalledTimes(1);
});
