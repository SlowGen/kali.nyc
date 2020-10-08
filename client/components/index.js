/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Home} from './home'
export {default as About} from './about'
export {default as Work} from './work'
export {default as Photos} from './photos'
export {default as MsgMe} from './msgme'
export {HomeFull, HomeMini} from './home-tiles'
export {AboutFull, AboutMini} from './about-tiles'
export {WorkFull, WorkMini} from './work-tiles'
export {PhotosFull, PhotosMini} from './photos-tiles'
export {MsgMeFull, MsgMeMini} from './msgme-tiles'
