const { createClient } = require('next-sanity');

const client = createClient({
    projectId: 'dknqomok',
    dataset: 'production',
    apiVersion: '2024-02-24',
    useCdn: false,
});

const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt
}`;

async function run() {
    const posts = await client.fetch(query);
    console.log("Total posts:", posts.length);
    console.log(posts);
}

run();
