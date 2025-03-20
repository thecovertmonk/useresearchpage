import { Briefcase, Users, Heart } from "lucide-react"

export function JTBDSection() {
  return (
    <div className="w-full max-w-7xl mx-auto my-6 px-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-amber-100 p-2 rounded-full">
            <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </span>
          Jobs To Be Done (JTBDs) - Based on Prioritized Painpoints
        </h2>
        <div className="h-1 w-full bg-amber-400 mb-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Functional JTBDs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Functional JTBD</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to find a cab/bike immediately when I open the carpooling/ride hailing app standing outside to
                travel within my city so that I can reach my destination without delay.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to pre-schedule rides in advance so that I don't have to worry about last-minute availability
                when I need to travel at a fixed time.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to have a travel app that almost always gives cheapest fares while booking my ride so that I can
                instantly book my travel without having to compare multiple apps.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want a UPI payment option during the journey so that I don't have to wait after the journey is over or
                scramble for cash.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to find more carpool rides having more people while travelling so that I can save more and go out
                without getting constrained by my budget.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to easily find ride requests along my usual route so that I can earn extra money without going
                out of my way.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want a flexible system that lets me accept or reject rides without penalties so that I can drive only
                when it's convenient for me.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to be able to get a lift easily when I am in a bleak area so that I can move out of an unknown
                place without having hours for a cab to arrive.
              </span>
            </li>
          </ul>
        </div>

        {/* Social JTBDs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">Social JTBD</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want a good-looking bike and driver while travelling via bike taxi so that I don't feel embarrassed
                while traveling for business or social occasions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to reduce my carbon footprint while travelling so that I can feel I do my bit towards a greener
                planet without having to pay more money than I would have.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to help stranded solo women travellers while I travel so that I can feel I helped a woman who
                would be facing the same safety concerns as my sister but by ensuring my actions are perceived as
                genuinely helpful rather than intrusive or unsettling.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to help stranded single passengers on my way so that I feel good when they thank me and
                compliment my premium bike.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to carpool with someone I can vibe with on my way back from work so that I can unwind and take my
                mind off office pressure without having to ride with colleagues.
              </span>
            </li>
          </ul>
        </div>

        {/* Emotional JTBDs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">Emotional JTBD</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want female drivers/co-riders while travelling so that I can feel relaxed and safe.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want the app to take notice in case some irregularity in journey happens so that I can feel safe and
                assured that the company is taking care of me when I travel with them.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want co-riders/drivers I can vibe with while travelling longer distances so that I can enjoy my
                journey without having to force conversations with someone I might never see again.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to ride with other professionals or verified users so that I can network or avoiding unsafe
                situations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to see my driver's/biker's route and ETA accurately so that I can feel assured and plan my time
                better.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                I want to be able to get a lift from someone I can trust when I am stuck in bleak areas so that I can
                move out of an unknown place to a more crowded area.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

