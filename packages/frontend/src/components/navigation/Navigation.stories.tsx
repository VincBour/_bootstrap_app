import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as Meta;

const Template: Story = (args) => <MemoryRouter><Navigation {...args} /></MemoryRouter>;

export const Default = Template.bind({});
