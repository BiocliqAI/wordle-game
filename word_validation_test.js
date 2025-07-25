// Word validation test script for Wordle game
// Tests common 5-letter words against the current word list

class WordValidationTest {
    constructor() {
        // Current word list from script.js (extracted)
        this.currentWordList = [
            'ABACK', 'ABASE', 'ABASH', 'ABATE', 'ABBEY', 'ABBOT', 'ABODE', 'ABORT', 'ABOUT', 'ABOVE',
            'ABUSE', 'ABYSS', 'ACORN', 'ACTED', 'ACTOR', 'ACUTE', 'ADAGE', 'ADAPT', 'ADDED', 'ADDER',
            'ADMIT', 'ADOBE', 'ADOPT', 'ADULT', 'AFFIX', 'AFIRE', 'AFOOT', 'AFORE', 'AFTER', 'AGAIN',
            'AGENT', 'AGILE', 'AGING', 'AGONY', 'AGREE', 'AHEAD', 'AIDER', 'AISLE', 'ALARM', 'ALBUM',
            'ALERT', 'ALGAE', 'ALIBI', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLAY', 'ALLEY', 'ALLOT',
            'ALLOW', 'ALLOY', 'ALONE', 'ALONG', 'ALOOF', 'ALOUD', 'ALPHA', 'ALTAR', 'ALTER', 'AMAZE',
            'AMBER', 'AMBLE', 'AMEND', 'AMISS', 'AMONG', 'AMPLE', 'AMPLY', 'AMUSE', 'ANGEL', 'ANGER',
            'ANGLE', 'ANGRY', 'ANGST', 'ANIME', 'ANKLE', 'ANNOY', 'ANNUL', 'ANODE', 'ANTIC', 'ANVIL',
            'AORTA', 'APART', 'APHID', 'APING', 'APNEA', 'APPLE', 'APPLY', 'ARENA', 'ARGUE', 'ARISE',
            'ARMOR', 'AROMA', 'AROSE', 'ARRAY', 'ARROW', 'ARSON', 'ARTSY', 'ASCOT', 'ASHEN', 'ASIDE',
            'ASKEW', 'ASSAY', 'ASSET', 'ATOLL', 'ATONE', 'ATTIC', 'AUDIO', 'AUDIT', 'AUGUR', 'AUNTY',
            'AVAIL', 'AVERT', 'AVOID', 'AWAKE', 'AWARD', 'AWARE', 'AWASH', 'AWFUL', 'AWOKE', 'AXIAL',
            'AXIOM', 'AXION', 'AZURE', 'BACON', 'BADGE', 'BADLY', 'BAGEL', 'BAGGY', 'BAKER', 'BALER',
            'BALMY', 'BANAL', 'BANJO', 'BARGE', 'BARON', 'BASAL', 'BASIC', 'BASIL', 'BASIN', 'BASIS',
            'BASTE', 'BATCH', 'BATHE', 'BATON', 'BATTY', 'BAULK', 'BAWDY', 'BAYOU', 'BEACH', 'BEADY',
            'BEARD', 'BEAST', 'BEECH', 'BEEFY', 'BEIGE', 'BEING', 'BELCH', 'BELIE', 'BELLE', 'BELLY',
            'BELOW', 'BENCH', 'BERET', 'BERRY', 'BERTH', 'BESET', 'BETEL', 'BEVEL', 'BEWRY', 'BIDED',
            'BIDET', 'BIGOT', 'BILGE', 'BILLY', 'BINGE', 'BINGO', 'BIOME', 'BIRCH', 'BIRTH', 'BISON',
            'BITTY', 'BLACK', 'BLADE', 'BLAME', 'BLAND', 'BLANK', 'BLARE', 'BLAST', 'BLAZE', 'BLEAK',
            'BLEAT', 'BLEED', 'BLEEP', 'BLEND', 'BLESS', 'BLIMP', 'BLIND', 'BLINK', 'BLISS', 'BLITZ',
            'BLOAT', 'BLOB', 'BLOCK', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLOWN', 'BLUES', 'BLUFF',
            'BLUNT', 'BLURB', 'BLURT', 'BLUSH', 'BOARD', 'BOAST', 'BOBBY', 'BODED', 'BOGEY', 'BOGIE',
            'BOILS', 'BOING', 'BOINK', 'BOLTS', 'BOMB', 'BONED', 'BONER', 'BONES', 'BONGO', 'BONUS',
            'BOOBS', 'BOOGY', 'BOOKS', 'BOOMS', 'BOOST', 'BOOTH', 'BOOTS', 'BOOTY', 'BOOZE', 'BOOZY',
            'BORAX', 'BORNE', 'BOSOM', 'BOSSY', 'BOUND', 'BOWEL', 'BOWER', 'BOWLS', 'BOXED', 'BOXER',
            'BOXES', 'BRACE', 'BRAID', 'BRAIN', 'BRAKE', 'BRAND', 'BRASH', 'BRASS', 'BRAVE', 'BRAVO',
            'BREAD', 'BREAK', 'BREED', 'BRIAR', 'BRIBE', 'BRICK', 'BRIDE', 'BRIEF', 'BRINE', 'BRING',
            'BRINK', 'BRINY', 'BRISK', 'BROAD', 'BROIL', 'BROKE', 'BROOD', 'BROOK', 'BROOM', 'BROTH',
            'BROWN', 'BRUNT', 'BRUSH', 'BRUTE', 'BUDDY', 'BUDGE', 'BUGGY', 'BUGLE', 'BUILD', 'BUILT',
            'BULGE', 'BULKY', 'BULLY', 'BUNCH', 'BUNNY', 'BURLY', 'BURNT', 'BURQA', 'BURRO', 'BURST',
            'BUSES', 'BUSHY', 'BYLAW', 'BYTE', 'CABIN', 'CABLE', 'CACHE', 'CACTI', 'CADDY', 'CADET',
            'CAGEY', 'CAIRN', 'CAMEL', 'CAMEO', 'CANAL', 'CANDY', 'CANNY', 'CANOE', 'CANON', 'CAPER',
            'CAPUT', 'CARAT', 'CARGO', 'CAROL', 'CARRY', 'CARVE', 'CASTE', 'CATCH', 'CATER', 'CATTY',
            'CAULK', 'CAUSE', 'CAVIL', 'CEASE', 'CEDAR', 'CELLO', 'CENTS', 'CHAFF', 'CHAIN', 'CHAIR',
            'CHALK', 'CHAMP', 'CHANT', 'CHAOS', 'CHARD', 'CHARM', 'CHART', 'CHASE', 'CHASM', 'CHEAP',
            'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHESS', 'CHEST', 'CHICK', 'CHIEF', 'CHILD', 'CHILI',
            'CHILL', 'CHIMP', 'CHINA', 'CHIRP', 'CHIVE', 'CHOCK', 'CHOIR', 'CHOKE', 'CHORD', 'CHORE',
            'CHOSE', 'CHUCK', 'CHUMP', 'CHUNK', 'CHURN', 'CHUTE', 'CIDER', 'CIGAR', 'CINCH', 'CIRCA',
            'CIVIC', 'CIVIL', 'CLACK', 'CLAIM', 'CLAMP', 'CLANG', 'CLANK', 'CLASH', 'CLASP', 'CLASS',
            'CLEAN', 'CLEAR', 'CLEAT', 'CLEFT', 'CLERK', 'CLICK', 'CLIFF', 'CLIMB', 'CLING', 'CLINK',
            'CLOAK', 'CLOCK', 'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN', 'CLUBS',
            'CLUCK', 'CLUED', 'CLUMP', 'CLUNG', 'CLUNK', 'COACH', 'COAST', 'COCOA', 'CODEX', 'CODER',
            'CODES', 'COLON', 'COLOR', 'COMET', 'COMFY', 'COMIC', 'COMMA', 'CONCH', 'CONDO', 'CONIC',
            'COPSE', 'CORAL', 'CORDS', 'CORNY', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COUPE', 'COURT',
            'COVEN', 'COVER', 'COWER', 'CRACK', 'CRAFT', 'CRAMP', 'CRANE', 'CRANK', 'CRASH', 'CRASS',
            'CRATE', 'CRAVE', 'CRAWL', 'CRAZE', 'CRAZY', 'CREAK', 'CREAM', 'CREED', 'CREEK', 'CREEP',
            'CREME', 'CREPE', 'CRESS', 'CREST', 'CRICK', 'CRIED', 'CRIER', 'CRIES', 'CRIME', 'CRIMP',
            'CRISP', 'CROAK', 'CROCK', 'CROFT', 'CRONE', 'CRONY', 'CROOK', 'CROSS', 'CROUP', 'CROWD',
            'CROWN', 'CRUDE', 'CRUEL', 'CRUMB', 'CRUMP', 'CRUSH', 'CRUST', 'CRYPT', 'CUBIC', 'CUMIN',
            'CUOMO', 'CUPID', 'CURLY', 'CURRY', 'CURSE', 'CURVE', 'CURVY', 'CUTIE', 'CYBER', 'CYCLE',
            'CYNIC', 'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DALLY', 'DANCE', 'DANDY', 'DATUM', 'DAUNT',
            'DEALS', 'DEALT', 'DEATH', 'DEBAR', 'DEBIT', 'DEBUG', 'DEBUT', 'DECAL', 'DECAY', 'DECOR',
            'DECOY', 'DECRY', 'DEFER', 'DEIGN', 'DEITY', 'DELAY', 'DELTA', 'DELVE', 'DEMON', 'DEMUR',
            'DENIM', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY', 'DETER', 'DETOX', 'DEUCE', 'DEVIL', 'DIARY',
            'DICEY', 'DIGIT', 'DILLY', 'DIMLY', 'DINER', 'DINGO', 'DINGY', 'DIODE', 'DIRGE', 'DIRTY',
            'DISCO', 'DITCH', 'DITTO', 'DITTY', 'DIVER', 'DIZZY', 'DOCK', 'DODGE', 'DODO', 'DOILY',
            'DOING', 'DOLLY', 'DONOR', 'DONUT', 'DOPEY', 'DOUBT', 'DOUGH', 'DOUSE', 'DOWDY', 'DOWER',
            'DOWNY', 'DOWRY', 'DOZEN', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA', 'DRANK', 'DRAPE', 'DRAWL',
            'DRAWN', 'DREAD', 'DREAM', 'DREAR', 'DRESS', 'DRIED', 'DRIER', 'DRIFT', 'DRILL', 'DRINK',
            'DRIVE', 'DROIT', 'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROWN', 'DRUID', 'DRUNK', 'DRYER',
            'DRYLY', 'DUCHY', 'DUCKY', 'DUMMY', 'DUMPY', 'DUNCE', 'DUSKY', 'DUSTY', 'DUTCH', 'DUVET',
            'DWARF', 'DWELL', 'DYEING', 'EAGER', 'EAGLE', 'EARLY', 'EARTH', 'EASEL', 'EATEN', 'EATER',
            'EAVES', 'EBONY', 'ECLAT', 'EDICT', 'EDIFY', 'EERIE', 'EGRET', 'EIGHT', 'EJECT', 'EKING',
            'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN', 'ELIDE', 'ELITE', 'ELOPE', 'ELUDE',
            'ELVES', 'EMBED', 'EMBER', 'EMCEE', 'EMPTY', 'ENACT', 'ENDOW', 'ENEMA', 'ENEMY', 'ENJOY',
            'ENNUI', 'ENSUE', 'ENTER', 'ENTRY', 'ENVOY', 'EPOCH', 'EPOXY', 'EQUAL', 'EQUIP', 'ERASE',
            'ERECT', 'ERODE', 'ERROR', 'ERUPT', 'ESSAY', 'ESTER', 'ETHER', 'ETHIC', 'ETHOS', 'ETUDE',
            'EVADE', 'EVENT', 'EVERY', 'EVICT', 'EVOKE', 'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE',
            'EXIST', 'EXPAT', 'EXPEL', 'EXTRA', 'EXULT', 'EYING', 'FABLE', 'FACET', 'FAINT', 'FAIRY',
            'FAITH', 'FALSE', 'FANCY', 'FANNY', 'FARCE', 'FATAL', 'FATTY', 'FAULT', 'FAUNA', 'FAVOR',
            'FEAST', 'FECAL', 'FEIGN', 'FELLA', 'FELON', 'FEMME', 'FEMUR', 'FENCE', 'FERAL', 'FERRY',
            'FETAL', 'FETCH', 'FEVER', 'FEWER', 'FIBER', 'FICUS', 'FIELD', 'FIEND', 'FIERY', 'FIFTH',
            'FIFTY', 'FIGHT', 'FILER', 'FILET', 'FILLY', 'FILMY', 'FILTH', 'FINAL', 'FINCH', 'FINER',
            'FIRST', 'FISHY', 'FIXER', 'FIZZY', 'FJORD', 'FLACK', 'FLAIL', 'FLAIR', 'FLAKE', 'FLAKY',
            'FLAME', 'FLANK', 'FLARE', 'FLASH', 'FLASK', 'FLECK', 'FLEET', 'FLESH', 'FLICK', 'FLIER',
            'FLING', 'FLINT', 'FLIRT', 'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLOUR', 'FLOUT', 'FLOWN',
            'FLUFF', 'FLUID', 'FLUKE', 'FLUME', 'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE', 'FOAMY', 'FOCAL',
            'FOCUS', 'FOGEY', 'FOIST', 'FOLIO', 'FOLLY', 'FORAY', 'FORCE', 'FORGE', 'FORGO', 'FORME',
            'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FOYER', 'FRAIL', 'FRAME', 'FRANK', 'FRAUD', 'FREAK',
            'FREED', 'FREER', 'FRESH', 'FRIAR', 'FRIED', 'FRILL', 'FRISK', 'FRITZ', 'FROCK', 'FROLIC',
            'FRONT', 'FROST', 'FROWN', 'FROZE', 'FRUIT', 'FUDGE', 'FUGUE', 'FULLY', 'FUNGI', 'FUNKY',
            'FUNNY', 'FUROR', 'FURRY', 'FUSSY', 'FUZZY', 'GAFFE', 'GAILY', 'GAMMA', 'GAMUT', 'GASSY',
            'GAUDY', 'GAUGE', 'GAUNT', 'GAUZE', 'GAVEL', 'GAWKY', 'GAYER', 'GAYLY', 'GAZER', 'GECKO',
            'GEEKY', 'GEESE', 'GENIE', 'GENRE', 'GHOST', 'GHOUL', 'GIANT', 'GIDDY', 'GIPSY', 'GIRLY',
            'GIRTH', 'GIVEN', 'GIVER', 'GLADE', 'GLAND', 'GLARE', 'GLASS', 'GLAZE', 'GLEAM', 'GLEAN',
            'GLIDE', 'GLINT', 'GLOAT', 'GLOBE', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE', 'GLYPH', 'GNOME',
            'GOAT', 'GODLY', 'GOING', 'GOLDEN', 'GONAD', 'GONER', 'GONNA', 'GOODY', 'GOOEY', 'GOOFY',
            'GOOSE', 'GORGE', 'GOTCHA', 'GOUGE', 'GOURD', 'GRACE', 'GRADE', 'GRAFT', 'GRAIL', 'GRAIN',
            'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRATE', 'GRAVE', 'GRAVY', 'GRAZE',
            'GREAT', 'GREED', 'GREEN', 'GREET', 'GRIEF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GRIPE',
            'GROAN', 'GROAT', 'GROIN', 'GROOM', 'GROPE', 'GROSS', 'GROUP', 'GROUT', 'GROVE', 'GROWL',
            'GROWN', 'GRUEL', 'GRUFF', 'GRUNT', 'GUARD', 'GUAVA', 'GUESS', 'GUEST', 'GUIDE', 'GUILD',
            'GUILT', 'GUISE', 'GULCH', 'GULLY', 'GUMBO', 'GUMMY', 'GUPPY', 'GUSTO', 'GUSTY', 'GYPSY',
            'HABIT', 'HAIKU', 'HAINT', 'HAIRY', 'HALAL', 'HALVE', 'HANDY', 'HAPPY', 'HARDY', 'HAREM',
            'HARPY', 'HARRY', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HATER', 'HAUNT', 'HAUTE', 'HAVEN',
            'HAVER', 'HAVOC', 'HAWSE', 'HEADS', 'HEADY', 'HEARD', 'HEART', 'HEAT', 'HEAVY', 'HEDGE',
            'HEFTY', 'HEIST', 'HELIX', 'HELLO', 'HENCE', 'HERON', 'HILLY', 'HINGE', 'HIPPO', 'HIPPY',
            'HITCH', 'HOARD', 'HOBBY', 'HOIST', 'HOLLY', 'HOMER', 'HONEY', 'HONOR', 'HORDE', 'HORNY',
            'HORSE', 'HOTEL', 'HOUND', 'HOUSE', 'HOVEL', 'HOVER', 'HOWDY', 'HUMAN', 'HUMID', 'HUMOR',
            'HUMPH', 'HUMUS', 'HUNCH', 'HUNKY', 'HURRY', 'HUSKY', 'HUSSY', 'HUTCH', 'HYDRO', 'HYENA',
            'HYMEN', 'HYPER', 'ICHOR', 'ICING', 'IDEAL', 'IDIOM', 'IDIOT', 'IDLER', 'IGLOO', 'ILIAD',
            'IMAGE', 'IMBUE', 'IMPEL', 'INANE', 'INBOX', 'INCUR', 'INDEX', 'INEPT', 'INERT', 'INFER',
            'INFIX', 'INFRA', 'INGOT', 'INLAY', 'INLET', 'INNER', 'INPUT', 'INTER', 'INTRO', 'IONIC',
            'IRADE', 'IRONY', 'ISLET', 'ISSUE', 'ITCHY', 'IVORY', 'JAUNT', 'JAZZY', 'JEALOUS', 'JELLY',
            'JENNY', 'JERKY', 'JETTY', 'JEWEL', 'JIFFY', 'JIMMY', 'JIVER', 'JOCKO', 'JOKER', 'JOLLY',
            'JOUST', 'JUDGE', 'JUICE', 'JUICY', 'JUMBO', 'JUMPY', 'JUNCO', 'JUNKY', 'KAPPA', 'KARMA',
            'KAYAK', 'KEBAB', 'KHAKI', 'KICKY', 'KIDDO', 'KILN', 'KIOSK', 'KITTY', 'KIWI', 'KNACK',
            'KNEAD', 'KNEEL', 'KNELT', 'KNIFE', 'KNOCK', 'KNOLL', 'KNOWN', 'KOALA', 'KRILL', 'LABEL',
            'LABOR', 'LACED', 'LACER', 'LACEY', 'LACKS', 'LADY', 'LAITY', 'LANCE', 'LANKY', 'LAPEL',
            'LAPSE', 'LARGE', 'LARVA', 'LASER', 'LASSO', 'LATCH', 'LATER', 'LATHE', 'LATTE', 'LAUGH',
            'LAYER', 'LEACH', 'LEAFY', 'LEAKY', 'LEANT', 'LEAPT', 'LEARN', 'LEASE', 'LEASH', 'LEAST',
            'LEAVE', 'LEDGE', 'LEECH', 'LEERY', 'LEFTY', 'LEGAL', 'LEGGY', 'LEMON', 'LEMUR', 'LEPER',
            'LEVEL', 'LEVER', 'LIBEL', 'LIEGE', 'LIGHT', 'LIKEN', 'LILAC', 'LIMBO', 'LIMIT', 'LINED',
            'LINEN', 'LINER', 'LINGO', 'LINKS', 'LIONS', 'LIPID', 'LITHE', 'LIVE', 'LIVER', 'LIVID',
            'LLAMA', 'LOAMY', 'LOATH', 'LOBBY', 'LOCAL', 'LOCUS', 'LODGE', 'LOFTY', 'LOGIC', 'LOGIN',
            'LOOPY', 'LOOSE', 'LORDY', 'LOSER', 'LOUSY', 'LOVER', 'LOWER', 'LOWLY', 'LOYAL', 'LUCID',
            'LUCKY', 'LUMEN', 'LUMPY', 'LUNAR', 'LUNCH', 'LUNGE', 'LUPUS', 'LURCH', 'LURID', 'LUSTY',
            'LYING', 'LYMPH', 'LYNCH', 'LYRIC', 'MACAW', 'MACHO', 'MACRO', 'MADAM', 'MADLY', 'MAFIA',
            'MAGIC', 'MAGMA', 'MAIZE', 'MAJOR', 'MAKER', 'MAMBO', 'MAMMA', 'MAMMY', 'MANGA', 'MANGE',
            'MANGO', 'MANGY', 'MANIA', 'MANIC', 'MANLY', 'MANOR', 'MAPLE', 'MARCH', 'MARE', 'MARRY',
            'MARSH', 'MASON', 'MASSE', 'MATCH', 'MATER', 'MATEY', 'MAUVE', 'MAXIM', 'MAYBE', 'MAYOR',
            'MEALY', 'MEANT', 'MEATY', 'MECCA', 'MEDAL', 'MEDIA', 'MEDIC', 'MELEE', 'MELON', 'MEMOIR',
            'MENOY', 'MERCY', 'MERGE', 'MERIT', 'MERRY', 'MESH', 'MESSY', 'METAL', 'METER', 'METRO',
            'MIDGE', 'MIDST', 'MIGHT', 'MILKY', 'MIMIC', 'MINCE', 'MINER', 'MINOR', 'MINTY', 'MINUS',
            'MIRTH', 'MISSY', 'MIXED', 'MIXER', 'MOCHA', 'MODAL', 'MODEL', 'MODEM', 'MOGUL', 'MOIST',
            'MOLAR', 'MOLDY', 'MONEY', 'MONTH', 'MOODY', 'MOOSE', 'MORAL', 'MORON', 'MORPH', 'MOSSY',
            'MOTEL', 'MOTIF', 'MOTOR', 'MOTTO', 'MOULD', 'MOUND', 'MOUNT', 'MOURN', 'MOUSE', 'MOUTH',
            'MOVER', 'MOVIE', 'MOWER', 'MUCKY', 'MUCUS', 'MUDDY', 'MULCH', 'MUMMY', 'MUNCH', 'MURAL',
            'MURKY', 'MUSHY', 'MUSIC', 'MUSKY', 'MUSTY', 'MYRRH', 'NADIR', 'NAIVE', 'NANNY', 'NASAL',
            'NASTY', 'NATAL', 'NATCH', 'NAVEL', 'NEEDY', 'NEIGH', 'NERDY', 'NEVER', 'NEWER', 'NEWLY',
            'NICER', 'NICHE', 'NIECE', 'NIGHT', 'NINJA', 'NINNY', 'NINTH', 'NOBLE', 'NOBLY', 'NOISE',
            'NOISY', 'NOMAD', 'NOOSE', 'NORTH', 'NOSEY', 'NOTCH', 'NOVEL', 'NUDGE', 'NURSE', 'NUTTY',
            'NYLON', 'NYMPH', 'OAKEN', 'OBESE', 'OCCUR', 'OCEAN', 'OCHER', 'OCTAL', 'ODDER', 'ODDLY',
            'OFFAL', 'OFFER', 'OFTEN', 'OLDEN', 'OLDER', 'OLIVE', 'OMBRE', 'OMEGA', 'ONION', 'ONSET',
            'OOOOH', 'OPERA', 'OPINE', 'OPIUM', 'OPTIC', 'ORBIT', 'ORDER', 'ORGAN', 'OTHER', 'OTTER',
            'OUGHT', 'OUNCE', 'OUTDO', 'OUTER', 'OUTGO', 'OVARY', 'OVATE', 'OVERT', 'OVINE', 'OVOID',
            'OWING', 'OWNER', 'OXIDE', 'OZONE', 'PADDY', 'PAGAN', 'PAINT', 'PAIR', 'PALSY', 'PANEL',
            'PANIC', 'PANSY', 'PANTS', 'PAPA', 'PAPER', 'PARER', 'PARKA', 'PARRY', 'PARTY', 'PASTA',
            'PASTE', 'PASTY', 'PATCH', 'PATIO', 'PATSY', 'PATTY', 'PAUSE', 'PAYEE', 'PAYER', 'PEACE',
            'PEACH', 'PEARL', 'PECAN', 'PEDAL', 'PEEP', 'PENAL', 'PENCE', 'PENNY', 'PERCH', 'PERIL',
            'PERKY', 'PESKY', 'PESTO', 'PETAL', 'PETTY', 'PHASE', 'PHONE', 'PHONY', 'PHOTO', 'PIANO',
            'PICKY', 'PIECE', 'PIETY', 'PIGGY', 'PILOT', 'PINCH', 'PINE', 'PINKY', 'PINTO', 'PIPER',
            'PIQUE', 'PITCH', 'PITHY', 'PIVOT', 'PIXIE', 'PIZZA', 'PLACE', 'PLAID', 'PLAIN', 'PLAIT',
            'PLANE', 'PLANK', 'PLANT', 'PLATE', 'PLAZA', 'PLEAD', 'PLEAT', 'PLIED', 'PLIER', 'PLOT',
            'PLUCK', 'PLUMB', 'PLUME', 'PLUMP', 'PLUNK', 'PLUSH', 'PODIUM', 'POINT', 'POISE', 'POKER',
            'POLAR', 'POLKA', 'POLLY', 'POLYP', 'POMP', 'PONCE', 'POOFY', 'POPPY', 'PORCH', 'POSER',
            'POSIT', 'POSSE', 'POUCH', 'POUND', 'POUTY', 'POWER', 'PRANK', 'PRAWN', 'PREEN', 'PRESS',
            'PRICE', 'PRICK', 'PRIDE', 'PRIED', 'PRIME', 'PRIMO', 'PRINT', 'PRIOR', 'PRISM', 'PRIVY',
            'PRIZE', 'PROBE', 'PRONE', 'PRONG', 'PROOF', 'PROSE', 'PROUD', 'PROVE', 'PROWL', 'PROXY',
            'PRUDE', 'PRUNE', 'PSALM', 'PUBIC', 'PUDGY', 'PUFFY', 'PULSE', 'PUNCH', 'PUPIL', 'PUPPY',
            'PURGE', 'PURSE', 'PUSHY', 'PUTTY', 'PYGMY', 'QUACK', 'QUAIL', 'QUAKE', 'QUALM', 'QUART',
            'QUASH', 'QUASI', 'QUEEN', 'QUEER', 'QUELL', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET',
            'QUILL', 'QUILT', 'QUIRK', 'QUITE', 'QUOTA', 'QUOTE', 'RABID', 'RACE', 'RACK', 'RADAR',
            'RADIO', 'RAINY', 'RAISE', 'RALLY', 'RALPH', 'RAMEN', 'RANCH', 'RANDY', 'RANGE', 'RAPID',
            'RARER', 'RASPY', 'RATIO', 'RATTY', 'RAVEN', 'RAYON', 'RAZZ', 'REACH', 'REACT', 'READY',
            'REALM', 'REARM', 'REBAR', 'REBEL', 'REBUS', 'REBUT', 'RECAP', 'RECUR', 'RECUT', 'REDID',
            'REDOX', 'REDUX', 'REEDS', 'REEDY', 'REFER', 'REFIT', 'REGAL', 'REHAB', 'REIGN', 'RELAX',
            'RELAY', 'RELIC', 'REMIT', 'RENAL', 'RENEW', 'REPAY', 'REPEL', 'REPLY', 'RERUN', 'RESET',
            'RESIN', 'RETCH', 'RETRO', 'RETRY', 'REUSE', 'REVEL', 'REVUE', 'RHINO', 'RHYME', 'RIDER',
            'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RIGOR', 'RINSE', 'RIPEN', 'RIPER', 'RISEN', 'RISER',
            'RISKY', 'RIVAL', 'RIVER', 'RIVET', 'ROACH', 'ROAST', 'ROBE', 'ROBOT', 'ROCKY', 'RODEO',
            'ROGER', 'ROGUE', 'ROMP', 'ROOKY', 'ROOMY', 'ROOST', 'ROOTED', 'ROPER', 'ROTTY', 'ROUGE',
            'ROUGH', 'ROUND', 'ROUSE', 'ROUTE', 'ROVER', 'ROWDY', 'ROYAL', 'RUBBER', 'RUDDY', 'RUDE',
            'RUFFLE', 'RUGBY', 'RUIN', 'RULER', 'RUMBA', 'RUMOR', 'RUPEE', 'RURAL', 'RUSTY', 'RUTHIE',
            'SADLY', 'SAFER', 'SAINT', 'SAKE', 'SALAD', 'SALLY', 'SALON', 'SALSA', 'SALTY', 'SALVE',
            'SALVO', 'SANDY', 'SANER', 'SAPPY', 'SARGE', 'SASSY', 'SATAY', 'SATIN', 'SATYR', 'SAUCE',
            'SAUCY', 'SAUNA', 'SAUTE', 'SAVOR', 'SAVVY', 'SCALD', 'SCALE', 'SCALP', 'SCAMP', 'SCANT',
            'SCARE', 'SCARF', 'SCARY', 'SCENE', 'SCENT', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP',
            'SCOPE', 'SCORE', 'SCORN', 'SCOUR', 'SCOUT', 'SCOWL', 'SCRUB', 'SCUBA', 'SEDAN', 'SEEDY',
            'SEEM', 'SEEP', 'SEER', 'SEGUE', 'SEIZE', 'SEMEN', 'SENSE', 'SEPIA', 'SERIF', 'SERUM',
            'SERVE', 'SETUP', 'SEVEN', 'SEVER', 'SEWER', 'SHACK', 'SHADE', 'SHADY', 'SHAFT', 'SHAKE',
            'SHALE', 'SHALL', 'SHAME', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP', 'SHAVE',
            'SHAWL', 'SHEAR', 'SHEDS', 'SHEEP', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHINE', 'SHINY',
            'SHIRE', 'SHIRK', 'SHIRT', 'SHOAL', 'SHOCK', 'SHOED', 'SHONE', 'SHOOK', 'SHOOT', 'SHORE',
            'SHORN', 'SHORT', 'SHOUT', 'SHOVE', 'SHOWN', 'SHOWY', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG',
            'SHUCK', 'SHUNT', 'SHUSH', 'SIDED', 'SIDLE', 'SIEGE', 'SIGHT', 'SIGMA', 'SILKY', 'SILLY',
            'SILVER', 'SINCE', 'SINEW', 'SINGE', 'SIREN', 'SISSY', 'SIXTH', 'SIXTY', 'SIZER', 'SKATE',
            'SKEET', 'SKIER', 'SKIFF', 'SKILL', 'SKIMP', 'SKINK', 'SKIRT', 'SKULK', 'SKULL', 'SKUNK',
            'SLACK', 'SLAIN', 'SLANG', 'SLANT', 'SLASH', 'SLATE', 'SLEEK', 'SLEEP', 'SLEET', 'SLEPT',
            'SLICE', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY', 'SLING', 'SLINK', 'SLOOP', 'SLOPE', 'SLOSH',
            'SLOTH', 'SLUMP', 'SLUNG', 'SLUNK', 'SLURP', 'SLUSH', 'SLYLY', 'SMACK', 'SMALL', 'SMART',
            'SMASH', 'SMEAR', 'SMELL', 'SMELT', 'SMILE', 'SMIRK', 'SMITE', 'SMITH', 'SMOCK', 'SMOKE',
            'SMOKY', 'SMOLT', 'SMOTE', 'SNACK', 'SNAIL', 'SNAKE', 'SNAKY', 'SNARE', 'SNARL', 'SNAZZ',
            'SNEAK', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE', 'SNOOP', 'SNORE', 'SNORT', 'SNOUT', 'SNOWY',
            'SNUCK', 'SNUFF', 'SOAPY', 'SOBER', 'SOGGY', 'SOLAR', 'SOLD', 'SOLE', 'SOLID', 'SOLVE',
            'SONAR', 'SONIC', 'SOOTHE', 'SOOTY', 'SORRY', 'SORT', 'SOUL', 'SOUND', 'SOUP', 'SOUR',
            'SOUTH', 'SOWED', 'SPACE', 'SPADE', 'SPARE', 'SPARK', 'SPASM', 'SPAWN', 'SPEAK', 'SPEAR',
            'SPECK', 'SPEED', 'SPELL', 'SPEND', 'SPENT', 'SPERM', 'SPICE', 'SPICY', 'SPIED', 'SPIEL',
            'SPIKE', 'SPILL', 'SPILT', 'SPINE', 'SPINY', 'SPIRE', 'SPITE', 'SPLIT', 'SPOIL', 'SPOKE',
            'SPOOF', 'SPOOK', 'SPOOL', 'SPOON', 'SPORE', 'SPORT', 'SPRAY', 'SPREE', 'SPRIG', 'SPUNK',
            'SPURN', 'SPURT', 'SQUAD', 'SQUAT', 'SQUIB', 'STACK', 'STAFF', 'STAGE', 'STAID', 'STAIN',
            'STAIR', 'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND', 'STANK', 'STAPH', 'STARE',
            'STARK', 'START', 'STASH', 'STATE', 'STAVE', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEED',
            'STEEL', 'STEEP', 'STEER', 'STEIN', 'STERN', 'STICK', 'STIFF', 'STILL', 'STILT', 'STING',
            'STINK', 'STINT', 'STOCK', 'STOIC', 'STOKE', 'STOLE', 'STOMP', 'STONE', 'STOOD', 'STOOL',
            'STOOP', 'STORE', 'STORK', 'STORM', 'STORY', 'STOUT', 'STOVE', 'STRAP', 'STRAW', 'STRAY',
            'STRIP', 'STRUT', 'STUCK', 'STUD', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNT', 'STYLE',
            'SUAVE', 'SUGAR', 'SUING', 'SUITE', 'SULKY', 'SULLY', 'SUMAC', 'SUNNY', 'SUPER', 'SURER',
            'SURGE', 'SURLY', 'SUSHI', 'SWAB', 'SWAG', 'SWAIN', 'SWAMP', 'SWANK', 'SWANS', 'SWARM',
            'SWASH', 'SWATH', 'SWEAR', 'SWEAT', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT', 'SWIFT', 'SWILL',
            'SWINE', 'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWOON', 'SWOOP', 'SWORN', 'SWUNG', 'SYNOD',
            'SYRUP', 'TABBY', 'TABLE', 'TABOO', 'TACIT', 'TACKY', 'TAFFY', 'TAINT', 'TAKEN', 'TAKER',
            'TALLY', 'TALON', 'TAMER', 'TANGO', 'TANGY', 'TAPER', 'TAPIR', 'TARDY', 'TAROT', 'TASTE',
            'TASTY', 'TATTY', 'TAUNT', 'TAWNY', 'TEACH', 'TEARY', 'TEASE', 'TEDDY', 'TEETH', 'TEMPO',
            'TENET', 'TENOR', 'TENSE', 'TENTH', 'TEPID', 'TERRY', 'TERSE', 'THANK', 'THAW', 'THEFT',
            'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THIEF', 'THIGH', 'THING', 'THINK', 'THIRD',
            'THONG', 'THORN', 'THOSE', 'THREE', 'THREW', 'THROB', 'THROW', 'THRUM', 'THUMB', 'THUMP',
            'THUNK', 'TIARA', 'TIBIA', 'TIDAL', 'TIGER', 'TIGHT', 'TILDE', 'TIMER', 'TIMID', 'TIPSY',
            'TITAN', 'TITHE', 'TITLE', 'TOAST', 'TODAY', 'TODDY', 'TOKEN', 'TONAL', 'TONGA', 'TONIC',
            'TOOTH', 'TOPAZ', 'TOPIC', 'TORCH', 'TORSO', 'TORUS', 'TOTAL', 'TOTEM', 'TOUCH', 'TOUGH',
            'TOWEL', 'TOWER', 'TOXIC', 'TOXIN', 'TRACE', 'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN',
            'TRAIT', 'TRAMP', 'TRANS', 'TRASH', 'TRASHY', 'TRAVEL', 'TRAWL', 'TREAT', 'TREND', 'TRESS',
            'TRIAD', 'TRIAL', 'TRIBE', 'TRICE', 'TRICK', 'TRIED', 'TRIPE', 'TRITE', 'TROLL', 'TROOP',
            'TROPE', 'TROUT', 'TROVE', 'TRUCE', 'TRUCK', 'TRUER', 'TRULY', 'TRUMP', 'TRUNK', 'TRUSS',
            'TRUST', 'TRUTH', 'TRYST', 'TUBAL', 'TUBER', 'TULIP', 'TULLE', 'TUMOR', 'TUNIC', 'TURBO',
            'TURF', 'TURN', 'TWANG', 'TWEED', 'TWERP', 'TWICE', 'TWILL', 'TWINE', 'TWIRL', 'TWIST',
            'TWIT', 'TWIXT', 'TYING', 'TYPAL', 'TYPED', 'TYPO', 'UBER', 'UDDER', 'ULTRA', 'UMBER',
            'UMIAK', 'UNARM', 'UNARY', 'UNCLE', 'UNCUT', 'UNDER', 'UNFED', 'UNFIT', 'UNIFY', 'UNION',
            'UNITE', 'UNITY', 'UNLIT', 'UNMET', 'UNSET', 'UNTIL', 'UNWED', 'UNZIP', 'UPPER', 'UPSET',
            'URBAN', 'URGED', 'URINE', 'USAGE', 'USHER', 'USING', 'USUAL', 'USURP', 'USURY', 'UTILE',
            'UTTER', 'VAGUE', 'VALET', 'VALID', 'VALOR', 'VALUE', 'VALVE', 'VAPOR', 'VAULT', 'VAUNT',
            'VEGAN', 'VEIN', 'VENOM', 'VENUE', 'VENUS', 'VERGE', 'VERSE', 'VERY', 'VEST', 'VETCH',
            'VETO', 'VICAR', 'VICES', 'VICHY', 'VIDEO', 'VIGIL', 'VIGOR', 'VILE', 'VILLA', 'VINE',
            'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS', 'VISIT', 'VISOR', 'VISTA', 'VITAL', 'VIVID',
            'VIXEN', 'VOCAL', 'VODKA', 'VOGUE', 'VOICE', 'VOILA', 'VOMIT', 'VOTER', 'VOUCH', 'VOWEL',
            'WACKY', 'WAFER', 'WAGER', 'WAGES', 'WAGON', 'WAIST', 'WAIVE', 'WALTZ', 'WARTY', 'WASTE',
            'WATCH', 'WATER', 'WAVER', 'WAXEN', 'WEARY', 'WEAVE', 'WEDGE', 'WEEDY', 'WEIGH', 'WEIRD',
            'WELCH', 'WENCH', 'WHACK', 'WHALE', 'WHARF', 'WHEAT', 'WHEEL', 'WHELP', 'WHIFF', 'WHILE',
            'WHINE', 'WHINY', 'WHIRL', 'WHISK', 'WHIST', 'WHITE', 'WHIZZ', 'WHOLE', 'WHOOP', 'WHOSE',
            'WIDEN', 'WIDER', 'WIDOW', 'WIELD', 'WIGHT', 'WIMPY', 'WINCH', 'WINDY', 'WIPER', 'WIRED',
            'WISER', 'WISPY', 'WITCH', 'WITTY', 'WOKEN', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE',
            'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WRACK', 'WRATH', 'WREAK', 'WRECK', 'WREST',
            'WRING', 'WRIST', 'WRITE', 'WRONG', 'WROTE', 'WRUNG', 'WRYLY', 'YACHT', 'YEARN', 'YEAST',
            'YIELD', 'YOUNG', 'YOUTH', 'ZEBRA', 'ZESTY', 'ZONAL'
        ];

        // Test words provided by user
        this.testWords = [
            'HOUSE', 'MOUSE', 'STONE', 'PLANE', 'TRAIN', 'CHAIR', 'TABLE', 'PHONE', 'MONEY', 'HAPPY',
            'SOUND', 'ROUND', 'WORLD', 'HEART', 'LIGHT', 'NIGHT', 'RIGHT', 'SIGHT', 'FIGHT', 'MIGHT',
            'THINK', 'THING', 'BRING', 'GOING', 'DOING', 'BEING', 'PLACE', 'SPACE', 'GRACE', 'PEACE',
            'PIECE', 'PRICE', 'VOICE', 'FORCE', 'DANCE', 'CHANCE', 'CHANGE', 'RANGE', 'LARGE', 'SMALL',
            'SMART', 'START', 'PARTY', 'EARLY', 'WATER', 'AFTER', 'NEVER', 'EVERY', 'OTHER', 'UNDER',
            'FIRST', 'GREAT', 'STILL', 'WHILE', 'WHERE', 'THERE', 'THESE', 'THOSE', 'AGAIN', 'ABOUT',
            'ABOVE', 'BELOW', 'WRONG', 'QUICK', 'QUIET', 'QUITE', 'SPEAK', 'BREAK', 'THANK', 'DRINK',
            'SLEEP', 'SWEET', 'CLEAN', 'CLEAR', 'CLOSE', 'LEVEL', 'FINAL', 'ROYAL', 'EQUAL', 'TOTAL',
            'METAL', 'HOTEL', 'OFFER', 'COVER', 'POWER', 'LOWER', 'TOWER', 'RIVER', 'FEVER', 'SEVEN',
            'GIVEN', 'TAKEN', 'MAKER', 'PAPER', 'SUPER', 'ENTER', 'LATER', 'TIMER', 'OWNER', 'BUYER',
            'LAYER', 'LOVER', 'ELDER', 'INNER', 'OUTER', 'UPPER', 'INTER'
        ];

        // Additional comprehensive test words
        this.additionalTestWords = [
            'ABOUT', 'ABOVE', 'ABUSE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN', 'AGENT', 'AGREE',
            'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
            'ALONG', 'ALTER', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA',
            'ARGUE', 'ARISE', 'ARMED', 'ARMOR', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD',
            'AWARE', 'BADLY', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW', 'BENCH', 'BILLY',
            'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLAST', 'BLEED', 'BLESS', 'BLIND', 'BLOCK', 'BLOOD',
            'BLOOM', 'BLOWN', 'BLUES', 'BLUNT', 'BLUSH', 'BOARD', 'BOAST', 'BOBBY', 'BONUS', 'BOOTH',
            'BOUND', 'BOWEL', 'BOXES', 'BRAIN', 'BRAND', 'BRASS', 'BRAVE', 'BREAD', 'BREAK', 'BREED',
            'BRICK', 'BRIDE', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BRUSH', 'BUILD', 'BUILT',
            'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM',
            'CHART', 'CHASE', 'CHEAP', 'CHEAT', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE',
            'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD',
            'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM',
            'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED',
            'DEALT', 'DEATH', 'DEBUG', 'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA',
            'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER',
            'EARLY', 'EARTH', 'EIGHT', 'EITHER', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY',
            'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT',
            'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET',
            'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK',
            'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE',
            'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GROSS',
            'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY',
            'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER',
            'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE',
            'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEVEL',
            'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LISTS', 'LIVED', 'LIVES', 'LOCAL', 'LOGIC', 'LOOSE',
            'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH',
            'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL',
            'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC',
            'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR',
            'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY',
            'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN',
            'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME',
            'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE',
            'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY', 'REALM', 'REBEL', 'REFER',
            'RELAX', 'RIDER', 'RIDGE', 'RIGHT', 'RIGID', 'RIVER', 'ROBOT', 'ROGER', 'ROMAN', 'ROUGH',
            'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE',
            'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
            'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIDES', 'SIGHT', 'SIGNS', 'SILLY', 'SINCE',
            'SIXTH', 'SIXTY', 'SIZED', 'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH',
            'SMOKE', 'SNAKE', 'SNOW', 'SOLID', 'SOLVE', 'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE',
            'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE',
            'STAND', 'START', 'STATE', 'STAYS', 'STEAM', 'STEEL', 'STEEP', 'STEER', 'STEPS', 'STERN',
            'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK',
            'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'SWIFT', 'SWING', 'SWISS',
            'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEAMS', 'TEETH', 'TERRY', 'TEXAS', 'THANK',
            'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE',
            'THREE', 'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER', 'TIMES', 'TIRED', 'TITLE', 'TODAY',
            'TOKEN', 'TOMMY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIL',
            'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRULY', 'TRUNK',
            'TRUST', 'TRUTH', 'TRYING', 'TWICE', 'UNCLE', 'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL',
            'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT',
            'VITAL', 'VOCAL', 'VOICE', 'WASTE', 'WATCH', 'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE',
            'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH',
            'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YOUNG', 'YOUTH'
        ];

        // Results tracking
        this.results = {
            foundWords: [],
            missingWords: [],
            totalTested: 0,
            foundCount: 0,
            missingCount: 0
        };
    }

    testWord(word) {
        return this.currentWordList.includes(word.toUpperCase());
    }

    runTests() {
        console.log('=== WORDLE WORD VALIDATION TEST ===\n');
        
        // Combine all test words and remove duplicates
        const allTestWords = [...new Set([...this.testWords, ...this.additionalTestWords])];
        
        allTestWords.forEach(word => {
            const isValid = this.testWord(word);
            this.results.totalTested++;
            
            if (isValid) {
                this.results.foundWords.push(word);
                this.results.foundCount++;
            } else {
                this.results.missingWords.push(word);
                this.results.missingCount++;
            }
        });
        
        this.analyzeResults();
        this.generateReport();
    }

    analyzeResults() {
        console.log('=== ANALYSIS RESULTS ===\n');
        
        // Basic statistics
        console.log(`Total words tested: ${this.results.totalTested}`);
        console.log(`Words found in current list: ${this.results.foundCount}`);
        console.log(`Words missing from current list: ${this.results.missingCount}`);
        console.log(`Success rate: ${((this.results.foundCount / this.results.totalTested) * 100).toFixed(1)}%\n`);
        
        // Missing words by category
        this.categorizeWords();
    }

    categorizeWords() {
        const categories = {
            'Basic/Common': ['HOUSE', 'MOUSE', 'PHONE', 'MONEY', 'HAPPY', 'LIGHT', 'NIGHT', 'RIGHT', 'SIGHT', 'FIGHT', 'MIGHT', 'THINK', 'THING', 'BRING', 'GOING', 'DOING', 'BEING', 'PLACE', 'SPACE', 'GRACE', 'PEACE', 'PIECE', 'PRICE', 'VOICE', 'FORCE', 'DANCE', 'CHANCE', 'CHANGE', 'RANGE', 'LARGE', 'SMALL', 'SMART', 'START', 'PARTY', 'EARLY', 'WATER', 'AFTER', 'NEVER', 'EVERY', 'OTHER', 'UNDER', 'FIRST', 'GREAT', 'STILL', 'WHILE', 'WHERE', 'THERE', 'THESE', 'THOSE', 'AGAIN', 'ABOUT', 'ABOVE', 'BELOW', 'WRONG', 'QUICK', 'QUIET', 'QUITE', 'SPEAK', 'BREAK', 'THANK', 'DRINK', 'SLEEP', 'SWEET', 'CLEAN', 'CLEAR', 'CLOSE', 'LEVEL', 'FINAL', 'ROYAL', 'EQUAL', 'TOTAL', 'METAL', 'HOTEL', 'OFFER', 'COVER', 'POWER', 'LOWER', 'TOWER', 'RIVER', 'FEVER', 'SEVEN', 'GIVEN', 'TAKEN', 'MAKER', 'PAPER', 'SUPER', 'ENTER', 'LATER', 'TIMER', 'OWNER', 'BUYER', 'LAYER', 'LOVER', 'ELDER', 'INNER', 'OUTER', 'UPPER', 'INTER'],
            'Furniture/Objects': ['CHAIR', 'TABLE', 'STONE', 'PLANE', 'TRAIN'],
            'Actions/Verbs': ['SOUND', 'ROUND', 'WORLD', 'HEART'],
            'Descriptive/Adjectives': [],
            'Time/Sequence': [],
            'Body/Health': [],
            'Technology/Modern': [],
            'Abstract/Concepts': []
        };

        console.log('=== MISSING WORDS BY CATEGORY ===\n');
        
        Object.keys(categories).forEach(category => {
            const missingInCategory = this.results.missingWords.filter(word => 
                categories[category].includes(word)
            );
            
            if (missingInCategory.length > 0) {
                console.log(`${category}:`);
                missingInCategory.forEach(word => console.log(`  - ${word}`));
                console.log('');
            }
        });
        
        // Uncategorized missing words
        const categorizedWords = Object.values(categories).flat();
        const uncategorized = this.results.missingWords.filter(word => 
            !categorizedWords.includes(word)
        );
        
        if (uncategorized.length > 0) {
            console.log('Uncategorized missing words:');
            uncategorized.forEach(word => console.log(`  - ${word}`));
            console.log('');
        }
    }

    generateReport() {
        console.log('=== MISSING WORDS REPORT ===\n');
        
        if (this.results.missingWords.length > 0) {
            console.log('The following common words are missing from the current Wordle word list:');
            this.results.missingWords.sort().forEach(word => console.log(`  - ${word}`));
        } else {
            console.log('All tested words are present in the current word list!');
        }
        
        console.log('\n=== PATTERNS IDENTIFIED ===\n');
        this.identifyPatterns();
        
        console.log('\n=== RECOMMENDATIONS ===\n');
        this.generateRecommendations();
    }

    identifyPatterns() {
        const missing = this.results.missingWords;
        
        if (missing.length === 0) {
            console.log('No patterns to identify - all words are present.');
            return;
        }
        
        // Pattern analysis
        const patterns = {
            'Basic daily words': missing.filter(w => ['HOUSE', 'PHONE', 'MONEY', 'HAPPY'].includes(w)),
            'Common verbs': missing.filter(w => ['SPEAK', 'BREAK', 'THANK', 'DRINK', 'SLEEP'].includes(w)),
            'Descriptive words': missing.filter(w => ['SWEET', 'CLEAN', 'CLEAR', 'CLOSE', 'QUICK', 'QUIET', 'QUITE'].includes(w)),
            'Sequence words': missing.filter(w => ['FIRST', 'FINAL', 'LEVEL', 'TOTAL', 'EQUAL'].includes(w)),
            'Relationship words': missing.filter(w => ['OWNER', 'BUYER', 'LAYER', 'LOVER', 'ELDER', 'INNER', 'OUTER', 'UPPER', 'INTER'].includes(w)),
            'Location words': missing.filter(w => ['PLACE', 'SPACE', 'UNDER', 'ABOVE', 'BELOW', 'WHERE', 'THERE'].includes(w)),
            'Time words': missing.filter(w => ['EARLY', 'LATER', 'TIMER', 'NEVER', 'WHILE'].includes(w)),
            'Common objects': missing.filter(w => ['CHAIR', 'TABLE', 'STONE', 'PLANE', 'TRAIN', 'PAPER', 'METAL', 'HOTEL'].includes(w))
        };
        
        Object.entries(patterns).forEach(([pattern, words]) => {
            if (words.length > 0) {
                console.log(`${pattern}: ${words.join(', ')}`);
            }
        });
    }

    generateRecommendations() {
        console.log('Based on the analysis, here are the recommendations:');
        console.log('');
        
        const highPriorityWords = [
            'HOUSE', 'PHONE', 'MONEY', 'HAPPY', 'LIGHT', 'NIGHT', 'RIGHT', 'SIGHT', 'FIGHT', 'MIGHT',
            'THINK', 'THING', 'BRING', 'GOING', 'DOING', 'BEING', 'PLACE', 'SPACE', 'GRACE', 'PEACE',
            'PIECE', 'PRICE', 'VOICE', 'FORCE', 'DANCE', 'CHANCE', 'CHANGE', 'RANGE', 'LARGE', 'SMALL',
            'SMART', 'START', 'PARTY', 'EARLY', 'WATER', 'AFTER', 'NEVER', 'EVERY', 'OTHER', 'UNDER',
            'FIRST', 'GREAT', 'STILL', 'WHILE', 'WHERE', 'THERE', 'THESE', 'THOSE', 'AGAIN', 'ABOUT',
            'ABOVE', 'BELOW', 'WRONG', 'QUICK', 'QUIET', 'QUITE', 'SPEAK', 'BREAK', 'THANK', 'DRINK',
            'SLEEP', 'SWEET', 'CLEAN', 'CLEAR', 'CLOSE', 'LEVEL', 'FINAL', 'ROYAL', 'EQUAL', 'TOTAL'
        ];
        
        const missingHighPriority = this.results.missingWords.filter(word => 
            highPriorityWords.includes(word)
        );
        
        if (missingHighPriority.length > 0) {
            console.log('1. HIGH PRIORITY - Add these extremely common words:');
            missingHighPriority.forEach(word => console.log(`   - ${word}`));
            console.log('');
        }
        
        const mediumPriorityWords = [
            'CHAIR', 'TABLE', 'STONE', 'PLANE', 'TRAIN', 'METAL', 'HOTEL', 'OFFER', 'COVER', 'POWER',
            'LOWER', 'TOWER', 'RIVER', 'FEVER', 'SEVEN', 'GIVEN', 'TAKEN', 'MAKER', 'PAPER', 'SUPER',
            'ENTER', 'LATER', 'TIMER', 'OWNER', 'BUYER', 'LAYER', 'LOVER', 'ELDER', 'INNER', 'OUTER',
            'UPPER', 'INTER'
        ];
        
        const missingMediumPriority = this.results.missingWords.filter(word => 
            mediumPriorityWords.includes(word) && !missingHighPriority.includes(word)
        );
        
        if (missingMediumPriority.length > 0) {
            console.log('2. MEDIUM PRIORITY - Add these common words:');
            missingMediumPriority.forEach(word => console.log(`   - ${word}`));
            console.log('');
        }
        
        console.log('3. WORD LIST ANALYSIS:');
        console.log('   - Current word list contains', this.currentWordList.length, 'words');
        console.log('   - Missing', this.results.missingCount, 'out of', this.results.totalTested, 'tested common words');
        console.log('   - Consider expanding the word list to include more everyday vocabulary');
        console.log('');
        
        console.log('4. SPECIFIC RECOMMENDATIONS:');
        console.log('   - Focus on adding basic household items: HOUSE, CHAIR, TABLE, PHONE');
        console.log('   - Include common action words: SPEAK, BREAK, THANK, DRINK, SLEEP');
        console.log('   - Add descriptive words: SWEET, CLEAN, CLEAR, QUICK, QUIET');
        console.log('   - Include positional words: PLACE, SPACE, UNDER, ABOVE, BELOW');
        console.log('   - Consider words that appear in basic English vocabulary lists');
        console.log('');
        
        console.log('5. WORD VALIDATION STRATEGY:');
        console.log('   - Test against common English word frequency lists');
        console.log('   - Ensure words are appropriate for general audience');
        console.log('   - Maintain balance between common and challenging words');
        console.log('   - Consider adding words that provide good letter combinations');
    }
}

// Run the test
const test = new WordValidationTest();
test.runTests();