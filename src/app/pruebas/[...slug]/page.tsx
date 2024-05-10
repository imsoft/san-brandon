const SlugPage = ({ params }: { params: { slug: string } }) => {
  return <div>{JSON.stringify(params.slug[2])}</div>;
};

export default SlugPage;
