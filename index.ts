import { getStoryblokApi } from 'gatsby-source-storyblok'

const func = async () => {
  const Storyblok = getStoryblokApi()

  // This is any, should be ISbStories. Change the source plugin version to ^5.0.0 and it works.
  const response = await Storyblok.getStories({
    starts_with: `...`,
    filter_query: {
      component: {
        in: 'header,footer', // get both the footer and the header
      },
    },
    resolve_links: 'url',
  })
}
