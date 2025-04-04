"use client"

import { useEffect, useState } from "react"
import { Calendar, Database, Mail, MessageSquare, Facebook, Linkedin, Slack } from "lucide-react"

export function Integrations() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const outerLogos = [
    { Icon: MessageSquare, alt: "Messenger", angle: 0, color: "#0099ff" },
    { Icon: Facebook, alt: "Facebook", angle: 45, color: "#3F51B5" },
    { Icon: Mail, alt: "Gmail", angle: 90, color: "#D14836" },
    { Icon: Calendar, alt: "Calendar", angle: 135, color: "#4285F4" },
    { Icon: Linkedin, alt: "LinkedIn", angle: 180, color: "#0288D1" },
    { Icon: MessageSquare, alt: "WhatsApp", angle: 225, color: "#25D366" },
    { Icon: Slack, alt: "Slack", angle: 270, color: "#E01E5A" },
    { Icon: Database, alt: "Database", angle: 315, color: "#8F3F71" },
  ]

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros scouts se integran con tus herramientas del día a día
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Los scouts de Bravilo trabajan directamente en las aplicaciones que ya usás en tu negocio
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Círculo de integración */}
          <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
            <div
              className="absolute w-full h-full border-2 border-[#0071E3]/20 rounded-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            <div className="absolute w-[70%] h-[70%] border-[8px] border-[#0071E3]/20 rounded-full" />
            <div className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
              <img src="/logo.png" alt="Bravilo" className="w-12" />
            </div>

            {outerLogos.map((logo, index) => {
              const angleRad = ((logo.angle + rotation) * Math.PI) / 180
              const radius = 40
              const x = 50 + radius * Math.cos(angleRad)
              const y = 50 + radius * Math.sin(angleRad)

              return (
                <div
                  key={index}
                  className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <logo.Icon className="w-6 h-6" style={{ color: logo.color }} />
                </div>
              )
            })}
          </div>

          {/* Texto explicativo actualizado */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-[#0071E3]">¿Con qué herramientas puedo trabajar?</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Puedo integrarme con lo que ya usás</h2>
            <p className="text-gray-600 text-lg">
              Me adapto a las herramientas que ya forman parte de tu día a día. Desde WhatsApp, correos, CRMs o bases de datos internas, si tienen API, puedo conectar y ayudarte a automatizar.
            </p>
            <p className="text-gray-600 text-lg">
              Ya sea para ventas, atención al cliente, logística o reportes, estoy diseñado para integrarme rápido y sin fricción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
