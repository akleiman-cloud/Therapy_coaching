export default function MultilingualTherapyWebsite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:px-16 lg:px-32 overflow-hidden">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-6">
              Online Psychotherapy & Coaching
            </p>

            <h1 className="text-5xl md:text-6xl leading-tight font-light mb-8 text-stone-900">
              Multilingual psychotherapy and coaching for people living across cultures.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mb-10 max-w-2xl">
              Supporting expats, internationally mobile professionals, multilingual individuals,
              and people navigating identity, relationships, burnout, and life transitions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-7 py-4 rounded-2xl bg-stone-900 text-white text-sm tracking-wide hover:opacity-90 transition">
                Book Intro Call
              </button>

              <button className="px-7 py-4 rounded-2xl border border-stone-300 text-sm tracking-wide hover:bg-stone-100 transition">
                Explore Services
              </button>
            </div>

            <p className="text-sm text-stone-500 tracking-wide">
              Sessions available in English, German, and Russian.
            </p>
          </div>

          <div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-stone-200 aspect-[4/5] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Therapist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="px-6 py-20 md:px-16 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[220px_1fr] gap-12 items-start">
          <div>
            <div className="rounded-[2rem] overflow-hidden bg-stone-200 aspect-[4/5] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="Dr. Alexandra Kleiman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-5">
              About Dr. Alexandra Kleiman
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-stone-900">
              Psychotherapist, neuroscientist, supervisor, and coach.
            </h2>

            <p className="text-lg leading-relaxed text-stone-600 mb-6">
              My professional path has brought together clinical psychology, neuroscience research, psychotherapy training, leadership support, and digital mental health work across academic, clinical, and organizational settings.
            </p>

            <p className="text-lg leading-relaxed text-stone-600 mb-6">
              Alongside working with individuals in psychotherapy and coaching, I have supervised therapists, led psychotherapy education programs, facilitated workshops and trainings, and supported professionals working under high emotional stress.
            </p>

            <p className="text-lg leading-relaxed text-stone-600">
              My work is shaped by a deep interest in emotional resilience, relationships, identity, and the experience of living between different languages, cultures, and worlds.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="px-6 py-24 md:px-16 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-4">
              Who I Work With
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-8 text-stone-900 leading-tight">
              Therapy and coaching for thoughtful people navigating complex inner and outer worlds.
            </h2>

            <p className="text-lg leading-relaxed text-stone-600">
              You may appear highly functional on the outside while internally struggling with anxiety,
              exhaustion, disconnection, identity questions, relationship difficulties, or uncertainty
              about where you belong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expats & International Professionals',
                text: 'Support for people living between countries, cultures, languages, and identities.',
              },
              {
                title: 'Burnout & High-Functioning Anxiety',
                text: 'For individuals who are capable and driven, yet emotionally overwhelmed or chronically exhausted.',
              },
              {
                title: 'Multilingual & Multicultural Clients',
                text: 'Therapy that recognizes how language, migration, and cultural context shape emotional life.',
              },
              {
                title: 'Jewish-Informed & Culturally Sensitive Work',
                text: 'A space for exploring identity, belonging, family history, and cultural complexity with nuance and care.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[2rem] border border-stone-200 bg-stone-50 hover:bg-stone-100 transition"
              >
                <h3 className="text-2xl font-light mb-4 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-stone-200">
            <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-5">
              Psychotherapy
            </p>

            <h2 className="text-4xl font-light mb-6 text-stone-900">
              A grounded therapeutic space.
            </h2>

            <p className="text-stone-600 leading-relaxed mb-8">
              Online psychotherapy for anxiety, depression, emotional overwhelm, trauma,
              relationship difficulties, identity questions, and life transitions.
            </p>

            <ul className="space-y-3 text-stone-700">
              <li>• Anxiety & chronic stress</li>
              <li>• Burnout & emotional exhaustion</li>
              <li>• Identity & belonging</li>
              <li>• Relationships & attachment</li>
              <li>• Migration & intercultural life</li>
              <li>• Emotional regulation & self-understanding</li>
            </ul>
          </div>

          <div className="bg-stone-900 text-white rounded-[2rem] p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-sm text-stone-400 mb-5">
              Coaching
            </p>

            <h2 className="text-4xl font-light mb-6">
              Reflective, psychologically informed coaching.
            </h2>

            <p className="text-stone-300 leading-relaxed mb-8">
              Coaching for high-functioning individuals navigating transitions, burnout prevention,
              emotional clarity, relationships, and life across cultures.
            </p>

            <ul className="space-y-3 text-stone-200">
              <li>• Career & life transitions</li>
              <li>• Burnout prevention</li>
              <li>• Emotional clarity & direction</li>
              <li>• International relocation & adaptation</li>
              <li>• Leadership & relational dynamics</li>
              <li>• High-performance emotional balance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="px-6 py-24 md:px-16 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-5">
              Languages & Cultural Context
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-stone-900">
              Therapy across languages and cultures.
            </h2>

            <p className="text-lg leading-relaxed text-stone-600 mb-8">
              Language shapes emotion, memory, identity, and belonging. Some experiences are easier
              to access in one language than another.
            </p>

            <p className="text-lg leading-relaxed text-stone-600">
              I offer sessions in English, German, and Russian, and work with clients navigating
              multicultural, multilingual, and internationally mobile lives.
            </p>
          </div>

          <div className="grid gap-6">
            {['English', 'Deutsch', 'Русский'].map((language) => (
              <div
                key={language}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-8"
              >
                <h3 className="text-3xl font-light text-stone-900 mb-3">{language}</h3>
                <p className="text-stone-600 leading-relaxed">
                  Online sessions available with cultural and emotional sensitivity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-stone-500 mb-5">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-10 text-stone-900">
            Clinical depth, human warmth, and an international perspective.
          </h2>

          <p className="text-lg leading-relaxed text-stone-600 mb-6">
            I am Dr. Alexandra Kleiman — psychotherapist, neuroscientist, supervisor, and coach. My professional path has brought together clinical psychology, neuroscience research, psychotherapy training, leadership support, and digital mental health work across academic, clinical, and organizational settings.
          </p>

          <p className="text-lg leading-relaxed text-stone-600 mb-6">
            Alongside working with individuals in psychotherapy and coaching, I have supervised therapists, led psychotherapy education programs, facilitated workshops and trainings, and supported professionals working under high emotional stress.
          </p>

          <p className="text-lg leading-relaxed text-stone-600 mb-6">
            My work is shaped by a deep interest in emotional resilience, relationships, identity, and the experience of living between different languages, cultures, and worlds. I value thoughtful, collaborative work that creates space for both reflection and meaningful change.
          </p>

          <p className="text-lg leading-relaxed text-stone-600 mb-6">
            My approach combines evidence-based psychotherapy with emotional depth, intercultural sensitivity, and a collaborative therapeutic relationship.
          </p>

          <p className="text-lg leading-relaxed text-stone-600">
            I work remotely with clients across different countries, languages, and life situations,
            creating a space that is thoughtful, grounded, and adapted to the complexity of modern international life.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 md:px-16 lg:px-32 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-stone-400 mb-5">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Begin with a confidential introductory conversation.
          </h2>

          <p className="text-lg leading-relaxed text-stone-300 mb-10">
            Sessions are held online via secure video platform.
            Available internationally in English, German, and Russian.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-white text-stone-900 hover:opacity-90 transition">
              Schedule Consultation
            </button>

            <button className="px-8 py-4 rounded-2xl border border-stone-600 hover:bg-stone-800 transition">
              Email Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
