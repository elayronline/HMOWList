export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg font-bold text-text">HMO Hunter</p>
        <p className="mt-2 text-sm text-text-muted">
          Find viable HMOs. Spot untapped opportunities. Faster.
        </p>
        <p className="mt-6 text-xs text-text-muted">
          &copy; {new Date().getFullYear()} HMO Hunter Ltd | Privacy Policy | Terms of Service |
          hello@hmohunter.co.uk
        </p>
      </div>
    </footer>
  )
}
