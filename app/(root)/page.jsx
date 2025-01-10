import SearchInput from "@/components/SearchInput";
import StartupsCards from "@/components/StartupsCards";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/quries";
export default async function Home({searchParams}) {
  const query = (await searchParams).query
  const params = {search: query || null}
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br>
        </br>
        Connect With Entrepreneurs 
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
      <SearchInput query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>
        <ul className="mt-7 caret-red-50 card_grid">
          {posts.map((post)=>(
            <StartupsCards key={post?._id} post={post}/>
          ))}
        </ul>
      </section>
      <SanityLive/>
    </>
      
  );
}

