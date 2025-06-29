import { Button } from "@/components/atoms/Button";

interface LoadMoreButtonProps {
  onClick: () => void;
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => (
  <div className="flex justify-center my-4">
    <Button onClick={onClick}>Load More</Button>
  </div>
);
