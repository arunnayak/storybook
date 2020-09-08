// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ButtonComponent } from 'button';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color'},
  //   disabled: { control: 'boolean'}
  // },
  args: {
    text: 'Hello'
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  text: 'Primary Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  text: 'Disabled Button',
  disabled: true
};

