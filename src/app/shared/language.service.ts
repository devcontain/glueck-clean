import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly homeDe = {
    titel: 'HOME',
    containers: [
      [
        'Die Forschung beweist: Bis zu 40% unseres Glücksniveaus haben wir selbst in der Hand (Sonja Lyubomirski, University of California).'
      ],
      [
        'Die Psychologie beschäftigt sich mit der Entstehung und der Behandlung von psychischen Störungen. Die Positive Psychologie ist ein Teilgebiet der Psychologie und ihr Kerninteresse ist es, das Gute im Menschen zu mehren.'
      ],
      [
        'Drei wesentliche Aspekte der Positiven Psychologie sind neben Glück auch Achtsamkeit und Mut.',
        'Glück ist eine Frage der Haltung – es kostet Mut, sich damit zu beschäftigen und erfordert die Kunst, achtsam zu sein.',
        'Glück ist eine spezielle Form von Selbst-Bewusstsein. Nur wenn wir uns bewusst sind, wer wir wirklich sind mit all unseren Gedanken, Hoffnungen, Wünschen, Stärken und Zielen, schaffen wir eine solide Basis für ein nachhaltiges Glücksempfinden. Glück ist der Motor für alles, was wir tun – denn unser Hauptziel ist es, glücklich zu sein.',
        'Glück hat eine positive Wirkung auf Geist, Seele und Körper. Und wer sich dauerhaft unglücklich fühlt, wird schwer an seinem Leben zu tragen haben. Wer sich aber nachhaltig glücklich fühlt, wird aufrecht durchs Leben gehen. Untersuchungen zeigen: Je glücklicher wir sind, desto besser ist unser Selbstwertgefühl, desto wertvoller empfinden wir unsere Beziehungen, desto engagierter sind wir im Beruf und desto mehr sind wir am Ende eines Tages mit uns selbst zufrieden.'
      ],
      [
        'Mit dem Glück ist es wie mit vielen Dingen im Leben: Übung macht den Meister. Lassen Sie uns starten und Ihr persönliches Glückskarussell ankurbeln.'
      ]
    ]
  };

  private readonly bewegungDe = {
    titel: 'BEWEGUNG TRIFFT ENTSPANNUNG – ZENbo® Balance',
    containers: [
      [
        '„Man muss dem Körper Gutes tun, damit die Seele Lust hat, darin zu wohnen.“ (Winston Churchill)'
      ],
      [
        'Jeder fühlt sich einmal unruhig und unausgeglichen. Ob von innen heraus oder durch äußere Umstände. Doch zum Glück lassen sich Körper und Geist neu ausrichten.'
      ],
      [
        'ZENbo® Balance ist ein wunderbares ganzheitliches Anti-Stress-Training für Körper, Geist und Seele. Was bedeutet ZENbo? Das „bo“ steht für den englischen Begriff Body, den Körper. Mit diesem Namen soll betont werden, dass es sich sozusagen um ZEN (Konzentration) für und auf den Körper handelt.',
        'ZENbo® Balance ist ein ganzheitliches Kursformat mit sanfter Gymnastik und anschließender Entspannung. Das Training ist sehr wirksam und dabei leicht zu erlernen und somit für jedermann und -frau geeignet. Sie können häufig schon nach dem ersten Kurs zu Hause das Erlernte anwenden und die positive Wirkung auf Körper und Geist wahrnehmen.'
      ],
      [
        'Bewegungsübungen im Stand und am Boden, die an Qi Gong und Yoga angelehnt sind, bilden den Bewegungsteil des Trainingsprogramms. Die Beweglichkeit wird verbessert und auch Bauch und Rücken werden gekräftigt. Die bewegten gymnastischen Übungen fördern sowohl das innere Gleichgewicht als auch den Gleichgewichtssinn und das Koordinationsvermögen. Sie werden bewusst und konzentriert ausgeführt und schulen so die Körperwahrnehmung. Der Atem gibt den Rhythmus der Übungen vor, sodass die Body-Übungen fließend ausgeführt werden.',
        'Das Bewegungstraining wird mit einer Entspannung abgerundet, zum Beispiel durch Autogenes Training, Progressive Muskelentspannung oder Meditation.'
      ]
    ]
  };

  private readonly aboutMeDe = {
    titel: 'ÜBER MICH',
    paragraphs: [
      'Geboren wurde ich 1971 in Berlin.',
      'Nach meiner Ausbildung zur Fachwirtin für Tourismus bin ich für sechs Jahre als Reiseleiterin ins Ausland gegangen. Mittlerweile habe ich meinen Lebensmittelpunkt in Salzwedel gefunden.',
      'Durch meine Arbeit im Tourismus hatte ich täglich mit vielen Menschen zu tun. Da mich Menschen und ihr Tun schon immer fasziniert haben, habe ich eines Tages beschlossen, ein Fernstudium zu den Grundlagen der Psychologie (SGD) zu absolvieren. Daran angeschlossen haben sich der Studiengang Angst- und Stressbewältigung (SGD) sowie eine Ausbildung zur Psychologischen Beraterin (ALH).',
      'Zunehmend ist mir jedoch aufgefallen, dass Menschen ihren Blick immer mehr auf die negativen Dinge richten und dadurch immer unzufriedener werden. Aus diesem Grund habe ich mich entschieden, mich der Positiven Psychologie zuzuwenden. Ich absolvierte eine Ausbildung zur Happiness-Trainerin (ALH) und zur Resilienztrainerin. Dabei habe ich gelernt, dass Glück mit relativ einfachen Methoden trainierbar ist, das persönliche Glückspotenzial gesteigert werden kann und ein Perspektivwechsel weg vom Negativen hin zum Positiven einen direkten Einfluss auf unser Wohlbefinden hat.',
      'Da nur in einem gesunden Körper auch ein gesunder Geist wohnen kann, habe ich meinen Weg mit einer Ausbildung zur Zenbo-Balance-Trainerin abgerundet.',
      'Um mein Wissen zu erweitern, schlossen sich außerdem Ausbildungen zur Kursleiterin für Beckenbodengymnastik, zur Entspannungstrainerin und zur Brainfit-Trainerin an.',
      'Außerdem bin ich in den 2. Usui-Reiki-Grad eingeweiht.'
    ]
  };

  private readonly resilienceDe = {
    titel: 'RESILIENZ-TRAINING',
    containers: [
      [
        '„Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.“ (Winston Churchill)'
      ],
      [
        'Jeder von uns ist täglich verschiedenen körperlichen und seelischen Belastungen ausgesetzt. Leistungsdruck, Zeitnot und ständig wachsende Anforderungen im Beruf und im Privatleben bestimmen oft genug unseren Alltag. Eine wichtige Rolle bei der Bewältigung dieser täglichen Herausforderungen spielt die mentale Widerstandskraft – die Resilienz.',
        'Klassischerweise ist das Stehaufmännchen das Sinnbild für Resilienz. Es geht darum, eigene Ressourcen sichtbar und nutzbar zu machen und zu erkennen, dass in jeder Krise und belastenden Situation auch eine Chance stecken kann.',
        'Anders ausgedrückt: Resilienz ist die Fähigkeit, für belastende Situationen immer den richtigen Schirm in der Tasche zu haben.'
      ],
      [
        'Was bedeutet dies nun für unser tägliches Leben?',
        'Wir stehen fest am Boden und fallen auch dann nicht um, wenn wir für eine gewisse Zeit nur auf einem Bein stehen, denn mit dem Regenschirm können wir das Gleichgewicht halten.',
        'Wir fühlen uns sogar so resilient, dass wir die Kraft haben, auch anderen Schutz zu bieten.',
        'Wir wissen, dass wir jederzeit einen Schirm benutzen können, und das gibt uns ein Gefühl von Sicherheit.',
        'Wir können uns „maßgeschneidert“ schützen, denn Schirme gibt es in vielen Größen und Farben.',
        'Wir können uns mithilfe des passenden Schirms jederzeit den Gegebenheiten anpassen.',
        'Wir können uns dort schützen, wo wir es gerade benötigen.'
      ],
      [
        'Diese Themen wollen wir im Resilienz-Training genauer betrachten:',
        '1. Stress – Was ist Stress? Wie wirkt sich Stress emotional und körperlich aus?',
        '2. Ressourcen und Ziele – Welche Ressourcen habe ich bereits und welche sollte ich ausbauen? Welche Ziele im Leben habe ich?',
        '3. Bedürfnisse und Emotionen – Was sind unsere Grundbedürfnisse? Welchen Sinn haben unsere Gefühle?',
        '4. Grenzen und Freiraum – Habe ich bereits einen persönlichen Freiraum entwickelt? Habe ich gesunde Grenzen identifiziert und gesetzt?',
        '5. Konflikte und Kommunikation – Was sind Konflikte? Wie funktioniert effektive Kommunikation?',
        '6. Vermeidung und erlernte Hilflosigkeit – Warum vermeiden wir? Was ist erlernte Hilflosigkeit?',
        '7. Annehmen und Loslassen – Was bedeutet es, Situationen anzunehmen und loszulassen?',
        '8. Selbstwirksamkeit und Selbstverantwortung – Wie kann ich selbstwirksam und selbstverantwortlich denken und handeln?',
        '9. Entspannung und Schlaf – Habe ich für mich wirksame Methoden der Entspannung gefunden?',
        '10. Glaubenssysteme und Überzeugungen – Wie entstehen innere Werte und Überzeugungsmuster?'
      ],
      [
        'Philosophie',
        'Meine Herangehensweise ist lösungsorientiert. Ich arbeite nach dem Ansatz von Steve de Shazer. In Gesprächen erarbeiten wir gemeinsam, welche Wirkung bestimmte Gedanken und Verhaltensweisen haben. Dabei wird gleichzeitig klar, welche Gedanken und Verhaltensweisen Ihnen dabei helfen, Ihre Ziele zu erreichen.',
        'Es werden immer die Stärken und positiven Verhaltensmuster des Einzelnen zur weiteren Lösungskonstruktion genutzt, die neue Türen im Erkennen, Fühlen und Handeln eröffnen. Während des Trainings unterstütze ich Sie dabei, neue Perspektiven zu entwickeln, Ihre bereits vorhandenen Ressourcen zu erkennen und hilfreiche Gedanken und Verhaltensweisen zu trainieren.'
      ],
      [
        'Ablauf des Trainings',
        '1. Ihre Anmeldung: Sie kontaktieren mich per Mail oder telefonisch und wir vereinbaren einen Termin für das Erstgespräch.',
        '2. Ihr Erstgespräch: Ein kurzes, kostenfreies Erstgespräch erlaubt uns ein gegenseitiges Kennenlernen und ermöglicht mir, ein Gespür für Ihr Anliegen zu bekommen. Damit ein Training erfolgreich ist, ist es entscheidend, dass Sie sich gut aufgehoben fühlen. So können Sie über eine weitere Zusammenarbeit entscheiden und wir haben die Möglichkeit, konkrete Vereinbarungen zu treffen.',
        '3. Ihr Folgetermin / Ihre Folgetermine (45 Minuten – 50 €): So unterschiedlich wie die Anliegen meiner Klientinnen und Klienten sind, so unterschiedlich ist auch die Anzahl unserer gemeinsamen Gespräche. Manchmal reicht bereits eine Sitzung, in anderen Fällen sind mehrere Treffen sinnvoll.',
        'Sie können dabei von Sitzung zu Sitzung entscheiden, ob Sie noch einmal kommen möchten. Lebenskrisen entwickeln sich meist über einen längeren Zeitraum und sind daher nicht auf „Knopfdruck“ zu lösen. Geduld ist der Schlüssel zum Erfolg.'
      ]
    ]
  };

  private readonly contactDe = {
    titel: 'KONTAKT',
    paragraphs: [
      'Für Terminabsprachen oder Fragen kontaktieren Sie mich gern.',
      'Ich freue mich auf Ihre Nachricht.',
      'Katja Wersuhn',
      'Kramstr. 9',
      '29410 Salzwedel',
      'Telefon: 0174 / 384 67 42',
      'Sollte ich persönlich gerade nicht erreichbar sein, hinterlassen Sie einfach eine Nachricht und dann melde ich mich bei Ihnen.',
      'E-Mail: jetzt@glück-selbermachen.de'
    ]
  };

  private readonly pricesDatesDe = {
    titel: 'PREISE & TERMINE',
    containers: [
      [
        'Bewegung trifft Entspannung – „ZENbo Balance“.',
        'Auch als Geschenkgutschein – auch für einzelne Stunden – erhältlich.'
      ],
      [
        'Termine in der Gruppe (max. 8 Teilnehmer*innen). Ein Einstieg ist jederzeit möglich. Die Kosten für einen 8-Wochen-Kurs liegen bei 85 €. Das Kurs-Ticket ist 9 Wochen gültig.'
      ],
      [
        'Montags: 18:00 - 19:00 Uhr',
        'Montags: 19:15 - 20:15 Uhr',
        'Dienstags: 17:30 - 18:30 Uhr',
        'Mittwochs: 18:00 - 19:00 Uhr'
      ],
      [
        'Eine Schnupperstunde ist nach vorheriger Absprache jederzeit möglich und kostet 5 € pro Person.',
        'Gern biete ich auch Privattrainings an. Termine nach Absprache. Die Stunde kostet 60 € für maximal 3 Personen.'
      ],
      [
        'Wichtiger Hinweis',
        'Mein Angebot kann nicht mit den Krankenkassen abgerechnet werden, da es außerhalb des gesetzlichen Leistungskataloges der Krankenkassen liegt.',
        'Beratung'
      ],
      [
        '1. Ihre Anmeldung: Sie kontaktieren mich per Mail oder telefonisch und wir vereinbaren einen Termin für das Erstgespräch.',
        '2. Ihr Erstgespräch: Ein kurzes, kostenfreies Erstgespräch erlaubt uns ein gegenseitiges Kennenlernen und ermöglicht mir, ein Gespür für Ihr Anliegen zu bekommen. Damit eine Beratung erfolgreich ist, ist es entscheidend, dass Sie sich gut aufgehoben fühlen. So können Sie über eine weitere Zusammenarbeit entscheiden und wir haben die Möglichkeit, konkrete Vereinbarungen zu treffen.',
        '3. Ihr Folgetermin / Ihre Folgetermine (45 Minuten – 50 €): Sie haben sich für eine Beratung bei mir entschieden. Nun vereinbaren wir weitere Termine und schaffen damit eine Voraussetzung für eine konstruktive und zielorientierte Arbeit. Zu jeder Zeit gilt: Sie sind kein Patient, sondern bestimmen jederzeit selbst über Ihre Ziel- und Veränderungswünsche.'
      ]
    ]
  };

  public legalNoticeDe = {
    s1Title: '1. Datenschutz auf einen Blick',
    s1Subtitle: 'Allgemeine Hinweise',
    s1P1: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',

    s2Title: 'Datenerfassung auf dieser Website',
    s2Q1: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
    s2A1: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
    s2Q2: 'Wie erfassen wir Ihre Daten?',
    s2A2a: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
    s2A2b: 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
    s2Q3: 'Wofür nutzen wir Ihre Daten?',
    s2A3: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
    s2Q4: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
    s2A4: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',

    s3Title: 'Analyse-Tools und Tools von Drittanbietern',
    s3P1: 'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.',
    s3P2: 'Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',

    s4Title: '2. Allgemeine Hinweise und Pflichtinformationen',
    s4Subtitle: 'Datenschutz',
    s4P1: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
    s4P2: 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
    s4P3: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',

    s5Subtitle: 'Hinweis zur verantwortlichen Stelle',
    s5Name: 'DEIN NAME',
    s5CareOf: 'ADRESSE 1',
    s5Street: 'ADRESSE 2',
    s5City: 'ADRESSE 3',
    s5Country: 'Deutschland',
    s5PhoneLabel: 'Telefon:',
    s5Phone: 'TEL',
    s5Email: 'MAIL',
    s5ControllerText: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',

    s6Subtitle: 'Speicherdauer',
    s6P: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',

    s7Subtitle: 'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
    s7P: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',

    s8Subtitle: 'Empfänger von personenbezogenen Daten',
    s8P: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',

    s9Subtitle: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
    s9P: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',

    s10Subtitle: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
    s10P1: 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
    s10P2: 'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',

    s11Subtitle: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
    s11P: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',

    s12Subtitle: 'Recht auf Datenübertragbarkeit',
    s12P: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',

    s13Subtitle: 'Auskunft, Berichtigung und Löschung',
    s13P: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',

    s14Subtitle: 'Recht auf Einschränkung der Verarbeitung',
    s14Intro: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
    s14Li1: 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
    s14Li2: 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
    s14Li3: 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
    s14Li4: 'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
    s14Outro: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',

    s15Subtitle: 'Widerspruch gegen Werbe-E-Mails',
    s15P: 'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',

    s16SourceLabel: 'Quelle:',
    s16SourceText: 'www.e-recht24.de'
  };

  public imprintDe = {
    title: 'Impressum',
    infoLine: 'Angaben gemäß § 5 TMG',

    addressName: 'DEIN NAME',
    addressCareOf: 'ADRESSE 1',
    addressStreet: 'ADRESSE 2',
    addressCity: 'ADRESSE 3',
    addressCountry: 'Deutschland',

    representedByLabel: 'Vertreten durch:',
    representedByName: 'DEIN NAME',

    contactLabel: 'Kontakt:',
    phoneLabel: 'Telefon:',
    phone: 'TEL',
    emailLabel: 'E-Mail:',
    emailText: 'MAIL',

    disclaimerLabel: 'Haftungsausschluss:',
    contentTitle: 'Haftung für Inhalte',
    contentText:
      'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',

    linksTitle: 'Haftung für Links',
    linksText:
      'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',

    copyrightTitle: 'Urheberrecht',
    copyrightText:
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',

    privacyTitle: 'Datenschutz',
    privacyText:
      'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.',

    footerPrefix: 'Impressum vom',
    generatorName: 'Impressum Generator',
    generatorUrl: 'https://www.impressum-generator.de',
    lawfirmName: 'Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht',
    lawfirmUrl: 'https://www.kanzlei-hasselbach.de/'
  };

  get bewegung() {
    return this.bewegungDe;
  }

  get home() {
    return this.homeDe;
  }

  get aboutme() {
    return this.aboutMeDe;
  }

  get resilience() {
    return this.resilienceDe;
  }

  get contact() {
    return this.contactDe;
  }

  get pricesdate() {
    return this.pricesDatesDe;
  }

  get legalNotice(): any {
    return this.legalNoticeDe;
  }

  get imprint(): any {
    return this.imprintDe;
  }

  toggleLanguage() {
    // English content removed.
  }
}
