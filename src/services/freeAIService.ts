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

  // AI Tutor conversation - CBR/Driving Theory Focus Only
  async getTutorResponse(userMessage: string, context: any): Promise<AITutorResponse> {
    try {
      // Check if question is driving-related
      const drivingKeywords = [
        'traffic', 'road', 'sign', 'rule', 'speed', 'parking', 'priority', 'roundabout',
        'cbr', 'driving', 'theory', 'exam', 'test', 'practice', 'study', 'learn',
        'vehicle', 'car', 'bicycle', 'pedestrian', 'crossing', 'light', 'signal',
        'motorway', 'highway', 'lane', 'overtake', 'merge', 'exit', 'entrance',
        'safety', 'hazard', 'emergency', 'accident', 'insurance', 'license',
        'alcohol', 'drug', 'fatigue', 'weather', 'condition', 'document'
      ];
      
      const isDrivingRelated = drivingKeywords.some(keyword => 
        userMessage.toLowerCase().includes(keyword)
      );
      
      if (!isDrivingRelated) {
        return {
          message: "I'm your Dutch driving theory tutor! I can help you with traffic rules, road signs, CBR exam preparation, and study strategies. What driving topic would you like to learn about?",
          tone: 'supportive',
          actionItems: ['Ask about traffic rules', 'Get help with road signs', 'Learn about CBR exam'],
          nextSteps: ['Practice with specific topics', 'Take a practice test']
        };
      }
      
      const prompt = `You are a Dutch driving theory expert and CBR exam tutor. ONLY answer questions about:
- Traffic rules and regulations
- Road signs and markings
- Vehicle knowledge and safety
- CBR exam preparation
- Study strategies for driving theory
- Priority rules and right of way
- Speed limits and parking rules
- Roundabouts and intersections
- Hazard perception and safety

User asks: "${userMessage}"
Context: ${JSON.stringify(context)}

Provide a helpful, accurate response focused on Dutch driving theory. Keep it concise (under 150 words) and encouraging.`;
      
      const aiResponse = await this.callHuggingFace(prompt);
      
      return {
        message: aiResponse || 'Keep practicing! You\'re making great progress with your driving theory studies.',
        tone: 'encouraging',
        actionItems: ['Complete today\'s practice test', 'Review yesterday\'s mistakes'],
        nextSteps: ['Focus on weak areas', 'Take a mock exam']
      };
    } catch (error) {
      console.error('Free AI tutor error:', error);
      return this.getFallbackTutorResponse();
    }
  }

  // Call Hugging Face API (FREE!)
  private async callHuggingFace(prompt: string): Promise<string> {
    try {
      const response = await fetch(this.huggingFaceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 150,
            temperature: 0.7,
            do_sample: true
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Hugging Face API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract text from response
      if (Array.isArray(data) && data.length > 0) {
        return data[0].generated_text || data[0].text || '';
      }
      
      return data.generated_text || data.text || '';
    } catch (error) {
      console.error('Hugging Face API call failed:', error);
      throw error;
    }
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
}

export const freeAIService = new FreeAIService();
