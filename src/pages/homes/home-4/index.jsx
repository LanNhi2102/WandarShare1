
import HomeMain from "@/components/home-4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-4 || WandarShare',
  description:
    'WandarShare',
}

const HomePage4 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage4
