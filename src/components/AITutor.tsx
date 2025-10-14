import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { freeAIService, AITutorResponse } from '../services/freeAIService';
import './AITutor.css';

interface AITutorProps {
  userProgress?: any;
  currentTest?: string;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
  tone?: 'encouraging' | 'motivational' | 'analytical' | 'supportive';
  actionItems?: string[];
  nextSteps?: string[];
}

const AITutor: React.FC<AITutorProps> = ({ userProgress, currentTest, onClose }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: 'welcome',
      type: 'ai',
      message: t('aiTutor.welcome', 'Hi! I\'m your AI driving theory tutor. Ask me anything about Dutch driving rules, practice tests, or how to improve your scores!'),
      timestamp: new Date(),
      tone: 'encouraging'
    };
    setMessages([welcomeMessage]);
  }, [t]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Get AI response
      const context = {
        userProgress,
        currentTest,
        recentMessages: messages.slice(-3)
      };

      const aiResponse: AITutorResponse = await freeAIService.getTutorResponse(
        userMessage.message,
        context
      );

      // Simulate typing delay
      setTimeout(() => {
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          message: aiResponse.message,
          timestamp: new Date(),
          tone: aiResponse.tone,
          actionItems: aiResponse.actionItems,
          nextSteps: aiResponse.nextSteps
        };

        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
        setIsTyping(false);
      }, 1500);

    } catch (error) {
      console.error('AI Tutor error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message: t('aiTutor.error', 'Sorry, I\'m having trouble right now. Please try again in a moment.'),
        timestamp: new Date(),
        tone: 'supportive'
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getToneIcon = (tone?: string) => {
    switch (tone) {
      case 'encouraging': return '💪';
      case 'motivational': return '🚀';
      case 'analytical': return '🧠';
      case 'supportive': return '🤗';
      default: return '🤖';
    }
  };

  const quickQuestions = [
    t('aiTutor.quickQuestions.whyWrong', 'Why did I get this wrong?'),
    t('aiTutor.quickQuestions.explainRule', 'Explain this rule'),
    t('aiTutor.quickQuestions.howImprove', 'How can I improve?'),
    t('aiTutor.quickQuestions.whenReady', 'When am I ready for the exam?')
  ];

  return (
    <div className="ai-tutor-overlay">
      <div className="ai-tutor-container">
        {/* Header */}
        <div className="ai-tutor-header">
          <div className="ai-tutor-title">
            <span className="ai-tutor-icon">🤖</span>
            <h3>{t('aiTutor.title', 'AI Tutor')}</h3>
          </div>
          <button className="ai-tutor-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="ai-tutor-messages">
          {messages.map((message) => (
            <div key={message.id} className={`ai-tutor-message ${message.type}`}>
              <div className="ai-tutor-message-content">
                {message.type === 'ai' && (
                  <div className="ai-tutor-avatar">
                    {getToneIcon(message.tone)}
                  </div>
                )}
                <div className="ai-tutor-message-text">
                  <p>{message.message}</p>
                  {message.actionItems && message.actionItems.length > 0 && (
                    <div className="ai-tutor-action-items">
                      <strong>{t('aiTutor.actionItems', 'Action Items:')}</strong>
                      <ul>
                        {message.actionItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {message.nextSteps && message.nextSteps.length > 0 && (
                    <div className="ai-tutor-next-steps">
                      <strong>{t('aiTutor.nextSteps', 'Next Steps:')}</strong>
                      <ul>
                        {message.nextSteps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="ai-tutor-timestamp">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="ai-tutor-message ai">
              <div className="ai-tutor-message-content">
                <div className="ai-tutor-avatar">🤖</div>
                <div className="ai-tutor-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="ai-tutor-quick-questions">
            <p>{t('aiTutor.quickQuestions.title', 'Try asking:')}</p>
            <div className="ai-tutor-quick-buttons">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="ai-tutor-quick-button"
                  onClick={() => setInputMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="ai-tutor-input">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('aiTutor.inputPlaceholder', 'Ask me anything about driving theory...')}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="ai-tutor-send"
          >
            {isLoading ? '⏳' : '📤'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
