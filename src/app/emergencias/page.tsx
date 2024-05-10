import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

const emergencyNumbers = [
  {
    name: "Emergencias",
    icon: PhoneIcon,
    phoneNumber: "911",
    href: "tel:911",
  },
  {
    name: "Capufe",
    icon: PhoneIcon,
    phoneNumber: "074",
    href: "tel:074",
  },
  {
    name: "Ángeles Verdes",
    icon: PhoneIcon,
    phoneNumber: "078",
    href: "tel:078",
  },
  {
    name: "Cruz Roja",
    icon: PhoneIcon,
    phoneNumber: "55 5395 1111",
    href: "tel:5553951111",
  },
  {
    name: "LOCATEL",
    icon: PhoneIcon,
    phoneNumber: "55 5658 1111",
    href: "tel:5556581111",
  },
  {
    name: "Protección Civil",
    icon: PhoneIcon,
    phoneNumber: "55 5128 0000",
    href: "tel:5551280000",
  },
  {
    name: "Denuncia Anónima",
    icon: PhoneIcon,
    phoneNumber: "089",
    href: "tel:089",
  },
  {
    name: "Incendios Forestales",
    icon: PhoneIcon,
    phoneNumber: "800 4623 6346",
    href: "tel:80046236346",
  },
  {
    name: "Policía Federal",
    icon: PhoneIcon,
    phoneNumber: "088",
    href: "tel:088",
  },
  {
    name: "Fuga de gas",
    icon: PhoneIcon,
    phoneNumber: "911",
    href: "tel:911",
  },
  {
    name: "Fuga de agua",
    icon: PhoneIcon,
    phoneNumber: "5654 3210",
    href: "tel:56543210",
  },
  {
    name: "Bomberos",
    icon: PhoneIcon,
    phoneNumber: "5768 3700",
    href: "tel:57683700",
  },
];

const EmergencyPage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Asistencia Inmediata: <br /> Números de Emergencia
              </h2>
              <p className="mt-4 text-gray-500">
                Para situaciones urgentes o asistencia, aquí encontrarás los
                números esenciales. En San Brandon, tu seguridad es nuestra
                prioridad.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {emergencyNumbers.map((emergencyNumber) => (
                <div key={emergencyNumber.name} className="sm:flex lg:block">
                  <Link href={emergencyNumber.href}>
                    <div className="sm:flex-shrink-0">
                      <emergencyNumber.icon
                        className="h-8 w-8"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        {emergencyNumber.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {emergencyNumber.phoneNumber}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyPage;
