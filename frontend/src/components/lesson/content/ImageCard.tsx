interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white sm:my-10 sm:rounded-2xl dark:border-white/10 dark:bg-[#111613]">
      <img src={src} alt={alt} className="w-full object-cover" />

      {caption && (
        <figcaption className="border-t border-slate-200 px-3 py-2.5 text-center text-xs text-slate-500 sm:px-5 sm:py-4 sm:text-sm dark:border-white/10 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}