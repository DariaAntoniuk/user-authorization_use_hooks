import { useMemo } from 'react';

const useConstructor = (callback, dependencies) => useMemo(callback, dependencies);

export default useConstructor;
