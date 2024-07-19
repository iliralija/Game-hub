import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platfroms } = usePlatforms();
  return platfroms?.results.find((p) => p.id == id);
};

export default usePlatform;
