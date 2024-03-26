import {createClient} from "@sanity/client"

const client = createClient({
  projectId: 'q1av0xbr',
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
  token: 'skir0JtskRP4dbZvgXUbIsxx7AgGO9UhFfjnxzXec6tt0gF4TQuySMJ8zfyQXVfNZg8GLqSqE2Up6dXDi8gLkNCAGSzK2rnGfZNsgM6e1Hc7nNH2feXlprUBwJGpZoiDEesf95NJi0G7Pz60Gpg44XW77vT5pYSPw7APO9BBlU0S2tvrxURX', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client