/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Footer} from './footer'
export {default as Home} from './home'
export {default as About} from './about'
export {default as Work} from './work'
export {default as Blog} from './blog'
export {default as Photos} from './photos'
export {default as MsgMe} from './msgme'
export {HomeFull, HomeMini} from './tiles/home-tiles'
export {AboutFull, AboutMini} from './tiles/about-tiles'
export {WorkFull, WorkMini} from './tiles/work-tiles'
export {BlogFull, BlogMini} from './tiles/blog-tiles'
export {PhotosFull, PhotosMini} from './tiles/photos-tiles'
export {MsgMeFull, MsgMeMini} from './tiles/msgme-tiles'
export {default as HomeContent} from './content/home-content'
export {default as AboutContent} from './content/about-content'
export {default as WorkContent} from './content/work-content'
export {default as BlogContent} from './content/blog-content'
export {default as PhotosContent} from './content/photos-content'
export {default as MsgMeContent} from './content/msgme-content'
