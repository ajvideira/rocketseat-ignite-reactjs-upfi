import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = 0 }) => {
      const response = await api.get(`/api/images?after=${pageParam}`);
      // console.log(response);
      return response.data.data;
    },
    {
      getNextPageParam: lastPage => (lastPage.after ? lastPage.after : null),
    }
  );

  // console.log(data);

  const formattedData = useMemo(() => {
    return data ? data.pages[0] : [];
  }, [data]);

  console.log(formattedData);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
