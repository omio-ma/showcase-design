import "./ImageCanvas.css";

export const ImageCanvas: React.FC<{
  handleMouseMove: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    container: HTMLDivElement
  ) => void;
  handleMouseLeave: (container: HTMLDivElement) => void;
  imageSource: string;
  altText: string;
}> = ({ handleMouseMove, handleMouseLeave, imageSource, altText }) => (
  <div
    className="image-container"
    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
  >
    <img src={imageSource} alt={altText} className="image" />
  </div>
);
