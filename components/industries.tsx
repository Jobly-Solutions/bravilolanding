import { Building2, Truck, Gavel  } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-[#0071E3]" />,
      title: "Inmobiliarias",
      description: "Mejora la captación de clientes, agendamiento de visitas y seguimiento de operaciones.",
      benefits: [
        "Calificación automática de leads",
        "Agendamiento inteligente de visitas",
        "Seguimiento personalizado de clientes",
      ],
    },
    {
      icon: <Gavel className="w-8 h-8 text-[#0071E3]" />,
      title: "Estudios Jurídicos",
      description: "Automatizá la gestión de consultas, coordinación de reuniones y seguimiento de casos para tus clientes.",
      benefits: [
        "Atención automática a consultas legales frecuentes",
        "Agendamiento de turnos y seguimiento de casos",
        "Derivación a abogados solo cuando es necesario",
      ],
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0071E3]" />,
      title: "Logística",
      description: "Automatiza la coordinación de entregas, seguimiento y comunicación con clientes.",
      benefits: [
        "Coordinación eficiente de rutas",
        "Notificaciones automáticas de estado",
        "Resolución inmediata de incidencias",
      ],
    },
    
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Soluciones para tu industria</h2>
          <p className="text-lg text-gray-600">Scouts especializados para las necesidades específicas de tu sector</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>

              <ul className="space-y-3">
                {industry.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#0071E3] rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

