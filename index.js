// See https://gist.github.com/GiacoCorsiglia/1619828473f4b34d3d914a16fcbf10f3
const MathC = ({ tex, display = false }) => {
    const rootElementRef = React.useRef(null)
    const [isReady, setIsReady] = React.useState(__MathJax_State__.isReady)
    React.useLayoutEffect(() => {
      if (!isReady) {
        __MathJax_State__.promise.then(() => setIsReady(true))
        return
      }
      const mathElement = rootElementRef.current
      mathElement.innerHTML = ""
      MathJax.texReset()
      const options = MathJax.getMetricsFor(mathElement)
      options.display = display
      MathJax.tex2svgPromise(tex, options)
        .then(function (node) {
          mathElement.appendChild(node)
          MathJax.startup.document.clear()
          MathJax.startup.document.updateDocument()
        })
        .catch(function (err) {
          console.error(err)
        })
    }, [tex, display, isReady])
    return <span ref={rootElementRef}></span>
}

const DATA = [
    {proverb: "Petit à petit, l'oiseau fait son nid", equation: "Nid = Oiseau (petit) + Temps"},
    {proverb: "L'union fait la force", equation: "Force = Union"},
    {proverb: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué", equation: "Peau (ours^{vendu}) ≤ Peau (ours^{tué})"},
    {proverb: "Tel père, tel fils", equation: "Fils = Père"},
    {proverb: "La nuit porte conseil", equation: "Conseil = Nuit"},
    {proverb: "Qui sème le vent récolte la tempête", equation: "Vent (semé) = Récolte + Tempête"},
    {proverb: "Chaque chose en son temps", equation: "Chose = Temps"},
    {proverb: "Les bons comptes font les bons amis", equation: "Comptes (bons) = Amis (bons)"},
    {proverb: "À quelque chose malheur est bon", equation: "Bonheur (malheur) = Quelque chose"},
    {proverb: "C'est en forgeant qu'on devient forgeron", equation: "Forgeron = Forger + Temps"},
    {proverb: "Rien ne sert de courir, il faut partir à point", equation: "Temps (arrivée) = f(Course, Temps (départ))"},
    {proverb: "L'habit ne fait pas le moine", equation: "Moine (intérieur) ≠ Habit (extérieur)"},
    {proverb: "Qui veut voyager loin ménage sa monture", equation: "Monture (étatfutur) = Monture (entretien)"},
    {proverb: "Le savoir est la clef de la réussite", equation: "Réussite = Savoir * Clef"},
    {proverb: "La vérité sort de la bouche des enfants", equation: "Vérité = Bouche (enfants)"},
    {proverb: "Il n'y a que les imbéciles qui ne changent pas d'avis", equation: "Imbéciles ≠ Avis (changement)"},
    {proverb: "À cœur vaillant, rien d'impossible", equation: "Rien (impossible) = f(Cœur, Vaillance)"},
    {proverb: "Telle mère, telle fille", equation: "Fille = Mère"},
    {proverb: "Un malheur ne vient jamais seul", equation: "\\lvert Malheur \\rvert > 1"},
    {proverb: "La patience est mère de toutes les vertus", equation: "Vertus = Patience * Mère"},    
    {proverb: "Nul n'est prophète en son pays", equation: "Prophète (pays) ≠ Prophète (autre pays)"},
    {proverb: "La beauté est dans l'œil de celui qui regarde", equation: "Beauté = Œil (regard) * Celui (regarde)"},
    {proverb: "Qui ne risque rien n'a rien", equation: "Rien (risque) = Rien (obtenu)"},
    {proverb: "Les paroles s'envolent, les écrits restent", equation: "Paroles (envolées) + Écrits (restent)"},
    {proverb: "L'amour est aveugle", equation: "Amour = Aveugle"},
    {proverb: "La faim chasse le loup hors du bois", equation: "Faim = Bois - Loup"},
    {proverb: "Chacun voit midi à sa porte", equation: "Midi (porte) ≠ Midi (autre porte)"},
    {proverb: "Mieux vaut prévenir que guérir", equation: "Prévenir > Guérir"},
    {proverb: "Qui se ressemble s'assemble", equation: "Ressemble = Assemble"},
    {proverb: "Trop de chefs gâtent la sauce", equation: "Sauce (gâtée) = \\bigcup (Chefs)"},
    {proverb: "L'union fait la force", equation: "Force = \\bigcup(Personnes)"},
    {proverb: "Mieux vaut tard que jamais", equation: "Valeur (tard) > Valeur (jamais)"},
    {proverb: "L'amour est comme le vent, nous ne savons pas d'où il vient", equation: "Amour = Vent \\in Origine(Inconnue)"}
]
const DATA_SYNONYMS = [
    {proverb: "Petit à petit, l'oiseau fait son nid", equation: "Logis = Étourneau + Temps"},
    {proverb: "L'union fait la force", equation: "Ligue = Vigueur"},
    {proverb: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué", equation: "Fourrure (grizzli^{monnayé}) ≤ Fourrue (grizzli^{mort})"},
    {proverb: "Tel père, tel fils", equation: "Géniteur = Garçon"},
    {proverb: "La nuit porte conseil", equation: "Suggestion ≠ Jour"},
    {proverb: "Chaque chose en son temps", equation: "Objet = Moment"},
    {proverb: "Les bons comptes font les bons amis", equation: "Dû (correct) = Camarades (corrects)"},
    {proverb: "C'est en forgeant qu'on devient forgeron", equation: "Ferronnier = Travail(Fer) + Temps"},
    {proverb: "Rien ne sert de courir, il faut partir à point", equation: "Temps (arrivée) = f(Course, Temps (départ))"},
    {proverb: "L'habit ne fait pas le moine", equation: "Curé (intérieur) ≠ Vétement (extérieur)"},
    {proverb: "Le savoir est la clef de la réussite", equation: "Succès = Connaissance * Clef"},
    {proverb: "La vérité sort de la bouche des enfants", equation: "Justesse = Bec (marmot)"},
    {proverb: "Il n'y a que les imbéciles qui ne changent pas d'avis", equation: "Idiot ≠ Croyance (changement)"},
    {proverb: "Telle mère, telle fille", equation: "Génitrice = descendante"},
    {proverb: "Un malheur ne vient jamais seul", equation: "\\lvert Infortune \\rvert > 1"},
    {proverb: "La patience est mère de toutes les vertus", equation: "Qualités = Endurance * Génitrice"},    
    {proverb: "Nul n'est prophète en son pays", equation: "Oracle (lieu) ≠ Oracle (autre lieu)"},
    {proverb: "Qui ne risque rien n'a rien", equation: "Vide (hasardé) = Vide (acquérit)"},
    {proverb: "Les paroles s'envolent, les écrits restent", equation: "Mots (disparus) + Textes (persistent)"},
    {proverb: "L'amour est aveugle", equation: "Passion ≠ Lucide"},
    {proverb: "La faim chasse le loup hors du bois", equation: "Apetit = Forêt - Prédateur"},
    {proverb: "Chacun voit midi à sa porte", equation: "12h (entrée) ≠ 12h (autre entrée)"},
    {proverb: "Mieux vaut prévenir que guérir", equation: "Prémunir > Soigner"},
    {proverb: "Qui se ressemble s'assemble", equation: "Correspond = Joint"},
    {proverb: "L'union fait la force", equation: "Vigueur = \\bigcup(Personnes)"},
    {proverb: "Mieux vaut tard que jamais", equation: "Valeur (ulterieure) > Valeur (éternelle)"},
    {proverb: "L'amour est comme le vent, nous ne savons pas d'où il vient", equation: "Passion = Souffle \\in Origine(Inconnue)"}
]
const App = () => {
    const [level, setLevel] = React.useState("normal")
    const [data, setData] = React.useState(DATA[Math.round(Math.random() * DATA.length)])
    const [search, setSearch] = React.useState("")
    const [result, setResult] = React.useState(null)
    const gen = (lvl) => {
        if (!lvl) lvl = level
        if (lvl === "normal") {
            setData(DATA[Math.round(Math.random() * DATA.length)])    
        } else {
            setData(DATA_SYNONYMS[Math.round(Math.random() * DATA_SYNONYMS.length)])
        }
        setResult(null)
        setSearch("")
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const select = (chosenData) => {
        setResult(chosenData.proverb === data.proverb)
    }
    const swapLevel = () => {
        gen(level === "normal" ? "hard" : "normal")
        setLevel(prevLevel => prevLevel === "normal" ? "hard" : "normal")
    }
    return (
        <div className="main">
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Proverbes et équations
                    </h1>
                    
                    <div class="content">
                        <p>Difficultée: {level === "normal" ? "Normale" : "Difficile (utilise des synonymes)"}, <a onClick={swapLevel}>cliquez ici pour changer la difficultée</a></p>
                    </div>
                    <div>
                        <MathC display tex={data.equation} />
                    </div>
                    <div class="content">
                        <p>Commencez à taper le début du proverbe</p>
                        <input className="input" type="text" value={search} onChange={handleSearch} />
                        {search.length > 2 && <div>
                            <p style={{marginTop: "10px"}}>Puis cliquez dessus dans la liste</p>
                            <ul>
                                {DATA
                                .filter(data => data.proverb.toLowerCase().indexOf(search.toLowerCase())>-1)
                                .map(data => <li><a onClick={e => select(data)}>{data.proverb}</a></li>)
                                }
                            </ul>
                        </div>}
                    </div>
                    {result === true && <div className="notification is-success" onClick={gen}>
                        Bravo ! Cliquez sur ce bandeau pour rejouer.
                    </div>}
                    {result === false && <div className="notification is-danger" onClick={gen}>
                        Perdu, le proverbe était "{data.proverb}".  Cliquez sur ce bandeau pour rejouer.
                    </div>}
                </div>
            </section>
        </div>
    )
}

const domContainer = document.getElementById('root')
ReactDOM.render(<App />, domContainer)