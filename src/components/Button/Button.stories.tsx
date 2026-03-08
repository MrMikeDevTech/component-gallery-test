import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: {
    variant: 'primary',
    label: 'Botón Principal',
  },
};

export const Secundario: Story = {
  args: {
    variant: 'secondary',
    label: 'Botón Secundario',
  },
};