import { Lightbulb } from "lucide-react"

export function InsightsFromJTBD() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-0 mb-2 px-4">
      <div className="mb-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="bg-yellow-100 p-1.5 rounded-full">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
          </span>
          Insights from JTBD Themes
        </h2>
      </div>

      <div className="bg-white p-4">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-0.5 text-lg">•</span>
            <span className="text-gray-700 text-sm">
              Users are now habituated to Uber, Ola, Rapido and expect same quality of services (not same services) from
              BlaBla.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-0.5 text-lg">•</span>
            <span className="text-gray-700 text-sm">
              Our userbase riders are very different from that of Ola, Uber so while they value money, the experience of
              journey is also equally important.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-0.5 text-lg">•</span>
            <span className="text-gray-700 text-sm">
              Our userbase co-riders expect BlaBla to have a differentiated experience than Ola, Uber because they
              expect the driver to be of similar socio-economic background.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

