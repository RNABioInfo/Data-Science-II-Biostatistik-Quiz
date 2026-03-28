const QUESTIONS = {
    "VL1: Grundlagen": [
        {
            "text": "Warum soll ich mich als Biologe mit Statistik beschaeftigen?",
            "answers": [
                "Um biologische Daten wissenschaftlich auszuwerten und Zusammenhaenge zu erkennen",
                "Weil es in jedem Studiengang Pflicht ist",
                "Um komplexe mathematische Formeln auswendig zu lernen",
                "Statistik ist nur fuer Mathematiker relevant"
            ],
            "correct": 0
        },
        {
            "text": "Was sind Merkmal und Merkmalsauspraegung?",
            "answers": [
                "Merkmal ist eine beobachtbare Eigenschaft, Merkmalsauspraegung ist der konkrete Wert",
                "Beide Begriffe bezeichnen das Gleiche",
                "Merkmal ist der Messwert, Merkmalsauspraegung ist der Fehler",
                "Merkmal ist theoretisch, Merkmalsauspraegung ist praktisch"
            ],
            "correct": 0
        },
        {
            "text": "Welche Skalenniveaus gibt es?",
            "answers": [
                "Nominal, Ordinal, Intervall, Verhaeltnis",
                "Klein, Mittel, Gross",
                "Linear, Exponentiell, Logarithmisch",
                "Diskret, Stetig, Gemischt"
            ],
            "correct": 0
        },
        {
            "text": "Welche Arten von Messunsicherheiten/Fehlern gibt es?",
            "answers": [
                "Systematische und zufaellige Fehler",
                "Nur mathematische Fehler",
                "Grobe, mittlere und feine Fehler",
                "Nur menschliche Fehler"
            ],
            "correct": 0
        },
        {
            "text": "Warum ist die Summe der Abweichungen vom Mittelwert kein sinnvolles Mass fuer die Messunsicherheit?",
            "answers": [
                "Weil sich positive und negative Abweichungen aufheben und die Summe immer Null ergibt",
                "Weil die Berechnung zu kompliziert ist",
                "Weil der Mittelwert nicht genau genug ist",
                "Weil nur grosse Abweichungen wichtig sind"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt die 3-Sigma-Regel?",
            "answers": [
                "Etwa 99,7% der Werte liegen innerhalb von 3 Standardabweichungen vom Mittelwert",
                "Jeder dritte Messwert ist ein Ausreisser",
                "Man muss mindestens 3 Messungen durchfuehren",
                "Die Standardabweichung muss durch 3 geteilt werden"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Standardfehler?",
            "answers": [
                "Die Standardabweichung des Mittelwerts einer Stichprobe",
                "Der groesste Fehler in einer Messreihe",
                "Die Differenz zwischen zwei Messungen",
                "Ein Fehler, der immer auftritt"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Idee hinter der Gaussschen Methode?",
            "answers": [
                "Fehlerfortpflanzung durch partielle Ableitungen zu berechnen",
                "Alle Fehler zu ignorieren",
                "Nur den groessten Fehler zu beruecksichtigen",
                "Fehler durch Mittelwertbildung zu eliminieren"
            ],
            "correct": 0
        }
    ],
    "VL2: Deskriptive Statistik": [
        {
            "text": "Was ist ein Histogramm und woran kann man die rel./abs. Haeufigkeit darin ablesen?",
            "answers": [
                "Eine Darstellung der Haeufigkeitsverteilung; rel. Haeufigkeit an der Flaeche, abs. Haeufigkeit an der Hoehe mal Klassenbreite",
                "Ein Kreisdiagramm zur Darstellung von Anteilen",
                "Eine Tabelle mit allen Messwerten",
                "Ein Streudiagramm zur Korrelationsanalyse"
            ],
            "correct": 0
        },
        {
            "text": "Was beschreibt die empirische Verteilungsfunktion?",
            "answers": [
                "Den Anteil der Beobachtungen, die kleiner oder gleich einem bestimmten Wert sind",
                "Die durchschnittliche Haeufigkeit aller Werte",
                "Die Summe aller Messwerte",
                "Die Standardabweichung der Daten"
            ],
            "correct": 0
        },
        {
            "text": "Welche Lageparameter gibt es?",
            "answers": [
                "Mittelwert, Median, Modus",
                "Varianz, Standardabweichung, Spannweite",
                "Minimum, Maximum, Quartile",
                "Nur den arithmetischen Mittelwert"
            ],
            "correct": 0
        },
        {
            "text": "Was ist ein Boxplot?",
            "answers": [
                "Eine grafische Darstellung von Median, Quartilen und Ausreissern",
                "Ein dreidimensionales Diagramm",
                "Eine Tabelle mit statistischen Kennzahlen",
                "Ein Histogramm mit farbigen Balken"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Unterschied zwischen empirischer Varianz und Stichprobenvarianz?",
            "answers": [
                "Stichprobenvarianz teilt durch n-1, empirische Varianz durch n",
                "Es gibt keinen Unterschied",
                "Empirische Varianz ist immer groesser",
                "Stichprobenvarianz wird nur bei kleinen Stichproben verwendet"
            ],
            "correct": 0
        },
        {
            "text": "Was ist eine Dichte?",
            "answers": [
                "Die Ableitung der Verteilungsfunktion bei stetigen Zufallsvariablen",
                "Die Anzahl der Messwerte pro Einheit",
                "Das Verhaeltnis von Masse zu Volumen",
                "Die Summe aller Wahrscheinlichkeiten"
            ],
            "correct": 0
        },
        {
            "text": "Wie haengt die Verteilungsfunktion mit der Dichte zusammen?",
            "answers": [
                "Die Verteilungsfunktion ist das Integral der Dichte",
                "Die Dichte ist das Integral der Verteilungsfunktion",
                "Beide sind unabhaengig voneinander",
                "Sie sind identisch"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Standardnormalverteilung und warum ist sie so bedeutend?",
            "answers": [
                "Normalverteilung mit Erwartungswert 0 und Varianz 1; dient als Referenz fuer Standardisierung",
                "Eine gleichmaessige Verteilung aller Werte",
                "Die haeufigste Verteilung in der Natur",
                "Eine Verteilung nur fuer grosse Stichproben"
            ],
            "correct": 0
        }
    ],
    "VL3: Zusammenhangsanalyse": [
        {
            "text": "Was ist eine Kontingenztafel?",
            "answers": [
                "Eine Kreuztabelle zur Darstellung der gemeinsamen Haeufigkeitsverteilung zweier Merkmale",
                "Eine Tabelle fuer stetige Daten",
                "Eine Liste aller moeglichen Kombinationen",
                "Ein Diagramm zur Darstellung von Zeitreihen"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Idee hinter der Zusammenhangsanalyse in Kontingenztafeln?",
            "answers": [
                "Zu pruefen, ob die beobachteten Haeufigkeiten von den erwarteten bei Unabhaengigkeit abweichen",
                "Alle Werte zu addieren",
                "Den Mittelwert der Tabelle zu berechnen",
                "Die groesste Haeufigkeit zu finden"
            ],
            "correct": 0
        },
        {
            "text": "Wie wird der Chi-Quadrat-Koeffizient interpretiert?",
            "answers": [
                "Je groesser der Wert, desto staerker die Abweichung von der Unabhaengigkeit",
                "Ein Wert von 0 bedeutet perfekte Abhaengigkeit",
                "Negative Werte zeigen keinen Zusammenhang",
                "Der Wert sollte immer 1 sein"
            ],
            "correct": 0
        },
        {
            "text": "Welche beiden Korrelationskoeffizienten kennen Sie und wie unterscheiden sie sich?",
            "answers": [
                "Pearson (linearer Zusammenhang) und Spearman (monotoner Zusammenhang)",
                "Alpha und Beta Korrelation",
                "Positive und negative Korrelation",
                "Einfache und multiple Korrelation"
            ],
            "correct": 0
        },
        {
            "text": "Wie funktioniert die Methode der kleinsten Quadrate?",
            "answers": [
                "Minimierung der Summe der quadrierten Abweichungen zwischen beobachteten und vorhergesagten Werten",
                "Addition aller Quadrate der Messwerte",
                "Berechnung des kleinsten Wertes",
                "Mittelung aller quadrierten Differenzen"
            ],
            "correct": 0
        },
        {
            "text": "Wie kann man die Qualitaet einer linearen Regression beurteilen?",
            "answers": [
                "Durch das Bestimmtheitsmass R-Quadrat, das den erklaerten Varianzanteil angibt",
                "Durch Zaehlen der Datenpunkte",
                "Durch die Steigung der Geraden",
                "Nur durch visuelle Inspektion"
            ],
            "correct": 0
        },
        {
            "text": "Besteht ein Zusammenhang zwischen Bestimmtheitsmass und Korrelationskoeffizient?",
            "answers": [
                "Ja, R-Quadrat ist das Quadrat des Korrelationskoeffizienten nach Pearson",
                "Nein, sie sind voellig unabhaengig",
                "Sie sind identisch",
                "R-Quadrat ist immer groesser als r"
            ],
            "correct": 0
        }
    ],
    "VL4: Wahrscheinlichkeitstheorie": [
        {
            "text": "Was besagen die Axiome von Kolmogorov?",
            "answers": [
                "Grundlegende Eigenschaften von Wahrscheinlichkeiten: Nicht-Negativitaet, Normierung, Additivitaet",
                "Regeln zur Berechnung von Mittelwerten",
                "Bedingungen fuer Normalverteilungen",
                "Definitionen von Zufallsvariablen"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt das empirische Gesetz der grossen Zahlen?",
            "answers": [
                "Die relative Haeufigkeit naehert sich bei wachsender Anzahl der Versuche der theoretischen Wahrscheinlichkeit",
                "Grosse Zahlen sind wahrscheinlicher als kleine",
                "Je mehr Messungen, desto groesser die Fehler",
                "Die Summe aller Wahrscheinlichkeiten ist unendlich"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Laplace-Wahrscheinlichkeit?",
            "answers": [
                "Bei gleich wahrscheinlichen Ergebnissen: P = guenstige Faelle / moegliche Faelle",
                "Die Wahrscheinlichkeit komplexer Ereignisse",
                "Eine spezielle Normalverteilung",
                "Die Wahrscheinlichkeit seltener Ereignisse"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Binomialkoeffizient?",
            "answers": [
                "Die Anzahl der Moeglichkeiten, k Elemente aus n auszuwaehlen: n ueber k",
                "Das Produkt zweier Zahlen",
                "Die Summe von Binomialverteilungen",
                "Ein Koeffizient der Regressionsgleichung"
            ],
            "correct": 0
        },
        {
            "text": "Was ist eine bedingte Wahrscheinlichkeit?",
            "answers": [
                "Die Wahrscheinlichkeit von A unter der Bedingung, dass B eingetreten ist: P(A|B)",
                "Eine Wahrscheinlichkeit, die von vielen Bedingungen abhaengt",
                "Die Summe zweier Wahrscheinlichkeiten",
                "Eine Wahrscheinlichkeit nahe Null"
            ],
            "correct": 0
        },
        {
            "text": "Wann sind zwei Ereignisse stochastisch unabhaengig?",
            "answers": [
                "Wenn P(A und B) = P(A) mal P(B)",
                "Wenn sie niemals gleichzeitig auftreten",
                "Wenn sie identisch sind",
                "Wenn ihre Summe 1 ergibt"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt der Satz der totalen Wahrscheinlichkeit?",
            "answers": [
                "P(A) kann als Summe der bedingten Wahrscheinlichkeiten ueber eine vollstaendige Zerlegung berechnet werden",
                "Die Summe aller Wahrscheinlichkeiten ist immer 1",
                "Alle Ereignisse haben die gleiche Wahrscheinlichkeit",
                "Wahrscheinlichkeiten koennen addiert werden"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt der Satz von Bayes?",
            "answers": [
                "Erlaubt die Umkehrung bedingter Wahrscheinlichkeiten: P(A|B) aus P(B|A)",
                "Die Wahrscheinlichkeit ist immer symmetrisch",
                "Bedingte Wahrscheinlichkeiten sind immer gleich",
                "Nur fuer unabhaengige Ereignisse anwendbar"
            ],
            "correct": 0
        }
    ],
    "VL5: Zufallsvariablen": [
        {
            "text": "Was ist eine Zufallsvariable?",
            "answers": [
                "Eine Funktion, die jedem Ergebnis eines Zufallsexperiments eine Zahl zuordnet",
                "Eine Variable, die zufaellig ausgewaehlt wird",
                "Ein Messwert mit grosser Unsicherheit",
                "Eine beliebige mathematische Variable"
            ],
            "correct": 0
        },
        {
            "text": "Wie haengen Zaehldichte, Wahrscheinlichkeitsfunktion und Verteilungsfunktion zusammen?",
            "answers": [
                "Die Wahrscheinlichkeitsfunktion gibt P(X=k), die Verteilungsfunktion gibt P(X<=k)",
                "Alle drei sind identisch",
                "Sie haengen nicht zusammen",
                "Die Zaehldichte ist die Ableitung der Verteilungsfunktion"
            ],
            "correct": 0
        },
        {
            "text": "Was ist eine Bernoulli-Variable?",
            "answers": [
                "Eine diskrete Zufallsvariable mit nur zwei moeglichen Werten (0 und 1)",
                "Eine stetige Zufallsvariable",
                "Eine Variable mit Normalverteilung",
                "Eine Variable mit unendlich vielen Werten"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Erwartungswert einer Zufallsvariablen?",
            "answers": [
                "Der gewichtete Durchschnitt aller moeglichen Werte mit ihren Wahrscheinlichkeiten",
                "Der haeufigste Wert",
                "Der Median der Verteilung",
                "Die Summe aller Werte"
            ],
            "correct": 0
        },
        {
            "text": "Wie berechnet sich die Varianz einer Zufallsvariablen?",
            "answers": [
                "Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2",
                "Als Summe aller Abweichungen",
                "Als Quadrat des Erwartungswerts",
                "Als Differenz zwischen Maximum und Minimum"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt der Verschiebungssatz?",
            "answers": [
                "Var(X) = E[X^2] - (E[X])^2 - eine alternative Berechnungsformel fuer die Varianz",
                "Der Erwartungswert kann verschoben werden",
                "Die Verteilung kann horizontal verschoben werden",
                "Varianzen koennen addiert werden"
            ],
            "correct": 0
        },
        {
            "text": "Was kann man mit der Binomialverteilung modellieren?",
            "answers": [
                "Die Anzahl der Erfolge bei n unabhaengigen Bernoulli-Experimenten",
                "Beliebige stetige Prozesse",
                "Nur normalverteilte Daten",
                "Zeitreihen mit Trend"
            ],
            "correct": 0
        },
        {
            "text": "Was ist das Besondere an der Poisson-Verteilung?",
            "answers": [
                "Sie modelliert seltene Ereignisse und ist ein Grenzfall der Binomialverteilung",
                "Sie ist immer symmetrisch",
                "Sie hat keine Parameter",
                "Sie ist nur fuer grosse Stichproben geeignet"
            ],
            "correct": 0
        }
    ],
    "VL6: Stetige Verteilungen": [
        {
            "text": "Was ist das Spezielle an Wahrscheinlichkeiten stetiger Zufallsvariablen?",
            "answers": [
                "P(X = x) = 0 fuer jeden einzelnen Wert; Wahrscheinlichkeiten nur fuer Intervalle",
                "Alle Werte haben die gleiche Wahrscheinlichkeit",
                "Die Wahrscheinlichkeiten sind immer 1",
                "Es gibt nur endlich viele Werte"
            ],
            "correct": 0
        },
        {
            "text": "Wie sieht die Dichtefunktion einer Gleichverteilung aus?",
            "answers": [
                "Eine konstante Funktion im Intervall [a,b], ausserhalb 0",
                "Eine Glockenkurve",
                "Eine exponentielle Funktion",
                "Eine Treppenfunktion"
            ],
            "correct": 0
        },
        {
            "text": "Wie berechnet man den Erwartungswert einer stetigen Zufallsvariablen?",
            "answers": [
                "E[X] = Integral von x mal f(x) dx ueber den gesamten Wertebereich",
                "Als Summe aller Werte",
                "Als Median der Dichtefunktion",
                "Durch Ableitung der Verteilungsfunktion"
            ],
            "correct": 0
        },
        {
            "text": "Warum ist die Standardnormalverteilung so bedeutsam?",
            "answers": [
                "Jede Normalverteilung kann durch Standardisierung darauf zurueckgefuehrt werden",
                "Sie ist die einfachste Verteilung",
                "Alle Daten folgen dieser Verteilung",
                "Sie hat keine Parameter"
            ],
            "correct": 0
        },
        {
            "text": "Wann sind Zufallsvariablen unabhaengig?",
            "answers": [
                "Wenn die gemeinsame Verteilung das Produkt der Randverteilungen ist",
                "Wenn sie nicht korreliert sind",
                "Wenn sie verschiedene Erwartungswerte haben",
                "Wenn sie aus verschiedenen Experimenten stammen"
            ],
            "correct": 0
        },
        {
            "text": "Was sind Kovarianz und Korrelationskoeffizient?",
            "answers": [
                "Kovarianz misst linearen Zusammenhang, Korrelation ist die standardisierte Kovarianz",
                "Beides sind Lageparameter",
                "Masse fuer die Variabilitaet einzelner Variablen",
                "Nur fuer kategoriale Daten geeignet"
            ],
            "correct": 0
        },
        {
            "text": "Wie kann man die Varianz der Summe zweier Zufallsvariablen berechnen?",
            "answers": [
                "Var(X + Y) = Var(X) + Var(Y) + 2 mal Cov(X,Y)",
                "Einfach die Varianzen addieren",
                "Die Varianzen multiplizieren",
                "Den Erwartungswert quadrieren"
            ],
            "correct": 0
        }
    ],
    "VL7: Schaetztheorie": [
        {
            "text": "Was besagt das Gesetz der grossen Zahlen?",
            "answers": [
                "Der Stichprobenmittelwert konvergiert mit wachsendem n gegen den Erwartungswert",
                "Grosse Stichproben sind immer besser",
                "Die Varianz nimmt mit der Stichprobengroesse zu",
                "Alle Werte naehern sich dem Median"
            ],
            "correct": 0
        },
        {
            "text": "Welche Aussage steckt im Poissonschen Grenzwertsatz?",
            "answers": [
                "Binomialverteilung naehert sich bei grossem n und kleinem p der Poisson-Verteilung",
                "Alle Verteilungen werden zu Normalverteilungen",
                "Grenzwerte sind immer unendlich",
                "Nur fuer stetige Verteilungen gueltig"
            ],
            "correct": 0
        },
        {
            "text": "Was besagt der zentrale Grenzwertsatz und warum ist das so wichtig?",
            "answers": [
                "Die Summe/Mittelwert vieler unabhaengiger ZV ist approximativ normalverteilt; Basis fuer viele Tests",
                "Alle Daten sind normalverteilt",
                "Der Mittelwert ist immer 0",
                "Nur fuer identische Verteilungen anwendbar"
            ],
            "correct": 0
        },
        {
            "text": "Was bedeutet es, wenn ein Schaetzer erwartungstreu ist?",
            "answers": [
                "Der Erwartungswert des Schaetzers entspricht dem wahren Parameter",
                "Der Schaetzer hat keine Varianz",
                "Der Schaetzer ist immer korrekt",
                "Der Schaetzer benoetigt viele Daten"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Verzerrung eines Schaetzers?",
            "answers": [
                "Die Differenz zwischen Erwartungswert des Schaetzers und wahrem Parameter",
                "Die Standardabweichung des Schaetzers",
                "Der Fehler bei der Berechnung",
                "Die Unsicherheit der Messung"
            ],
            "correct": 0
        },
        {
            "text": "Welche Masszahlen geben die Qualitaet eines Schaetzers an?",
            "answers": [
                "Erwartungstreue (Bias), Varianz, Mean Squared Error (MSE)",
                "Nur der Mittelwert",
                "Median und Modus",
                "Minimum und Maximum"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Idee bei der Maximum-Likelihood-Methode zur Parameterschaetzung?",
            "answers": [
                "Waehle die Parameter, die die beobachteten Daten am wahrscheinlichsten machen",
                "Maximiere die Anzahl der Datenpunkte",
                "Finde den groessten Wert in den Daten",
                "Berechne den Durchschnitt aller Parameter"
            ],
            "correct": 0
        },
        {
            "text": "Wie funktioniert die Kleinste-Quadrate-Schaetzung?",
            "answers": [
                "Minimiere die Summe der quadrierten Abweichungen zwischen Daten und Modell",
                "Addiere alle Quadrate",
                "Finde die kleinste Beobachtung",
                "Berechne die Wurzel der Varianz"
            ],
            "correct": 0
        }
    ],
    "VL8: Hypothesentests": [
        {
            "text": "Welche Arten von Fehlern gibt es bei Hypothesentests?",
            "answers": [
                "Fehler 1. Art (H0 faelschlich ablehnen) und Fehler 2. Art (H0 faelschlich beibehalten)",
                "Nur systematische Fehler",
                "Messfehler und Rechenfehler",
                "Kleine und grosse Fehler"
            ],
            "correct": 0
        },
        {
            "text": "Was ist das Signifikanzniveau Alpha?",
            "answers": [
                "Die maximale Wahrscheinlichkeit fuer einen Fehler 1. Art",
                "Die Wahrscheinlichkeit, dass H0 wahr ist",
                "Die Groesse der Stichprobe",
                "Der kritische Wert der Teststatistik"
            ],
            "correct": 0
        },
        {
            "text": "Worin unterscheiden sich der einseitige und zweiseitige Gauss-Test?",
            "answers": [
                "Einseitig: H1: Mu > Mu0 oder Mu < Mu0; Zweiseitig: H1: Mu ungleich Mu0",
                "Die Anzahl der Stichproben",
                "Die verwendete Verteilung",
                "Die Berechnung des Mittelwerts"
            ],
            "correct": 0
        },
        {
            "text": "Was ist Nullhypothese und was Alternativhypothese?",
            "answers": [
                "H0: zu testende Behauptung (oft Status quo); H1: das Gegenteil",
                "H0 ist immer falsch, H1 immer wahr",
                "Beide sind das Gleiche",
                "H0 kommt von den Daten, H1 von der Theorie"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Ueberschreitungswahrscheinlichkeit (p-Wert)?",
            "answers": [
                "Die Wahrscheinlichkeit, unter H0 ein mindestens so extremes Ergebnis zu beobachten",
                "Die Wahrscheinlichkeit, dass H1 wahr ist",
                "Immer gleich Alpha",
                "Die Fehlerwahrscheinlichkeit der Messung"
            ],
            "correct": 0
        },
        {
            "text": "Was liefert die Guetefunktion eines Tests?",
            "answers": [
                "Die Wahrscheinlichkeit, H0 abzulehnen in Abhaengigkeit vom wahren Parameter",
                "Die Genauigkeit der Messung",
                "Die Qualitaet der Daten",
                "Die optimale Stichprobengroesse"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Unterschied zwischen Gauss- und t-Test?",
            "answers": [
                "Gauss-Test bei bekannter Varianz, t-Test bei geschaetzter Varianz aus der Stichprobe",
                "t-Test ist fuer kleine Stichproben, Gauss-Test fuer grosse",
                "Sie sind identisch",
                "Gauss-Test ist genauer"
            ],
            "correct": 0
        },
        {
            "text": "Welche Voraussetzung muessen die Daten fuer einen t-Test erfuellen?",
            "answers": [
                "Normalverteilung der Grundgesamtheit (bei kleinen Stichproben kritisch)",
                "Gleichverteilung",
                "Mindestens 1000 Beobachtungen",
                "Keine Ausreisser"
            ],
            "correct": 0
        }
    ],
    "VL9: Konfidenzintervalle und Tests": [
        {
            "text": "Was ist die Idee hinter der Teststatistik des Chi-Quadrat-Anpassungstests?",
            "answers": [
                "Vergleich der beobachteten mit den erwarteten Haeufigkeiten unter H0",
                "Berechnung des Durchschnitts",
                "Summierung aller Werte",
                "Bestimmung der Varianz"
            ],
            "correct": 0
        },
        {
            "text": "Mit welchem Wert wird der Chi-Quadrat-Wert verglichen?",
            "answers": [
                "Mit dem Quantil der Chi-Quadrat-Verteilung mit entsprechenden Freiheitsgraden",
                "Mit dem Mittelwert der Daten",
                "Immer mit 1",
                "Mit der Standardabweichung"
            ],
            "correct": 0
        },
        {
            "text": "Wozu dient ein Konfidenzintervall?",
            "answers": [
                "Zur Angabe eines Bereichs, der den wahren Parameter mit bestimmter Wahrscheinlichkeit enthaelt",
                "Zur Berechnung des Mittelwerts",
                "Zur Bestimmung von Ausreissern",
                "Zur Visualisierung der Daten"
            ],
            "correct": 0
        },
        {
            "text": "Wie haengen Konfidenzintervalle und Hypothesentests zusammen?",
            "answers": [
                "Liegt der hypothetische Wert nicht im Konfidenzintervall, wird H0 abgelehnt",
                "Sie sind voellig unabhaengig",
                "Konfidenzintervalle ersetzen Tests",
                "Tests sind genauer als Konfidenzintervalle"
            ],
            "correct": 0
        },
        {
            "text": "Welche Verteilung liegt Konfidenzintervallen fuer die Varianz normalverteilter Merkmale zugrunde?",
            "answers": [
                "Die Chi-Quadrat-Verteilung",
                "Die Normalverteilung",
                "Die t-Verteilung",
                "Die Binomialverteilung"
            ],
            "correct": 0
        },
        {
            "text": "Warum basieren Konfidenzintervalle fuer die Auftretenswahrscheinlichkeit dichotomer Merkmale auf Quantilen der Standardnormalverteilung?",
            "answers": [
                "Wegen des zentralen Grenzwertsatzes und der Approximation der Binomialverteilung",
                "Weil es einfacher zu berechnen ist",
                "Weil dichotome Merkmale normalverteilt sind",
                "Aus historischen Gruenden"
            ],
            "correct": 0
        },
        {
            "text": "Welcher Wert wird beim Zweistichprobentest betrachtet?",
            "answers": [
                "Die Differenz der Mittelwerte der beiden Stichproben",
                "Die Summe der Mittelwerte",
                "Das Produkt der Varianzen",
                "Der groessere Mittelwert"
            ],
            "correct": 0
        },
        {
            "text": "Welche Varianten des Zweistichprobentests gibt es und was unterscheidet sie?",
            "answers": [
                "Verbundene Stichproben (gepaart) und unverbundene Stichproben (unabhaengig)",
                "Kleine und grosse Stichproben",
                "Parametrisch und nicht-parametrisch",
                "Nur einseitige und zweiseitige Tests"
            ],
            "correct": 0
        }
    ],
    "VL10: Regression und Chi-Quadrat-Tests": [
        {
            "text": "Wie kann ich Zusammenhaenge zwischen diskreten Merkmalen betrachten?",
            "answers": [
                "Mit Kontingenztafeln und Chi-Quadrat-Tests",
                "Nur mit Korrelationskoeffizienten",
                "Mit linearer Regression",
                "Gar nicht, nur stetige Merkmale erlauben Zusammenhangsanalyse"
            ],
            "correct": 0
        },
        {
            "text": "Was ist der Unterschied zwischen Chi-Quadrat-Unabhaengigkeits- und Chi-Quadrat-Anpassungstest?",
            "answers": [
                "Unabhaengigkeitstest prueft Zusammenhang zweier Merkmale, Anpassungstest prueft Verteilungsannahme",
                "Sie sind identisch",
                "Anpassungstest ist fuer kleine Stichproben",
                "Unabhaengigkeitstest benoetigt mehr Daten"
            ],
            "correct": 0
        },
        {
            "text": "Die Methode der kleinsten Quadrate liefert eine eindeutige Regressionsgerade - woher kommen also die Unsicherheiten?",
            "answers": [
                "Aus der Streuung der Daten um die Regressionsgerade (Residuen)",
                "Aus Rechenfehlern",
                "Aus zu kleinen Stichproben",
                "Es gibt keine Unsicherheiten"
            ],
            "correct": 0
        },
        {
            "text": "Was beschreibt der mittels einer KQ-Gerade vorhergesagte Wert?",
            "answers": [
                "Den bedingten Erwartungswert von Y gegeben X",
                "Den maximalen Wert von Y",
                "Die Varianz von Y",
                "Den Median von Y"
            ],
            "correct": 0
        },
        {
            "text": "Warum kann fuer die Regressionskoeffizienten eine Art t-Test angewendet werden?",
            "answers": [
                "Die Koeffizientenschaetzer sind unter Normalverteilungsannahme t-verteilt",
                "Weil die Stichprobe klein ist",
                "Aus traditionellen Gruenden",
                "t-Tests funktionieren immer"
            ],
            "correct": 0
        },
        {
            "text": "Warum ist der Test H0: Beta = 0 versus H1: Beta ungleich 0 besonders interessant?",
            "answers": [
                "Er prueft, ob ueberhaupt ein linearer Zusammenhang besteht",
                "Er ist am einfachsten zu berechnen",
                "Er wird immer signifikant",
                "Er benoetigt keine Voraussetzungen"
            ],
            "correct": 0
        },
        {
            "text": "Welche Prognosen sind basierend auf einer linearen Regression moeglich?",
            "answers": [
                "Punktschaetzung und Prognoseintervalle fuer zukuenftige Werte",
                "Nur der Mittelwert",
                "Exakte zukuenftige Werte",
                "Nur fuer vergangene Werte"
            ],
            "correct": 0
        },
        {
            "text": "Wie haengen Konfidenzintervalle fuer den Erwartungswert und Prognoseintervalle fuer die Werte zusammen?",
            "answers": [
                "Prognoseintervalle sind breiter, da zusaetzlich die individuelle Streuung beruecksichtigt wird",
                "Sie sind identisch",
                "Konfidenzintervalle sind breiter",
                "Sie haben nichts miteinander zu tun"
            ],
            "correct": 0
        }
    ]
};
export default QUESTIONS;
