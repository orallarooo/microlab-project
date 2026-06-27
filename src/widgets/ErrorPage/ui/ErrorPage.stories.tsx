import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

export default {
    title: 'widget/ErrorPage',
    component: ErrorPage,
} as Meta<typeof ErrorPage>;

const Template: StoryFn<typeof ErrorPage> = (args: any) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
