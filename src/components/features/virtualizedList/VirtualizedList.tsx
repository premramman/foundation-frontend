import { Virtuoso } from 'react-virtuoso';
import { VirtuosoGrid } from 'react-virtuoso';
import { LoadMoreButton } from './LoadMoreButton';
import React from 'react';

// Make VirtualizedList generic over T (item type) and P (CardComponent props)
interface VirtualizedListProps<T, P> {
  items: T[];
  showLoadMore: boolean;
  onLoadMore: () => void;
  useWindowScroll?: boolean;
  CardComponent: React.ComponentType<{ item: T } & P>;
  cardProps?: P; // Additional props for CardComponent
  viewMode?: 'list' | 'grid';
  gridColumnCount?: number;
}

export function VirtualizedList<T, P = {}>({
  items,
  showLoadMore,
  useWindowScroll = false,
  onLoadMore,
  CardComponent,
  cardProps,
  viewMode = 'list',
  gridColumnCount = 4
}: VirtualizedListProps<T, P>) {
  // Grid styling
  const gridClass =
    'grid gap-4 p-2 ' +
    `grid-cols-1 sm:grid-cols-5 md:grid-cols-${gridColumnCount}`;

  // Render CardComponent with item and spread cardProps
  const renderCard = (index: number) => (
    <CardComponent item={items[index]} {...(cardProps as P)} />
  );

  return (
    <div className="w-full">
      {viewMode === 'list' ? (
        <Virtuoso
          useWindowScroll={useWindowScroll}
          totalCount={items.length}
          itemContent={renderCard}
        />
      ) : (
        <VirtuosoGrid
          useWindowScroll={useWindowScroll}
          totalCount={items.length}
          listClassName={gridClass}
          itemClassName=""
          itemContent={renderCard}
        />
      )}
      {showLoadMore && <LoadMoreButton onClick={onLoadMore} />}
    </div>
  );
}
