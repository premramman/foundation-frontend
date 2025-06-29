import { Virtuoso } from 'react-virtuoso';
import { VirtuosoGrid } from 'react-virtuoso';
import { LoadMoreButton } from './LoadMoreButton';
import React from 'react';
import "./styles.css"; // Import the CSS file

// Make VirtualizedList generic over T (item type) and P (CardComponent props)
interface VirtualizedListProps<T, P> {
  items: T[];
  showLoadMore: boolean;
  onLoadMore: () => void;
  useWindowScroll?: boolean;
  CardComponent: React.ComponentType<{ item: T } & P>;
  cardProps?: P & { viewMode?: 'horizontal' | 'vertical' }; // Ensure viewMode is optional
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
}: VirtualizedListProps<T, P>) {
  // Determine grid styling based on ProductCard's viewMode
  const gridClass =
    cardProps?.viewMode === 'horizontal'
      ? 'horizontal-grid' // Horizontal view grid layout
      : 'vertical-grid'; // Vertical view grid layout

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
