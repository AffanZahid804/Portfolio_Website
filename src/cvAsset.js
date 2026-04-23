/** Bump this string whenever you replace the CV in `public/` so browsers skip an old cached copy. */
export const CV_CACHE_BUST = '20260425'

const CV_FILE = 'CvAffan Zahid.docx copy.pdf'

/** URL path segment (spaces encoded for `href`). */
export const CV_PATH = encodeURI(CV_FILE)
