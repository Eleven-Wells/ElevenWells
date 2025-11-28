export default function HowItWorks() {
    return (
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          How it works
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Discover how our blog makes it easy for you to explore, learn, and share ideas
          that matter.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="text-green-600 text-4xl mb-3">📚</div>
            <h3 className="font-semibold text-gray-900">Explore Topics</h3>
            <p className="text-gray-500 text-sm mt-2">
              Browse through categories to find content that interests you.
            </p>
          </div>
  
          <div>
            <div className="text-green-600 text-4xl mb-3">📖</div>
            <h3 className="font-semibold text-gray-900">Read & Learn</h3>
            <p className="text-gray-500 text-sm mt-2">
              Enjoy well-researched insights from knowledgeable writers.
            </p>
          </div>
  
          <div>
            <div className="text-green-600 text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-gray-900">Join the Community</h3>
            <p className="text-gray-500 text-sm mt-2">
              Engage in conversations with others and connect with ideas.
            </p>
          </div>
  
          <div>
            <div className="text-green-600 text-4xl mb-3">✍️</div>
            <h3 className="font-semibold text-gray-900">Share Your Story</h3>
            <p className="text-gray-500 text-sm mt-2">
              Tell your experiences and share your perspective.
            </p>
          </div>
        </div>
      </section>
    );
  }
  