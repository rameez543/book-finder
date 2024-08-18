export const addImageFallback = (event:React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = 'https://placehold.co/300x400?text=Book+Cover';
  };