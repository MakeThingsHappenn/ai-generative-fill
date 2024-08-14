
const CallSection = ({ CTALocale }: { CTALocale: any }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to dive in?<br />Turn Your Photos into an art today.</h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a className="btn btn-primary btn-wide" href="/app">{CTALocale.title}</a>
        </div>
      </div>
    </>
  )
}

export default CallSection
