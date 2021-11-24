import { AxiosInstance } from 'axios';
import { isOkStatus } from '@sima-land/isomorph/helpers/http/statuses-validator';

const createAPI = (instance: AxiosInstance) => {

  const fetchCollectionProducts = (wishCollectionId: number) =>
    instance.get('/item/', {
      params: {
        wish_collection_id: wishCollectionId,
        page: 1,
        per_page: 10,
        fields: ['id', 'photoUrl'].join(','),
      },
      validateStatus: isOkStatus,
    });

  const fetchAllWishProducts = (productIds: number[]) =>
    instance.get('/item/', {
      params: {
        id: productIds.join(','),
        page: 1,
        per_page: 10,
        fields: ['id', 'photoUrl'].join(','),
      },
      validateStatus: isOkStatus,
    });

  return {
    fetchCollectionProducts,
    fetchAllWishProducts,
  };
};

export type Api = ReturnType<typeof createAPI>;
