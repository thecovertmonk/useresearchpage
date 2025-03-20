export function ResearchIntro() {
  return (
    <div className="w-full max-w-7xl mx-auto mb-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-gray-800 text-lg">
            Ideally, I'd start with a hypothesis and design user research around it. However, since we're exploring a
            potential pivot, I want to keep an open mind. This initial research aims to understand:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800">
            <li className="text-lg">How users travel outside their homes.</li>
            <li className="text-lg">The challenges they face with other modes of transport.</li>
            <li className="text-lg">How (if at all) their lives would change if BlaBla ceased to exist.</li>
            <li className="text-lg">Their current pain points with BlaBla.</li>
          </ol>
        </div>
        <div className="simple-tablet-frame">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5Eo9UgGb3W1fHqJU6nGZuK9TgzTRx.png"
            alt="BlaBlaCar user research survey form showing questions about usage frequency and behavior"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

