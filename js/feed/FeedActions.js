import { LIST_FEED, NEXT_FEED, REFRESH_FEED } from './FeedConstants'
import { api }  from '../utils/request'


export const listFeed = () => {
  return {
      type: LIST_FEED,
      payload: api.get('feed/')
  } 
}

export const refreshFeed = () => {
  return {
      type: REFRESH_FEED,
      payload: api.get('feed/')
  } 
}


export const nextFeed = (cursor) => {
  return {
      type: NEXT_FEED,
      payload: api.get('feed/?cursor='+cursor)
  } 
}
