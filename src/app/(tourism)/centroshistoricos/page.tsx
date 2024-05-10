import Image from "next/image";
import Link from "next/link";

const historicCentres = [
  {
    id: 1,
    name: "Plaza Mayor de San Brandon",
    href: "#",
    price: "Entrada gratuita",
    description:
      "El corazón de San Brandon, la Plaza Mayor, es un punto de encuentro lleno de historia, rodeada de edificios coloniales y el famoso reloj del siglo XVIII.",
    imageSrc:
      "https://images.unsplash.com/photo-1612969717339-6ab14dbbe057?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Vista panorámica de la Plaza Mayor de San Brandon con sus históricos edificios al atardecer.",
  },
  {
    id: 2,
    name: "El Antiguo Convento",
    href: "#",
    price: "Visita guiada $10",
    description:
      "Descubre la historia y los secretos del Antiguo Convento de San Brandon, un monumento del siglo XVI que ahora alberga un museo de arte sacro.",
    imageSrc:
      "https://images.unsplash.com/photo-1609610677350-efeaa2c21219?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Fachada del Antiguo Convento con detalles arquitectónicos barrocos.",
  },
  {
    id: 3,
    name: "Callejón de las Leyendas",
    href: "#",
    price: "Recorrido libre",
    description:
      "Pasea por el Callejón de las Leyendas y vive las historias que dieron forma a San Brandon, desde épicas batallas hasta romances legendarios.",
    imageSrc:
      "https://images.unsplash.com/photo-1567008386823-90c713249ed1?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Vista del estrecho y empedrado Callejón de las Leyendas al amanecer.",
  },
  {
    id: 4,
    name: "El Mercado Histórico",
    href: "#",
    price: "Acceso gratuito",
    description:
      "Explora los sabores y tradiciones de San Brandon en el Mercado Histórico, donde artesanos y agricultores locales ofrecen sus mejores productos.",
    imageSrc:
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Colorido Mercado Histórico repleto de puestos de alimentos, artesanías y flores.",
  },
  {
    id: 5,
    name: "Museo de la Ciudad",
    href: "#",
    price: "Entrada $5",
    description:
      "Adéntrate en la historia de San Brandon a través de las exposiciones interactivas del Museo de la Ciudad, desde sus orígenes hasta la actualidad.",
    imageSrc:
      "https://images.unsplash.com/photo-1513038630932-13873b1a7f29?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Fachada neoclásica del Museo de la Ciudad iluminada por la noche.",
  },
  {
    id: 6,
    name: "Teatro de la Ópera",
    href: "#",
    price: "Boletos desde $30",
    description:
      "Vive una noche inolvidable en el Teatro de la Ópera de San Brandon, una joya arquitectónica del siglo XIX que alberga las mejores obras y conciertos.",
    imageSrc:
      "https://images.unsplash.com/photo-1615414015111-8d98cb65677e?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Elegante interior del Teatro de la Ópera con asientos de terciopelo rojo y un gran candelabro central.",
  },
  {
    id: 7,
    name: "La Catedral Metropolitana",
    href: "#",
    price: "Entrada libre, donaciones bienvenidas",
    description:
      "Maravíllate con la imponente Catedral Metropolitana de San Brandon, un monumento del arte gótico con impresionantes vitrales y una rica historia religiosa.",
    imageSrc:
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Vista frontal de la Catedral Metropolitana con sus torres góticas elevándose hacia el cielo azul.",
  },
  {
    id: 8,
    name: "Parque de la Independencia",
    href: "#",
    price: "Acceso gratuito",
    description:
      "Disfruta de un día tranquilo o de un picnic en el Parque de la Independencia, un oasis verde en el corazón de San Brandon ideal para el esparcimiento familiar.",
    imageSrc:
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Amplias áreas verdes y senderos rodeados de árboles en el Parque de la Independencia.",
  },
  {
    id: 9,
    name: "Biblioteca Central",
    href: "#",
    price: "Uso libre",
    description:
      "Sumérgete en el conocimiento en la Biblioteca Central de San Brandon, un espacio de calma con una vasta colección de libros y un impresionante domo de cristal.",
    imageSrc:
      "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Interior luminoso de la Biblioteca Central con estanterías llenas de libros y un domo de cristal.",
  },
];

const HistoricCentresPage = () => {
  return (
    <div className="bg-white">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-neutral-600">
              San Brandon, Jalisco
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Centros Historicos
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Los centros históricos de San Brandon son el alma de nuestra
              ciudad, donde cada piedra y callejón cuenta la rica historia de
              nuestro pasado. Estos espacios, llenos de arquitectura emblemática
              y plazas vibrantes, son testimonio vivo de nuestra herencia
              cultural, invitando tanto a locales como a visitantes a sumergirse
              en un viaje a través del tiempo.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Centros Historicos</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {historicCentres.map((historicalCenter) => (
            <div
              key={historicalCenter.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={historicalCenter.imageSrc}
                  alt={historicalCenter.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  width={300}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={historicalCenter.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {historicalCenter.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">
                  {historicalCenter.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    {historicalCenter.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoricCentresPage;
