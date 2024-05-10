import Link from "next/link";
import {
  InboxStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const articles = [
  {
    name: "Artículo #8",
    description:
      "En San Brandon, cada decisión se toma pensando en ti. Transparentes por naturaleza, rendimos cuentas con claridad.",
    href: "/transparencia/8",
    icon: InboxStackIcon,
  },
  {
    name: "Artículo #15",
    description:
      "Consulta, pregunta, conoce. Tu derecho a la información es nuestra máxima prioridad en San Brandon.",
    href: "/transparencia/15",
    icon: RectangleStackIcon,
  },
];

const TransparencyPage = () => {
  return (
    <>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-neutral-600">
              San Brandon, Jalisco
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En el municipio de San Brandon, el compromiso con la transparencia
              es fundamental para fomentar una relación de confianza y
              colaboración con nuestros ciudadanos.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {articles.map((article) => (
                <div key={article.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600">
                      <article.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <Link
                      href={article.href}
                      className="text-sm font-semibold leading-6 text-neutral-600"
                    >
                      {article.name}
                    </Link>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{article.description}</p>
                    <p className="mt-6">
                      <Link
                        href={article.href}
                        className="text-sm font-semibold leading-6 text-neutral-600"
                      >
                        Ver más <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparencyPage;
