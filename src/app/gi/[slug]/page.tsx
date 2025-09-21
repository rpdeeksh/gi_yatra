// GI product details page
interface PageProps {
  params: {
    slug: string;
  };
}

export default function GIDetailsPage({ params }: PageProps) {
  const { slug } = params;
  
  return (
    <div>
      <h1>GI Product Details: {slug}</h1>
    </div>
  );
}
