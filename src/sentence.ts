
import adjectives from './adjectives'
import nouns from './nouns'
import verbs from './verbs'
import { pickRandom } from './util/random'

export default function GenerateRandomSentence() {

    //[adjective] [noun] [verb] [adjective] [noun]
    const randomSentence = pickRandom(adjectives) + " " + pickRandom(nouns) + " "
        + pickRandom(verbs) + "s " + pickRandom(adjectives) + " " + pickRandom(nouns)

    return randomSentence




}



