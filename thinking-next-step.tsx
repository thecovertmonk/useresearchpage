import { ArrowRight } from "lucide-react"

export function ThinkingNextStep() {
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
          <p>
            The pivoted product should be such that losing carpooling rights should not mean the end of business for us.
          </p>

          <p>
            If we get it right, I think focusing on social layer of travelling will give us a moat that will be
            difficult to beat.
          </p>

          <p>
            Even in a long-term view, once the EVs become dominant in the market, I believe fare will go down and social
            experience will be a key differentiator.
          </p>

          <p>Meanwhile lets also try to solve for the existing model by solving for declining bookings.</p>
        </div>
      </div>
    </div>
  )
}

