// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TextComponent } from 'text';

export default {
  title: 'Example/Text',
  component: TextComponent,
  args: {
    text: 'Hello',
    type: 'primary'
  }
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  component: TextComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Primary text',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: true,
  text: 'this is a Secondary text',
  type: 'secondary'
};

