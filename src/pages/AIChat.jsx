import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader, ExternalLink, AlertCircle, Database } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Initialize Supabase client
let supabase = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Database query helper functions
const queryDatabase = {
  // Get total sightings count
  async getTotalSightings() {
    if (!supabase) return null;
    const { count } = await supabase
      .from('nuforc_reports')
      .select('*', { count: 'exact', head: true });
    return count;
  },

  // Get sightings by shape
  async getSightingsByShape(shape, limit = 10) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('nuforc_reports')
      .select('*')
      .ilike('shape', `%${shape}%`)
      .limit(limit);
    return data;
  },

  // Get sightings by location
  async getSightingsByLocation(city, state, limit = 10) {
    if (!supabase) return null;
    const query = supabase.from('nuforc_reports').select('*');
    if (city) query.ilike('city', `%${city}%`);
    if (state) query.ilike('state', `%${state}%`);
    const { data, error } = await query.limit(limit);
    return data;
  },

  // Get sightings with images
  async getSightingsWithImages(limit = 10) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('nuforc_reports')
      .select('*')
      .not('images', 'is', null)
      .limit(limit);
    return data;
  },

  // Get recent sightings
  async getRecentSightings(limit = 10) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('nuforc_reports')
      .select('*')
      .order('occurred', { ascending: false })
      .limit(limit);
    return data;
  },

  // Get sightings by date range
  async getSightingsByDateRange(startDate, endDate, limit = 50) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('nuforc_reports')
      .select('*')
      .gte('occurred', startDate)
      .lte('occurred', endDate)
      .order('occurred', { ascending: false })
      .limit(limit);
    return data;
  },

  // Search descriptions
  async searchDescriptions(searchTerm, limit = 10) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from('nuforc_reports')
      .select('*')
      .textSearch('description', searchTerm)
      .limit(limit);
    return data;
  }
};

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hello! I'm the UFX AI Agent, powered by Google Gemini with direct access to the Supabase database containing 60,000+ UAP sightings! 🛸

I can help you:
• Query specific sightings by location, shape, or date
• Analyze patterns and hotspots
• Discuss connections between sci-fi literature and real phenomena
• Find sightings with images or specific characteristics
• Provide statistical analysis and insights

What would you like to explore?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dbConnected, setDbConnected] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Check Supabase connection
    if (supabase) {
      setDbConnected(true);
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intelligent query detection
  const detectAndExecuteQuery = async (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Pattern matching for database queries
    if (lowerMessage.includes('how many') || lowerMessage.includes('total') || lowerMessage.includes('count')) {
      const count = await queryDatabase.getTotalSightings();
      return `Database Query Result: There are ${count?.toLocaleString()} total UFO sightings in the database.`;
    }
    
    if (lowerMessage.includes('shape') && (lowerMessage.includes('triangle') || lowerMessage.includes('disk') || lowerMessage.includes('sphere'))) {
      const shape = lowerMessage.match(/(triangle|disk|sphere|cigar|oval|light|fireball)/i)?.[0];
      if (shape) {
        const data = await queryDatabase.getSightingsByShape(shape, 5);
        return `Database Query Result: Found ${data?.length} ${shape}-shaped sightings:\n\n${
          data?.map(s => `• ${s.city}, ${s.state} - ${s.occurred?.split('T')[0]} - "${s.description?.substring(0, 100)}..."`).join('\n')
        }`;
      }
    }
    
    if (lowerMessage.includes('recent') || lowerMessage.includes('latest')) {
      const data = await queryDatabase.getRecentSightings(5);
      return `Database Query Result: Here are the 5 most recent sightings:\n\n${
        data?.map(s => `• ${s.city}, ${s.state} - ${s.occurred?.split('T')[0]} - ${s.shape || 'Unknown shape'}`).join('\n')
      }`;
    }
    
    if (lowerMessage.includes('images') || lowerMessage.includes('photos') || lowerMessage.includes('pictures')) {
      const data = await queryDatabase.getSightingsWithImages(5);
      return `Database Query Result: Found ${data?.length} sightings with images:\n\n${
        data?.map(s => `• ${s.city}, ${s.state} - ${s.occurred?.split('T')[0]} - Has ${JSON.parse(s.images || '[]').length} image(s)`).join('\n')
      }`;
    }
    
    // Check for location queries
    const locationMatch = lowerMessage.match(/(california|texas|florida|new york|arizona|nevada|washington)/i);
    if (locationMatch) {
      const state = locationMatch[0];
      const data = await queryDatabase.getSightingsByLocation(null, state, 5);
      return `Database Query Result: Found ${data?.length} sightings in ${state}:\n\n${
        data?.map(s => `• ${s.city} - ${s.occurred?.split('T')[0]} - ${s.shape || 'Unknown'}`).join('\n')
      }`;
    }
    
    return null; // No specific query detected
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (!GEMINI_API_KEY) {
      setError('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
      return;
    }

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Try to detect and execute database query first
      let dbQueryResult = null;
      if (supabase) {
        dbQueryResult = await detectAndExecuteQuery(currentInput);
      }

      // Build enhanced system context
      const systemContext = `You are the UFX AI Agent, an expert in UAP/UFO phenomena with:

**Direct Database Access:**
- You have access to a Supabase database with 60,000+ documented UAP sightings
- Database: nuforc_reports table
- Key columns: id, nuforc_id, occurred (timestamp), city, state, country, shape, duration, description, images (jsonb), latitude, longitude
- You can query this data in real-time to provide accurate, specific information

**Knowledge Base:**
- 40+ classic science fiction books (H.G. Wells, Jules Verne, Arthur C. Clarke, etc.)
- Physics and aerospace engineering principles
- Historical UFO/UAP events and patterns
- Government disclosure programs (AATIP, AAWSAP, etc.)

**Your Role:**
1. Analyze UFO sighting patterns and trends using real database queries
2. Connect sci-fi predictions with documented phenomena
3. Provide scientific perspectives on unexplained events
4. Help users explore the database intelligently
5. Recognize hotspots, patterns, and anomalies

**Communication Style:**
- Be conversational and engaging
- Balance skepticism with curiosity
- Reference specific sightings when relevant
- Use data to support your analysis
- Acknowledge uncertainty where appropriate

${dbQueryResult ? `\n**Relevant Database Query Result:**\n${dbQueryResult}\n` : ''}

**Important:** When discussing sightings, remember that images are stored as JSON arrays of GitHub URLs (https://raw.githubusercontent.com/ufosearchspace-create/ufxproject-site/main/public/images/nuforc/...)`;

      const fullPrompt = `${systemContext}\n\nUser: ${currentInput}\n\nAssistant:`;

      // Call Gemini API
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                        'I apologize, but I encountered an issue generating a response. Please try again.';

      const aiMessage = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('AI Error:', err);
      setError('Failed to get response from AI. Please check your API key and try again.');
      
      const errorMessage = {
        role: 'assistant',
        content: '❌ I encountered an error while processing your request. This might be due to:\n\n1. Missing or invalid API key\n2. Network connectivity issues\n3. API rate limits\n\nPlease check the console for details.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "How many total UFO sightings are in the database?",
    "Show me recent triangle-shaped sightings",
    "What are the most common UFO shapes?",
    "Find sightings with images in California"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Bot size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">UFX AI Agent</h1>
              <p className="text-sm opacity-90">Powered by Google Gemini AI + Supabase</p>
            </div>
          </div>
          <p className="text-white opacity-90">
            Your AI companion with direct database access to 60,000+ UAP sightings
          </p>
        </div>
      </div>

      {/* Status Banner */}
      <div className={`border-b py-3 ${dbConnected ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-2 ${dbConnected ? 'text-green-800' : 'text-yellow-800'}`}>
              <Database size={20} />
              <span className="font-semibold">
                {dbConnected ? '✅ Database Connected - Real-time queries enabled' : '⚠️ Database offline - Limited functionality'}
              </span>
            </div>
            <a
              href="https://app.virtuals.io/prototypes/0xD87F72f4225Add00E125fd97C391Ed59Fb75CaEC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
            >
              <span>$UFX on Virtuals (Nov 22)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border-b border-red-200 py-3">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center space-x-2 text-red-800">
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </div>
          </div>
        </div>
      )}

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gradient-to-r from-ufx-primary to-ufx-secondary'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="text-white" size={20} />
                  ) : (
                    <Bot className="text-white" size={20} />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`flex-1 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-ufx-primary to-ufx-secondary flex items-center justify-center">
                  <Bot className="text-white" size={20} />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Loader className="animate-spin text-ufx-primary" size={16} />
                    <span className="text-sm text-gray-600">Analyzing database...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="text-xs text-gray-600 mb-2 font-semibold">Try these database queries:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-left text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 hover:border-ufx-primary hover:bg-blue-50 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex items-end space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about UFO sightings, query the database, or discuss sci-fi connections..."
                className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
                rows="2"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-3 rounded-lg transition-all ${
                  input.trim() && !isLoading
                    ? 'bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white hover:opacity-90'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
              <span>Press Enter to send, Shift+Enter for new line</span>
              {dbConnected && <span className="text-green-600 font-medium">🔗 Database Active</span>}
            </div>
          </div>
        </div>

        {/* Features Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
            <div className="text-ufx-primary font-bold mb-2">🗺️ Real-time Queries</div>
            <div className="text-sm text-gray-600">
              Direct database access for instant sighting lookups
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
            <div className="text-ufx-primary font-bold mb-2">📚 Sci-Fi Analysis</div>
            <div className="text-sm text-gray-600">
              Compare sightings with 40+ classic science fiction books
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
            <div className="text-ufx-primary font-bold mb-2">🔍 Pattern Recognition</div>
            <div className="text-sm text-gray-600">
              AI-powered analysis of hotspots, trends, and anomalies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;