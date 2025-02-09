import { getAllVideos } from "@/api/video.api";
import InfiniteVideoGrid from "@/components/common/InfiniteVideoGrid";
import SearchedVideos from "./_components/SearchedVideos";
import NoVideosFound from "../../_components/NotFoundVideos";
import Error from "@/components/common/Error";

const SearchResultPage = async ({ searchParams }) => {
  const searchVal = decodeURI(searchParams?.q);
  const { data, error } = await getAllVideos({ q: searchVal });
  if (error) {
    return <Error title={"Error while getting searched videos"} />;
  }
  if (data?.videos.length === 0) {
    return <NoVideosFound isSearch />;
  }
  return (
    <section className="w-full pb-[70px] px-3 sm:ml-[70px] sm:pb-0 lg:ml-0">
      <SearchedVideos videos={data?.videos} />
      {data?.videos.length > 0 && (
        <InfiniteVideoGrid
          limit={10}
          parentClasses={"flex flex-col h-full gap-4 p-4"}
          initialShow={10}
          pageToLoad={2}
          isSearching={true}
          query={{ q: searchVal }}
        />
      )}
    </section>
  );
};

export default SearchResultPage;
