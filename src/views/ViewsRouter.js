import React, { Suspense } from 'react';
import GuestViewsRouter from './guest/GuestViewsRouter';

function ViewsRouter() {
  return (
      <Suspense fallback={<div/>}>
        <GuestViewsRouter/>
      </Suspense>
  );
}

export default ViewsRouter;
