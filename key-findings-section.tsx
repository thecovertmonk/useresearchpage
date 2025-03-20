import { Car, AlertTriangle, ThumbsUp, TrendingUp } from "lucide-react"

export function KeyFindings() {
  return (
    <div className="w-full max-w-7xl mx-auto my-6 px-4">
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="h-8 w-8 text-amber-500" />
        <h2 className="text-2xl font-bold text-gray-800">Key User Research Datapoints</h2>
      </div>

      {/* Modified: Container for the yellow line with width control */}
      <div className="relative mb-4">
        <div className="h-1 bg-amber-400" style={{ width: "calc(75% - 1rem)" }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Travel Habits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-6 w-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">Travel Habits</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Have to use multiple apps for daily intracity to occassional intercity travels.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Young users recall bike taxis companies before cab or carpooling companies.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Daily office commuters wish they could earn by bike sharing like a Rapido driver without the
                embarassment of having to wear a distinct company branded helmet.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Users have a lot of free time while co-riding or even as a carpool driver.
              </span>
            </li>
          </ul>
        </div>

        {/* BlaBlaCar Painpoints */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-lg font-semibold text-gray-800">BlaBlaCar Painpoints</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">Hard to find riders/rides.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Female coriders almost never find a female driver or fellow co-rider.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Have to give in to driver's choice when comes to music, breaks and place to eat.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">The trip feels awkward as mostly vibes dont match.</span>
            </li>
          </ul>
        </div>

        {/* BlaBlaCar Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <ThumbsUp className="h-6 w-6 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-800">BlaBlaCar Benefits</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                Helpful In festive season when public transports are overbooked.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">Travelling is not expensive.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">Journey is comfortable in a private vehicle.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                At times don't even have to pay half the cost of travel if the driver is looking to increase their
                rating.
              </span>
            </li>
          </ul>
        </div>

        {/* SWOT Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">SWOT Analysis</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                <span className="font-semibold">Strength:</span> Inter-city carpooling solves a strong though not
                frequent requirement of the userbase.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                <span className="font-semibold">Weakness:</span> Blabla is used as a last resort not as a choice. Also
                chances of finding a co-rider are low.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                <span className="font-semibold">Opportunities:</span> Social and emotional aspects of the product are
                valued by customers but largely unsolved.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2 mt-1 text-lg">•</span>
              <span className="text-gray-700 text-sm">
                <span className="font-semibold">Threats:</span> If bike taxi services pivot to non-commercial carpooling
                with the right positioning, they may eat the BlaBla share due to better MAU and brand recall.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

