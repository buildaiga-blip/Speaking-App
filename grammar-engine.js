/**
 * grammar-engine.js
 * ------------------
 * A comprehensive, fully offline, zero-dependency ESL grammar checker.
 * No network calls, no API key, no login, no rate limit — pure JS rules that run
 * instantly in the browser. Loaded via <script src="grammar-engine.js"></script>,
 * same pattern as content.js. Exposes window.GrammarEngine.check(text).
 *
 * Covers: helping verbs, main verb form (regular conjugation rules + irregular verb
 * table, not just a fixed word list), articles (a/an + missing article), preposition
 * pairing, and basic sentence structure.
 *
 * This supplements (does not replace) the general-purpose Harper spell/grammar checker
 * already used elsewhere in the app — this file focuses specifically on the ESL error
 * patterns a general proofreader tends to miss.
 */
(function (global) {
    'use strict';

    // ============================================================
    // 1. REGULAR VERB CONJUGATION — spelling RULES, not a word list.
    //    This means any regular verb the user says can be checked/corrected,
    //    not just ones we happened to hard-code.
    // ============================================================
    function isCVC(word) {
        if (word.length < 3) return false;
        const last3 = word.slice(-3);
        return /^[^aeiou][aeiou][^aeiouwxy]$/i.test(last3);
    }

    // Multi-syllable verbs stressed on the final syllable still double the consonant
    // (begin -> beginning). Words like travel/cancel/label are excluded on purpose —
    // American spelling doesn't double those (traveled, not travelled).
    const DOUBLING_EXCEPTIONS = new Set(['begin', 'admit', 'permit', 'prefer', 'occur', 'regret', 'omit', 'refer', 'transmit', 'commit', 'submit', 'equip']);

    function shouldDouble(word) {
        if (DOUBLING_EXCEPTIONS.has(word)) return true;
        // Vowel-initial short CVC words (open, edit, enter) are usually stressed on the
        // FIRST syllable and don't double; true monosyllabic doublers (stop, plan, chat)
        // start with a consonant.
        if (isCVC(word) && word.length <= 5 && !/^[aeiou]/i.test(word)) return true;
        return false;
    }

    function toSForm(base) {
        const w = base.toLowerCase();
        if (w === 'be') return 'is';
        if (w === 'have') return 'has';
        if (/[sxz]$/.test(w) || /(ch|sh)$/.test(w)) return w + 'es';
        if (/[^aeiou]o$/.test(w)) return w + 'es'; // go -> goes, echo -> echoes
        if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + 'ies'; // study -> studies
        return w + 's';
    }

    function toIngForm(base) {
        const w = base.toLowerCase();
        if (w === 'be') return 'being';
        if (/ee$|oe$|ye$/.test(w)) return w + 'ing'; // see->seeing, hoe->hoeing, dye->dyeing
        if (/[^aeiou]e$/.test(w)) return w.slice(0, -1) + 'ing'; // make->making
        if (shouldDouble(w)) return w + w.slice(-1) + 'ing'; // stop->stopping
        return w + 'ing';
    }

    function toEdForm(base) {
        const w = base.toLowerCase();
        if (/e$/.test(w)) return w + 'd'; // like->liked
        if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + 'ied'; // study->studied
        if (shouldDouble(w)) return w + w.slice(-1) + 'ed'; // stop->stopped
        return w + 'ed';
    }

    // ============================================================
    // 2. IRREGULAR VERBS — can't be derived from spelling rules, so this is a
    //    hand-curated table of the ~100 most common irregular English verbs.
    //    { past, pp (past participle) } — -s and -ing forms are regular for
    //    almost all of these, so those are still generated via the rules above.
    // ============================================================
    const IRREGULAR_VERBS = {
        be: { past: 'was/were', pp: 'been' }, become: { past: 'became', pp: 'become' },
        begin: { past: 'began', pp: 'begun' }, break: { past: 'broke', pp: 'broken' },
        bring: { past: 'brought', pp: 'brought' }, build: { past: 'built', pp: 'built' },
        buy: { past: 'bought', pp: 'bought' }, catch: { past: 'caught', pp: 'caught' },
        choose: { past: 'chose', pp: 'chosen' }, come: { past: 'came', pp: 'come' },
        cost: { past: 'cost', pp: 'cost' }, cut: { past: 'cut', pp: 'cut' },
        do: { past: 'did', pp: 'done' }, draw: { past: 'drew', pp: 'drawn' },
        drink: { past: 'drank', pp: 'drunk' }, drive: { past: 'drove', pp: 'driven' },
        eat: { past: 'ate', pp: 'eaten' }, fall: { past: 'fell', pp: 'fallen' },
        feel: { past: 'felt', pp: 'felt' }, fight: { past: 'fought', pp: 'fought' },
        find: { past: 'found', pp: 'found' }, fly: { past: 'flew', pp: 'flown' },
        forget: { past: 'forgot', pp: 'forgotten' }, forgive: { past: 'forgave', pp: 'forgiven' },
        freeze: { past: 'froze', pp: 'frozen' }, get: { past: 'got', pp: 'gotten' },
        give: { past: 'gave', pp: 'given' }, go: { past: 'went', pp: 'gone' },
        grow: { past: 'grew', pp: 'grown' }, have: { past: 'had', pp: 'had' },
        hear: { past: 'heard', pp: 'heard' }, hide: { past: 'hid', pp: 'hidden' },
        hit: { past: 'hit', pp: 'hit' }, hold: { past: 'held', pp: 'held' },
        hurt: { past: 'hurt', pp: 'hurt' }, keep: { past: 'kept', pp: 'kept' },
        know: { past: 'knew', pp: 'known' }, lay: { past: 'laid', pp: 'laid' },
        lead: { past: 'led', pp: 'led' }, leave: { past: 'left', pp: 'left' },
        lend: { past: 'lent', pp: 'lent' }, let: { past: 'let', pp: 'let' },
        lie: { past: 'lay', pp: 'lain' }, lose: { past: 'lost', pp: 'lost' },
        make: { past: 'made', pp: 'made' }, mean: { past: 'meant', pp: 'meant' },
        meet: { past: 'met', pp: 'met' }, pay: { past: 'paid', pp: 'paid' },
        put: { past: 'put', pp: 'put' }, read: { past: 'read', pp: 'read' },
        ride: { past: 'rode', pp: 'ridden' }, ring: { past: 'rang', pp: 'rung' },
        rise: { past: 'rose', pp: 'risen' }, run: { past: 'ran', pp: 'run' },
        say: { past: 'said', pp: 'said' }, see: { past: 'saw', pp: 'seen' },
        sell: { past: 'sold', pp: 'sold' }, send: { past: 'sent', pp: 'sent' },
        set: { past: 'set', pp: 'set' }, shake: { past: 'shook', pp: 'shaken' },
        shine: { past: 'shone', pp: 'shone' }, shoot: { past: 'shot', pp: 'shot' },
        show: { past: 'showed', pp: 'shown' }, shut: { past: 'shut', pp: 'shut' },
        sing: { past: 'sang', pp: 'sung' }, sit: { past: 'sat', pp: 'sat' },
        sleep: { past: 'slept', pp: 'slept' }, speak: { past: 'spoke', pp: 'spoken' },
        spend: { past: 'spent', pp: 'spent' }, stand: { past: 'stood', pp: 'stood' },
        steal: { past: 'stole', pp: 'stolen' }, swim: { past: 'swam', pp: 'swum' },
        take: { past: 'took', pp: 'taken' }, teach: { past: 'taught', pp: 'taught' },
        tell: { past: 'told', pp: 'told' }, think: { past: 'thought', pp: 'thought' },
        throw: { past: 'threw', pp: 'thrown' }, understand: { past: 'understood', pp: 'understood' },
        wake: { past: 'woke', pp: 'woken' }, wear: { past: 'wore', pp: 'worn' },
        win: { past: 'won', pp: 'won' }, write: { past: 'wrote', pp: 'written' },
        cast: { past: 'cast', pp: 'cast' }, deal: { past: 'dealt', pp: 'dealt' },
        dig: { past: 'dug', pp: 'dug' }, dream: { past: 'dreamed', pp: 'dreamed' },
        fit: { past: 'fit', pp: 'fit' }, flee: { past: 'fled', pp: 'fled' },
        forbid: { past: 'forbade', pp: 'forbidden' }, kneel: { past: 'knelt', pp: 'knelt' },
        lean: { past: 'leaned', pp: 'leaned' }, learn: { past: 'learned', pp: 'learned' },
        light: { past: 'lit', pp: 'lit' }, quit: { past: 'quit', pp: 'quit' },
        seek: { past: 'sought', pp: 'sought' }, shrink: { past: 'shrank', pp: 'shrunk' },
        sink: { past: 'sank', pp: 'sunk' }, slide: { past: 'slid', pp: 'slid' },
        speed: { past: 'sped', pp: 'sped' }, spin: { past: 'spun', pp: 'spun' },
        split: { past: 'split', pp: 'split' }, spread: { past: 'spread', pp: 'spread' },
        spring: { past: 'sprang', pp: 'sprung' }, sting: { past: 'stung', pp: 'stung' },
        strike: { past: 'struck', pp: 'struck' }, swear: { past: 'swore', pp: 'sworn' },
        sweep: { past: 'swept', pp: 'swept' }, swing: { past: 'swung', pp: 'swung' },
        tear: { past: 'tore', pp: 'torn' }, wind: { past: 'wound', pp: 'wound' },
        withdraw: { past: 'withdrew', pp: 'withdrawn' }
    };

    // ============================================================
    // 3. COMMON VERB DICTIONARY — regular verbs likely to appear in beginner/
    //    intermediate ESL speech. Combined with IRREGULAR_VERBS keys, this is
    //    the set of words treated as "known verbs" for agreement checks.
    // ============================================================
    const REGULAR_VERBS = ['want', 'need', 'like', 'love', 'hate', 'work', 'walk', 'talk', 'watch', 'wash',
        'play', 'stay', 'enjoy', 'study', 'try', 'cry', 'carry', 'worry', 'hurry', 'marry', 'live', 'move',
        'use', 'dance', 'hope', 'close', 'open', 'listen', 'clean', 'cook', 'look', 'help', 'call', 'ask',
        'answer', 'start', 'stop', 'finish', 'plan', 'change', 'happen', 'wait', 'arrive', 'visit', 'travel',
        'return', 'share', 'save', 'spend', 'earn', 'pay', 'cost', 'offer', 'accept', 'refuse', 'agree',
        'disagree', 'suggest', 'explain', 'describe', 'discuss', 'decide', 'choose', 'prefer', 'consider',
        'remember', 'forget', 'realize', 'notice', 'imagine', 'believe', 'doubt', 'guess', 'suppose',
        'wonder', 'worry', 'care', 'trust', 'promise', 'allow', 'permit', 'prevent', 'protect', 'attack',
        'defend', 'follow', 'lead', 'guide', 'join', 'leave', 'stay', 'wait', 'continue', 'repeat', 'practice',
        'improve', 'succeed', 'fail', 'pass', 'test', 'check', 'fix', 'repair', 'break', 'build', 'create',
        'design', 'develop', 'produce', 'invent', 'discover', 'explore', 'search', 'find', 'lose', 'gain',
        'increase', 'decrease', 'reduce', 'raise', 'lower', 'add', 'remove', 'include', 'exclude', 'contain',
        'cover', 'hide', 'reveal', 'show', 'display', 'present', 'perform', 'act', 'sing', 'dance', 'draw',
        'paint', 'write', 'type', 'print', 'copy', 'edit', 'delete', 'save', 'send', 'receive', 'deliver',
        'collect', 'gather', 'organize', 'arrange', 'prepare', 'plan', 'schedule', 'cancel', 'delay', 'postpone',
        'attend', 'participate', 'join', 'quit', 'resign', 'retire', 'graduate', 'admit', 'apply', 'accept',
        'reject', 'approve', 'deny', 'confirm', 'cancel', 'book', 'reserve', 'order', 'serve', 'deliver'];

    const KNOWN_VERBS = new Set([...Object.keys(IRREGULAR_VERBS), ...REGULAR_VERBS]);

    function conjugate(base) {
        const w = base.toLowerCase();
        const irregular = IRREGULAR_VERBS[w];
        return {
            base: w,
            s: toSForm(w),
            ing: toIngForm(w),
            past: irregular ? irregular.past.split('/')[0] : toEdForm(w)
        };
    }

    // ============================================================
    // 4. HELPING VERB checks
    // ============================================================
    const GERUND_STOP = new Set(['sing', 'ring', 'bring', 'string', 'cling', 'fling', 'sling', 'swing', 'sting', 'spring']);

    function findMissingHelpingVerbForGerund(text) {
        const issues = [];
        const re = /\b(I|you|we|they|he|she|it)\s+(\w+ing)\b/gi;
        let m;
        while ((m = re.exec(text)) !== null) {
            const subject = m[1], verb = m[2];
            if (GERUND_STOP.has(verb.toLowerCase())) continue;
            const aux = ({ i: 'am', you: 'are', we: 'are', they: 'are', he: 'is', she: 'is', it: 'is' })[subject.toLowerCase()] || 'is';
            issues.push({
                start: m.index, end: m.index + m[0].length, label: 'Helping Verb',
                message: `"${m[0]}" is missing a helping verb before "${verb}".`,
                suggestions: [`${subject} ${aux} ${verb}`]
            });
        }
        return issues;
    }

    function findMissingDoSupport(text) {
        const issues = [];
        const re = /\b(I|you|we|they|he|she|it)\s+not\s+([a-zA-Z]+)\b/gi;
        let m;
        while ((m = re.exec(text)) !== null) {
            const subject = m[1], verb = m[2].toLowerCase();
            if (!KNOWN_VERBS.has(verb)) continue;
            const isThirdSingular = /^(he|she|it)$/i.test(subject);
            const doWord = isThirdSingular ? "doesn't" : "don't";
            issues.push({
                start: m.index, end: m.index + m[0].length, label: 'Helping Verb',
                message: `Negative sentences need "do/does" — try "${subject} ${doWord} ${verb}".`,
                suggestions: [`${subject} ${doWord} ${verb}`]
            });
        }
        return issues;
    }

    // ============================================================
    // 5. MAIN VERB FORM — subject-verb agreement, using real conjugation
    //    (works for any verb in KNOWN_VERBS, not a fixed small list)
    // ============================================================
    const PRECEDING_BASE_FORM_TRIGGERS = /\b(does|did|do|can|could|will|would|shall|should|may|might|must|to)\s*$/i;

    function findSubjectVerbAgreement(text) {
        const issues = [];
        let re = /\b(he|she|it|my name)\s+([a-zA-Z]+)\b/gi;
        let m;
        while ((m = re.exec(text)) !== null) {
            const subject = m[1], verb = m[2].toLowerCase();
            if (verb === 'be' || !KNOWN_VERBS.has(verb)) continue;
            // After "does/did/can/..." the base form is correct regardless of subject
            // ("does she have", not "does she has") — skip those.
            if (PRECEDING_BASE_FORM_TRIGGERS.test(text.slice(0, m.index))) continue;
            const correctS = conjugate(verb).s;
            if (verb !== correctS) {
                issues.push({
                    start: m.index, end: m.index + m[0].length, label: 'Verb Form',
                    message: `"${subject}" needs the -s form: "${correctS}", not "${verb}".`,
                    suggestions: [`${subject} ${correctS}`]
                });
            }
        }
        re = /\b(I|you|we|they)\s+([a-zA-Z]+)\b/gi;
        while ((m = re.exec(text)) !== null) {
            const subject = m[1], word = m[2].toLowerCase();
            for (const base of KNOWN_VERBS) {
                if (base === 'be') continue;
                if (conjugate(base).s === word) {
                    issues.push({
                        start: m.index, end: m.index + m[0].length, label: 'Verb Form',
                        message: `"${subject}" takes the base form: "${base}", not "${word}".`,
                        suggestions: [`${subject} ${base}`]
                    });
                    break;
                }
            }
        }
        return issues;
    }

    // ============================================================
    // 6. ARTICLES — a/an sound rule + broadened missing-article detection
    // ============================================================
    const VOWEL_SOUND_NEED_AN = new Set(['hour', 'hours', 'honest', 'honor', 'honour', 'heir', 'herb']);
    const CONSONANT_SOUND_NEED_A = new Set(['university', 'uniform', 'unique', 'unicorn', 'user', 'usual', 'union', 'united', 'european', 'europe', 'one', 'once']);

    function correctArticleFor(word) {
        const w = word.toLowerCase();
        if (VOWEL_SOUND_NEED_AN.has(w)) return 'an';
        if (CONSONANT_SOUND_NEED_A.has(w)) return 'a';
        return /^[aeiou]/i.test(w) ? 'an' : 'a';
    }

    function findArticleMismatch(text) {
        const issues = [];
        const re = /\b(a|an)\s+([a-zA-Z]+)\b/gi;
        let m;
        while ((m = re.exec(text)) !== null) {
            const article = m[1], noun = m[2];
            const correct = correctArticleFor(noun);
            if (article.toLowerCase() !== correct) {
                issues.push({
                    start: m.index, end: m.index + m[0].length, label: 'Article',
                    message: `Use "${correct}" before "${noun}", not "${article}".`,
                    suggestions: [`${correct} ${noun}`]
                });
            }
        }
        return issues;
    }

    // Broadened via blacklist instead of a small countable-noun whitelist: assume the word
    // after a transitive verb IS a countable noun needing an article, UNLESS it's a known
    // uncountable/mass noun, a pronoun, a verb, a common adjective, or already has a
    // determiner. This catches far more nouns than a fixed list ever could.
    const UNCOUNTABLE_NOUNS = new Set(['water', 'milk', 'coffee', 'tea', 'juice', 'rice', 'bread', 'cheese',
        'meat', 'sugar', 'salt', 'butter', 'oil', 'money', 'furniture', 'luggage', 'baggage', 'equipment',
        'information', 'advice', 'news', 'homework', 'work', 'traffic', 'weather', 'music', 'art', 'love',
        'hate', 'happiness', 'sadness', 'anger', 'fear', 'hope', 'knowledge', 'wisdom', 'intelligence',
        'education', 'health', 'wealth', 'poverty', 'freedom', 'peace', 'violence', 'pollution', 'energy',
        'electricity', 'gas', 'oxygen', 'air', 'rain', 'snow', 'ice', 'fire', 'smoke', 'dust', 'sand', 'grass',
        'wood', 'paper', 'glass', 'plastic', 'metal', 'gold', 'silver', 'cotton', 'wool', 'silk', 'leather',
        'blood', 'fun', 'help', 'luck', 'time', 'space', 'science', 'math', 'mathematics', 'physics',
        'chemistry', 'biology', 'history', 'geography', 'literature', 'transportation', 'research', 'progress',
        'evidence', 'proof', 'access', 'permission', 'patience', 'confidence', 'courage', 'honesty', 'pride',
        'shame', 'guilt', 'stress', 'anxiety', 'depression', 'exercise', 'sleep', 'food', 'fruit', 'corn',
        'wheat', 'flour', 'spinach', 'fish', 'chicken', 'beef', 'pork']);

    const NON_NOUN_WORDS = new Set(['to', 'a', 'an', 'the', 'my', 'your', 'his', 'her', 'its', 'our', 'their',
        'this', 'that', 'these', 'those', 'some', 'any', 'no', 'much', 'many', 'more', 'most', 'less', 'least',
        'him', 'her', 'them', 'us', 'me', 'you', 'it', 'here', 'there', 'now', 'then', 'today', 'tomorrow',
        'yesterday', 'well', 'good', 'bad', 'nice', 'great', 'sure', 'ready', 'happy', 'sad', 'busy', 'tired',
        'fine', 'okay', 'right', 'wrong', 'up', 'down', 'out', 'in', 'on', 'off', 'away', 'back', 'again']);

    function findMissingArticle(text) {
        const issues = [];
        const re = /\b(have|need|want|like|see|buy|get|own|found|write|read|make)\s+([a-zA-Z]+)\b/gi;
        let m;
        while ((m = re.exec(text)) !== null) {
            const verb = m[1], nounRaw = m[2], noun = nounRaw.toLowerCase();
            if (UNCOUNTABLE_NOUNS.has(noun) || NON_NOUN_WORDS.has(noun) || KNOWN_VERBS.has(noun)) continue;
            if (/^[A-Z]/.test(nounRaw)) continue; // likely a proper noun/name
            if (/s$/.test(noun) && !/ss$/.test(noun)) continue; // likely already plural
            if (noun.length < 3) continue; // avoid short function-word false positives
            const article = correctArticleFor(noun);
            issues.push({
                start: m.index, end: m.index + m[0].length, label: 'Article',
                message: `Singular countable nouns usually need an article: "${verb} ${article} ${noun}".`,
                suggestions: [`${verb} ${article} ${noun}`]
            });
        }
        return issues;
    }

    // ============================================================
    // 7. PREPOSITION PAIRING — common fixed adjective/verb + preposition combos
    // ============================================================
    const PREPOSITION_PAIRS = {
        'interested': 'in', 'good': 'at', 'bad': 'at', 'married': 'to', 'depend': 'on',
        'listen': 'to', 'arrive': 'at', 'afraid': 'of', 'proud': 'of', 'tired': 'of',
        'famous': 'for', 'responsible': 'for', 'similar': 'to', 'different': 'from',
        'angry': 'at', 'worried': 'about', 'excited': 'about', 'sorry': 'for',
        'thankful': 'for', 'capable': 'of', 'aware': 'of', 'fond': 'of', 'satisfied': 'with',
        'pleased': 'with', 'busy': 'with', 'compare': 'to', 'wait': 'for', 'apologize': 'for',
        'agree': 'with', 'believe': 'in', 'succeed': 'in', 'participate': 'in', 'consist': 'of',
        'apply': 'for', 'search': 'for', 'ask': 'for', 'look': 'for', 'care': 'about'
    };
    // The wrong preposition each of the above is commonly confused with, so we only flag a
    // likely real mistake rather than any preposition we simply didn't expect.
    const COMMON_PREPOSITIONS = ['in', 'on', 'at', 'to', 'for', 'from', 'with', 'of', 'about'];

    function findPrepositionErrors(text) {
        const issues = [];
        const words = Object.keys(PREPOSITION_PAIRS).join('|');
        const re = new RegExp(`\\b(${words})\\s+(${COMMON_PREPOSITIONS.join('|')})\\b`, 'gi');
        let m;
        while ((m = re.exec(text)) !== null) {
            const word = m[1].toLowerCase(), usedPrep = m[2].toLowerCase();
            const correctPrep = PREPOSITION_PAIRS[word];
            if (usedPrep !== correctPrep) {
                issues.push({
                    start: m.index, end: m.index + m[0].length, label: 'Word Choice',
                    message: `"${word}" is usually followed by "${correctPrep}", not "${usedPrep}".`,
                    suggestions: [`${word} ${correctPrep}`]
                });
            }
        }
        return issues;
    }

    // ============================================================
    // 8. SENTENCE STRUCTURE — basic missing-main-verb check
    // ============================================================
    const BE_VERBS = ['am', 'is', 'are', 'was', 'were', 'be', 'being', 'been'];
    const MODALS = ['can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must'];

    function looksLikeVerb(word) {
        const w = word.toLowerCase();
        if (BE_VERBS.includes(w) || MODALS.includes(w)) return true;
        if (KNOWN_VERBS.has(w)) return true;
        for (const base of KNOWN_VERBS) {
            const c = conjugate(base);
            if (w === c.s || w === c.ing || w === c.past) return true;
        }
        if (/ing$/.test(w) && w.length > 4) return true;
        if (/ed$/.test(w) && w.length > 3) return true;
        return false;
    }

    function findMissingMainVerb(text) {
        const words = text.trim().split(/\s+/).filter(Boolean);
        if (words.length < 3) return [];
        const hasVerb = words.some(w => looksLikeVerb(w.replace(/[^a-zA-Z]/g, '')));
        if (hasVerb) return [];
        return [{
            start: 0, end: text.length, label: 'Sentence Structure',
            message: `This sentence doesn't seem to have a main verb — every sentence needs one (e.g. "am", "go", "like").`,
            suggestions: []
        }];
    }

    // ============================================================
    // 9. CONTEXT-AWARE TENSE CHECK
    //    Uses the current conversation turn's own `suggestedAnswer` (already present in
    //    content.js for most turns) as the "expected tense" reference, instead of trying to
    //    guess tense in a vacuum. Compare what tense category the user's answer falls into
    //    against what tense category the scenario's own model answer falls into.
    //
    //    Why this scales with new content automatically: it derives the expected tense from
    //    whatever suggestedAnswer text the new scenario/turn already includes — no per-turn
    //    metadata needs to be authored, and no code here needs to change when scenarios are
    //    added, as long as new turns keep including a suggestedAnswer field (already the
    //    established content.js pattern).
    // ============================================================

    // Derived from IRREGULAR_VERBS above (not duplicated) so the two tables can't drift apart.
    const IRREGULAR_PP_LIST = Object.values(IRREGULAR_VERBS).map(v => v.pp).filter(Boolean);
    // Verbs whose past form is spelled the same as the base (let, put, cut, set, read, hit...)
    // are excluded from past-tense detection — spelling alone can't disambiguate "let's find"
    // (present) from a genuine past use, and the present case is far more common in speech.
    const IRREGULAR_PAST_LIST = [];
    Object.entries(IRREGULAR_VERBS).forEach(([base, v]) => {
        const past = v.past.split('/')[0];
        if (past !== base) IRREGULAR_PAST_LIST.push(past);
    });
    const PAST_PARTICIPLE_ADJECTIVES = new Set(['interested', 'excited', 'tired', 'bored', 'married',
        'worried', 'surprised', 'pleased', 'scared', 'annoyed', 'confused', 'relaxed', 'based', 'located']);

    const TENSE_LABELS = {
        'future': 'future tense (e.g. "will...")',
        'present-perfect': 'present perfect (e.g. "have/has been...")',
        'past': 'past tense',
        'present-continuous': 'present continuous (e.g. "is/am/are ...ing")',
        'present-simple': 'present tense'
    };

    // Coarse, pattern-based tense classifier — not a real parser, so treat its output as a
    // soft signal (see checkTenseAgainstReference's low weight/gentle phrasing below), not a
    // hard verdict. It's checked against 236 real suggestedAnswer strings from content.js
    // during development to keep the false-positive rate low.
    function classifyTense(text) {
        const t = ' ' + text.toLowerCase() + ' ';
        if (/\b(will|going to)\b/.test(t)) return 'future';
        if (/\b(have|has)\s+been\b/.test(t)) return 'present-perfect';
        if (IRREGULAR_PP_LIST.length && new RegExp(`\\b(have|has)\\s+(${IRREGULAR_PP_LIST.join('|')})\\b`, 'i').test(t)) return 'present-perfect';
        if (/\b(have|has)\s+\w+ed\b/i.test(t)) return 'present-perfect';
        if (/\b(was|were)\b/.test(t)) return 'past';
        if (/\bdid\b/.test(t)) return 'past';
        if (IRREGULAR_PAST_LIST.length && new RegExp(`\\b(${IRREGULAR_PAST_LIST.join('|')})\\b`, 'i').test(t)) return 'past';
        const wordsInText = t.match(/\b\w{3,}ed\b/gi) || [];
        if (wordsInText.some(w => !PAST_PARTICIPLE_ADJECTIVES.has(w.toLowerCase()))) return 'past';
        if (/\b(am|is|are)\s+\w+ing\b/.test(t)) return 'present-continuous';
        return 'present-simple';
    }

    // Compares the user's tense against the current turn's own suggestedAnswer. Returns [] if
    // they match, referenceText is missing, or the input is too short to classify reliably.
    function checkTenseAgainstReference(userText, referenceText) {
        if (!referenceText) return [];
        const wordCount = userText.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount < 3) return [];
        const expected = classifyTense(referenceText);
        const actual = classifyTense(userText);
        if (expected === actual) return [];
        return [{
            start: 0, end: userText.length, label: 'Tense',
            message: `This reply usually calls for ${TENSE_LABELS[expected] || expected} (like the example answer), but yours reads more like ${TENSE_LABELS[actual] || actual}. Worth a second look if that wasn't intentional.`,
            suggestions: []
        }];
    }

    // ============================================================
    // Public API
    // ============================================================
    function check(text) {
        try {
            const issues = [
                ...findMissingHelpingVerbForGerund(text),
                ...findMissingDoSupport(text),
                ...findSubjectVerbAgreement(text),
                ...findArticleMismatch(text),
                ...findMissingArticle(text),
                ...findPrepositionErrors(text),
                ...findMissingMainVerb(text)
            ];
            return { ok: true, error: null, issues };
        } catch (e) {
            console.error('[grammar-engine] check failed:', e);
            return { ok: false, error: (e && e.message) || 'grammar_engine_failed', issues: [] };
        }
    }

    // Runs the standard check AND the context-aware tense check together, given the current
    // turn's reference answer. This is the function the app should call during a live
    // conversation turn; check() alone is available for context-free use (e.g. free-speak mode).
    function checkWithContext(text, referenceAnswer) {
        const base = check(text);
        try {
            const tenseIssues = checkTenseAgainstReference(text, referenceAnswer);
            return { ok: base.ok, error: base.error, issues: [...base.issues, ...tenseIssues] };
        } catch (e) {
            console.error('[grammar-engine] tense check failed:', e);
            return base;
        }
    }

    global.GrammarEngine = { check, checkWithContext, classifyTense, checkTenseAgainstReference, conjugate, toSForm, toIngForm, toEdForm };
})(typeof window !== 'undefined' ? window : globalThis);
