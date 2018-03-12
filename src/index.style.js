import emotionNormalize from 'emotion-normalize'
import { injectGlobal } from 'emotion'

injectGlobal`
  ${emotionNormalize}
`
