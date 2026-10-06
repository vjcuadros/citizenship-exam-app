// Interview-prep content: the naturalization (N-400) personal interview
// also includes "Good Moral Character" / eligibility questions the officer
// asks verbally, separate from the civics and English tests. These are
// personal questions with no single "correct" answer — the goal of this
// module is to help the applicant understand what each question is really
// asking and practice answering honestly and confidently, not to quiz/score
// them like the civics content.

export type InterviewCategory =
  | "Why citizenship?"
  | "Good Moral Character"
  | "Attachment to the Constitution"
  | "Travel & Residence"
  | "Oath of Allegiance";

export interface InterviewQuestion {
  id: string;
  question: string;
  questionEs?: string;
  category: InterviewCategory;
  /** What the officer is really trying to find out, plus tips for answering. */
  guidance: string;
  guidanceEs?: string;
}

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  // Why citizenship?
  {
    id: "int-why-01",
    question: "Why do you want to become a U.S. citizen?",
    questionEs: "¿Por qué quiere hacerse ciudadano de los Estados Unidos?",
    category: "Why citizenship?",
    guidance:
      "A simple, sincere icebreaker. Good answers mention things like voting, staying with family, " +
      "a U.S. passport, or feeling fully part of the country you already live in. There's no wrong " +
      "answer — just speak naturally about your own reasons.",
    guidanceEs:
      "Una pregunta sencilla para romper el hielo. Buenas respuestas mencionan votar, quedarse con la " +
      "familia, el pasaporte estadounidense o sentirse parte del país donde ya vive. No hay una " +
      "respuesta incorrecta: hable con naturalidad sobre sus propios motivos.",
  },
  {
    id: "int-why-02",
    question: "What are some of the responsibilities of a U.S. citizen?",
    questionEs: "¿Cuáles son algunas de las responsabilidades de un ciudadano de los EE. UU.?",
    category: "Why citizenship?",
    guidance:
      "Checks that you understand citizenship isn't only rights. Mention things like voting, serving " +
      "on a jury if called, obeying the law, and paying taxes — these are also covered in the civics " +
      "question set, so studying that helps here too.",
    guidanceEs:
      "Verifica que entienda que la ciudadanía no es solo derechos. Mencione votar, servir en un " +
      "jurado si lo llaman, obedecer la ley y pagar impuestos; esto también se cubre en las preguntas " +
      "de educación cívica, así que estudiar esa sección también ayuda aquí.",
  },

  // Attachment to the Constitution
  {
    id: "int-const-01",
    question: "Do you support the Constitution and form of government of the United States?",
    questionEs: "¿Apoya la Constitución y la forma de gobierno de los Estados Unidos?",
    category: "Attachment to the Constitution",
    guidance:
      "This is a required eligibility question, usually answered with a simple, direct \"Yes.\" " +
      "It's asking whether you're willing to be loyal to the U.S. system of government, not whether " +
      "you agree with every policy or politician.",
    guidanceEs:
      "Es una pregunta de elegibilidad obligatoria, normalmente se responde con un simple y directo " +
      "\"Sí\". Pregunta si está dispuesto/a a ser leal al sistema de gobierno de los EE. UU., no si " +
      "está de acuerdo con cada política o político.",
  },
  {
    id: "int-const-02",
    question: "Are you willing to take the full Oath of Allegiance to the United States?",
    questionEs: "¿Está dispuesto/a a prestar el Juramento de Lealtad completo a los Estados Unidos?",
    category: "Attachment to the Constitution",
    guidance:
      "Confirms you'll take the final citizenship oath. If you have a sincere religious objection to " +
      "any part of it (like bearing arms), USCIS has a modified oath process — mention that at your " +
      "interview rather than answering \"no\" without explanation.",
    guidanceEs:
      "Confirma que prestará el juramento final de ciudadanía. Si tiene una objeción religiosa " +
      "sincera a alguna parte (como portar armas), USCIS tiene un proceso de juramento modificado; " +
      "mencione eso en la entrevista en vez de responder \"no\" sin explicación.",
  },
  {
    id: "int-const-03",
    question:
      "If the law requires it, are you willing to bear arms on behalf of the United States, or to " +
      "perform noncombatant or civilian work of national importance?",
    questionEs:
      "Si la ley lo requiere, ¿está dispuesto/a a portar armas en nombre de los Estados Unidos, o a " +
      "realizar trabajo no combatiente o trabajo civil de importancia nacional?",
    category: "Attachment to the Constitution",
    guidance:
      "Standard eligibility question from Form N-400, Part 12. Most applicants answer \"yes.\" If " +
      "you have genuine conscientious or religious objections, say so honestly — there are " +
      "accommodations for that.",
    guidanceEs:
      "Pregunta de elegibilidad estándar del Formulario N-400, Parte 12. La mayoría responde \"sí\". " +
      "Si tiene objeciones de conciencia o religiosas genuinas, dígalo con honestidad; existen " +
      "adaptaciones para esos casos.",
  },

  // Good Moral Character
  {
    id: "int-gmc-01",
    question: "What does \"good moral character\" mean to you?",
    questionEs: "¿Qué significa para usted \"buen carácter moral\"?",
    category: "Good Moral Character",
    guidance:
      "Not an official scripted question, but a useful one to reflect on before your interview: " +
      "USCIS defines it as behaving as an ordinary, law-abiding person would — being honest with the " +
      "government, paying taxes, supporting your dependents, and not having certain crimes or " +
      "immigration violations in the period USCIS reviews (usually the last 5 years, or 3 if " +
      "applying through marriage).",
    guidanceEs:
      "No es una pregunta oficial exacta, pero es útil reflexionar sobre ella antes de su entrevista: " +
      "USCIS lo define como comportarse como lo haría una persona común que respeta la ley — ser " +
      "honesto con el gobierno, pagar impuestos, mantener a sus dependientes y no tener ciertos " +
      "delitos o violaciones migratorias en el período que USCIS revisa (normalmente los últimos 5 " +
      "años, o 3 si aplica por matrimonio).",
  },
  {
    id: "int-gmc-02",
    question: "Have you ever been arrested, cited, or detained by any law enforcement officer?",
    questionEs: "¿Alguna vez lo han arrestado, citado o detenido algún oficial de la ley?",
    category: "Good Moral Character",
    guidance:
      "Answer honestly even for minor incidents (traffic stops with a citation, old arrests that were " +
      "dismissed, juvenile records, etc.) — USCIS can check records, and an undisclosed arrest is far " +
      "worse than a disclosed one. If \"yes\", be ready to explain what happened and the outcome, and " +
      "bring any related court/police documents to the interview.",
    guidanceEs:
      "Responda con honestidad incluso para incidentes menores (multas de tránsito, arrestos " +
      "antiguos que fueron desestimados, antecedentes juveniles, etc.). USCIS puede verificar " +
      "registros, y un arresto no declarado es mucho peor que uno declarado. Si la respuesta es " +
      "\"sí\", esté listo/a para explicar qué pasó y cómo terminó, y lleve cualquier documento " +
      "judicial o policial relacionado a la entrevista.",
  },
  {
    id: "int-gmc-03",
    question: "Have you ever committed a crime or offense for which you were not arrested?",
    questionEs: "¿Alguna vez cometió un delito o infracción por el cual no fue arrestado/a?",
    category: "Good Moral Character",
    guidance:
      "This catches things that never led to an arrest, like certain driving offenses, shoplifting, " +
      "or other incidents. Think carefully and answer truthfully — if unsure whether something " +
      "counts, it's worth discussing with an immigration attorney before the interview rather than " +
      "guessing.",
    guidanceEs:
      "Esto incluye cosas que nunca llevaron a un arresto, como ciertas infracciones de tránsito, " +
      "hurto en tiendas u otros incidentes. Piense con cuidado y responda con la verdad; si no está " +
      "seguro/a de si algo cuenta, vale la pena hablarlo con un abogado de inmigración antes de la " +
      "entrevista en lugar de adivinar.",
  },
  {
    id: "int-gmc-04",
    question: "Have you ever failed to file a required federal, state, or local tax return?",
    questionEs: "¿Alguna vez dejó de presentar una declaración de impuestos federal, estatal o local requerida?",
    category: "Good Moral Character",
    guidance:
      "Paying taxes is part of USCIS's good-moral-character review. If you missed a filing, it's " +
      "usually better to file it (even late) and show a plan or proof of payment before your " +
      "interview than to leave it unresolved.",
    guidanceEs:
      "Pagar impuestos forma parte de la evaluación de buen carácter moral de USCIS. Si no presentó " +
      "una declaración, generalmente es mejor presentarla (aunque sea tarde) y mostrar un plan o " +
      "comprobante de pago antes de la entrevista que dejarlo sin resolver.",
  },
  {
    id: "int-gmc-05",
    question: "Have you ever claimed to be a U.S. citizen (when you were not)?",
    questionEs: "¿Alguna vez afirmó ser ciudadano de los EE. UU. (cuando no lo era)?",
    category: "Good Moral Character",
    guidance:
      "This is a serious question: falsely claiming U.S. citizenship (for example on a job form, " +
      "to register to vote, or to get a benefit) can affect eligibility. Answer honestly and, if " +
      "this applies to you, talk to an immigration attorney before your interview.",
    guidanceEs:
      "Esta es una pregunta seria: afirmar falsamente ser ciudadano de los EE. UU. (por ejemplo en " +
      "un formulario de empleo, para registrarse a votar o para obtener un beneficio) puede afectar " +
      "la elegibilidad. Responda con honestidad y, si esto le aplica, hable con un abogado de " +
      "inmigración antes de su entrevista.",
  },
  {
    id: "int-gmc-06",
    question: "Have you ever failed to support your dependents or pay court-ordered alimony or child support?",
    questionEs:
      "¿Alguna vez dejó de mantener a sus dependientes o de pagar la manutención ordenada por un tribunal?",
    category: "Good Moral Character",
    guidance:
      "Part of the same good-moral-character review. If payments were ever missed, be ready to " +
      "explain the circumstances and show you're now current or have a payment arrangement.",
    guidanceEs:
      "Forma parte de la misma evaluación de buen carácter moral. Si alguna vez se atrasó en los " +
      "pagos, esté listo/a para explicar las circunstancias y demostrar que está al día o que tiene " +
      "un acuerdo de pago.",
  },
  {
    id: "int-gmc-07",
    question:
      "Have you ever been a member of, or in any way associated with, the Communist Party or any " +
      "other totalitarian party?",
    questionEs:
      "¿Alguna vez fue miembro de, o estuvo asociado de alguna manera con, el Partido Comunista u " +
      "otro partido totalitario?",
    category: "Good Moral Character",
    guidance:
      "A standard N-400 eligibility question most applicants answer \"no.\" If it applies to you " +
      "(including membership that ended, or membership that was involuntary), disclose it — there " +
      "are exceptions, and an immigration attorney can advise on how it affects your case.",
    guidanceEs:
      "Una pregunta de elegibilidad estándar del N-400 que la mayoría responde \"no\". Si le aplica " +
      "(incluida una membresía que ya terminó o que fue involuntaria), decláreIo; existen " +
      "excepciones, y un abogado de inmigración puede asesorarlo sobre cómo afecta su caso.",
  },

  // Travel & Residence
  {
    id: "int-travel-01",
    question: "Tell me more about your trips outside the United States.",
    questionEs: "Cuénteme más sobre sus viajes fuera de los Estados Unidos.",
    category: "Travel & Residence",
    guidance:
      "The officer is comparing your answer to the trips you listed on Form N-400, checking you " +
      "kept continuous residence and physical presence requirements. Before the interview, review " +
      "your own travel dates/destinations so you can describe them confidently and consistently " +
      "with what you wrote on the form.",
    guidanceEs:
      "El oficial está comparando su respuesta con los viajes que indicó en el Formulario N-400, " +
      "verificando que cumplió los requisitos de residencia continua y presencia física. Antes de la " +
      "entrevista, repase sus propias fechas y destinos de viaje para poder describirlos con " +
      "confianza y de forma consistente con lo que escribió en el formulario.",
  },
  {
    id: "int-travel-02",
    question: "Have any of your trips outside the United States lasted 6 months or longer?",
    questionEs: "¿Alguno de sus viajes fuera de los Estados Unidos duró 6 meses o más?",
    category: "Travel & Residence",
    guidance:
      "Trips of 6+ months can interrupt \"continuous residence,\" one of the core naturalization " +
      "requirements. If you had one, be ready to explain why and show you kept ties to the U.S. " +
      "(job, home, family, taxes) during that time.",
    guidanceEs:
      "Los viajes de 6 meses o más pueden interrumpir la \"residencia continua\", uno de los " +
      "requisitos principales para la naturalización. Si tuvo uno, esté listo/a para explicar por " +
      "qué y demostrar que mantuvo vínculos con los EE. UU. (trabajo, hogar, familia, impuestos) " +
      "durante ese tiempo.",
  },
  {
    id: "int-travel-03",
    question: "Where have you lived for the last 5 years?",
    questionEs: "¿Dónde ha vivido durante los últimos 5 años?",
    category: "Travel & Residence",
    guidance:
      "Confirms your residence history matches Form N-400. Keep a simple timeline of your addresses " +
      "handy before the interview so your answer lines up with what's on file.",
    guidanceEs:
      "Confirma que su historial de residencia coincide con el Formulario N-400. Tenga a la mano una " +
      "cronología sencilla de sus direcciones antes de la entrevista para que su respuesta coincida " +
      "con lo que está en el expediente.",
  },

  // Oath of Allegiance
  {
    id: "int-oath-01",
    question: "Do you understand that by taking the Oath of Allegiance, you give up loyalty to other countries?",
    questionEs:
      "¿Entiende que al prestar el Juramento de Lealtad, renuncia a la lealtad hacia otros países?",
    category: "Oath of Allegiance",
    guidance:
      "Checks your understanding of the final step of naturalization. A simple \"yes, I understand\" " +
      "is the expected answer — you don't need to recite the oath itself here, just confirm you " +
      "understand its meaning.",
    guidanceEs:
      "Verifica que entiende el paso final de la naturalización. La respuesta esperada es un simple " +
      "\"sí, entiendo\"; no necesita recitar el juramento en sí, solo confirmar que comprende su " +
      "significado.",
  },
];

export const INTERVIEW_CATEGORIES: InterviewCategory[] = [
  "Why citizenship?",
  "Attachment to the Constitution",
  "Good Moral Character",
  "Travel & Residence",
  "Oath of Allegiance",
];
