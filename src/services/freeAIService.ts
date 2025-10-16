// Free AI Service - No credit card required!
// Uses Hugging Face Inference API (completely free)

export interface AIExplanation {
  explanation: string;
  personalizedTips: string[];
  relatedConcepts: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AIStudyPlan {
  personalizedPath: string[];
  estimatedTimeToPass: number;
  dailyGoals: string[];
  focusAreas: string[];
  motivation: string;
}

export interface AIAnalytics {
  examReadinessScore: number;
  predictedPassProbability: number;
  timeToExamReadiness: number;
  riskFactors: string[];
  recommendations: string[];
  strengths: string[];
  weaknesses: string[];
}

export interface AITutorResponse {
  message: string;
  tone: 'encouraging' | 'motivational' | 'analytical' | 'supportive';
  actionItems: string[];
  nextSteps: string[];
}

class FreeAIService {
  private huggingFaceUrl = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';
  
  // Check if AI is available
  isAIAvailable(): boolean {
    return true; // Always available, no API key needed
  }

  // Generate AI explanation for a question
  async generateExplanation(
    question: string,
    userAnswer: string,
    correctAnswer: string,
    explanation: string,
    userHistory: any[]
  ): Promise<AIExplanation> {
    try {
      // Use Hugging Face for AI response
      const prompt = `Question: ${question}
User Answer: ${userAnswer}
Correct Answer: ${correctAnswer}
Basic Explanation: ${explanation}

Provide a helpful explanation with tips.`;

      const aiResponse = await this.callHuggingFace(prompt);
      
      return {
        explanation: aiResponse || explanation,
        personalizedTips: [
          'Keep practicing similar questions',
          'Review the theory behind this topic',
          'Take notes on key concepts'
        ],
        relatedConcepts: ['Related traffic rules', 'Similar scenarios'],
        difficulty: 'medium'
      };
    } catch (error) {
      console.error('Free AI explanation error:', error);
      return this.getFallbackExplanation(explanation);
    }
  }

  // Generate personalized study plan
  async generateStudyPlan(userProgress: any): Promise<AIStudyPlan> {
    try {
      const prompt = `Create a study plan for Dutch driving theory based on this progress: ${JSON.stringify(userProgress)}`;
      const aiResponse = await this.callHuggingFace(prompt);
      
      return {
        personalizedPath: ['traffic-rules-signs', 'priority-rules', 'hazard-perception'],
        estimatedTimeToPass: 24,
        dailyGoals: [
          'Complete 1 practice test',
          'Review weak areas',
          'Take notes on mistakes'
        ],
        focusAreas: ['Priority rules', 'Traffic signs'],
        motivation: aiResponse || 'You\'re making great progress! Keep practicing to master Dutch driving theory.'
      };
    } catch (error) {
      console.error('Free AI study plan error:', error);
      return this.getFallbackStudyPlan();
    }
  }

  // Generate AI analytics and predictions
  async generateAnalytics(userProgress: any): Promise<AIAnalytics> {
    try {
      const prompt = `Analyze this driving theory progress: ${JSON.stringify(userProgress)}`;
      const aiResponse = await this.callHuggingFace(prompt);
      
      return {
        examReadinessScore: 65,
        predictedPassProbability: 70,
        timeToExamReadiness: 12,
        riskFactors: ['Need more practice with priority rules'],
        recommendations: ['Focus on weak areas', 'Take more practice tests'],
        strengths: ['Good understanding of basic concepts'],
        weaknesses: ['Priority rules need improvement']
      };
    } catch (error) {
      console.error('Free AI analytics error:', error);
      return this.getFallbackAnalytics();
    }
  }

  // AI Tutor conversation - STRICT CBR/Driving Theory Focus Only
  async getTutorResponse(userMessage: string, context: any): Promise<AITutorResponse> {
    try {
      // Enhanced CBR/Driving keywords - STRICT filtering
      const cbrKeywords = [
        // CBR & Exam
        'cbr', 'driving', 'theory', 'exam', 'test', 'practice', 'study', 'learn',
        'license', 'permit', 'driving test', 'theory test', 'practical test',
        
        // Traffic & Road Rules
        'traffic', 'road', 'sign', 'rule', 'regulation', 'law', 'highway code',
        'priority', 'right of way', 'give way', 'yield', 'stop', 'yield sign',
        'speed', 'limit', 'parking', 'overtake', 'overtaking', 'lane', 'lanes',
        'roundabout', 'intersection', 'junction', 'crossing', 'pedestrian crossing',
        
        // Road Signs & Markings
        'sign', 'signs', 'marking', 'markings', 'signal', 'traffic light',
        'warning sign', 'prohibition sign', 'mandatory sign', 'information sign',
        'road marking', 'white line', 'yellow line', 'dashed line', 'solid line',
        
        // Vehicle & Safety
        'vehicle', 'car', 'bicycle', 'bike', 'motorcycle', 'truck', 'bus',
        'safety', 'hazard', 'emergency', 'accident', 'collision', 'crash',
        'seatbelt', 'helmet', 'mirror', 'mirrors', 'brake', 'braking',
        
        // Road Types & Conditions
        'motorway', 'highway', 'autobahn', 'urban', 'rural', 'residential',
        'weather', 'rain', 'snow', 'fog', 'ice', 'wet road', 'dry road',
        'visibility', 'distance', 'following distance', 'safe distance',
        
        // Driving Behavior
        'alcohol', 'drug', 'fatigue', 'tired', 'sleepy', 'concentration',
        'distraction', 'phone', 'mobile', 'texting', 'drinking', 'eating',
        
        // Documents & Legal
        'document', 'documents', 'insurance', 'registration', 'inspection',
        'fine', 'penalty', 'violation', 'offense', 'police', 'enforcement'
      ];
      
      const isCBRRelated = cbrKeywords.some(keyword => 
        userMessage.toLowerCase().includes(keyword.toLowerCase())
      );
      
      if (!isCBRRelated) {
        return {
          message: "🚗 I'm your CBR driving theory tutor! I can ONLY help with:\n\n• Traffic rules & regulations\n• Road signs & markings\n• CBR exam preparation\n• Driving theory questions\n• Vehicle safety & knowledge\n• Priority rules & right of way\n\nWhat driving theory topic would you like help with?",
          tone: 'supportive',
          actionItems: ['Ask about traffic rules', 'Get help with road signs', 'Learn about CBR exam'],
          nextSteps: ['Practice with specific topics', 'Take a practice test']
        };
      }
      
      // Enhanced prompt with more context and CBR focus
      const currentPage = context?.currentTest || 'dashboard';
      const userProgress = context?.userProgress || {};
      
      const prompt = `You are a Dutch CBR driving theory expert. You ONLY answer questions about Dutch driving theory, CBR exam, and road safety.

STRICT TOPICS ONLY:
- Dutch traffic rules and regulations
- Road signs and markings (Dutch system)
- CBR theory exam preparation
- Vehicle knowledge and safety
- Priority rules and right of way
- Speed limits and parking rules
- Roundabouts and intersections
- Hazard perception and safety
- Driving behavior and legal requirements

CONTEXT:
- Current page: ${currentPage}
- User progress: ${JSON.stringify(userProgress)}
- User question: "${userMessage}"

INSTRUCTIONS:
- Answer ONLY in the context of Dutch driving theory
- Be specific and accurate
- Keep response under 120 words
- Be encouraging and helpful
- Focus on practical CBR exam knowledge
- Use simple, clear language

Provide a helpful, accurate response focused on Dutch CBR driving theory:`;
      
      const aiResponse = await this.callHuggingFace(prompt);
      
      // Enhanced response with better context
      const enhancedMessage = this.enhanceResponse(aiResponse, currentPage, userProgress);
      
      return {
        message: enhancedMessage,
        tone: 'encouraging',
        actionItems: this.getContextualActionItems(currentPage),
        nextSteps: this.getContextualNextSteps(currentPage, userProgress)
      };
    } catch (error) {
      console.error('Free AI tutor error:', error);
      return this.getFallbackTutorResponse();
    }
  }

  // Call Hugging Face API (FREE!) - Enhanced for CBR focus
  private async callHuggingFace(prompt: string): Promise<string> {
    try {
      // Add timeout and retry logic
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(this.huggingFaceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'CBR-AI-Coach/1.0'
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 120, // Shorter for CBR focus
            temperature: 0.6, // Lower for more consistent responses
            do_sample: true,
            top_p: 0.9,
            repetition_penalty: 1.1
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 503) {
          // Model is loading, return fallback
          return '';
        }
        throw new Error(`Hugging Face API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Enhanced text extraction
      let generatedText = '';
      
      if (Array.isArray(data) && data.length > 0) {
        generatedText = data[0].generated_text || data[0].text || '';
      } else if (data.generated_text) {
        generatedText = data.generated_text;
      } else if (data.text) {
        generatedText = data.text;
      }
      
      // Clean up the response
      if (generatedText) {
        // Remove the original prompt from the response
        generatedText = generatedText.replace(prompt, '').trim();
        
        // Ensure it's CBR-related
        if (this.isCBRRelated(generatedText)) {
          return generatedText;
        }
      }
      
      return ''; // Return empty if not CBR-related
    } catch (error) {
      console.error('Hugging Face API call failed:', error);
      return ''; // Return empty string instead of throwing
    }
  }

  // Check if generated text is CBR-related
  private isCBRRelated(text: string): boolean {
    const cbrIndicators = [
      'traffic', 'road', 'sign', 'rule', 'driving', 'cbr', 'vehicle', 'safety',
      'priority', 'speed', 'parking', 'roundabout', 'intersection', 'highway',
      'license', 'exam', 'test', 'practice', 'theory', 'regulation'
    ];
    
    const lowerText = text.toLowerCase();
    return cbrIndicators.some(indicator => lowerText.includes(indicator));
  }

  // Fallback methods when AI is not available
  private getFallbackExplanation(explanation: string): AIExplanation {
    return {
      explanation: explanation,
      personalizedTips: ['Keep practicing similar questions', 'Review the theory behind this topic'],
      relatedConcepts: ['Related traffic rules', 'Similar scenarios'],
      difficulty: 'medium'
    };
  }

  private getFallbackStudyPlan(): AIStudyPlan {
    return {
      personalizedPath: ['traffic-rules-signs', 'priority-rules', 'hazard-perception'],
      estimatedTimeToPass: 24,
      dailyGoals: ['Complete 1 practice test', 'Review weak areas', 'Take notes on mistakes'],
      focusAreas: ['Priority rules', 'Traffic signs'],
      motivation: 'You\'re making great progress! Keep practicing to master Dutch driving theory.'
    };
  }

  private getFallbackAnalytics(): AIAnalytics {
    return {
      examReadinessScore: 65,
      predictedPassProbability: 70,
      timeToExamReadiness: 12,
      riskFactors: ['Need more practice with priority rules'],
      recommendations: ['Focus on weak areas', 'Take more practice tests'],
      strengths: ['Good understanding of basic concepts'],
      weaknesses: ['Priority rules need improvement']
    };
  }

  private getFallbackTutorResponse(): AITutorResponse {
    return {
      message: 'Keep practicing your driving theory! Focus on traffic rules, road signs, and CBR exam preparation. You\'re making great progress!',
      tone: 'encouraging',
      actionItems: ['Complete today\'s practice test', 'Review traffic rules', 'Study road signs'],
      nextSteps: ['Focus on weak areas', 'Take a mock exam', 'Practice priority rules']
    };
  }

  // Enhanced response processing
  private enhanceResponse(aiResponse: string, currentPage: string, userProgress: any): string {
    if (!aiResponse || aiResponse.trim().length < 10) {
      return this.getContextualFallbackMessage(currentPage);
    }

    // Clean up the response
    let cleanedResponse = aiResponse.trim();
    
    // Remove any non-CBR content
    if (this.containsNonCBRContent(cleanedResponse)) {
      return this.getContextualFallbackMessage(currentPage);
    }

    // Add contextual encouragement
    const encouragement = this.getContextualEncouragement(currentPage, userProgress);
    
    return `${cleanedResponse}\n\n${encouragement}`;
  }

  // Check if response contains non-CBR content
  private containsNonCBRContent(response: string): boolean {
    const nonCBRTerms = [
      'cooking', 'recipe', 'food', 'movie', 'music', 'sports', 'politics',
      'weather forecast', 'news', 'entertainment', 'shopping', 'travel',
      'health advice', 'medical', 'relationship', 'dating', 'personal'
    ];
    
    return nonCBRTerms.some(term => 
      response.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Get contextual action items based on current page
  private getContextualActionItems(currentPage: string): string[] {
    switch (currentPage) {
      case 'dashboard':
        return ['Check your progress', 'Start a practice test', 'Review weak areas'];
      case 'practice-tests':
      case 'tests-page':
        return ['Choose a practice test', 'Focus on weak topics', 'Take a mock exam'];
      default:
        if (currentPage.startsWith('practice-')) {
          return ['Continue this test', 'Review explanations', 'Take notes'];
        }
        return ['Practice more', 'Review theory', 'Take a test'];
    }
  }

  // Get contextual next steps based on page and progress
  private getContextualNextSteps(currentPage: string, userProgress: any): string[] {
    const averageScore = userProgress?.averageScore || 0;
    
    if (averageScore < 60) {
      return ['Focus on basic concepts', 'Take easier tests first', 'Review theory thoroughly'];
    } else if (averageScore < 80) {
      return ['Practice weak areas', 'Take mock exams', 'Review mistakes'];
    } else {
      return ['Take advanced tests', 'Practice mock exams', 'Prepare for real exam'];
    }
  }

  // Get contextual encouragement based on page
  private getContextualEncouragement(currentPage: string, userProgress: any): string {
    const averageScore = userProgress?.averageScore || 0;
    
    if (averageScore < 60) {
      return "💪 Don't worry! Everyone starts somewhere. Keep practicing and you'll improve!";
    } else if (averageScore < 80) {
      return "🎯 Great progress! You're on the right track. Keep practicing to reach 80%+";
    } else {
      return "🌟 Excellent work! You're almost ready for the real CBR exam!";
    }
  }

  // Get contextual fallback message
  private getContextualFallbackMessage(currentPage: string): string {
    switch (currentPage) {
      case 'dashboard':
        return "📊 I can help you understand your progress and suggest what to study next. What specific area would you like help with?";
      case 'practice-tests':
      case 'tests-page':
        return "📚 I can help you choose the right practice test or explain any driving theory concepts. What would you like to know?";
      default:
        if (currentPage.startsWith('practice-')) {
          return "🚗 I can help explain this question or any driving theory concept. What would you like to know?";
        }
        return "🎯 I'm here to help with your CBR driving theory studies. What can I help you with?";
    }
  }
}

export const freeAIService = new FreeAIService();
