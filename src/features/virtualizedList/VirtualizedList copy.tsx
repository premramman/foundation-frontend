import { Virtuoso } from 'react-virtuoso';
import { LoadMoreButton } from './LoadMoreButton';

interface VirtualizedListProps<T> {
  items: T[];
  showLoadMore: boolean;
  onLoadMore: () => void;
  useWindowScroll?: boolean;
  CardComponent: React.ComponentType<{ item: T }>;
}

export function VirtualizedList<T>({
  items,
  showLoadMore,
  useWindowScroll = false,
  onLoadMore,
  CardComponent,
}: VirtualizedListProps<T>) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Virtuoso
        useWindowScroll={useWindowScroll}
        totalCount={items.length}
        itemContent={index => <CardComponent item={items[index]} />}
      />
      {showLoadMore && <LoadMoreButton onClick={onLoadMore} />}
    </div>
  );
}
