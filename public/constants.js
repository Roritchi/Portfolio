export const Github = "https://github.com/Roritchi"
export const Portrait = "/profile.jpeg"
export const Email = "job@davidschneider.xyz"
export const Projekte = [
    {
        name: "takeoverbot",
        link: Github + "/takeoverbot",
        description: {
            "de-DE": "Ein Minecraft-Bot der jederzeit vom Nutzer übernommen werden kann",
            "en-US": "A Minecraft Bot which you can take over at any time",
        },
        long_desc: {
            "de-DE": "War teil eines Services welchen ich an Nutzer des Minecraft Servers 2b2t verkaufen wollte (Es haben sich einige bei mir gemeldet welche beim testen geholfen haben und bereit waren für den Service zu bezahlen). Geplant war das alle über ein Webinterface den Bot aktiviern und steuern können und die von mir bereitgestellten Plugins, sowie eigene oder third-party erstellte, benutzen können. Hintergrund war dass der Server nur eine begrenzte Nutzeranzahl erlaubt und es somit nur möglich ist den Server zu betreten wenn man mehrere Tage seinen PC nicht ausschaltet. Zudem könnten die Plugins dann währen der Offline-Zeit für einen Resourcen im Spiel ergattern oder repetitive Aufgaben automatisch durchführen. Der Aufwand ist irgendwann zu groß geworden, dadurch dass zu dem Zeitpunkt die Prismarin / Mineflayer Libary noch nicht so ausgereift war wie sie heute ist. Der Aufwand war es mir zu dem Zeitpunkt nicht wert, weswegen ich es erstmal habe liegen lassen.",
        },
        language: "JavaScript (NodeJS)",
        tooltip: [
            "Deps",
            [
                "minecraft-data",
                "minecraft-protocol",
                "prismarine-block",
                "prismarine-chunk",
                "prismarine-entity",
                "prismarine-item",
                "prismarine-recipe",
                "prismarine-windows",
                "prismarine-world"
            ]
        ],
        infos: [
            "17 Files",
            "71 KB"
        ]
    },
]