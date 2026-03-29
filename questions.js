const QUESTIONS = {
    "VL1: Grundlagen": [
        {
            "text": "Warum soll ich mich als Biologe mit Statistik beschaeftigen?",
            "answers": [
                "Um komplexe mathematische Formeln auswendig zu lernen",
                "Weil es in jedem Studiengang Pflicht ist",
                "Statistik ist nur fuer Mathematiker relevant",
                "Um biologische Daten wissenschaftlich auszuwerten und Zusammenhaenge zu erkennen"
            ],
            "correct": 3
        },
        {
            "text": "Was sind Merkmal und Merkmalsauspraegung?",
            "answers": [
                "Merkmal ist theoretisch, Merkmalsauspraegung ist praktisch",
                "Merkmal ist der Messwert, Merkmalsauspraegung ist der Fehler",
                "Merkmal ist eine beobachtbare Eigenschaft, Merkmalsauspraegung ist der konkrete Wert",
                "Beide Begriffe bezeichnen das Gleiche"
            ],
            "correct": 2
        },
        {
            "text": "Welche Skalenniveaus gibt es?",
            "answers": [
                "Klein, Mittel, Gross",
                "Diskret, Stetig, Gemischt",
                "Linear, Exponentiell, Logarithmisch",
                "Nominal, Ordinal, Intervall, Verhaeltnis"
            ],
            "correct": 3
        },
        {
            "text": "Welche Arten von Messunsicherheiten/Fehlern gibt es?",
            "answers": [
                "Nur mathematische Fehler",
                "Grobe, mittlere und feine Fehler",
                "Systematische und zufaellige Fehler",
                "Nur menschliche Fehler"
            ],
            "correct": 2
        },
        {
            "text": "Warum ist die Summe der Abweichungen vom Mittelwert kein sinnvolles Mass fuer die Messunsicherheit?",
            "answers": [
                "Weil die Berechnung zu kompliziert ist",
                "Weil der Mittelwert nicht genau genug ist",
                "Weil nur grosse Abweichungen wichtig sind",
                "Weil sich positive und negative Abweichungen aufheben und die Summe immer Null ergibt"
            ],
            "correct": 3
        },
        {
            "text": "Was besagt die 3-Sigma-Regel?",
            "answers": [
                "Jeder dritte Messwert ist ein Ausreisser",
                "Die Standardabweichung muss durch 3 geteilt werden",
                "Man muss mindestens 3 Messungen durchfuehren",
                "Etwa 99,7% der Werte liegen innerhalb von 3 Standardabweichungen vom Mittelwert"
            ],
            "correct": 3
        },
        {
            "text": "Was ist der Standardfehler?",
            "answers": [
                "Die Differenz zwischen zwei Messungen",
                "Der groesste Fehler in einer Messreihe",
                "Die Standardabweichung des Mittelwerts einer Stichprobe",
                "Ein Fehler, der immer auftritt"
            ],
            "correct": 2
        },
        {
            "text": "Was ist die Idee hinter der Gaussschen Methode?",
            "answers": [
                "Alle Fehler zu ignorieren",
                "Fehler durch Mittelwertbildung zu eliminieren",
                "Fehlerfortpflanzung durch partielle Ableitungen zu berechnen",
                "Nur den groessten Fehler zu beruecksichtigen"
            ],
            "correct": 2
        }
    ],
    "VL2: Deskriptive Statistik": [
        {
            "text": "Was ist ein Histogramm und woran kann man die rel./abs. Haeufigkeit darin ablesen?",
            "answers": [
                "Eine Darstellung der Haeufigkeitsverteilung; rel. Haeufigkeit an der Flaeche, abs. Haeufigkeit an der Hoehe mal Klassenbreite",
                "Eine Tabelle mit allen Messwerten",
                "Ein Kreisdiagramm zur Darstellung von Anteilen",
                "Ein Streudiagramm zur Korrelationsanalyse"
            ],
            "correct": 0
        },
        {
            "text": "Was beschreibt die empirische Verteilungsfunktion?",
            "answers": [
                "Die Summe aller Messwerte",
                "Die Standardabweichung der Daten",
                "Den Anteil der Beobachtungen, die kleiner oder gleich einem bestimmten Wert sind",
                "Die durchschnittliche Haeufigkeit aller Werte"
            ],
            "correct": 2
        },
        {
            "text": "Welche Lageparameter gibt es?",
            "answers": [
                "Minimum, Maximum, Quartile",
                "Varianz, Standardabweichung, Spannweite",
                "Nur den arithmetischen Mittelwert",
                "Mittelwert, Median, Modus"
            ],
            "correct": 3
        },
        {
            "text": "Was ist ein Boxplot?",
            "answers": [
                "Ein Histogramm mit farbigen Balken",
                "Eine Tabelle mit statistischen Kennzahlen",
                "Ein dreidimensionales Diagramm",
                "Eine grafische Darstellung von Median, Quartilen und Ausreissern"
            ],
            "correct": 3
        },
        {
            "text": "Was ist der Unterschied zwischen empirischer Varianz und Stichprobenvarianz?",
            "answers": [
                "Stichprobenvarianz wird nur bei kleinen Stichproben verwendet",
                "Es gibt keinen Unterschied",
                "Stichprobenvarianz teilt durch n-1, empirische Varianz durch n",
                "Empirische Varianz ist immer groesser"
            ],
            "correct": 2
        },
        {
            "text": "Was ist eine Dichte?",
            "answers": [
                "Das Verhaeltnis von Masse zu Volumen",
                "Die Summe aller Wahrscheinlichkeiten",
                "Die Anzahl der Messwerte pro Einheit",
                "Die Ableitung der Verteilungsfunktion bei stetigen Zufallsvariablen"
            ],
            "correct": 3
        },
        {
            "text": "Wie haengt die Verteilungsfunktion mit der Dichte zusammen?",
            "answers": [
                "Die Verteilungsfunktion ist das Integral der Dichte",
                "Die Dichte ist das Integral der Verteilungsfunktion",
                "Sie sind identisch",
                "Beide sind unabhaengig voneinander"
            ],
            "correct": 0
        },
        {
            "text": "Was ist die Standardnormalverteilung und warum ist sie so bedeutend?",
            "answers": [
                "Eine Verteilung nur fuer grosse Stichproben",
                "Normalverteilung mit Erwartungswert 0 und Varianz 1; dient als Referenz fuer Standardisierung",
                "Die haeufigste Verteilung in der Natur",
                "Eine gleichmaessige Verteilung aller Werte"
            ],
            "correct": 1
        }
    ],
    "VL3: Zusammenhangsanalyse": [
        {
            "text": "Was ist eine Kontingenztafel?",
            "answers": [
                "Eine Tabelle fuer stetige Daten",
                "Ein Diagramm zur Darstellung von Zeitreihen",
                "Eine Liste aller moeglichen Kombinationen",
                "Eine Kreuztabelle zur Darstellung der gemeinsamen Haeufigkeitsverteilung zweier Merkmale"
            ],
            "correct": 3
        },
        {
            "text": "Was ist die Idee hinter der Zusammenhangsanalyse in Kontingenztafeln?",
            "answers": [
                "Alle Werte zu addieren",
                "Die groesste Haeufigkeit zu finden",
                "Zu pruefen, ob die beobachteten Haeufigkeiten von den erwarteten bei Unabhaengigkeit abweichen",
                "Den Mittelwert der Tabelle zu berechnen"
            ],
            "correct": 2
        },
        {
            "text": "Wie wird der Chi-Quadrat-Koeffizient interpretiert?",
            "answers": [
                "Der Wert sollte immer 1 sein",
                "Negative Werte zeigen keinen Zusammenhang",
                "Ein Wert von 0 bedeutet perfekte Abhaengigkeit",
                "Je groesser der Wert, desto staerker die Abweichung von der Unabhaengigkeit"
            ],
            "correct": 3
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
                "Berechnung des kleinsten Wertes",
                "Mittelung aller quadrierten Differenzen",
                "Addition aller Quadrate der Messwerte"
            ],
            "correct": 0
        },
        {
            "text": "Wie kann man die Qualitaet einer linearen Regression beurteilen?",
            "answers": [
                "Durch das Bestimmtheitsmass R-Quadrat, das den erklaerten Varianzanteil angibt",
                "Nur durch visuelle Inspektion",
                "Durch die Steigung der Geraden",
                "Durch Zaehlen der Datenpunkte"
            ],
            "correct": 0
        },
        {
            "text": "Besteht ein Zusammenhang zwischen Bestimmtheitsmass und Korrelationskoeffizient?",
            "answers": [
                "Nein, sie sind voellig unabhaengig",
                "R-Quadrat ist immer groesser als r",
                "Sie sind identisch",
                "Ja, R-Quadrat ist das Quadrat des Korrelationskoeffizienten nach Pearson"
            ],
            "correct": 3
        }
    ],
    "VL4: Wahrscheinlichkeitstheorie": [
        {
            "text": "Was besagen die Axiome von Kolmogorov?",
            "answers": [
                "Bedingungen fuer Normalverteilungen",
                "Definitionen von Zufallsvariablen",
                "Grundlegende Eigenschaften von Wahrscheinlichkeiten: Nicht-Negativitaet, Normierung, Additivitaet",
                "Regeln zur Berechnung von Mittelwerten"
            ],
            "correct": 2
        },
        {
            "text": "Was besagt das empirische Gesetz der grossen Zahlen?",
            "answers": [
                "Je mehr Messungen, desto groesser die Fehler",
                "Die relative Haeufigkeit naehert sich bei wachsender Anzahl der Versuche der theoretischen Wahrscheinlichkeit",
                "Grosse Zahlen sind wahrscheinlicher als kleine",
                "Die Summe aller Wahrscheinlichkeiten ist unendlich"
            ],
            "correct": 1
        },
        {
            "text": "Was ist die Laplace-Wahrscheinlichkeit?",
            "answers": [
                "Die Wahrscheinlichkeit komplexer Ereignisse",
                "Die Wahrscheinlichkeit seltener Ereignisse",
                "Bei gleich wahrscheinlichen Ergebnissen: P = guenstige Faelle / moegliche Faelle",
                "Eine spezielle Normalverteilung"
            ],
            "correct": 2
        },
        {
            "text": "Was ist der Binomialkoeffizient?",
            "answers": [
                "Ein Koeffizient der Regressionsgleichung",
                "Die Summe von Binomialverteilungen",
                "Das Produkt zweier Zahlen",
                "Die Anzahl der Moeglichkeiten, k Elemente aus n auszuwaehlen: n ueber k"
            ],
            "correct": 3
        },
        {
            "text": "Was ist eine bedingte Wahrscheinlichkeit?",
            "answers": [
                "Eine Wahrscheinlichkeit, die von vielen Bedingungen abhaengt",
                "Eine Wahrscheinlichkeit nahe Null",
                "Die Wahrscheinlichkeit von A unter der Bedingung, dass B eingetreten ist: P(A|B)",
                "Die Summe zweier Wahrscheinlichkeiten"
            ],
            "correct": 2
        },
        {
            "text": "Wann sind zwei Ereignisse stochastisch unabhaengig?",
            "answers": [
                "Wenn ihre Summe 1 ergibt",
                "Wenn sie niemals gleichzeitig auftreten",
                "Wenn P(A und B) = P(A) mal P(B)",
                "Wenn sie identisch sind"
            ],
            "correct": 2
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
                "Bedingte Wahrscheinlichkeiten sind immer gleich",
                "Erlaubt die Umkehrung bedingter Wahrscheinlichkeiten: P(A|B) aus P(B|A)",
                "Nur fuer unabhaengige Ereignisse anwendbar",
                "Die Wahrscheinlichkeit ist immer symmetrisch"
            ],
            "correct": 1
        }
    ],
    "VL5: Zufallsvariablen": [
        {
            "text": "Was ist eine Zufallsvariable?",
            "answers": [
                "Eine Funktion, die jedem Ergebnis eines Zufallsexperiments eine Zahl zuordnet",
                "Eine beliebige mathematische Variable",
                "Ein Messwert mit grosser Unsicherheit",
                "Eine Variable, die zufaellig ausgewaehlt wird"
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
                "Eine stetige Zufallsvariable",
                "Eine Variable mit unendlich vielen Werten",
                "Eine diskrete Zufallsvariable mit nur zwei moeglichen Werten (0 und 1)",
                "Eine Variable mit Normalverteilung"
            ],
            "correct": 2
        },
        {
            "text": "Was ist der Erwartungswert einer Zufallsvariablen?",
            "answers": [
                "Der haeufigste Wert",
                "Der Median der Verteilung",
                "Der gewichtete Durchschnitt aller moeglichen Werte mit ihren Wahrscheinlichkeiten",
                "Die Summe aller Werte"
            ],
            "correct": 2
        },
        {
            "text": "Wie berechnet sich die Varianz einer Zufallsvariablen?",
            "answers": [
                "Als Summe aller Abweichungen",
                "Als Quadrat des Erwartungswerts",
                "Als Differenz zwischen Maximum und Minimum",
                "Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2"
            ],
            "correct": 3
        },
        {
            "text": "Was besagt der Verschiebungssatz?",
            "answers": [
                "Der Erwartungswert kann verschoben werden",
                "Var(X) = E[X^2] - (E[X])^2 - eine alternative Berechnungsformel fuer die Varianz",
                "Die Verteilung kann horizontal verschoben werden",
                "Varianzen koennen addiert werden"
            ],
            "correct": 1
        },
        {
            "text": "Was kann man mit der Binomialverteilung modellieren?",
            "answers": [
                "Die Anzahl der Erfolge bei n unabhaengigen Bernoulli-Experimenten",
                "Nur normalverteilte Daten",
                "Beliebige stetige Prozesse",
                "Zeitreihen mit Trend"
            ],
            "correct": 0
        },
        {
            "text": "Was ist das Besondere an der Poisson-Verteilung?",
            "answers": [
                "Sie ist immer symmetrisch",
                "Sie modelliert seltene Ereignisse und ist ein Grenzfall der Binomialverteilung",
                "Sie ist nur fuer grosse Stichproben geeignet",
                "Sie hat keine Parameter"
            ],
            "correct": 1
        }
    ],
    "VL6: Stetige Verteilungen": [
        {
            "text": "Was ist das Spezielle an Wahrscheinlichkeiten stetiger Zufallsvariablen?",
            "answers": [
                "Es gibt nur endlich viele Werte",
                "Alle Werte haben die gleiche Wahrscheinlichkeit",
                "Die Wahrscheinlichkeiten sind immer 1",
                "P(X = x) = 0 fuer jeden einzelnen Wert; Wahrscheinlichkeiten nur fuer Intervalle"
            ],
            "correct": 3
        },
        {
            "text": "Wie sieht die Dichtefunktion einer Gleichverteilung aus?",
            "answers": [
                "Eine Treppenfunktion",
                "Eine Glockenkurve",
                "Eine konstante Funktion im Intervall [a,b], ausserhalb 0",
                "Eine exponentielle Funktion"
            ],
            "correct": 2
        },
        {
            "text": "Wie berechnet man den Erwartungswert einer stetigen Zufallsvariablen?",
            "answers": [
                "Als Median der Dichtefunktion",
                "Als Summe aller Werte",
                "E[X] = Integral von x mal f(x) dx ueber den gesamten Wertebereich",
                "Durch Ableitung der Verteilungsfunktion"
            ],
            "correct": 2
        },
        {
            "text": "Warum ist die Standardnormalverteilung so bedeutsam?",
            "answers": [
                "Sie hat keine Parameter",
                "Sie ist die einfachste Verteilung",
                "Alle Daten folgen dieser Verteilung",
                "Jede Normalverteilung kann durch Standardisierung darauf zurueckgefuehrt werden"
            ],
            "correct": 3
        },
        {
            "text": "Wann sind Zufallsvariablen unabhaengig?",
            "answers": [
                "Wenn sie aus verschiedenen Experimenten stammen",
                "Wenn die gemeinsame Verteilung das Produkt der Randverteilungen ist",
                "Wenn sie verschiedene Erwartungswerte haben",
                "Wenn sie nicht korreliert sind"
            ],
            "correct": 1
        },
        {
            "text": "Was sind Kovarianz und Korrelationskoeffizient?",
            "answers": [
                "Beides sind Lageparameter",
                "Kovarianz misst linearen Zusammenhang, Korrelation ist die standardisierte Kovarianz",
                "Nur fuer kategoriale Daten geeignet",
                "Masse fuer die Variabilitaet einzelner Variablen"
            ],
            "correct": 1
        },
        {
            "text": "Wie kann man die Varianz der Summe zweier Zufallsvariablen berechnen?",
            "answers": [
                "Die Varianzen multiplizieren",
                "Var(X + Y) = Var(X) + Var(Y) + 2 mal Cov(X,Y)",
                "Den Erwartungswert quadrieren",
                "Einfach die Varianzen addieren"
            ],
            "correct": 1
        }
    ],
    "VL7: Schaetztheorie": [
        {
            "text": "Was besagt das Gesetz der grossen Zahlen?",
            "answers": [
                "Alle Werte naehern sich dem Median",
                "Grosse Stichproben sind immer besser",
                "Die Varianz nimmt mit der Stichprobengroesse zu",
                "Der Stichprobenmittelwert konvergiert mit wachsendem n gegen den Erwartungswert"
            ],
            "correct": 3
        },
        {
            "text": "Welche Aussage steckt im Poissonschen Grenzwertsatz?",
            "answers": [
                "Alle Verteilungen werden zu Normalverteilungen",
                "Grenzwerte sind immer unendlich",
                "Binomialverteilung naehert sich bei grossem n und kleinem p der Poisson-Verteilung",
                "Nur fuer stetige Verteilungen gueltig"
            ],
            "correct": 2
        },
        {
            "text": "Was besagt der zentrale Grenzwertsatz und warum ist das so wichtig?",
            "answers": [
                "Nur fuer identische Verteilungen anwendbar",
                "Die Summe/Mittelwert vieler unabhaengiger ZV ist approximativ normalverteilt; Basis fuer viele Tests",
                "Alle Daten sind normalverteilt",
                "Der Mittelwert ist immer 0"
            ],
            "correct": 1
        },
        {
            "text": "Was bedeutet es, wenn ein Schaetzer erwartungstreu ist?",
            "answers": [
                "Der Schaetzer hat keine Varianz",
                "Der Schaetzer ist immer korrekt",
                "Der Schaetzer benoetigt viele Daten",
                "Der Erwartungswert des Schaetzers entspricht dem wahren Parameter"
            ],
            "correct": 3
        },
        {
            "text": "Was ist die Verzerrung eines Schaetzers?",
            "answers": [
                "Die Unsicherheit der Messung",
                "Die Standardabweichung des Schaetzers",
                "Der Fehler bei der Berechnung",
                "Die Differenz zwischen Erwartungswert des Schaetzers und wahrem Parameter"
            ],
            "correct": 3
        },
        {
            "text": "Welche Masszahlen geben die Qualitaet eines Schaetzers an?",
            "answers": [
                "Nur der Mittelwert",
                "Minimum und Maximum",
                "Median und Modus",
                "Erwartungstreue (Bias), Varianz, Mean Squared Error (MSE)"
            ],
            "correct": 3
        },
        {
            "text": "Was ist die Idee bei der Maximum-Likelihood-Methode zur Parameterschaetzung?",
            "answers": [
                "Waehle die Parameter, die die beobachteten Daten am wahrscheinlichsten machen",
                "Berechne den Durchschnitt aller Parameter",
                "Finde den groessten Wert in den Daten",
                "Maximiere die Anzahl der Datenpunkte"
            ],
            "correct": 0
        },
        {
            "text": "Wie funktioniert die Kleinste-Quadrate-Schaetzung?",
            "answers": [
                "Minimiere die Summe der quadrierten Abweichungen zwischen Daten und Modell",
                "Finde die kleinste Beobachtung",
                "Berechne die Wurzel der Varianz",
                "Addiere alle Quadrate"
            ],
            "correct": 0
        }
    ],
    "VL8: Hypothesentests": [
        {
            "text": "Welche Arten von Fehlern gibt es bei Hypothesentests?",
            "answers": [
                "Kleine und grosse Fehler",
                "Fehler 1. Art (H0 faelschlich ablehnen) und Fehler 2. Art (H0 faelschlich beibehalten)",
                "Messfehler und Rechenfehler",
                "Nur systematische Fehler"
            ],
            "correct": 1
        },
        {
            "text": "Was ist das Signifikanzniveau Alpha?",
            "answers": [
                "Die maximale Wahrscheinlichkeit fuer einen Fehler 1. Art",
                "Der kritische Wert der Teststatistik",
                "Die Wahrscheinlichkeit, dass H0 wahr ist",
                "Die Groesse der Stichprobe"
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
                "H0 ist immer falsch, H1 immer wahr",
                "Beide sind das Gleiche",
                "H0 kommt von den Daten, H1 von der Theorie",
                "H0: zu testende Behauptung (oft Status quo); H1: das Gegenteil"
            ],
            "correct": 3
        },
        {
            "text": "Was ist die Ueberschreitungswahrscheinlichkeit (p-Wert)?",
            "answers": [
                "Immer gleich Alpha",
                "Die Fehlerwahrscheinlichkeit der Messung",
                "Die Wahrscheinlichkeit, dass H1 wahr ist",
                "Die Wahrscheinlichkeit, unter H0 ein mindestens so extremes Ergebnis zu beobachten"
            ],
            "correct": 3
        },
        {
            "text": "Was liefert die Guetefunktion eines Tests?",
            "answers": [
                "Die optimale Stichprobengroesse",
                "Die Wahrscheinlichkeit, H0 abzulehnen in Abhaengigkeit vom wahren Parameter",
                "Die Qualitaet der Daten",
                "Die Genauigkeit der Messung"
            ],
            "correct": 1
        },
        {
            "text": "Was ist der Unterschied zwischen Gauss- und t-Test?",
            "answers": [
                "t-Test ist fuer kleine Stichproben, Gauss-Test fuer grosse",
                "Sie sind identisch",
                "Gauss-Test ist genauer",
                "Gauss-Test bei bekannter Varianz, t-Test bei geschaetzter Varianz aus der Stichprobe"
            ],
            "correct": 3
        },
        {
            "text": "Welche Voraussetzung muessen die Daten fuer einen t-Test erfuellen?",
            "answers": [
                "Keine Ausreisser",
                "Mindestens 1000 Beobachtungen",
                "Normalverteilung der Grundgesamtheit (bei kleinen Stichproben kritisch)",
                "Gleichverteilung"
            ],
            "correct": 2
        }
    ],
    "VL9: Konfidenzintervalle und Tests": [
        {
            "text": "Was ist die Idee hinter der Teststatistik des Chi-Quadrat-Anpassungstests?",
            "answers": [
                "Berechnung des Durchschnitts",
                "Bestimmung der Varianz",
                "Vergleich der beobachteten mit den erwarteten Haeufigkeiten unter H0",
                "Summierung aller Werte"
            ],
            "correct": 2
        },
        {
            "text": "Mit welchem Wert wird der Chi-Quadrat-Wert verglichen?",
            "answers": [
                "Mit dem Quantil der Chi-Quadrat-Verteilung mit entsprechenden Freiheitsgraden",
                "Mit dem Mittelwert der Daten",
                "Mit der Standardabweichung",
                "Immer mit 1"
            ],
            "correct": 0
        },
        {
            "text": "Wozu dient ein Konfidenzintervall?",
            "answers": [
                "Zur Visualisierung der Daten",
                "Zur Angabe eines Bereichs, der den wahren Parameter mit bestimmter Wahrscheinlichkeit enthaelt",
                "Zur Bestimmung von Ausreissern",
                "Zur Berechnung des Mittelwerts"
            ],
            "correct": 1
        },
        {
            "text": "Wie haengen Konfidenzintervalle und Hypothesentests zusammen?",
            "answers": [
                "Konfidenzintervalle ersetzen Tests",
                "Sie sind voellig unabhaengig",
                "Liegt der hypothetische Wert nicht im Konfidenzintervall, wird H0 abgelehnt",
                "Tests sind genauer als Konfidenzintervalle"
            ],
            "correct": 2
        },
        {
            "text": "Welche Verteilung liegt Konfidenzintervallen fuer die Varianz normalverteilter Merkmale zugrunde?",
            "answers": [
                "Die Normalverteilung",
                "Die t-Verteilung",
                "Die Chi-Quadrat-Verteilung",
                "Die Binomialverteilung"
            ],
            "correct": 2
        },
        {
            "text": "Warum basieren Konfidenzintervalle fuer die Auftretenswahrscheinlichkeit dichotomer Merkmale auf Quantilen der Standardnormalverteilung?",
            "answers": [
                "Aus historischen Gruenden",
                "Weil es einfacher zu berechnen ist",
                "Weil dichotome Merkmale normalverteilt sind",
                "Wegen des zentralen Grenzwertsatzes und der Approximation der Binomialverteilung"
            ],
            "correct": 3
        },
        {
            "text": "Welcher Wert wird beim Zweistichprobentest betrachtet?",
            "answers": [
                "Die Differenz der Mittelwerte der beiden Stichproben",
                "Der groessere Mittelwert",
                "Die Summe der Mittelwerte",
                "Das Produkt der Varianzen"
            ],
            "correct": 0
        },
        {
            "text": "Welche Varianten des Zweistichprobentests gibt es und was unterscheidet sie?",
            "answers": [
                "Kleine und grosse Stichproben",
                "Verbundene Stichproben (gepaart) und unverbundene Stichproben (unabhaengig)",
                "Parametrisch und nicht-parametrisch",
                "Nur einseitige und zweiseitige Tests"
            ],
            "correct": 1
        }
    ],
    "VL10: Regression und Chi-Quadrat-Tests": [
        {
            "text": "Wie kann ich Zusammenhaenge zwischen diskreten Merkmalen betrachten?",
            "answers": [
                "Mit linearer Regression",
                "Nur mit Korrelationskoeffizienten",
                "Gar nicht, nur stetige Merkmale erlauben Zusammenhangsanalyse",
                "Mit Kontingenztafeln und Chi-Quadrat-Tests"
            ],
            "correct": 3
        },
        {
            "text": "Was ist der Unterschied zwischen Chi-Quadrat-Unabhaengigkeits- und Chi-Quadrat-Anpassungstest?",
            "answers": [
                "Sie sind identisch",
                "Unabhaengigkeitstest benoetigt mehr Daten",
                "Unabhaengigkeitstest prueft Zusammenhang zweier Merkmale, Anpassungstest prueft Verteilungsannahme",
                "Anpassungstest ist fuer kleine Stichproben"
            ],
            "correct": 2
        },
        {
            "text": "Die Methode der kleinsten Quadrate liefert eine eindeutige Regressionsgerade - woher kommen also die Unsicherheiten?",
            "answers": [
                "Aus zu kleinen Stichproben",
                "Es gibt keine Unsicherheiten",
                "Aus der Streuung der Daten um die Regressionsgerade (Residuen)",
                "Aus Rechenfehlern"
            ],
            "correct": 2
        },
        {
            "text": "Was beschreibt der mittels einer KQ-Gerade vorhergesagte Wert?",
            "answers": [
                "Die Varianz von Y",
                "Den bedingten Erwartungswert von Y gegeben X",
                "Den Median von Y",
                "Den maximalen Wert von Y"
            ],
            "correct": 1
        },
        {
            "text": "Warum kann fuer die Regressionskoeffizienten eine Art t-Test angewendet werden?",
            "answers": [
                "t-Tests funktionieren immer",
                "Die Koeffizientenschaetzer sind unter Normalverteilungsannahme t-verteilt",
                "Weil die Stichprobe klein ist",
                "Aus traditionellen Gruenden"
            ],
            "correct": 1
        },
        {
            "text": "Warum ist der Test H0: Beta = 0 versus H1: Beta ungleich 0 besonders interessant?",
            "answers": [
                "Er wird immer signifikant",
                "Er benoetigt keine Voraussetzungen",
                "Er ist am einfachsten zu berechnen",
                "Er prueft, ob ueberhaupt ein linearer Zusammenhang besteht"
            ],
            "correct": 3
        },
        {
            "text": "Welche Prognosen sind basierend auf einer linearen Regression moeglich?",
            "answers": [
                "Nur der Mittelwert",
                "Nur fuer vergangene Werte",
                "Exakte zukuenftige Werte",
                "Punktschaetzung und Prognoseintervalle fuer zukuenftige Werte"
            ],
            "correct": 3
        },
        {
            "text": "Wie haengen Konfidenzintervalle fuer den Erwartungswert und Prognoseintervalle fuer die Werte zusammen?",
            "answers": [
                "Sie sind identisch",
                "Konfidenzintervalle sind breiter",
                "Sie haben nichts miteinander zu tun",
                "Prognoseintervalle sind breiter, da zusaetzlich die individuelle Streuung beruecksichtigt wird"
            ],
            "correct": 3
        }
    ]
};
export default QUESTIONS;
