'use client';

import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import { createEditorStore, EditorState } from './create-store';

const StoreContext = createContext<EditorState | null>(null);

export const EditorStoreProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [store] = useState(() => createEditorStore.persist.rehydrate());

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export const useEditorStore = <T>(selector: (state: EditorState) => T): T => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useEditorStore must be used within a EditorStoreProvider.');
  }
  return selector(store);
};
