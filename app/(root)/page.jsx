import SearchInput from "@/components/SearchInput";
import StartupsCards from "@/components/StartupsCards";
export default async function Home({searchParams}) {
  const query = (await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'Manoj'},
    _id: 1,
    title: 'My First Project',
    description: 'This is a description',
    iamge: 'https://images.unsplash.com/photo-1736281512973-d17ef05f9709?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=diego-marin-zAxwONpb8JM-unsplash.jpg'
  }]
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
        <ul className="mt-7 caret-red-50">
          {posts.map((post)=>(
            <StartupsCards key={post?._id} post={post}/>
          ))}
        </ul>
      </section>
    </>
      
  );
}

