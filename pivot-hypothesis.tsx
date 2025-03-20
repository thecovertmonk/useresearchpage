import { Lightbulb } from "lucide-react"

export function PivotHypothesis() {
  return (
    <div className="w-full max-w-7xl mx-auto my-4 px-4">
      <div className="bg-amber-50 border-l-4 border-amber-400 pl-8 py-6 rounded-r-lg">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-100 p-2 rounded-full">
            <Lightbulb className="h-5 w-5 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Pivot Hypothesis</h2>
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700">
          <p className="mb-2">
            I believe users are placing increasing value on the social experience with co-passengers, as much as the
            cost of travel. We should solve for the social aspect of travel.
          </p>
        </div>
      </div>
    </div>
  )
}

