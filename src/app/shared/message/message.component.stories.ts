import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { MessageComponent } from './message.component';
import { MessageModule } from './message.module';

type ComponentWithCustomControls = MessageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  component: MessageComponent,
  decorators: [
    moduleMetadata({
      imports: [MessageModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `Message` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const Message = Template.bind({});
Message.args = {};
