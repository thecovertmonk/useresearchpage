"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PersonaCarousel({ personas, currentPersona, setCurrentPersona, type, isHovered, setIsHovered }) {
  const [slideDirection, setSlideDirection] = useState(null)
  const [prevPersonaIndex, setPrevPersonaIndex] = useState(null)

  // Define pastel colors based on type
  const accentColor = type === "driver" ? "purple" : "green"
  const textColor = type === "driver" ? "text-purple-600" : "text-green-600"
  const bgColor = type === "driver" ? "bg-purple-50" : "bg-green-50"
  const borderColor = type === "driver" ? "border-purple-200" : "border-green-200"
  const headerBgColor = type === "driver" ? "bg-purple-100" : "bg-green-100"
  const iconBgColor = type === "driver" ? "bg-purple-200/50" : "bg-green-200/50"

  // Handle transition when currentPersona changes
  useEffect(() => {
    if (prevPersonaIndex !== null && prevPersonaIndex !== currentPersona) {
      // Determine slide direction based on indices
      if (
        (prevPersonaIndex < currentPersona && !(prevPersonaIndex === 0 && currentPersona === personas.length - 1)) ||
        (prevPersonaIndex === personas.length - 1 && currentPersona === 0)
      ) {
        setSlideDirection("left")
      } else {
        setSlideDirection("right")
      }
    }

    // Store current index for next comparison
    setPrevPersonaIndex(currentPersona)
  }, [currentPersona, prevPersonaIndex, personas.length])

  const goToPersona = (index) => {
    if (index === currentPersona) return
    setCurrentPersona(index)
  }

  const nextPersona = () => {
    const nextIndex = currentPersona === personas.length - 1 ? 0 : currentPersona + 1
    goToPersona(nextIndex)
  }

  const prevPersona = () => {
    const prevIndex = currentPersona === 0 ? personas.length - 1 : currentPersona - 1
    goToPersona(prevIndex)
  }

  return (
    <div className="persona-carousel-wrapper mb-8">
      <div className="relative">
        {/* Main carousel container */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container with Smooth Sliding Animation */}
          <div className="carousel-container overflow-hidden">
            <div
              className={`carousel-track flex transition-transform duration-500 ease-in-out ${
                slideDirection === "left" ? "slide-left" : slideDirection === "right" ? "slide-right" : ""
              }`}
              onAnimationEnd={() => setSlideDirection(null)}
            >
              {/* Only render the current persona */}
              <div className="carousel-item flex-shrink-0 w-full">
                <PersonaCard
                  persona={personas[currentPersona]}
                  type={type}
                  bgColor={bgColor}
                  borderColor={borderColor}
                  headerBgColor={headerBgColor}
                  iconBgColor={iconBgColor}
                  textColor={textColor}
                />
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center my-6 gap-2">
            {personas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPersona(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentPersona === index ? `bg-${accentColor}-600` : `bg-gray-300 hover:bg-${accentColor}-300`
                }`}
                aria-label={`Go to persona ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Absolutely positioned relative to the container */}
        <button
          onClick={prevPersona}
          className="nav-button-left absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          aria-label="Previous persona"
        >
          <ChevronLeft className={`h-5 w-5 ${textColor}`} />
        </button>

        <button
          onClick={nextPersona}
          className="nav-button-right absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          aria-label="Next persona"
        >
          <ChevronRight className={`h-5 w-5 ${textColor}`} />
        </button>
      </div>

      {/* Hover Message - Positioned completely outside */}
      {!isHovered && (
        <div className="hover-message-container absolute left-0 right-0 flex justify-center mt-4">
          <span
            className={`text-xs font-bold ${textColor} bg-white shadow-md px-4 py-2 rounded-full animate-pulse`}
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            Hover to pause slideshow
          </span>
        </div>
      )}
    </div>
  )
}

function PersonaCard({ persona, type, bgColor, borderColor, headerBgColor, iconBgColor, textColor }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className={`grid grid-cols-1 md:grid-cols-3`}>
        {/* Left Column - Photo and Basic Info */}
        <div className={`${headerBgColor} ${borderColor} border-r text-gray-800 p-4 flex flex-col`}>
          <div className="mb-3">
            <h2 className="text-2xl font-bold">{persona.name}</h2>
            <div className={`text-sm mt-1 ${textColor}`}>{persona.tag}</div>
            <div className="text-2xl mt-2">{persona.emoji}</div>
          </div>

          <div className="mt-auto">
            <div className="text-base font-semibold mb-2">About</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`${iconBgColor} p-1 rounded-full`}>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="text-xs">{persona.profile.split(".")[0]}.</div>
              </div>

              <div className="flex items-center gap-2">
                <div className={`${iconBgColor} p-1 rounded-full`}>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs">{persona.travel}</div>
              </div>

              <div className="flex items-center gap-2">
                <div className={`${iconBgColor} p-1 rounded-full`}>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs">{persona.frequency}</div>
              </div>
            </div>
          </div>

          <div className={`mt-4 p-2 ${bgColor} rounded-lg border ${borderColor}`}>
            <div className="text-sm font-medium mb-1">Motivation</div>
            <div className="text-xs">{persona.motivation}</div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="col-span-2 p-4">
          <div className="mb-3">
            <h3 className="text-base font-semibold text-gray-800 mb-1">Profile</h3>
            <p className="text-gray-600 text-xs">{persona.profile}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-red-100 text-red-600 p-1 rounded-full mr-1.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </span>
                Pain Points
              </h3>
              <ul className="space-y-1.5">
                {persona.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-1.5 mt-0.5 text-xs">•</span>
                    <span className="text-gray-700 text-xs">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full mr-1.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                How BlaBlaCar Helps
              </h3>
              <ul className="space-y-1.5">
                {persona.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-1.5 mt-0.5 text-xs">•</span>
                    <span className="text-gray-700 text-xs">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 border-t pt-3">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Opportunities</h3>
            <div className={`${bgColor} p-2 rounded-lg border ${borderColor}`}>
              <p className="text-gray-700 text-xs">{persona.opportunities || getOpportunities(persona)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getOpportunities(persona) {
  // Generate opportunities based on pain points
  const painPoints = persona.painPoints[0].toLowerCase()

  if (painPoints.includes("dead app") || painPoints.includes("forget")) {
    return "Implement regular push notifications and reminders to keep users engaged with the platform."
  } else if (painPoints.includes("co-riders") || painPoints.includes("find")) {
    return "Improve the matching algorithm and increase user acquisition to ensure more ride options are available."
  } else if (painPoints.includes("safety") || painPoints.includes("women")) {
    return "Enhance and promote women-only ride options with additional safety features and verification."
  } else if (painPoints.includes("compatible") || painPoints.includes("similar")) {
    return "Develop AI-driven matching based on interests, background, and conversation preferences."
  } else {
    return "Focus on improving the reliability of the platform and increasing active users through targeted marketing."
  }
}

