
import BlogV3 from "@/components/blog-list-3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Blog Gid 3 || WandarShare',
  description:
    'WandarShare',
}

const Blog3Page = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <BlogV3 />
    </>
  );
};

export default Blog3Page
