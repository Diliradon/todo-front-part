export type SearchWithParam = string | number;

export interface SearchWithParams {
  [key: string]: SearchWithParam[] | SearchWithParam | null;
}

export const mergeSearchParams = (params: SearchWithParams, search?: string | URLSearchParams) => {
  const newParams = new URLSearchParams(search);

  Object.entries(params).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);
      value.forEach((item) => newParams.append(key, item.toString()));
    } else {
      newParams.set(key, value.toString());
    }
  });

  return newParams.toString();
};
