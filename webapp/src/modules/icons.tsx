export const LoadingIcon = () => {
  return (
    <div className="absolute inset-0 z-10 grid place-content-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-[6px] border-gray-300 border-t-blue-600"
        aria-label="loading icon"
      />
    </div>
  )
}
