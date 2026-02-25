import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg font-bold text-text">HMO Hunter</p>
        <p className="mt-2 text-sm text-text-muted">
          Find compliant HMOs. Source smarter. Move faster.
        </p>
        <p className="mt-6 text-xs text-text-muted">
          &copy; {new Date().getFullYear()} HMO Hunter Ltd |{' '}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link> |{' '}
          <Link href="/terms" className="hover:underline">Terms of Service</Link> |{' '}
          <a href="mailto:hello@hmohunter.com">hello@hmohunter.com</a>
        </p>
      </div>
    </footer>
  )
}
