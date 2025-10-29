import React from 'react';
import { Target, Users, Globe, Zap, Shield, Heart, Twitter, Brain, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Brain size={64} className="opacity-90" />
          </div>
          <h1 className="text-5xl font-bold mb-6">UFX: Decoding the Unknown</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            An AI agent designed to analyze UAP data, decode sci-fi narratives, 
            and explore the intersection of speculative fiction and real-world phenomena.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="mx-auto text-ufx-primary mb-4" size={64} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To connect the dots between science fiction predictions and actual 
              technological and scientific discoveries, creating an AI-powered platform 
              that advances our understanding of Unidentified Aerial Phenomena (UAP) 
              through blockchain-verified data and intelligent analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced AI agent processes and analyzes UAP sightings, identifying 
                patterns and correlations with sci-fi literature and predictions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Sci-Fi Narratives</h3>
              <p className="text-gray-600">
                Decode science fiction works to identify predictions that have 
                materialized into reality or align with UAP phenomena.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Blockchain Verified</h3>
              <p className="text-gray-600">
                Every data point is timestamped on Base blockchain, ensuring 
                transparency and immutability through Virtuals Protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Makes UFX Unique</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Connecting Fiction to Reality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    UFX Agent analyzes decades of science fiction literature—from Clarke to Asimov, 
                    from Heinlein to Liu Cixin—and maps their predictions against documented UAP 
                    sightings and technological breakthroughs. Did authors foresee technologies before 
                    they existed? Did UAP sightings inspire fictional narratives? We find the connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                  <Brain size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">AI-Driven Insights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI agent doesn't just catalog sightings—it analyzes patterns, temporal clusters, 
                    geographical hotspots, and correlates them with historical events, technological 
                    advancements, and fictional narratives. The goal: uncover what science fiction 
                    got right, and what UAP phenomena might be telling us about our future.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Global Database</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With 60,000+ documented UAP sightings spanning decades and 150+ countries, 
                    UFX Network provides the most comprehensive, blockchain-verified database of 
                    aerial phenomena in existence. Every entry is transparent, immutable, and 
                    accessible to researchers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              UFX Network was born from a unique intersection of aerospace expertise and 
              a passion for both science fiction and UAP research. As a former military pilot 
              with a Master's degree in Aeronautics, I've spent years studying aerial phenomena 
              from both scientific and speculative perspectives.
            </p>
            <p>
              What struck me most wasn't just the volume of UAP sightings throughout history—it 
              was how often science fiction authors seemed to predict or describe similar phenomena 
              decades before credible sightings were documented. Were these authors tapping into 
              something deeper? Were they inspired by earlier, undocumented encounters? Or was it 
              pure coincidence?
            </p>
            <p>
              In 2024, I realized that AI and blockchain technology could finally help us answer 
              these questions. By creating an AI agent specifically trained on both UAP data and 
              sci-fi literature, we could identify patterns invisible to human researchers. By 
              storing all data on the blockchain, we could ensure that no government, organization, 
              or individual could manipulate or censor the findings.
            </p>
            <p className="font-semibold text-ufx-primary">
              UFX Network isn't just a database—it's a research tool for humanity's greatest mysteries, 
              powered by AI, secured by blockchain, and driven by a community of truth-seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge AI, blockchain, and machine learning to push 
                  the boundaries of UAP research and sci-fi analysis.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Inclusivity</h3>
                <p className="text-gray-600">
                  Everyone deserves a voice. We welcome skeptics, believers, researchers, 
                  and sci-fi enthusiasts alike.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  Data accuracy and authenticity are paramount. Our AI verification systems 
                  and blockchain storage ensure credibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Accessibility</h3>
                <p className="text-gray-600">
                  Knowledge should be free. Our platform is accessible to all, 
                  democratizing UAP research worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">The Developer</h2>
          <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-white">
              <div className="w-40 h-40 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6 flex items-center justify-center">
                <span className="text-6xl font-bold">RJ</span>
              </div>
              <h3 className="font-bold text-2xl mb-2">Regular Joe</h3>
              <p className="font-semibold mb-4">Founder & Solo Developer</p>
              
              <div className="text-center mb-6">
                <p className="mb-4 leading-relaxed opacity-90">
                  Master's degree in Aeronautics and former military pilot with a deep passion 
                  for aerospace technology, science fiction, and UAP research. Currently building 
                  UFX Network as a solo developer, combining expertise in aviation, AI development, 
                  blockchain, and web technologies.
                </p>
                <p className="text-sm opacity-80">
                  "Science fiction is the rehearsal for the future. UAP phenomena might be 
                  the proof that the future is already here."
                </p>
              </div>

              <a 
                href="https://x.com/ptah_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-ufx-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                <Twitter size={20} />
                Follow on X @ptah_ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Built With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Base Blockchain</h3>
              <p className="text-sm text-gray-600">Ethereum L2 for fast, low-cost transactions</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold text-lg mb-2">Virtuals Protocol</h3>
              <p className="text-sm text-gray-600">AI agent infrastructure & tokenomics</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">AI/ML Models</h3>
              <p className="text-sm text-gray-600">Pattern recognition & narrative analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us decode the unknown. Explore UAP data, analyze sci-fi narratives, 
            and uncover the connections between fiction and reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
              🚀 Get Started
            </button>
            <a 
              href="https://x.com/ptah_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-ufx-primary transition-all"
            >
              📧 Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
