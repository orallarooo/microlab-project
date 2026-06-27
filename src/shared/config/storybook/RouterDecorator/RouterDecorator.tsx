import type { StoryFn } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: StoryFn) => (
    <BrowserRouter>
        {story({} as never, {} as never)}
    </BrowserRouter>
);
