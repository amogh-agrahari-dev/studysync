import {createClient} from "@sanity/client"

const client = createClient({
  projectId: 'q1av0xbr',
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
  token: 'skLz1iwm72H5Zhsxu4gZySTGVISsfTOpNrnbNzwh7ilxW4D3RZNiIpI9p6cvWraM1U88038vCVvRPVc2i8Ty3WMkwJyXfxLwHySb1yPH4yJ7fmyQUl38UOrPGQCgRvIKezrO7Ht68dXcycAAxlLhzU9CH3zwiszYfuEpbqye9IzbXg3WhsyF', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client