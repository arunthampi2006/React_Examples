const fs = require('fs')
const path = require('path')
const posts = require('./get-blog-posts')
const {siteMeta} = require('../blog-config')

const feed = {
  version: 'https://jsonfeed.org/version/1',
  title: siteMeta.title,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  description: siteMeta.description,
  icon: `${siteMeta.siteUrl}/static/images/apple-touch-icon-152x152.png`,
  favicon: `${siteMeta.siteUrl}/static/images/favicon.ico`,
  author: {
    name: siteMeta.author,
    url: siteMeta.siteUrl,
    avatar: `${siteMeta.siteUrl}/static/images/arun.jpg`
  },
  items: posts.map(post => ({
    id: `${siteMeta.siteUrl}${post.path}`,
    url: `${siteMeta.siteUrl}${post.path}`,
    title: post.title,
    content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
    summary: post.summary,
    image: `${siteMeta.siteUrl}${post.image}`,
    date_published: post.publishedAt,
    author: siteMeta.author
  }))
}

fs.writeFileSync(path.join('./.next/static', 'feed.json'), JSON.stringify(feed))
