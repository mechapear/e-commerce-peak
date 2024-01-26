export type PageBannerProps = { title: string }

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="grid h-[min(64vw,20rem)] place-content-center place-items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-2xl font-bold text-white md:text-5xl">
        {title}
      </h1>
    </div>
  )
}
