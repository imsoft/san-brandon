import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    name: "Tour Gastronómico Nocturno",
    href: "#",
    price: "Desde $45 por persona",
    description:
      "Descubre los sabores auténticos de San Brandon bajo las estrellas. Este tour te lleva por los mejores puestos de comida local, combinando historia y sabor.",
    imageSrc:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Grupo de personas disfrutando de un tour gastronómico nocturno en el corazón de San Brandon.",
  },
  {
    id: 2,
    name: "Paseo en Globo Aerostático",
    href: "#",
    price: "Desde $120 por persona",
    description:
      "Vive la magia de San Brandon desde el cielo en un inolvidable paseo en globo. Disfruta de vistas panorámicas al amanecer sobre los paisajes históricos del municipio.",
    imageSrc:
      "https://images.unsplash.com/photo-1514923995763-768e52f5af87?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Vista aérea de San Brandon al amanecer, con un globo aerostático flotando en el horizonte.",
  },
  {
    id: 3,
    name: "Taller de Artesanía Local",
    href: "#",
    price: "Desde $30 por persona",
    description:
      "Sumérgete en la cultura de San Brandon con un taller de artesanía, donde aprenderás técnicas ancestrales de manos de artesanos locales y crearás tu propia obra.",
    imageSrc:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Participantes en un taller de artesanía local, trabajando cuidadosamente en sus creaciones.",
  },
  {
    id: 4,
    name: "Recorrido Histórico Guiado",
    href: "#",
    price: "Desde $25 por persona",
    description:
      "Explora el rico patrimonio de San Brandon con un experto. Este recorrido a pie te lleva por los centros históricos, revelando las historias ocultas detrás de cada fachada.",
    imageSrc:
      "https://images.unsplash.com/photo-1619524804094-e3ba93d15779?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Guía turístico señalando un edificio histórico a un grupo de visitantes atentos en San Brandon.",
  },
  {
    id: 5,
    name: "Noche de Cine al Aire Libre",
    href: "#",
    price: "Desde $15 por persona",
    description:
      "Disfruta de los clásicos del cine y películas locales en una mágica noche de cine bajo las estrellas en los parques de San Brandon, con palomitas y bebidas locales.",
    imageSrc:
      "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?q=80&w=3009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Personas sentadas en mantas en el parque, viendo una película en una gran pantalla al aire libre.",
  },
  {
    id: 6,
    name: "Tour Gastronómico de San Brandon",
    href: "#",
    price: "Desde $45 por persona",
    description:
      "Descubre los sabores auténticos de San Brandon en este tour gastronómico que te llevará por los mejores restaurantes y mercados locales, degustando platillos tradicionales y aprendiendo sobre nuestra rica cultura culinaria.",
    imageSrc:
      "https://images.unsplash.com/photo-1681407980086-971a5defe219?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Un grupo de personas disfrutando de diversos platillos en un colorido mercado local.",
  },
  {
    id: 7,
    name: "Aventura en el Parque Nacional",
    href: "#",
    price: "Actividades desde $20",
    description:
      "Explora el impresionante Parque Nacional de San Brandon, donde la aventura te espera en cada sendero. Disfruta de caminatas guiadas, escalada, paseos en kayak y la oportunidad de avistar la rica fauna y flora local en su hábitat natural.",
    imageSrc:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Un excursionista con mochila admirando la vista desde un mirador en el Parque Nacional.",
  },
  {
    id: 8,
    name: "Noches de Arte y Cultura",
    href: "#",
    price: "Eventos gratuitos y pagos",
    description:
      "Vive las Noches de Arte y Cultura de San Brandon, donde artistas locales e internacionales se dan cita para presentar sus obras. Disfruta de exposiciones de arte, conciertos, obras de teatro y mucho más, en una celebración vibrante de la creatividad.",
    imageSrc:
      "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Público disfrutando de una actuación en vivo en una plaza al aire libre durante la noche.",
  },
  {
    id: 9,
    name: "Retiros de Bienestar y Spa",
    href: "#",
    price: "Paquetes desde $100",
    description:
      "Regálate un momento de paz y relajación en los exclusivos retiros de bienestar y spa de San Brandon. Con tratamientos inspirados en técnicas ancestrales y la más moderna serenidad, es la escapada perfecta para rejuvenecer cuerpo y mente.",
    imageSrc:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Ambiente sereno y relajante en un spa de lujo con velas y pétalos de flores.",
  },
];

const ExperiencesPage = () => {
  return (
    <div className="bg-white">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-neutral-600">
              San Brandon, Jalisco
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Experiencias
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Las experiencias de San Brandon son el alma de nuestra ciudad,
              donde cada piedra y callejón cuenta la rica historia de nuestro
              pasado. Estos espacios, llenos de arquitectura emblemática y
              plazas vibrantes, son testimonio vivo de nuestra herencia
              cultural, invitando tanto a locales como a visitantes a sumergirse
              en un viaje a través del tiempo.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Experiences</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={experience.imageSrc}
                  alt={experience.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  width={300}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={experience.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {experience.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">
                  {experience.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    {experience.price}
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

export default ExperiencesPage;
