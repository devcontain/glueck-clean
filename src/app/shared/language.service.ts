import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  toggleValue: string = 'false'; // 'false' = deutsch, 'true' = englisch

  // Deutsch
  private readonly homeDe = {
    titel: 'HOME',
    paragraphs: [
      'Die Forschung beweist: Bis zu 40% unseres Glücksniveaus haben wir selbst in der Hand (Sonja Lyubomirski, University of California).',
      'Die Psychologie beschäftigt sich mit der Entstehung und der Behandlung von psychischen Störungen. Die Positive Psychologie ist ein Teilgebiet der Psychologie und ihr Kerninteresse ist es, das Gute im Menschen zu mehren. Drei wesentliche Aspekte der Positiven Psychologie sind neben Glück auch Achtsamkeit und Mut.',
      'Glück ist eine Frage der Haltung – es kostet Mut, sich damit zu beschäftigen und erfordert die Kunst, achtsam zu sein.',
      'Glück ist eine spezielle Form von Selbst-Bewusstsein. Nur wenn wir uns bewusst sind, wer wir wirklich sind mit all unseren Gedanken, Hoffnungen, Wünschen, Stärken und Zielen schaffen wir eine solide Basis für ein nachhaltiges Glücksempfinden. Glück ist der Motor für alles, was wir tun – denn unser Hauptziel ist es, glücklich zu sein.',
      'Glück hat eine positive Wirkung auf Geist, Seele und Körper. Und wer sich dauerhaft unglücklich fühlt, wird schwer an seinem Leben zu tragen haben. Wer sich aber nachhaltig glücklich fühlt, wird aufrecht durchs Leben gehen. Untersuchungen zeigen: Je glücklicher wir sind, desto besser ist unser Selbstwertgefühl, desto wertvoller empfinden wir unsere Beziehungen, desto engagierter sind wir im Beruf und desto mehr sind wir am Ende eines Tages mit uns selbst zufrieden.',
      'Mit dem Glück ist es wie mit vielen Dingen im Leben: Übung macht den Meister. Lassen Sie uns starten und Ihr persönliches Glückskarussell ankurbeln.'
    ]
  };

  private readonly homeEn = {
    titel: 'HOME',
    paragraphs: [
      'Research shows that up to 40% of our level of happiness lies in our own hands (Sonja Lyubomirsky, University of California).',
      'Psychology is concerned with the development and treatment of mental disorders. Positive psychology is a subfield of psychology whose core interest is to increase the good in people. Three essential aspects of positive psychology, in addition to happiness, are mindfulness and courage.',
      'Happiness is a question of attitude – it takes courage to engage with it and requires the art of being mindful.',
      'Happiness is a special form of self-awareness. Only when we are aware of who we really are, with all our thoughts, hopes, wishes, strengths and goals, can we create a solid foundation for a lasting sense of happiness. Happiness is the driving force behind everything we do – because our primary goal is to be happy.',
      'Happiness has a positive effect on mind, soul and body. Those who feel permanently unhappy will find life particularly burdensome. Those who feel sustainably happy will walk through life upright. Studies show that the happier we are, the better our self-esteem, the more valuable we perceive our relationships to be, the more committed we are in our work and the more satisfied we are with ourselves at the end of the day.',
      'Happiness, like many things in life, is a matter of practice. Let us begin and set your personal carousel of happiness in motion.'
    ]
  };

  // BEWEGUNG – Deutsch
  private readonly bewegungDe = {
    titel: 'BEWEGUNG TRIFFT ENTSPANNUNG – ZENbo® Balance',
    paragraphs: [
      '„Man muss dem Körper Gutes tun, damit die Seele Lust hat, darin zu wohnen.“ (Winston Churchill)',
      'Jeder fühlt sich einmal unruhig und unausgeglichen. Ob von innen heraus oder durch äußere Umstände. Doch zum Glück lassen sich Körper und Geist neu ausrichten.',
      'ZENbo® Balance ist ein wunderbares ganzheitliches Anti-Stress-Training für Körper, Geist und Seele. Was bedeutet ZENbo? Das „bo“ steht für den englischen Begriff Body, den Körper. Mit diesem Namen soll betont werden, dass es sich sozusagen um ZEN (Konzentration) für und auf den Körper handelt.',
      'ZENbo® Balance ist ein ganzheitliches Kursformat mit sanfter Gymnastik und anschließender Entspannung. Das Training ist sehr wirksam und dabei leicht zu erlernen und somit für jedermann und -frau geeignet. Sie können häufig schon nach dem ersten Kurs zu Hause das Erlernte anwenden und die positive Wirkung auf Körper und Geist wahrnehmen.',
      'Bewegungsübungen im Stand und am Boden, die an Qi Gong und Yoga angelehnt sind, bilden den Bewegungsteil des Trainingsprogramms. Die Beweglichkeit wird verbessert und auch Bauch und Rücken werden gekräftigt. Die bewegten gymnastischen Übungen fördern sowohl das innere Gleichgewicht als auch den Gleichgewichtssinn und das Koordinationsvermögen. Sie werden bewusst und konzentriert ausgeführt und schulen so die Körperwahrnehmung. Der Atem gibt den Rhythmus der Übungen vor, sodass die Body-Übungen fließend ausgeführt werden.',
      'Das Bewegungstraining wird mit einer Entspannung abgerundet, zum Beispiel durch Autogenes Training, Progressive Muskelentspannung oder Meditation.'
    ]
  };

  // BEWEGUNG – Englisch
  private readonly bewegungEn = {
    titel: 'MOVEMENT MEETS RELAXATION – ZENbo® Balance',
    paragraphs: [
      '“You must do good to your body so that your soul wants to live in it.” (Winston Churchill)',
      'All of us feel restless and off-balance from time to time – whether due to inner tension or external circumstances. Fortunately, body and mind can be realigned.',
      'ZENbo® Balance is a wonderful, holistic anti-stress training for body, mind and soul. What does ZENbo mean? The “bo” stands for the English word “body”. The name emphasizes that it is essentially about ZEN (focus) for and on the body.',
      'ZENbo® Balance is a holistic course format with gentle gymnastics followed by relaxation. The training is highly effective yet easy to learn and therefore suitable for everyone. In many cases you can apply what you have learned at home after the very first class and feel its positive effects on body and mind.',
      'Movement exercises in standing and on the floor, inspired by Qi Gong and yoga, form the movement part of the training programme. They improve flexibility and strengthen the abdominal and back muscles. The flowing gymnastic movements support both inner balance and a sense of equilibrium and coordination. They are performed mindfully and with focus, thereby sharpening body awareness. The breathing rhythm guides the exercises so that the body movements can be carried out smoothly and harmoniously.',
      'The movement training is rounded off with a relaxation phase, for example through autogenic training, progressive muscle relaxation or meditation.'
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
    paragraphs: [
      '„Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.“ (Winston Churchill)',
      'Jeder von uns ist täglich verschiedenen körperlichen und seelischen Belastungen ausgesetzt. Leistungsdruck, Zeitnot und ständig wachsende Anforderungen im Beruf und im Privatleben bestimmen oft genug unseren Alltag. Eine wichtige Rolle bei der Bewältigung dieser täglichen Herausforderungen spielt die mentale Widerstandskraft – die Resilienz.',
      'Klassischerweise ist das Stehaufmännchen das Sinnbild für Resilienz. Es geht darum, eigene Ressourcen sichtbar und nutzbar zu machen und zu erkennen, dass in jeder Krise und belastenden Situation auch eine Chance stecken kann.',
      'Anders ausgedrückt: Resilienz ist die Fähigkeit, für belastende Situationen immer den richtigen Schirm in der Tasche zu haben.',
      'Was bedeutet dies nun für unser tägliches Leben?',
      'Wir stehen fest am Boden und fallen auch dann nicht um, wenn wir für eine gewisse Zeit nur auf einem Bein stehen, denn mit dem Regenschirm können wir das Gleichgewicht halten.',
      'Wir fühlen uns sogar so resilient, dass wir die Kraft haben, auch anderen Schutz zu bieten.',
      'Wir wissen, dass wir jederzeit einen Schirm benutzen können, und das gibt uns ein Gefühl von Sicherheit.',
      'Wir können uns „maßgeschneidert“ schützen, denn Schirme gibt es in vielen Größen und Farben.',
      'Wir können uns mithilfe des passenden Schirms jederzeit den Gegebenheiten anpassen.',
      'Wir können uns dort schützen, wo wir es gerade benötigen.',
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
      '10. Glaubenssysteme und Überzeugungen – Wie entstehen innere Werte und Überzeugungsmuster?',
      'Philosophie',
      'Meine Herangehensweise ist lösungsorientiert. Ich arbeite nach dem Ansatz von Steve de Shazer. In Gesprächen erarbeiten wir gemeinsam, welche Wirkung bestimmte Gedanken und Verhaltensweisen haben. Dabei wird gleichzeitig klar, welche Gedanken und Verhaltensweisen Ihnen dabei helfen, Ihre Ziele zu erreichen.',
      'Es werden immer die Stärken und positiven Verhaltensmuster des Einzelnen zur weiteren Lösungskonstruktion genutzt, die neue Türen im Erkennen, Fühlen und Handeln eröffnen. Während des Trainings unterstütze ich Sie dabei, neue Perspektiven zu entwickeln, Ihre bereits vorhandenen Ressourcen zu erkennen und hilfreiche Gedanken und Verhaltensweisen zu trainieren.',
      'Ablauf des Trainings',
      '1. Ihre Anmeldung: Sie kontaktieren mich per Mail oder telefonisch und wir vereinbaren einen Termin für das Erstgespräch.',
      '2. Ihr Erstgespräch: Ein kurzes, kostenfreies Erstgespräch erlaubt uns ein gegenseitiges Kennenlernen und ermöglicht mir, ein Gespür für Ihr Anliegen zu bekommen. Damit ein Training erfolgreich ist, ist es entscheidend, dass Sie sich gut aufgehoben fühlen. So können Sie über eine weitere Zusammenarbeit entscheiden und wir haben die Möglichkeit, konkrete Vereinbarungen zu treffen.',
      '3. Ihr Folgetermin / Ihre Folgetermine (45 Minuten – 50 €): So unterschiedlich wie die Anliegen meiner Klientinnen und Klienten sind, so unterschiedlich ist auch die Anzahl unserer gemeinsamen Gespräche. Manchmal reicht bereits eine Sitzung, in anderen Fällen sind mehrere Treffen sinnvoll.',
      'Sie können dabei von Sitzung zu Sitzung entscheiden, ob Sie noch einmal kommen möchten. Lebenskrisen entwickeln sich meist über einen längeren Zeitraum und sind daher nicht auf „Knopfdruck“ zu lösen. Geduld ist der Schlüssel zum Erfolg.'
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

  get bewegung() {
    return this.toggleValue === 'false' ? this.bewegungDe : this.bewegungEn;
  }

  get home() {
    return this.toggleValue === 'false' ? this.homeDe : this.homeEn;
  }

  get aboutme() {
    return this.toggleValue === 'false' ? this.aboutMeDe : this.aboutMeDe;
  }

  get resilience() {
    return this.toggleValue === 'false' ? this.resilienceDe : this.resilienceDe;
  }

  get contact() {
    return this.toggleValue === 'false' ? this.contactDe : this.contactDe;
  }

  toggleLanguage() {
    this.toggleValue = this.toggleValue === 'false' ? 'true' : 'false';
  }
}