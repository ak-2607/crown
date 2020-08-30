import {createSelector} from 'reselect';

const shopItems = state => state.shop;

export const selectShopItems = createSelector(
    [shopItems],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => (collections ? collections[collectionUrlParam]: null)
)