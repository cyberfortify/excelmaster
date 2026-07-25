interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageCard({
  src,
  alt,
  caption,
}: ImageCardProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
      />

      {caption && (
        <figcaption className="border-t border-slate-200 px-5 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {caption}
        </figcaption>
      )}

    </figure>
  );
}