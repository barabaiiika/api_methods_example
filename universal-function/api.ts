import { AxiosInstance } from 'axios';
import { isOkStatus } from '@sima-land/isomorph/helpers/http/statuses-validator';

interface ProductQueryParams {
  productIds?: string,
  wishCollectionId?: number;
  page: number;
  perPage: number;
  fields?: string;
  expand?: string;
}

const createAPI = (instance: AxiosInstance) => {

  const fetchProductItems = ({
    productIds,
    wishCollectionId,
    page,
    perPage,
    fields,
    expand,
  }: ProductQueryParams) =>
    instance.get('/item/', {
      params: {
        id: productIds,
        wish_collection_id: wishCollectionId,
        page,
        per_page: perPage,
        fields,
        expand,
      },
      validateStatus: isOkStatus,
    });

  return {
    fetchProductItems,
  };
};

export type Api = ReturnType<typeof createAPI>;
