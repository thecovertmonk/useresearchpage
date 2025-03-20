"use client"

import { useState, useEffect } from "react"
import { KeyFindings } from "./key-findings-section"
import { PersonaCarousel } from "./persona-carousel"
import { ThinkingOutLoud } from "./thinking-out-loud"
import { JTBDSection } from "./jtbd-section"
import { InsightsFromJTBD } from "./novel-insights-section"
import { ThinkingNextStep } from "./thinking-next-step"
import { PivotHypothesis } from "./pivot-hypothesis"

export default function BlaBlaCar() {
  const [currentDriverPersona, setCurrentDriverPersona] = useState(0)
  const [currentRiderPersona, setCurrentRiderPersona] = useState(0)
  const [isDriverHovered, setIsDriverHovered] = useState(false)
  const [isRiderHovered, setIsRiderHovered] = useState(false)

  // Auto-rotate personas
  useEffect(() => {
    // Driver personas slideshow
    const driverInterval = setInterval(() => {
      if (!isDriverHovered) {
        setCurrentDriverPersona((prev) => (prev === driverPersonas.length - 1 ? 0 : prev + 1))
      }
    }, 5000) // Change every 5 seconds

    // Rider personas slideshow
    const riderInterval = setInterval(() => {
      if (!isRiderHovered) {
        setCurrentRiderPersona((prev) => (prev === riderPersonas.length - 1 ? 0 : prev + 1))
      }
    }, 5000) // Change every 5 seconds

    return () => {
      clearInterval(driverInterval)
      clearInterval(riderInterval)
    }
  }, [isDriverHovered, isRiderHovered])

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-5xl mx-auto mt-8">
        {/* Single column layout */}
        <div className="flex flex-col gap-4">
          {/* Driver Personas Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Driver Personas</h2>

            {/* Driver Carousel */}
            <div className="mb-6">
              <PersonaCarousel
                personas={driverPersonas}
                currentPersona={currentDriverPersona}
                setCurrentPersona={setCurrentDriverPersona}
                type="driver"
                isHovered={isDriverHovered}
                setIsHovered={setIsDriverHovered}
              />
            </div>
          </div>

          {/* Co-Rider Personas Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Co-Rider Personas</h2>

            {/* Co-Rider Carousel */}
            <div className="mb-6">
              <PersonaCarousel
                personas={riderPersonas}
                currentPersona={currentRiderPersona}
                setCurrentPersona={setCurrentRiderPersona}
                type="rider"
                isHovered={isRiderHovered}
                setIsHovered={setIsRiderHovered}
              />
            </div>
          </div>

          {/* Key Findings Section */}
          <div className="mt-8">
            <KeyFindings />
          </div>

          {/* Thinking Out Loud Section */}
          <div className="mt-4">
            <ThinkingOutLoud />
          </div>

          {/* Jobs To Be Done Section with Insights immediately after */}
          <div className="mt-4">
            <div className="mb-0">
              <JTBDSection />
            </div>
            <div className="mt-0">
              <InsightsFromJTBD />
            </div>
            {/* Thinking Next Step section */}
            <div className="mt-4">
              <ThinkingNextStep />
            </div>
            {/* Pivot Hypothesis section */}
            <div className="mt-4">
              <PivotHypothesis />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Driver personas
const driverPersonas = [
  {
    name: "Amit",
    emoji: "🚗💰",
    tag: "Budget-Conscious Driver",
    profile:
      "A young professional, student, or gig worker who owns a car but finds fuel and toll costs expensive. He frequently travels between cities and doesn't like driving alone.",
    travel: "Intercity travel",
    frequency: "Regular trips",
    motivation: "Cost-sharing and companionship",
    painPoints: [
      "High fuel costs but doesn't want to drive alone",
      "BlaBlaCar feels like a dead app—people forget about it",
      "Difficult to find enough co-riders, leading to cancellations",
      "Usually gets one-person bookings and co-riders don't book because splitting into two is costly, forcing lower rates",
      "Lots of awkward silence during trips, questioning if traveling alone would be better due to different preferences in music and food stops",
    ],
    solutions: [
      "Lets him recover fuel expenses legally while providing companionship",
      "Offers a better alternative to solo long-distance driving",
    ],
  },
  {
    name: "Rajesh",
    emoji: "🏢🚘",
    tag: "Frequent Intercity Commuter",
    profile:
      "A business owner, IT professional, or sales executive who travels between cities every week. He prefers driving over public transport because it gives him flexibility.",
    travel: "Weekly intercity travel",
    frequency: "Very frequent",
    motivation: "Cost reduction and flexibility",
    painPoints: [
      "The cost of frequent intercity travel is high",
      "Finding co-riders is unreliable—many people don't use the app actively",
      "Trains and flights are expensive, but buses are too slow and uncomfortable",
      "Has to use different apps to carpool to work, managing multiple sources of finding co-riders makes it tedious",
      "Co-riders don't disclose smoking habits and ask to stop every hour for smoke and chai breaks during the trip",
    ],
    solutions: [
      "Provides an affordable and flexible alternative to public transport",
      "Helps him find travel companions instead of driving alone",
    ],
  },
  {
    name: "Neha",
    emoji: "🌱👥",
    tag: "Eco-Conscious / Social Driver",
    profile:
      "An environmentally conscious professional who believes in sustainability and shared mobility. She enjoys long drives but feels that driving alone is wasteful and likes the social aspect of carpooling.",
    travel: "Various destinations",
    frequency: "Regular trips",
    motivation: "Environmental impact and social interaction",
    painPoints: [
      "Prefers ride-sharing but struggles to find compatible co-riders",
      "Many riders cancel at the last minute, making planning difficult",
      "People forget about BlaBlaCar, making ride availability inconsistent",
      "Has to check WhatsApp groups of frequent travelers and there are no well-reviewed people to choose from, while BlaBlaCar doesn't have many options",
    ],
    solutions: [
      "Enables eco-friendly travel while reducing costs",
      "Provides a platform for meeting like-minded travelers",
    ],
  },
  {
    name: "Pooja",
    emoji: "🚺",
    tag: "Woman Driver Seeking Safety",
    profile:
      "A working woman or entrepreneur who drives between cities but does not feel comfortable picking up unknown male passengers. She would prefer carpooling to reduce fuel costs but is hesitant due to safety concerns.",
    travel: "Intercity travel",
    frequency: "Regular trips",
    motivation: "Safety and cost-sharing",
    painPoints: [
      "Safety concerns while picking up male passengers",
      "Women-only ride options exist but are not widely used or promoted",
      "Low visibility of BlaBlaCar means fewer women riders sign up",
      "Takes time to calculate toll tax deducted from FASTag, and sometimes users are dropped off before remembering to collect toll fees",
    ],
    solutions: [
      "Offers women-only ride matching options for safer travel",
      "Provides verified profiles and in-app chat for secure communication",
    ],
  },
]

// Rider personas
const riderPersonas = [
  {
    name: "Vikram",
    emoji: "🎒💰",
    tag: "Budget-Conscious Traveler",
    profile:
      "A student, intern, or gig worker who travels between cities and needs an affordable option. He prefers BlaBlaCar over expensive taxis and last-minute train bookings.",
    travel: "Intercity travel",
    frequency: "Occasional trips",
    motivation: "Affordability and convenience",
    painPoints: [
      "BlaBlaCar doesn't come to mind first—low recall",
      "Struggles to find available rides at the right time",
      "Public transport is unreliable, but BlaBlaCar feels inactive",
    ],
    solutions: [
      "Provides a cheaper and more comfortable alternative to public transport",
      "Offers flexible scheduling compared to fixed public transport options",
    ],
  },
  {
    name: "Sandeep",
    emoji: "🏢🚌",
    tag: "Frequent Long-Distance Commuter",
    profile:
      "A corporate employee, government worker, or consultant who commutes between two cities regularly. He needs a reliable ride-sharing option but often finds BlaBlaCar's availability inconsistent.",
    travel: "Regular intercity commute",
    frequency: "Very frequent",
    motivation: "Reliability and affordability",
    painPoints: [
      "The low number of available rides makes the app unreliable",
      "Trains and flights are too expensive for frequent travel",
      "Cancellations and last-minute drop-offs waste his time",
    ],
    solutions: [
      "Offers affordable intercity travel options",
      "Provides more comfortable travel compared to public transport",
    ],
  },
  {
    name: "Priya",
    emoji: "🚺",
    tag: "Woman Traveler Seeking Safety",
    profile:
      "A solo traveler or young professional who avoids public transport due to safety concerns. She wants to carpool but feels unsafe traveling with unknown men.",
    travel: "Various destinations",
    frequency: "Regular trips",
    motivation: "Safety and comfort",
    painPoints: [
      "Uncomfortable traveling with male drivers or co-riders",
      "The women-only ride option is not promoted well",
      "She avoids public transport but struggles to find a trusted alternative",
    ],
    solutions: [
      "Offers women-only ride options for safer travel",
      "Provides verified driver profiles and safety features",
    ],
  },
  {
    name: "Rohan",
    emoji: "🎓💼",
    tag: "Selective Co-Rider",
    profile:
      "An upper-middle-class professional who wants to travel with people of a similar financial, educational, and social background. He has tried BlaBlaCar before but dropped off because he couldn't find co-riders he was comfortable with.",
    travel: "Intercity travel",
    frequency: "Occasional trips",
    motivation: "Comfort and social compatibility",
    painPoints: [
      "Mismatched co-riders make the ride experience awkward",
      "People cancel rides if they see co-riders they don't relate to",
      "Needs a better matching system to pair users with similar profiles",
    ],
    solutions: [
      "Allows filtering rides based on preferences",
      "Provides user profiles and ratings to find compatible co-travelers",
    ],
  },
  {
    name: "Arun & Friends",
    emoji: "🧑‍🤝‍🧑🚗",
    tag: "Group Travelers",
    profile:
      "A group of friends who often travel together and try to book rides as a unit. However, solo travelers often drop out when they see a group booking because they worry the group will dominate the conversation.",
    travel: "Group travel to various destinations",
    frequency: "Occasional trips",
    motivation: "Group accommodation and cost-sharing",
    painPoints: [
      "People avoid joining rides with groups, fearing a change in ride dynamics",
      "Solo travelers prefer one-on-one conversations, not a pre-formed group",
      "Groups find it hard to get accepted because drivers prefer solo riders",
    ],
    solutions: ["Enables group bookings for traveling together", "Offers cost-effective travel for multiple people"],
    opportunities:
      "Implement group-specific features that allow drivers to specify if they welcome groups, and provide incentives for accepting group bookings.",
  },
]

