export const getters = {
  allPosts: (state) => state.posts,
  singlePost: (state) => state.post,
  filteredPosts: (state) =>
    state.posts.filter((post) =>
      post.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
};
