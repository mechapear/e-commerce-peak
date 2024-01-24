import { ErrorIcon } from './icons.tsx'

export default function ErrorCard() {
  return (
    <div
      className="mb-4 flex items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"
      role="alert"
    >
      <ErrorIcon />
      <div className="ml-3">
        <span className="font-medium">Something went wrong!</span>{' '}
        <span className="block sm:inline-block">Please try again. </span>
      </div>
    </div>
  )
}
