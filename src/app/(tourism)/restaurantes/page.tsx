import Image from "next/image";
import Link from "next/link";

const restaurants = [
  {
    id: 1,
    name: "Los Girasoles Tradicionales",
    href: "#",
    price: "Platos desde $10",
    description:
      "Disfruta de la auténtica cocina local en Los Girasoles Tradicionales, donde cada plato cuenta una historia de San Brandon a través de sus sabores únicos y recetas heredadas de generación en generación.",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Acogedor comedor de Los Girasoles con mesas de madera y decoración tradicional.",
  },
  {
    id: 2,
    name: "Mariscos El Faro",
    href: "#",
    price: "Especialidades desde $15",
    description:
      "Mariscos El Faro te invita a saborear lo mejor del mar con su fresca y variada oferta de platillos, preparados con los ingredientes más selectos y una vista inigualable del atardecer en la costa de San Brandon.",
    imageSrc:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Terraza al aire libre en Mariscos El Faro, con vistas al mar y platos de mariscos frescos.",
  },
  {
    id: 3,
    name: "Café de la Plaza",
    href: "#",
    price: "Café y postres desde $5",
    description:
      "En el corazón de San Brandon, Café de la Plaza es el lugar perfecto para disfrutar de un café artesanal y deliciosos postres en un ambiente relajado, ideal para reuniones o simplemente para disfrutar de un buen libro.",
    imageSrc:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Interior cálido del Café de la Plaza, con una barra de café y pasteles en exhibición.",
  },
  {
    id: 4,
    name: "Parrilla del Valle",
    href: "#",
    price: "Cortes desde $20",
    description:
      "Parrilla del Valle ofrece una experiencia culinaria excepcional con sus exquisitos cortes de carne asados a la perfección, acompañados de vinos selectos y en un ambiente elegante y acogedor.",
    imageSrc:
      "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Elegante comedor en Parrilla del Valle, con platos de cortes finos y copas de vino.",
  },
  {
    id: 5,
    name: "El Rinconcito de San Brandon",
    href: "#",
    price: "Platos desde $10",
    description:
      "Sumérgete en la auténtica cocina local en El Rinconcito de San Brandon, donde cada bocado cuenta la historia de nuestra tierra a través de sabores tradicionales y recetas transmitidas de generación en generación.",
    imageSrc:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Acogedor comedor en El Rinconcito de San Brandon, con mesas de madera y decoración tradicional.",
  },
  {
    id: 6,
    name: "Mariscos El Faro",
    href: "#",
    price: "Especialidades desde $15",
    description:
      "Disfruta de la frescura del mar en Mariscos El Faro, donde cada platillo es una obra maestra culinaria que celebra la riqueza del océano, en un ambiente relajado y con vistas impresionantes.",
    imageSrc:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Terraza al aire libre de Mariscos El Faro, con vista al mar y platos de mariscos en las mesas.",
  },
  {
    id: 7,
    name: "Parrilla La Estancia",
    href: "#",
    price: "Cortes desde $20",
    description:
      "En Parrilla La Estancia, los amantes de la carne encontrarán su paraíso, con cortes premium asados a la perfección, en un ambiente cálido que invita a disfrutar de largas veladas.",
    imageSrc:
      "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Juiciosos cortes de carne en la parrilla, con llamas envolviéndolos suavemente en Parrilla La Estancia.",
  },
  {
    id: 8,
    name: "Café de las Artes",
    href: "#",
    price: "Cafés y postres desde $5",
    description:
      "Café de las Artes es el punto de encuentro de los amantes del café y el arte, ofreciendo una selección exquisita de cafés artesanales y postres en un espacio lleno de obras de artistas locales.",
    imageSrc:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Interior del Café de las Artes, con arte en las paredes y una barra de café llena de deliciosas opciones.",
  },
  {
    id: 9,
    name: "Veggie Garden",
    href: "#",
    price: "Platos veganos desde $12",
    description:
      "Veggie Garden ofrece una experiencia culinaria innovadora y saludable, con un menú completamente vegano que deleita incluso a los paladares más exigentes, en un ambiente fresco y sostenible.",
    imageSrc:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Colorido plato vegano servido en Veggie Garden, con un diseño moderno y toques de verde natural.",
  },
];

const RestaurantsPage = () => {
  return (
    <div className="bg-white">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-neutral-600">
              San Brandon, Jalisco
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Restaurantes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubre los sabores de San Brandon, donde cada restaurante es una
              puerta a nuevas experiencias culinarias. Desde el calor hogareño
              de &quot;El Rinconcito de San Brandon&quot; hasta la frescura
              oceánica de &quot;Mariscos El Faro&quot;, nuestra ciudad se
              enorgullece de una diversidad gastronómica que promete deleitar a
              todos los paladares.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Restaurantes</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <Image
                  src={restaurant.imageSrc}
                  alt={restaurant.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  width={300}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={restaurant.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {restaurant.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">
                  {restaurant.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    {restaurant.price}
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

export default RestaurantsPage;
