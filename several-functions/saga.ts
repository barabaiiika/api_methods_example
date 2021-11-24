import { Api } from './api';
import safeRequest from '@sima-land/isomorph/helpers/saga/safe-request';

export function* loadCollectionProduct(api: Api) {
  const wishCollectionId = 123; // Это на самом деле получаем из экшена или селектора
  const response = yield safeRequest(api.fetchCollectionProducts, { args: [{ wishCollectionId }] });

  // Что то делаем с результатом
}

export function* loadAllWishProduct(api: Api) {
  const productIds = [123, 456, 789];
  const response = yield safeRequest(api.fetchAllWishProducts, { args: [{ productIds }] });

  // Что то делаем с результатом
}

