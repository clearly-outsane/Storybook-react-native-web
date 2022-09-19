import {useArgs} from '@storybook/client-api';
import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Button from '../src/components/Button';
import Pagination from '../src/components/Pagination/Pagination';
import {colors} from '../src/styles/tokens';

const numberOfItemsPerPageList = [1, 2, 3, 4];

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 3',
  },
  {
    key: 4,
    name: 'Page 4',
  },
  {
    key: 5,
    name: 'Page 5',
  },
];

export default {
  title: 'Components/Pagination',
  component: Pagination,

  argTypes: {
    numberOfItemsPerPage: {
      control: {
        type: 'select',
      },
      options: [...numberOfItemsPerPageList],
    },
  },
};

// Other Avatar stories

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Pagination> = args => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  React.useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  const [
    {page: pageArg, numberOfItemsPerPage: numberOfItemsPerPageArg},
    updateArgs,
  ] = useArgs();

  React.useEffect(() => {
    updateArgs({page: page + 1});
  }, [page]);

  React.useEffect(() => {
    if (pageArg !== page + 1) setPage(pageArg - 1);
  }, [pageArg]);

  React.useEffect(() => {
    if (numberOfItemsPerPageArg !== numberOfItemsPerPage)
      onItemsPerPageChange(numberOfItemsPerPageArg);
  }, [numberOfItemsPerPageArg]);

  return (
    <Pagination
      {...args}
      page={page}
      numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
      onPageChange={page => setPage(page)}
      numberOfItemsPerPageList={numberOfItemsPerPageList}
      numberOfItemsPerPage={numberOfItemsPerPage}
      onItemsPerPageChange={onItemsPerPageChange}
      selectPageDropdownLabel={'Rows per page'}
    />
  );
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  page: 1,
  showFastPaginationControls: true,
  numberOfItemsPerPage: numberOfItemsPerPageList[0],
  onPageChange: () => console.log('page changed'),
};
