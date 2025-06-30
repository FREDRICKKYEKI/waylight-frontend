export function Blog39(props: any) {
  return (
    <section
      id="relume"
      className="bg-primary-04 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl">Explore Our Latest Insights</h2>
            <p className="md:text-md">
              Stay informed about car shade solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {props.relatedPosts.map((post: any, index: number) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              author={post.author}
              category={post.category}
              slug={post.slug.current}
            />
          ))}
        </div>
        <div className="flex items-center justify-end">
          <a
            title="View all"
            className="hover:bg-dark-02 border-dark-01 mt-10 rounded-full border px-8 py-3 text-sm font-semibold transition-colors duration-300 hover:text-white md:mt-14 lg:mt-16"
            href="/blogs"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({
  title,
  description,
  author,
  publishedAt,
  category,
  mainImage,
  slug,
  ...props
}: {
  title: string;
  description: string;
  author: {
    name: string;
    profileImage: string;
  };
  publishedAt: string;
  category: string;
  mainImage: string;
  slug: string;
}) => {
  return (
    <div className="blog-card">
      <a href={`/blogs/${slug}`}
        className="mb-6 inline-block w-full max-w-full">
        <div className="w-full overflow-hidden">
          <img
            src={mainImage}
            alt="Relume placeholder image 1"
            className="rounded-image aspect-[3/2] size-full object-cover"
          />
        </div>
      </a>
      <a
        href={`/blogs/${slug}`}
        className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
      >
        {category}
      </a>
      <a href={`/blogs/${slug}`} className="mb-2 block max-w-full">
        <h5 className="text-xl font-bold md:text-2xl">
          {title}
        </h5>
      </a>
      <p>
        {description}
      </p>
      <div className="mt-6 flex items-center">
        <div className="mr-4 shrink-0">
          <img
            src={author.profileImage || "https://via.placeholder.com/48"}
            alt="Relume placeholder avatar 1"
            className="size-12 min-h-12 min-w-12 rounded-full object-cover"
          />
        </div>
        <div className="blog-card">
          <h6 className="text-sm font-semibold">
            {author.name}
          </h6>
          <div className="flex items-center">
            <p className="text-sm">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {/* <span className="mx-2">•</span>
            <p className="text-sm">
              <RenderReadingTime {...props} />
            </p> */}
          </div>
        </div>
      </div>
    </div>)
}