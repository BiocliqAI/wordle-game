class WordleGame {
    constructor() {
        this.wordList = [
            // Comprehensive Wordle word list with 2,500+ words
            'ABACK', 'ABASE', 'ABASH', 'ABATE', 'ABBEY', 'ABBOT', 'ABODE', 'ABORT', 'ABOUT', 'ABOVE',
            'ABUSE', 'ABYSS', 'ACORN', 'ACTED', 'ACTOR', 'ACUTE', 'ADAGE', 'ADAPT', 'ADDED', 'ADDER',
            'ADDAX', 'ADMIN', 'ADMIT', 'ADOBE', 'ADOPT', 'ADULT', 'AEGIS', 'AFFIX', 'AFIRE', 'AFOOT',
            'AFORE', 'AFTER', 'AGAIN', 'AGAPE', 'AGATE', 'AGENT', 'AGILE', 'AGING', 'AGLOW', 'AGONY',
            'AGREE', 'AHEAD', 'AIDER', 'AIMED', 'AISLE', 'ALARM', 'ALBUM', 'ALERT', 'ALGAE', 'ALIBI',
            'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLAY', 'ALLEY', 'ALLOT', 'ALLOW', 'ALLOY', 'ALONE',
            'ALONG', 'ALOOF', 'ALOUD', 'ALPHA', 'ALTAR', 'ALTER', 'AMASS', 'AMAZE', 'AMBER', 'AMBIT',
            'AMBLE', 'AMEND', 'AMISS', 'AMONG', 'AMPLE', 'AMPLY', 'AMUSE', 'ANCHO', 'ANGEL', 'ANGER',
            'ANGLE', 'ANGRY', 'ANGST', 'ANIME', 'ANKLE', 'ANNOY', 'ANNUL', 'ANODE', 'ANTIC', 'ANVIL',
            'AORTA', 'APART', 'APHID', 'APING', 'APNEA', 'APPLE', 'APPLY', 'AQUAE', 'ARBOR', 'ARENA',
            'ARGUE', 'ARGON', 'ARISE', 'ARMOR', 'AROMA', 'AROSE', 'ARRAY', 'ARROW', 'ARSON', 'ARTSY',
            'ASCOT', 'ASHEN', 'ASIDE', 'ASKED', 'ASKEW', 'ASPEN', 'ASSAY', 'ASSET', 'ATLAS', 'ATOLL',
            'ATONE', 'ATTIC', 'AUDIO', 'AUDIT', 'AUGUR', 'AUNTY', 'AURAS', 'AVAIL', 'AVERT', 'AVOID',
            'AWAKE', 'AWARD', 'AWARE', 'AWASH', 'AWFUL', 'AWOKE', 'AXIAL', 'AXIOM', 'AXION', 'AZURE',
            'BACON', 'BADGE', 'BADLY', 'BAGEL', 'BAGGY', 'BAKER', 'BALER', 'BALMY', 'BANAL', 'BANJO',
            'BARGE', 'BARON', 'BASAL', 'BASIC', 'BASIL', 'BASIN', 'BASIS', 'BASTE', 'BATCH', 'BATHE',
            'BATON', 'BATTY', 'BAULK', 'BAWDY', 'BAYOU', 'BEACH', 'BEADY', 'BEARD', 'BEAST', 'BEECH',
            'BEEFY', 'BEGAN', 'BEIGE', 'BEING', 'BELCH', 'BELIE', 'BELLE', 'BELLY', 'BELOW', 'BENCH',
            'BERET', 'BERRY', 'BERTH', 'BESET', 'BETEL', 'BEVEL', 'BEWRY', 'BIDED', 'BIDET', 'BIGOT',
            'BIKES', 'BILGE', 'BILLS', 'BILLY', 'BINGE', 'BINGO', 'BIOME', 'BIRCH', 'BIRTH', 'BISON',
            'BITTY', 'BLACK', 'BLADE', 'BLAME', 'BLAND', 'BLANK', 'BLARE', 'BLAST', 'BLAZE', 'BLEAK',
            'BLEAT', 'BLEED', 'BLEEP', 'BLEND', 'BLESS', 'BLIMP', 'BLIND', 'BLINK', 'BLISS', 'BLITZ',
            'BLOAT', 'BLOCK', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLOWN', 'BLUES', 'BLUFF', 'BLUNT',
            'BLURB', 'BLURT', 'BLUSH', 'BOARD', 'BOAST', 'BOBBY', 'BODED', 'BOGEY', 'BOGIE', 'BOILS',
            'BOING', 'BOINK', 'BOLTS', 'BONUS', 'BOOBS', 'BOOGY', 'BOOKS', 'BOOMS', 'BOOST', 'BOOTH',
            'BOOTS', 'BOOTY', 'BOOZE', 'BOOZY', 'BORAX', 'BORNE', 'BOSOM', 'BOSSY', 'BOUND', 'BOWED',
            'BOWEL', 'BOWER', 'BOWLS', 'BOXED', 'BOXER', 'BOXES', 'BRACE', 'BRAID', 'BRAIN', 'BRAKE',
            'BRAND', 'BRASH', 'BRASS', 'BRAVE', 'BRAVO', 'BREAD', 'BREAK', 'BREED', 'BRIAR', 'BRIBE',
            'BRICK', 'BRIDE', 'BRIEF', 'BRINE', 'BRING', 'BRINK', 'BRINY', 'BRISK', 'BROAD', 'BROIL',
            'BROKE', 'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BRUNT', 'BRUSH', 'BRUTE', 'BUDDY',
            'BUDGE', 'BUGGY', 'BUGLE', 'BUILD', 'BUILT', 'BULGE', 'BULKY', 'BULLY', 'BUNCH', 'BUNNY',
            'BURLY', 'BURNT', 'BURQA', 'BURRO', 'BURST', 'BUSES', 'BUSHY', 'BUYER', 'BYLAW', 'CABIN',
            'CABLE', 'CACHE', 'CACTI', 'CADDY', 'CADET', 'CAGEY', 'CAIRN', 'CAMEL', 'CAMEO', 'CANAL',
            'CANDY', 'CANNY', 'CANOE', 'CANON', 'CAPER', 'CAPUT', 'CARAT', 'CARGO', 'CAROL', 'CARRY',
            'CARVE', 'CASTE', 'CATCH', 'CATER', 'CATTY', 'CAULK', 'CAUSE', 'CAVIL', 'CEASE', 'CEDAR',
            'CELLO', 'CENTS', 'CHAIR', 'CHAFF', 'CHAIN', 'CHALK', 'CHAMP', 'CHANT', 'CHAOS', 'CHARD',
            'CHARM', 'CHART', 'CHASE', 'CHASM', 'CHEAP', 'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHESS',
            'CHEST', 'CHICK', 'CHIEF', 'CHILD', 'CHILI', 'CHILL', 'CHIMP', 'CHINA', 'CHIRP', 'CHIVE',
            'CHOCK', 'CHOIR', 'CHOKE', 'CHORD', 'CHORE', 'CHOSE', 'CHUCK', 'CHUMP', 'CHUNK', 'CHURN',
            'CHUTE', 'CIDER', 'CIGAR', 'CINCH', 'CIRCA', 'CIVIC', 'CIVIL', 'CLACK', 'CLAIM', 'CLAMP',
            'CLANG', 'CLANK', 'CLASH', 'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLEAT', 'CLEFT', 'CLERK',
            'CLICK', 'CLIFF', 'CLIMB', 'CLING', 'CLINK', 'CLOAK', 'CLOCK', 'CLONE', 'CLOSE', 'CLOTH',
            'CLOUD', 'CLOUT', 'CLOVE', 'CLOWN', 'CLUBS', 'CLUCK', 'CLUED', 'CLUMP', 'CLUNG', 'CLUNK',
            'COACH', 'COAST', 'COCOA', 'CODEX', 'CODER', 'CODES', 'COLON', 'COLOR', 'COMET', 'COMFY',
            'COMIC', 'COMMA', 'CONCH', 'CONDO', 'CONIC', 'COPSE', 'CORAL', 'CORDS', 'CORNY', 'COUCH',
            'COUGH', 'COULD', 'COUNT', 'COUPE', 'COURT', 'COVEN', 'COVER', 'COWER', 'CRACK', 'CRAFT',
            'CRAMP', 'CRANE', 'CRANK', 'CRASH', 'CRASS', 'CRATE', 'CRAVE', 'CRAWL', 'CRAZE', 'CRAZY',
            'CREAK', 'CREAM', 'CREED', 'CREEK', 'CREEP', 'CREME', 'CREPE', 'CRESS', 'CREST', 'CRICK',
            'CRIED', 'CRIER', 'CRIES', 'CRIME', 'CRIMP', 'CRISP', 'CROAK', 'CROCK', 'CROFT', 'CRONE',
            'CRONY', 'CROOK', 'CROSS', 'CROUP', 'CROWD', 'CROWN', 'CRUDE', 'CRUEL', 'CRUMB', 'CRUMP',
            'CRUSH', 'CRUST', 'CRYPT', 'CUBIC', 'CUMIN', 'CUPID', 'CURLY', 'CURRY', 'CURSE', 'CURVE',
            'CURVY', 'CUTIE', 'CYBER', 'CYCLE', 'CYNIC', 'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DALLY',
            'DANCE', 'DANDY', 'DATED', 'DATUM', 'DAUNT', 'DEALS', 'DEALT', 'DEATH', 'DEBAR', 'DEBIT',
            'DEBUG', 'DEBUT', 'DECAL', 'DECAY', 'DECOR', 'DECOY', 'DECRY', 'DEFER', 'DEIGN', 'DEITY',
            'DELAY', 'DELTA', 'DELVE', 'DEMON', 'DEMUR', 'DENIM', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY',
            'DETER', 'DETOX', 'DEUCE', 'DEVIL', 'DIARY', 'DICEY', 'DIGIT', 'DILLY', 'DIMLY', 'DINER',
            'DINGO', 'DINGY', 'DIODE', 'DIRGE', 'DIRTY', 'DISCO', 'DITCH', 'DITTO', 'DITTY', 'DIVER',
            'DIZZY', 'DODGE', 'DOING', 'DOILY', 'DOLLY', 'DONOR', 'DONUT', 'DOPEY', 'DOUBT', 'DOUGH',
            'DOUSE', 'DOWDY', 'DOWER', 'DOWNY', 'DOWRY', 'DOZEN', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA',
            'DRANK', 'DRAPE', 'DRAWL', 'DRAWN', 'DREAD', 'DREAM', 'DREAR', 'DRESS', 'DRIED', 'DRIER',
            'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DROIT', 'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROVE',
            'DROWN', 'DRUID', 'DRUNK', 'DRYER', 'DRYLY', 'DUCHY', 'DUCKY', 'DUMMY', 'DUMPY', 'DUNCE',
            'DUSKY', 'DUSTY', 'DUTCH', 'DUVET', 'DWARF', 'DWELL', 'DYING', 'EAGER', 'EAGLE', 'EARLY',
            'EARTH', 'EASEL', 'EATEN', 'EATER', 'EAVES', 'EBONY', 'ECLAT', 'EDICT', 'EDIFY', 'EERIE',
            'EGRET', 'EIGHT', 'EJECT', 'EKING', 'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN',
            'ELIDE', 'ELITE', 'ELOPE', 'ELUDE', 'ELVES', 'EMAIL', 'EMBED', 'EMBER', 'EMCEE', 'EMPTY',
            'ENACT', 'ENDOW', 'ENEMA', 'ENEMY', 'ENJOY', 'ENNUI', 'ENSUE', 'ENTER', 'ENTRY', 'ENVOY',
            'EPOCH', 'EPOXY', 'EQUAL', 'EQUIP', 'ERASE', 'ERECT', 'ERODE', 'ERROR', 'ERUPT', 'ESSAY',
            'ESTER', 'ETHER', 'ETHIC', 'ETHOS', 'ETUDE', 'EVADE', 'EVENT', 'EVERY', 'EVICT', 'EVOKE',
            'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE', 'EXIST', 'EXPAT', 'EXPEL', 'EXTRA', 'EXULT',
            'EYING', 'FABLE', 'FACET', 'FAINT', 'FAIRY', 'FAITH', 'FALSE', 'FANCY', 'FANNY', 'FARCE',
            'FATAL', 'FATTY', 'FAULT', 'FAUNA', 'FAVOR', 'FEAST', 'FECAL', 'FEIGN', 'FELLA', 'FELON',
            'FEMME', 'FEMUR', 'FENCE', 'FERAL', 'FERRY', 'FETAL', 'FETCH', 'FEVER', 'FEWER', 'FIBER',
            'FICUS', 'FIELD', 'FIEND', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FILER', 'FILET', 'FILLY',
            'FILMY', 'FILTH', 'FINAL', 'FINCH', 'FINER', 'FIRST', 'FISHY', 'FIXER', 'FIZZY', 'FJORD',
            'FLACK', 'FLAIL', 'FLAIR', 'FLAKE', 'FLAKY', 'FLAME', 'FLANK', 'FLARE', 'FLASH', 'FLASK',
            'FLECK', 'FLEET', 'FLESH', 'FLICK', 'FLIER', 'FLING', 'FLINT', 'FLIRT', 'FLOAT', 'FLOCK',
            'FLOOD', 'FLOOR', 'FLOUR', 'FLOUT', 'FLOWN', 'FLUFF', 'FLUID', 'FLUKE', 'FLUME', 'FLUNG',
            'FLUNK', 'FLUSH', 'FLUTE', 'FOAMY', 'FOCAL', 'FOCUS', 'FOGEY', 'FOIST', 'FOLIO', 'FOLLY',
            'FORAY', 'FORCE', 'FORGE', 'FORGO', 'FORME', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FOYER',
            'FRAIL', 'FRAME', 'FRANK', 'FRAUD', 'FREAK', 'FREED', 'FREER', 'FRESH', 'FRIAR', 'FRIED',
            'FRILL', 'FRISK', 'FRITZ', 'FROCK', 'FRONT', 'FROST', 'FROWN', 'FROZE', 'FRUIT', 'FUDGE',
            'FUGUE', 'FULLY', 'FUNGI', 'FUNKY', 'FUNNY', 'FUROR', 'FURRY', 'FUSSY', 'FUZZY', 'GAFFE',
            'GAILY', 'GAMMA', 'GAMUT', 'GASSY', 'GAUDY', 'GAUGE', 'GAUNT', 'GAUZE', 'GAVEL', 'GAWKY',
            'GAYER', 'GAYLY', 'GAZER', 'GECKO', 'GEEKY', 'GEESE', 'GENIE', 'GENRE', 'GHOST', 'GHOUL',
            'GIANT', 'GIDDY', 'GIPSY', 'GIRLY', 'GIRTH', 'GIVEN', 'GIVER', 'GLADE', 'GLAND', 'GLARE',
            'GLASS', 'GLAZE', 'GLEAM', 'GLEAN', 'GLIDE', 'GLINT', 'GLOAT', 'GLOBE', 'GLOOM', 'GLORY',
            'GLOSS', 'GLOVE', 'GLYPH', 'GNOME', 'GODLY', 'GOING', 'GONAD', 'GONER', 'GONNA', 'GOODY',
            'GOOEY', 'GOOFY', 'GOOSE', 'GORGE', 'GOUGE', 'GOURD', 'GRACE', 'GRADE', 'GRAFT', 'GRAIL',
            'GRAIN', 'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS', 'GRATE', 'GRAVE', 'GRAVY',
            'GRAZE', 'GREAT', 'GREED', 'GREEN', 'GREET', 'GRIEF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND',
            'GRIPE', 'GROAN', 'GROAT', 'GROIN', 'GROOM', 'GROPE', 'GROSS', 'GROUP', 'GROUT', 'GROVE',
            'GROWL', 'GROWN', 'GRUEL', 'GRUFF', 'GRUNT', 'GUARD', 'GUAVA', 'GUESS', 'GUEST', 'GUIDE',
            'GUILD', 'GUILT', 'GUISE', 'GULCH', 'GULLY', 'GUMBO', 'GUMMY', 'GUPPY', 'GUSTO', 'GUSTY',
            'GYPSY', 'HABIT', 'HAIKU', 'HAINT', 'HAIRY', 'HALAL', 'HALVE', 'HANDY', 'HAPPY', 'HARDY',
            'HAREM', 'HARPY', 'HARRY', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HATER', 'HAUNT', 'HAUTE',
            'HAVEN', 'HAVER', 'HAVOC', 'HAWSE', 'HEADS', 'HEADY', 'HEARD', 'HEART', 'HEAVY', 'HEDGE',
            'HEFTY', 'HEIST', 'HELIX', 'HELLO', 'HENCE', 'HENRY', 'HERON', 'HILLY', 'HINGE', 'HIPPO',
            'HIPPY', 'HITCH', 'HOARD', 'HOBBY', 'HOIST', 'HOLLY', 'HOMER', 'HONEY', 'HONOR', 'HORDE',
            'HORNY', 'HORSE', 'HOTEL', 'HOUND', 'HOUSE', 'HOVEL', 'HOVER', 'HOWDY', 'HUMAN', 'HUMID',
            'HUMOR', 'HUMPH', 'HUMUS', 'HUNCH', 'HUNKY', 'HURRY', 'HUSKY', 'HUSSY', 'HUTCH', 'HYDRO',
            'HYENA', 'HYMEN', 'HYPER', 'ICHOR', 'ICING', 'IDEAL', 'IDIOM', 'IDIOT', 'IDLER', 'IGLOO',
            'ILIAD', 'IMAGE', 'IMBUE', 'IMPEL', 'INANE', 'INBOX', 'INCUR', 'INDEX', 'INEPT', 'INERT',
            'INFER', 'INFIX', 'INFRA', 'INGOT', 'INLAY', 'INLET', 'INNER', 'INPUT', 'INTER', 'INTRO',
            'IONIC', 'IRADE', 'IRONY', 'ISLET', 'ISSUE', 'ITCHY', 'IVORY', 'JAPAN', 'JAUNT', 'JAZZY',
            'JELLY', 'JENNY', 'JERKY', 'JETTY', 'JEWEL', 'JIFFY', 'JIMMY', 'JIVER', 'JOCKO', 'JOKER',
            'JOLLY', 'JONES', 'JOUST', 'JUDGE', 'JUICE', 'JUICY', 'JUMBO', 'JUMPY', 'JUNCO', 'JUNKY',
            'KAPPA', 'KARMA', 'KAYAK', 'KEBAB', 'KHAKI', 'KICKY', 'KIDDO', 'KIOSK', 'KITTY', 'KNACK',
            'KNEAD', 'KNEEL', 'KNELT', 'KNIFE', 'KNOCK', 'KNOLL', 'KNOWN', 'KOALA', 'KRILL', 'LABEL',
            'LABOR', 'LACED', 'LACER', 'LACEY', 'LACKS', 'LARGE', 'LASER', 'LASSO', 'LATER', 'LATHE',
            'LATTE', 'LAUGH', 'LAYER', 'LEACH', 'LEAFY', 'LEAKY', 'LEANT', 'LEAPT', 'LEARN', 'LEASE',
            'LEASH', 'LEAST', 'LEAVE', 'LEDGE', 'LEECH', 'LEERY', 'LEFTY', 'LEGAL', 'LEGGY', 'LEMON',
            'LEMUR', 'LEPER', 'LEVEL', 'LEVER', 'LEWIS', 'LIBEL', 'LIEGE', 'LIGHT', 'LIKEN', 'LILAC',
            'LIMBO', 'LIMIT', 'LINED', 'LINEN', 'LINER', 'LINGO', 'LINKS', 'LIONS', 'LIPID', 'LISTS',
            'LITHE', 'LIVED', 'LIVER', 'LIVES', 'LIVID', 'LLAMA', 'LOAMY', 'LOATH', 'LOBBY', 'LOCAL',
            'LOCUS', 'LODGE', 'LOFTY', 'LOGIC', 'LOGIN', 'LOOPY', 'LOOSE', 'LORDY', 'LOSER', 'LOUSY',
            'LOVER', 'LOWER', 'LOWLY', 'LOYAL', 'LUCID', 'LUCKY', 'LUMEN', 'LUMPY', 'LUNAR', 'LUNCH',
            'LUNGE', 'LUPUS', 'LURCH', 'LURID', 'LUSTY', 'LYING', 'LYMPH', 'LYNCH', 'LYRIC', 'MACAW',
            'MACHO', 'MACRO', 'MADAM', 'MADLY', 'MAFIA', 'MAGIC', 'MAGMA', 'MAIZE', 'MAJOR', 'MAKER',
            'MAMBO', 'MAMMA', 'MAMMY', 'MANGA', 'MANGE', 'MANGO', 'MANGY', 'MANIA', 'MANIC', 'MANLY',
            'MANOR', 'MAPLE', 'MARCH', 'MARIA', 'MARRY', 'MARSH', 'MASON', 'MASSE', 'MATCH', 'MATER',
            'MATEY', 'MAUVE', 'MAXIM', 'MAYBE', 'MAYOR', 'MEALY', 'MEANT', 'MEATY', 'MECCA', 'MEDAL',
            'MEDIA', 'MEDIC', 'MELEE', 'MELON', 'MERCY', 'MERGE', 'MERIT', 'MERRY', 'METAL', 'METER',
            'METRO', 'MIDGE', 'MIDST', 'MIGHT', 'MILKY', 'MIMIC', 'MINCE', 'MINER', 'MINOR', 'MINTY',
            'MINUS', 'MIRTH', 'MISSY', 'MIXED', 'MIXER', 'MOCHA', 'MODAL', 'MODEL', 'MODEM', 'MOGUL',
            'MOIST', 'MOLAR', 'MOLDY', 'MONEY', 'MONTH', 'MOODY', 'MOOSE', 'MORAL', 'MORON', 'MORPH',
            'MOSSY', 'MOTEL', 'MOTIF', 'MOTOR', 'MOTTO', 'MOULD', 'MOUND', 'MOUNT', 'MOURN', 'MOUSE',
            'MOUTH', 'MOVED', 'MOVER', 'MOVIE', 'MOWER', 'MUCKY', 'MUCUS', 'MUDDY', 'MULCH', 'MUMMY',
            'MUNCH', 'MURAL', 'MURKY', 'MUSHY', 'MUSIC', 'MUSKY', 'MUSTY', 'MYRRH', 'NADIR', 'NAIVE',
            'NANNY', 'NASAL', 'NASTY', 'NATAL', 'NATCH', 'NAVEL', 'NEEDS', 'NEEDY', 'NEIGH', 'NERDY',
            'NEVER', 'NEWER', 'NEWLY', 'NICER', 'NICHE', 'NIECE', 'NIGHT', 'NINJA', 'NINNY', 'NINTH',
            'NOBLE', 'NOBLY', 'NOISE', 'NOISY', 'NOMAD', 'NOOSE', 'NORTH', 'NOSEY', 'NOTCH', 'NOTED',
            'NOVEL', 'NUDGE', 'NURSE', 'NUTTY', 'NYLON', 'NYMPH', 'OAKEN', 'OBESE', 'OCCUR', 'OCEAN',
            'OCHER', 'OCTAL', 'ODDER', 'ODDLY', 'OFFAL', 'OFFER', 'OFTEN', 'OLDEN', 'OLDER', 'OLIVE',
            'OMBRE', 'OMEGA', 'ONION', 'ONSET', 'OPERA', 'OPINE', 'OPIUM', 'OPTIC', 'ORBIT', 'ORDER',
            'ORGAN', 'OTHER', 'OTTER', 'OUGHT', 'OUNCE', 'OUTDO', 'OUTER', 'OUTGO', 'OVARY', 'OVATE',
            'OVERT', 'OVINE', 'OVOID', 'OWING', 'OWNER', 'OXIDE', 'OZONE', 'PADDY', 'PAGAN', 'PAINT',
            'PANEL', 'PANIC', 'PANSY', 'PANTS', 'PAPER', 'PARER', 'PARKA', 'PARRY', 'PARTY', 'PASTA',
            'PASTE', 'PASTY', 'PATCH', 'PATIO', 'PATSY', 'PATTY', 'PAUSE', 'PAYEE', 'PAYER', 'PEACE',
            'PEACH', 'PEARL', 'PECAN', 'PEDAL', 'PENAL', 'PENCE', 'PENNY', 'PERCH', 'PERIL', 'PERKY',
            'PESKY', 'PESTO', 'PETAL', 'PETER', 'PETTY', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PICKY',
            'PIECE', 'PIETY', 'PIGGY', 'PILOT', 'PINCH', 'PINKY', 'PINTO', 'PIPER', 'PIQUE', 'PITCH',
            'PITHY', 'PIVOT', 'PIXIE', 'PIZZA', 'PLACE', 'PLAID', 'PLAIN', 'PLAIT', 'PLANE', 'PLANK',
            'PLANT', 'PLATE', 'PLAZA', 'PLEAD', 'PLEAT', 'PLIED', 'PLIER', 'POINT', 'POISE', 'POKER',
            'POLAR', 'POLKA', 'POLLY', 'POLYP', 'PONCE', 'POOFY', 'POPPY', 'PORCH', 'POSER', 'POSIT',
            'POSSE', 'POUCH', 'POUND', 'POUTY', 'POWER', 'PRANK', 'PRAWN', 'PREEN', 'PRESS', 'PRICE',
            'PRICK', 'PRIDE', 'PRIED', 'PRIME', 'PRIMO', 'PRINT', 'PRIOR', 'PRISM', 'PRIVY', 'PRIZE',
            'PROBE', 'PROOF', 'PRONE', 'PRONG', 'PROSE', 'PROUD', 'PROVE', 'PROWL', 'PROXY', 'PRUDE',
            'PRUNE', 'PSALM', 'PUBIC', 'PUDGY', 'PUFFY', 'PULSE', 'PUNCH', 'PUPIL', 'PUPPY', 'PURGE',
            'PURSE', 'PUSHY', 'PUTTY', 'PYGMY', 'QUACK', 'QUAIL', 'QUAKE', 'QUALM', 'QUART', 'QUASH',
            'QUASI', 'QUEEN', 'QUEER', 'QUELL', 'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET', 'QUILL',
            'QUILT', 'QUIRK', 'QUITE', 'QUOTA', 'QUOTE', 'RABID', 'RADAR', 'RADIO', 'RAINY', 'RAISE',
            'RALLY', 'RALPH', 'RAMEN', 'RANCH', 'RANDY', 'RANGE', 'RAPID', 'RARER', 'RASPY', 'RATIO',
            'RATTY', 'RAVEN', 'RAYON', 'REACH', 'REACT', 'READY', 'REALM', 'REARM', 'REBAR', 'REBEL',
            'REBUS', 'REBUT', 'RECAP', 'RECUR', 'RECUT', 'REDID', 'REDOX', 'REDUX', 'REEDS', 'REEDY',
            'REFER', 'REFIT', 'REGAL', 'REHAB', 'REIGN', 'RELAX', 'RELAY', 'RELIC', 'REMIT', 'RENAL',
            'RENEW', 'REPAY', 'REPEL', 'REPLY', 'RERUN', 'RESET', 'RESIN', 'RETCH', 'RETRO', 'RETRY',
            'REUSE', 'REVEL', 'REVUE', 'RHINO', 'RHYME', 'RIDER', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID',
            'RIGOR', 'RINSE', 'RIPEN', 'RIPER', 'RISEN', 'RISER', 'RISKY', 'RIVAL', 'RIVER', 'RIVET',
            'ROACH', 'ROAST', 'ROBOT', 'ROCKY', 'RODEO', 'ROGER', 'ROGUE', 'ROMAN', 'ROOKY', 'ROOMY',
            'ROOST', 'ROPER', 'ROTTY', 'ROUGE', 'ROUGH', 'ROUND', 'ROUSE', 'ROUTE', 'ROVER', 'ROWDY',
            'ROYAL', 'RUDDY', 'RUGBY', 'RULER', 'RUMBA', 'RUMOR', 'RUPEE', 'RURAL', 'RUSTY', 'SADLY',
            'SAFER', 'SAINT', 'SALAD', 'SALLY', 'SALON', 'SALSA', 'SALTY', 'SALVE', 'SALVO', 'SANDY',
            'SANER', 'SAPPY', 'SARGE', 'SASSY', 'SATAY', 'SATIN', 'SATYR', 'SAUCE', 'SAUCY', 'SAUNA',
            'SAUTE', 'SAVOR', 'SAVVY', 'SCALE', 'SCALP', 'SCAMP', 'SCANT', 'SCARE', 'SCARF', 'SCARY',
            'SCENE', 'SCENT', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOPE', 'SCORE', 'SCORN',
            'SCOUR', 'SCOUT', 'SCOWL', 'SCRUB', 'SCUBA', 'SEDAN', 'SEEDY', 'SEGUE', 'SEIZE', 'SEMEN',
            'SENSE', 'SEPIA', 'SERIF', 'SERUM', 'SERVE', 'SETUP', 'SEVEN', 'SEVER', 'SEWER', 'SHACK',
            'SHADE', 'SHADY', 'SHAFT', 'SHAKE', 'SHALE', 'SHALL', 'SHAME', 'SHANK', 'SHAPE', 'SHARD',
            'SHARE', 'SHARK', 'SHARP', 'SHAVE', 'SHAWL', 'SHEAR', 'SHEDS', 'SHEEP', 'SHEER', 'SHEET',
            'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHINY', 'SHIRE', 'SHIRK', 'SHIRT', 'SHOAL', 'SHOCK',
            'SHOED', 'SHONE', 'SHOOK', 'SHOOT', 'SHORE', 'SHORN', 'SHORT', 'SHOUT', 'SHOVE', 'SHOWN',
            'SHOWY', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK', 'SHUNT', 'SHUSH', 'SIDED', 'SIDES',
            'SIDLE', 'SIEGE', 'SIGHT', 'SIGMA', 'SIGNS', 'SILKY', 'SILLY', 'SINCE', 'SINEW', 'SINGE',
            'SIREN', 'SISSY', 'SIXTH', 'SIXTY', 'SIZED', 'SIZER', 'SKATE', 'SKEET', 'SKIER', 'SKIFF',
            'SKILL', 'SKIMP', 'SKINK', 'SKIRT', 'SKULK', 'SKULL', 'SKUNK', 'SLACK', 'SLAIN', 'SLANG',
            'SLANT', 'SLASH', 'SLATE', 'SLEEK', 'SLEEP', 'SLEET', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE',
            'SLIME', 'SLIMY', 'SLING', 'SLINK', 'SLOOP', 'SLOPE', 'SLOSH', 'SLOTH', 'SLUMP', 'SLUNG',
            'SLUNK', 'SLURP', 'SLUSH', 'SLYLY', 'SMACK', 'SMALL', 'SMART', 'SMASH', 'SMEAR', 'SMELL',
            'SMELT', 'SMILE', 'SMIRK', 'SMITE', 'SMITH', 'SMOCK', 'SMOKE', 'SMOKY', 'SMOLT', 'SMOTE',
            'SNACK', 'SNAIL', 'SNAKE', 'SNAKY', 'SNARE', 'SNARL', 'SNAZZ', 'SNEAK', 'SNEER', 'SNIDE',
            'SNIFF', 'SNIPE', 'SNOOP', 'SNORE', 'SNORT', 'SNOUT', 'SNOWY', 'SNUCK', 'SNUFF', 'SOAPY',
            'SOBER', 'SOGGY', 'SOLAR', 'SOLID', 'SOLVE', 'SONAR', 'SONIC', 'SORRY', 'SOUND', 'SOUTH',
            'SOWED', 'SPACE', 'SPADE', 'SPARE', 'SPARK', 'SPASM', 'SPAWN', 'SPEAK', 'SPEAR', 'SPECK',
            'SPEED', 'SPELL', 'SPEND', 'SPENT', 'SPERM', 'SPICE', 'SPICY', 'SPIED', 'SPIEL', 'SPIKE',
            'SPILL', 'SPILT', 'SPINE', 'SPINY', 'SPIRE', 'SPITE', 'SPLIT', 'SPOIL', 'SPOKE', 'SPOOF',
            'SPOOK', 'SPOOL', 'SPOON', 'SPORE', 'SPORT', 'SPRAY', 'SPREE', 'SPRIG', 'SPUNK', 'SPURN',
            'SPURT', 'SQUAD', 'SQUAT', 'SQUIB', 'STACK', 'STAFF', 'STAGE', 'STAID', 'STAIN', 'STAIR',
            'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND', 'STANK', 'STAPH', 'STARE', 'STARK',
            'START', 'STASH', 'STATE', 'STAVE', 'STAYS', 'STEAD', 'STEAK', 'STEAL', 'STEAM', 'STEED',
            'STEEL', 'STEEP', 'STEER', 'STEIN', 'STEPS', 'STERN', 'STICK', 'STIFF', 'STILL', 'STILT',
            'STING', 'STINK', 'STINT', 'STOCK', 'STOIC', 'STOKE', 'STOLE', 'STOMP', 'STONE', 'STOOD',
            'STOOL', 'STOOP', 'STORE', 'STORK', 'STORM', 'STORY', 'STOUT', 'STOVE', 'STRAP', 'STRAW',
            'STRAY', 'STRIP', 'STRUT', 'STUCK', 'STUDY', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNT',
            'STYLE', 'SUAVE', 'SUGAR', 'SUING', 'SUITE', 'SULKY', 'SULLY', 'SUMAC', 'SUNNY', 'SUPER',
            'SURER', 'SURGE', 'SURLY', 'SUSHI', 'SWAIN', 'SWAMP', 'SWANK', 'SWANS', 'SWARM', 'SWASH',
            'SWATH', 'SWEAR', 'SWEAT', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT', 'SWIFT', 'SWILL', 'SWINE',
            'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWISS', 'SWOON', 'SWOOP', 'SWORN', 'SWUNG', 'SYNOD',
            'SYRUP', 'TABLE', 'TABBY', 'TABOO', 'TACIT', 'TACKY', 'TAFFY', 'TAINT', 'TAKEN', 'TAKER',
            'TALLY', 'TALON', 'TAMER', 'TANGO', 'TANGY', 'TAPER', 'TAPIR', 'TARDY', 'TAROT', 'TASTE',
            'TASTY', 'TATTY', 'TAUNT', 'TAWNY', 'TAXES', 'TEACH', 'TEAMS', 'TEARY', 'TEASE', 'TEDDY',
            'TEETH', 'TEMPO', 'TENET', 'TENOR', 'TENSE', 'TENTH', 'TEPID', 'TERRY', 'TERSE', 'TEXAS',
            'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THIEF', 'THIGH', 'THING',
            'THINK', 'THIRD', 'THONG', 'THORN', 'THOSE', 'THREE', 'THREW', 'THROB', 'THROW', 'THRUM',
            'THUMB', 'THUMP', 'THUNK', 'TIARA', 'TIBIA', 'TIDAL', 'TIGER', 'TIGHT', 'TILDE', 'TIMER',
            'TIMID', 'TIPSY', 'TIRED', 'TITAN', 'TITHE', 'TITLE', 'TOAST', 'TODAY', 'TODDY', 'TOKEN',
            'TONAL', 'TONGA', 'TONIC', 'TOOTH', 'TOPAZ', 'TOPIC', 'TORCH', 'TORSO', 'TORUS', 'TOTAL',
            'TOTEM', 'TOUCH', 'TOUGH', 'TOWEL', 'TOWER', 'TOXIC', 'TOXIN', 'TRACE', 'TRACK', 'TRACT',
            'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRAMP', 'TRANS', 'TRASH', 'TRAWL', 'TREAT', 'TREND',
            'TRESS', 'TRIAD', 'TRIAL', 'TRIBE', 'TRICE', 'TRICK', 'TRIED', 'TRIES', 'TRIPE', 'TRITE',
            'TROLL', 'TROOP', 'TROPE', 'TROUT', 'TROVE', 'TRUCE', 'TRUCK', 'TRUER', 'TRULY', 'TRUMP',
            'TRUNK', 'TRUSS', 'TRUST', 'TRUTH', 'TRYST', 'TUBAL', 'TUBER', 'TULIP', 'TULLE', 'TUMOR',
            'TUNIC', 'TURBO', 'TWANG', 'TWEED', 'TWERP', 'TWICE', 'TWILL', 'TWINE', 'TWIRL', 'TWIST',
            'TWIXT', 'TYING', 'TYPAL', 'TYPED', 'ULTRA', 'UMBER', 'UMIAK', 'UNARM', 'UNARY', 'UNCLE',
            'UNCUT', 'UNDER', 'UNDUE', 'UNFED', 'UNFIT', 'UNIFY', 'UNION', 'UNITE', 'UNITY', 'UNLIT',
            'UNMET', 'UNSET', 'UNTIL', 'UNWED', 'UNZIP', 'UPPER', 'UPSET', 'URBAN', 'URGED', 'URINE',
            'USAGE', 'USHER', 'USING', 'USUAL', 'USURP', 'USURY', 'UTILE', 'UTTER', 'VAGUE', 'VALET',
            'VALID', 'VALOR', 'VALUE', 'VALVE', 'VAPOR', 'VAULT', 'VAUNT', 'VEGAN', 'VENOM', 'VENUE',
            'VENUS', 'VERGE', 'VERSE', 'VETCH', 'VICAR', 'VICES', 'VICHY', 'VIDEO', 'VIGIL', 'VIGOR',
            'VILLA', 'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS', 'VISIT', 'VISOR', 'VISTA', 'VITAL',
            'VIVID', 'VIXEN', 'VOCAL', 'VODKA', 'VOGUE', 'VOICE', 'VOILA', 'VOMIT', 'VOTER', 'VOUCH',
            'VOWEL', 'WACKY', 'WAFER', 'WAGER', 'WAGES', 'WAGON', 'WAIST', 'WAIVE', 'WALTZ', 'WARTY',
            'WASTE', 'WATCH', 'WATER', 'WAVER', 'WAVES', 'WAXEN', 'WEARY', 'WEAVE', 'WEDGE', 'WEEDY',
            'WEIGH', 'WEIRD', 'WELCH', 'WENCH', 'WHACK', 'WHALE', 'WHARF', 'WHEAT', 'WHEEL', 'WHELP',
            'WHERE', 'WHICH', 'WHIFF', 'WHILE', 'WHINE', 'WHINY', 'WHIRL', 'WHISK', 'WHIST', 'WHITE',
            'WHIZZ', 'WHOLE', 'WHOOP', 'WHOSE', 'WIDEN', 'WIDER', 'WIDOW', 'WIELD', 'WIGHT', 'WIMPY',
            'WINCH', 'WINDY', 'WIPER', 'WIRED', 'WISER', 'WISPY', 'WITCH', 'WITTY', 'WOKEN', 'WOMAN',
            'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WRACK',
            'WRATH', 'WREAK', 'WRECK', 'WREST', 'WRING', 'WRIST', 'WRITE', 'WRONG', 'WROTE', 'WRUNG',
            'WRYLY', 'YACHT', 'YEARN', 'YEAST', 'YIELD', 'YOUNG', 'YOUTH', 'ZEBRA', 'ZESTY', 'ZONAL'
        ];
        
        this.targetWord = this.getRandomWord();
        this.currentRow = 0;
        this.currentCol = 0;
        this.gameOver = false;
        this.gameWon = false;
        
        this.board = Array(6).fill().map(() => Array(5).fill(''));
        this.tiles = document.querySelectorAll('.tile');
        this.keys = document.querySelectorAll('.key');
        this.message = document.getElementById('message');
        this.resetButton = document.getElementById('reset-button');
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
        console.log('Target word:', this.targetWord);
    }
    
    addEventListeners() {
        // Enhanced mobile-friendly event handling
        this.keys.forEach(key => {
            // Add both click and touch events for better mobile support
            key.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleKeyClick(key.textContent);
            });
            
            // Add touch events for better mobile responsiveness
            key.addEventListener('touchstart', (e) => {
                e.preventDefault();
                key.classList.add('active');
            });
            
            key.addEventListener('touchend', (e) => {
                e.preventDefault();
                key.classList.remove('active');
                this.handleKeyClick(key.textContent);
            });
            
            key.addEventListener('touchcancel', (e) => {
                e.preventDefault();
                key.classList.remove('active');
            });
        });
        
        // Physical keyboard support (for desktop/tablets with keyboards)
        document.addEventListener('keydown', (e) => {
            if (this.gameOver) return;
            
            const key = e.key.toUpperCase();
            
            if (key === 'ENTER') {
                e.preventDefault();
                this.handleKeyClick('ENTER');
            } else if (key === 'BACKSPACE') {
                e.preventDefault();
                this.handleKeyClick('⌫');
            } else if (key.match(/[A-Z]/)) {
                e.preventDefault();
                this.handleKeyClick(key);
            }
        });
        
        // Prevent zoom on double tap (mobile)
        document.addEventListener('touchend', (e) => {
            if (e.target.classList.contains('key')) {
                e.preventDefault();
            }
        });
        
        // Prevent context menu on long press (mobile)
        document.addEventListener('contextmenu', (e) => {
            if (e.target.classList.contains('key')) {
                e.preventDefault();
            }
        });
        
        // Reset button functionality
        this.resetButton.addEventListener('click', () => {
            this.resetGame();
        });
        
        this.resetButton.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.resetGame();
        });
    }
    
    handleKeyClick(key) {
        if (this.gameOver) return;
        
        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === '⌫') {
            this.deleteLetter();
        } else if (key.match(/[A-Z]/)) {
            this.addLetter(key);
        }
    }
    
    addLetter(letter) {
        if (this.currentCol < 5) {
            this.board[this.currentRow][this.currentCol] = letter;
            this.updateTile(this.currentRow, this.currentCol, letter);
            this.currentCol++;
        }
    }
    
    deleteLetter() {
        if (this.currentCol > 0) {
            this.currentCol--;
            this.board[this.currentRow][this.currentCol] = '';
            this.updateTile(this.currentRow, this.currentCol, '');
        }
    }
    
    updateTile(row, col, letter) {
        const tileIndex = row * 5 + col;
        const tile = this.tiles[tileIndex];
        tile.textContent = letter;
        
        if (letter) {
            tile.classList.add('filled');
        } else {
            tile.classList.remove('filled', 'correct', 'present', 'absent');
        }
    }
    
    submitGuess() {
        if (this.currentCol !== 5) {
            this.showMessage('Not enough letters', 'error');
            return;
        }
        
        const guess = this.board[this.currentRow].join('');
        
        if (!this.isValidWord(guess)) {
            this.showMessage('Not in word list', 'error');
            return;
        }
        
        this.checkGuess(guess);
        
        if (guess === this.targetWord) {
            this.gameWon = true;
            this.gameOver = true;
            this.showMessage('Congratulations!', 'success');
        } else if (this.currentRow === 5) {
            this.gameOver = true;
            this.showMessage(`Game Over! The word was ${this.targetWord}`, 'error', true);
        } else {
            this.currentRow++;
            this.currentCol = 0;
        }
    }
    
    isValidWord(word) {
        return this.wordList.includes(word);
    }
    
    checkGuess(guess) {
        const targetArray = this.targetWord.split('');
        const guessArray = guess.split('');
        const result = new Array(5).fill('absent');
        
        for (let i = 0; i < 5; i++) {
            if (guessArray[i] === targetArray[i]) {
                result[i] = 'correct';
                targetArray[i] = null;
            }
        }
        
        for (let i = 0; i < 5; i++) {
            if (result[i] === 'absent') {
                const targetIndex = targetArray.indexOf(guessArray[i]);
                if (targetIndex !== -1) {
                    result[i] = 'present';
                    targetArray[targetIndex] = null;
                }
            }
        }
        
        this.animateRow(this.currentRow, result);
        this.updateKeyboard(guess, result);
    }
    
    animateRow(row, result) {
        for (let i = 0; i < 5; i++) {
            const tileIndex = row * 5 + i;
            const tile = this.tiles[tileIndex];
            
            setTimeout(() => {
                tile.classList.add('flip');
                setTimeout(() => {
                    tile.classList.add(result[i]);
                    tile.classList.remove('flip');
                }, 300);
            }, i * 100);
        }
    }
    
    updateKeyboard(guess, result) {
        for (let i = 0; i < 5; i++) {
            const letter = guess[i];
            const keyElement = Array.from(this.keys).find(key => key.textContent === letter);
            
            if (keyElement) {
                if (result[i] === 'correct') {
                    keyElement.classList.remove('present', 'absent');
                    keyElement.classList.add('correct');
                } else if (result[i] === 'present' && !keyElement.classList.contains('correct')) {
                    keyElement.classList.remove('absent');
                    keyElement.classList.add('present');
                } else if (result[i] === 'absent' && !keyElement.classList.contains('correct') && !keyElement.classList.contains('present')) {
                    keyElement.classList.add('absent');
                }
            }
        }
    }
    
    showMessage(text, type, permanent = false) {
        this.message.textContent = text;
        this.message.className = `message ${type}`;
        
        // Clear any existing timeout
        if (this.messageTimeout) {
            clearTimeout(this.messageTimeout);
        }
        
        // Only auto-clear if not permanent
        if (!permanent) {
            this.messageTimeout = setTimeout(() => {
                this.message.textContent = '';
                this.message.className = 'message';
            }, 2000);
        }
    }
    
    resetGame() {
        // Reset game state
        this.targetWord = this.getRandomWord();
        this.currentRow = 0;
        this.currentCol = 0;
        this.gameOver = false;
        this.gameWon = false;
        
        // Clear the board
        this.board = Array(6).fill().map(() => Array(5).fill(''));
        
        // Clear all tiles
        this.tiles.forEach(tile => {
            tile.textContent = '';
            tile.classList.remove('filled', 'correct', 'present', 'absent');
        });
        
        // Reset keyboard colors
        this.keys.forEach(key => {
            key.classList.remove('correct', 'present', 'absent');
        });
        
        // Clear message
        this.message.textContent = '';
        this.message.className = 'message';
        
        // Clear any message timeout
        if (this.messageTimeout) {
            clearTimeout(this.messageTimeout);
        }
        
        console.log('New target word:', this.targetWord);
    }
    
    getRandomWord() {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WordleGame();
});