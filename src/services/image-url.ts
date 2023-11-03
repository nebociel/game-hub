import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  // if (!url)
  //   return 'https://placehold.co/600x400/000000/FFFFFF.webp?text=No+Image';

  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
