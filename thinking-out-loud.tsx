import { ArrowRight } from "lucide-react"

export function ThinkingOutLoud() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 px-4">
      <div className="relative border-l-4 border-purple-400 pl-8 py-6">
        {/* Arrow Circle */}
        <div className="absolute left-0 top-0 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
          <ArrowRight className="h-5 w-5 text-purple-600" />
        </div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thinking Next Step Out Loud</h2>
        <div className="text-sm text-gray-700 space-y-4">
          <div className="flex items-start">
            <span className="text-purple-500 mr-2 flex-shrink-0 mt-0.5">•</span>
            <div>
              <span className="font-semibold">Erosion of Network Effects:</span> Declining usage is weakening value
              proposition exponentially.
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-purple-500 mr-2 flex-shrink-0 mt-0.5">•</span>
            <div>
              <span className="font-semibold">Brand Perception Decline:</span> Lack of app updates and failure to find
              rides most of the times has diminished trust.
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-purple-500 mr-2 flex-shrink-0 mt-0.5">•</span>
            <div>
              <span className="font-semibold">Untapped Social Opportunity:</span> No current player has prioritized the
              social dynamics of ridesharing despite complaints across user personas.
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-purple-500 mr-2 flex-shrink-0 mt-0.5">•</span>
            <div>
              <span className="font-semibold">Boosting MAU & Brand Recall:</span> Low MAU led to low brand recall and
              eventually low usage, the pivot should focus on including aspects where customers visit the platform at
              least biweekly.
            </div>
          </div>

          <p className="mt-4">
            To explore a legally and financially viable pivot, I'll map our users' JTBDs based on recent research. I'll
            emphasise on Emotional and Social needs due to market gap and declining brand perception.
          </p>
        </div>
      </div>
    </div>
  )
}

