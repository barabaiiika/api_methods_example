import { Api } from './api';
import safeRequest from '@sima-land/isomorph/helpers/saga/safe-request';

export function* loadCollectionProduct(api: Api) {
  const wishCollectionId = 123; // Это на самом деле получаем из экшена или селектора
  const response = yield safeRequest(api.fetchProductItems, {
      args: [
        {
          wishCollectionId, // Если тут забыли передать параметр, ошибки не будет - он необязательный
          page: 1,
          perPage: 10,
          fields: ['id', 'photoUrl'].join(','), // Это тоже необязательный параметр - не передали и получаем кучу ненужных полей в ответе
        },
      ],
    });

  // Что то делаем с результатом
}

export function* loadAllWishProduct(api: Api) {
  const productIds = [123, 456, 789];
  const response = yield safeRequest(api.fetchProductItems, {
    args: [
      {
        productIds: productIds.join(','),
        page: 1,
        perPage: 10,
        fields: ['id', 'photoUrl'].join(','),
      },
    ],
  });

  // Что то делаем с результатом
}

