import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyShopPage = lazy(() => import('../pages/ShopPage/ShopPage'));
const LazyShoppingCartPage = lazy(() =>
  import('../pages/ShoppingCartPage/ShoppingCartPage')
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyShopPage />} />
          <Route path="/shopping-cart" element={<LazyShoppingCartPage />} />

          <Route path="*" element={<div>Page not found </div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
