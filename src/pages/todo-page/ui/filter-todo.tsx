import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCheck, Loader, Logs, Search } from 'lucide-react';

import { mergeSearchParams, SearchWithParams } from '@/shared/functions';
import { Button, Input, ToggleGroup, ToggleGroupItem } from '@/shared/ui';

export const FilterTodo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('search');
  const statusSearch = searchParams.get('status');
  const [query, setQuery] = useState(querySearch ?? '');
  const [status, setStatus] = useState(statusSearch ?? 'all');

  const setSearchWith = (params: SearchWithParams) => {
    const search = mergeSearchParams(params, searchParams);
    setSearchParams(search);
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    setSearchWith({ search: value });
  };

  const handleFilter = (value: string) => {
    if (!value) return;

    setStatus(value);
    setSearchWith({ status: value });
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(query);
          }
        }}
        onBlur={() => handleSearch(query)}
      />

      <Button variant="ghost" size="icon" onClick={() => handleSearch(query)}>
        <Search className="h-4 w-4" />
      </Button>

      <ToggleGroup variant="default" type="single" value={status} onValueChange={handleFilter}>
        <ToggleGroupItem value="all" aria-label="Toggle completed">
          <Logs className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="completed"
          aria-label="Toggle completed"
          className="hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900 dark:hover:text-green-400 data-[state=on]:bg-green-100 data-[state=on]:text-green-600 dark:data-[state=on]:bg-green-900 dark:data-[state=on]:text-green-400"
        >
          <CheckCheck className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="in-progress"
          aria-label="Toggle in progress"
          className="hover:bg-orange-100 hover:text-gray-600 dark:hover:bg-gray-900 dark:hover:text-gray-400 data-[state=on]:bg-orange-100 data-[state=on]:text-gray-600 dark:data-[state=on]:bg-gray-900 dark:data-[state=on]:text-gray-400"
        >
          <Loader className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
