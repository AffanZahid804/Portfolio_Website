/** Bump `CV_CACHE_BUST` when you replace the CV PDF so browsers skip a stale cached copy. */
import cvUrl from './assets/Affan_Zahid_CV (f).pdf?url'

export const CV_CACHE_BUST = '20260613'

/** Resolved URL (Vite adds a content hash in production builds). */
export const CV_URL = cvUrl
