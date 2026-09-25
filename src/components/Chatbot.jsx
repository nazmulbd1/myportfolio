import { useState, useEffect, useRef } from 'react'
import {
  Bot,
  MessageSquare,
  Send,
  X,
  Sparkles,
  RefreshCw,
  User,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Globe,
  Briefcase,
  Code,
  FileText
} from 'lucide-react'
import { profile, skillGroups, services, projects, timeline, aboutHighlights } from '../data/portfolioData'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const messagesEndRef = useRef(null)

  // Initial welcome message
  useEffect(() => {
    const saved = localStorage.getItem('nazmul_portfolio_chat')
    if (saved) {
      try {
        setMessages(JSON.parse(saved))
        return
      } catch (e) {
        console.error(e)
      }
    }

    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: `👋 **Hi there! / হ্যালো!**\n\nI am Nazmul Sheikh Nahid's AI Assistant. Ask me anything about Nazmul's skills, projects, services, or contact details!\n\nআমি নাজমুলের এআই অ্যাসিস্ট্যান্ট। নাজমুলের কাজ, স্কিল বা যোগাযোগের জন্য আমায় প্রশ্ন করতে পারেন (বাংলা বা ইংলিশে)!`,
        timestamp: getCurrentTime(),
        quickActions: [
          { label: '🧑‍💻 Who is Nazmul?', query: 'Who is Nazmul?' },
          { label: '⚡ Skills', query: 'What skills does Nazmul have?' },
          { label: '💼 Services', query: 'What services are offered?' },
          { label: '📧 Contact info', query: 'How to contact Nazmul?' },
          { label: '🇧🇩 নাজমুল কে?', query: 'নাজমুল সম্পর্কে বলুন' },
          { label: '🇧🇩 স্কিলসমূহ', query: 'নাজমুলের স্কিলগুলো কী কী?' }
        ]
      }
    ])
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, isOpen])

  // Save to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('nazmul_portfolio_chat', JSON.stringify(messages))
    }
  }, [messages])

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  function handleClearChat() {
    const defaultMsg = [
      {
        id: Date.now(),
        sender: 'bot',
        text: `Chat cleared! How can I help you today? / চ্যাট ক্লিয়ার করা হয়েছে! বলুন আপনাকে কীভাবে সাহায্য করতে পারি?`,
        timestamp: getCurrentTime()
      }
    ]
    setMessages(defaultMsg)
    localStorage.removeItem('nazmul_portfolio_chat')
  }

  // Detect query language and generate smart AI response
  function generateAIResponse(query) {
    const text = query.toLowerCase().trim()

    // 1. Language Detection
    const isBangla = /[\u0980-\u09FF]/.test(query)
    const isBanglish = /ke|kemon|somporke|kaj|skil|skill|contact|thaki|dhaka|project|phone|email|nam|nazmul|dorkar|chao|apni|tumi|bistarito/.test(text)
    const useBanglaReply = isBangla || (isBanglish && !/what|who|how|where|skills|services|projects|contact|email|phone/.test(text))

    // 2. Intent Detection Logic
    // --- GREETINGS ---
    if (/^(hi|hello|hey|hola|assalamu|salam|হাই|হ্যালো|সালাম|কেমন আছেন|kemon achen|kemon achon)$/i.test(text) || text.includes('kemon ach')) {
      if (useBanglaReply) {
        return {
          text: `আলহামদুলিল্লাহ্‌, আমি ভালো আছি! 😊 আমি নাজমুল শেখ নাহিদের এআই অ্যাসিস্ট্যান্ট।\n\nআপনি নাজমুলের কাজ, স্কিল, প্রজেক্ট বা সরাসরি যোগাযোগ সম্পর্কিত যেকোনো তথ্য জানতে চান? আমায় জিজ্ঞেস করুন!`,
          actions: [
            { type: 'link', label: '📞 কন্টাক্ট সেকশনে যান', href: '#contact' },
            { type: 'link', label: '📂 প্রজেক্টগুলো দেখুন', href: '#projects' }
          ]
        }
      }
      return {
        text: `Hello! 👋 I'm doing great! How can I assist you today? Feel free to ask about Nazmul's skills, experience, services, or how to get in touch with him.`,
        actions: [
          { type: 'link', label: '📞 Go to Contact', href: '#contact' },
          { type: 'link', label: '📂 View Projects', href: '#projects' }
        ]
      }
    }

    // --- WHO IS NAZMUL / ABOUT ---
    if (/who|about|nazmul|bio|intro|identity|পরিচয়|সম্পর্কে|কে|খুঁজছি|kaha|profile/i.test(text) && !/skill|service|project|contact/i.test(text)) {
      if (useBanglaReply) {
        return {
          text: `**নাজমুল শেখ নাহিদ** ঢাকা, বাংলাদেশের একজন প্যাশনেট **Frontend Developer**।\n\n• **মূল অভিজ্ঞতা:** HTML5, CSS3, JavaScript (ES6+), React.js, Next.js এবং Tailwind CSS দিয়ে রেসপন্সিভ ও ক্লিন ইন্টারফেস তৈরি করা।\n• **বর্তমান লক্ষ্য:** Node.js, Express.js, TypeScript এবং MongoDB শিখে একজন দক্ষ Full-stack Developer হওয়া।\n• **অবস্থান:** ${profile.location}\n\nআপনি কি তার স্কিল, সার্ভিস নাকি প্রজেক্ট দেখতে চান?`,
          actions: [
            { type: 'link', label: '📄 CV ডাউনলোড করুন', href: profile.cvPath, external: true },
            { type: 'link', label: '💬 সরাসরি কথা বলুন', href: '#contact' }
          ]
        }
      }
      return {
        text: `**Nazmul Sheikh Nahid** is a **Frontend Developer** based in **${profile.location}**.\n\n• **Frontend Stack:** React, Next.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Bootstrap.\n• **Currently Learning:** Full-stack backend tech including Node.js, Express.js, TypeScript, and MongoDB.\n• **Goal:** Building sleek, accessible, end-to-end web products.\n\nWould you like to explore his skills, services, or contact him for a role?`,
        actions: [
          { type: 'link', label: '📄 Download CV', href: profile.cvPath, external: true },
          { type: 'link', label: '💬 Contact Nazmul', href: '#contact' }
        ]
      }
    }

    // --- SKILLS ---
    if (/skill|stack|technology|tech|react|javascript|node|tailwind|css|html|কী কী পারি|স্কিল|দক্ষতা|প্রযুক্তি|জ্ঞান/i.test(text)) {
      const feSkills = skillGroups[0]?.skills.join(', ') || 'React, Next.js, Tailwind CSS, JavaScript, HTML, CSS'
      const beSkills = skillGroups[1]?.skills.join(', ') || 'Node.js, Express.js, MongoDB, TypeScript'

      if (useBanglaReply) {
        return {
          text: `⚡ **নাজমুলের টেকনিক্যাল স্কিলসমূহ:**\n\n**১. ফ্রন্টএন্ড (প্রতিদিনের ব্যবহার):**\n${feSkills}\n\n**২. ব্যাকএন্ড (চলমান শিক্ষা):**\n${beSkills}\n\nনাজমুল যেকোনো ডিজাইন ফিগমা বা স্কেচ থেকে পিক্সেল-পারফেক্ট React/Tailwind কোডে রূপান্তর করতে পারদর্শী!`,
          actions: [
            { type: 'link', label: '🔍 স্কিল সেকশন দেখুন', href: '#skills' },
            { type: 'link', label: '💼 সার্ভিসসমূহ দেখুন', href: '#services' }
          ]
        }
      }
      return {
        text: `⚡ **Nazmul's Technical Skills:**\n\n**Frontend (Production-ready):**\n${feSkills}\n\n**Backend (Actively Learning):**\n${beSkills}\n\nHe excels at taking Figma or UI designs and turning them into accessible, responsive React components with Tailwind CSS.`,
        actions: [
          { type: 'link', label: '🔍 View Skills Section', href: '#skills' },
          { type: 'link', label: '💼 View Services', href: '#services' }
        ]
      }
    }

    // --- SERVICES ---
    if (/service|offer|hire|work|build|job|do|সার্ভিস|কাজ|কী কাজ করেন|বানাতে পারি|তৈরি/i.test(text)) {
      const serviceList = services.map((s, i) => `${i + 1}. **${s.title}**: ${s.description}`).join('\n\n')

      if (useBanglaReply) {
        return {
          text: `💼 **নাজমুল যেসকল সার্ভিস অফার করেন:**\n\n${serviceList}\n\nআপনার কোনো প্রজেক্ট বা আইডিয়া থাকলে নাজমুলকে সরাসরি মেসেজ পাঠাতে পারেন!`,
          actions: [
            { type: 'link', label: '📩 প্রজেক্টের জন্য যোগাযোগ', href: '#contact' }
          ]
        }
      }
      return {
        text: `💼 **Services Offered by Nazmul:**\n\n${serviceList}\n\nHave a project or open developer role? Nazmul is ready to collaborate!`,
        actions: [
          { type: 'link', label: '📩 Hire Nazmul', href: '#contact' }
        ]
      }
    }

    // --- PROJECTS ---
    if (/project|portfolio|work|demo|sample|প্রজেক্ট|কাজসমূহ|পোর্টফোলিও/i.test(text)) {
      if (useBanglaReply) {
        return {
          text: `📂 **নাজমুলের প্রজেক্টসমূহ:**\n\nনাজমুল React.js, Next.js এবং Tailwind CSS ব্যবহার করে আধুনিক ও ইন্টারেক্টিভ ওয়েব অ্যাপ তৈরি করেন।\n\nওয়েবসাইটের **Projects** সেকশনে ক্লিক করে সবকটি প্রজেক্ট ও সেগুলোর লাইভ ডেমো ও গিটহাব কোড দেখতে পারেন!`,
          actions: [
            { type: 'link', label: '🚀 প্রজেক্টসমূহ দেখুন', href: '#projects' },
            { type: 'link', label: '🌐 গিটহাব প্রোফাইল', href: profile.socials.github, external: true }
          ]
        }
      }
      return {
        text: `📂 **Nazmul's Projects:**\n\nNazmul builds component-driven web applications using React, Next.js, and Tailwind CSS.\n\nCheck out the **Projects** section on this page to view live previews and source code repositories!`,
        actions: [
          { type: 'link', label: '🚀 View Projects Section', href: '#projects' },
          { type: 'link', label: '🌐 Nazmul\'s GitHub', href: profile.socials.github, external: true }
        ]
      }
    }

    // --- CONTACT / EMAIL / PHONE / LOCATION ---
    if (/contact|email|mail|phone|number|call|location|address|address|যোগাযোগ|ইমেইল|ফোন|নাম্বার|ঠিকানা|মেইল/i.test(text)) {
      if (useBanglaReply) {
        return {
          text: `📞 **নাজমুলের সাথে যোগাযোগের তথ্য:**\n\n• 📧 **ইমেইল:** ${profile.email}\n• 📞 **ফোন/হোয়াটসঅ্যাপ:** ${profile.phone}\n• 📍 **ঠিকানা:** ${profile.location}\n• 🌐 **গিটহাব:** [github.com/nazmulbd1](${profile.socials.github})\n• 🌐 **ফেসবুক:** [Facebook Profile](${profile.socials.facebook})\n\nআপনি সরাসরি মেইল করতে পারেন অথবা এই ওয়েবসাইটের নিচে থাকা **Contact Form** পূরণ করতে পারেন।`,
          actions: [
            { type: 'link', label: '📧 ইমেইল পাঠাতেন', href: `mailto:${profile.email}` },
            { type: 'link', label: '📞 সরাসরি কল করুন', href: `tel:${profile.phone.replace(/\s+/g, '')}` }
          ]
        }
      }
      return {
        text: `📞 **Contact Nazmul Directly:**\n\n• 📧 **Email:** ${profile.email}\n• 📞 **Phone:** ${profile.phone}\n• 📍 **Location:** ${profile.location}\n• 🌐 **GitHub:** ${profile.socials.github}\n• 🌐 **Facebook:** ${profile.socials.facebook}\n\nFeel free to send an email or drop a brief message using the Contact section below!`,
        actions: [
          { type: 'link', label: '📧 Send Email', href: `mailto:${profile.email}` },
          { type: 'link', label: '📞 Call Now', href: `tel:${profile.phone.replace(/\s+/g, '')}` }
        ]
      }
    }

    // --- HIRE / FREELANCE / INTERN / JOB ---
    if (/hire|job|intern|internship|available|cost|price|freelance|চাকরি|নিয়োগ|কাজে নিতে|দাম/i.test(text)) {
      if (useBanglaReply) {
        return {
          text: `🎯 **নাজমুল কি কাজের জন্য প্রস্তুত?**\n\nহ্যাঁ! নাজমুল বর্তমানে **Junior Frontend Developer / Intern / Freelance** রোল অনুসন্ধানে প্রস্তুত।\n\nতিনি ফুল-টাইম, পার্ট-টাইম বা রিমোট যেকোনো কাজের সুযোগের জন্য উন্মুক্ত। আপনার কাজের প্রস্তাব সরাসরি ইমেইল করতে পারেন!`,
          actions: [
            { type: 'link', label: '📩 প্রপোজাল পাঠান', href: '#contact' },
            { type: 'link', label: '📧 direct Mail', href: `mailto:${profile.email}` }
          ]
        }
      }
      return {
        text: `🎯 **Looking to hire Nazmul?**\n\nYes! Nazmul is actively open to **Junior Frontend Developer, Intern, or Freelance** positions (Full-time / Part-time / Remote).\n\nGet in touch today to discuss how he can contribute to your team or project!`,
        actions: [
          { type: 'link', label: '📩 Send Brief', href: '#contact' },
          { type: 'link', label: '📧 Email Directly', href: `mailto:${profile.email}` }
        ]
      }
    }

    // --- THANK YOU ---
    if (/thank|thanks|dhonnobad|ধন্যবাদ|থ্যাংকস/i.test(text)) {
      if (useBanglaReply) {
        return {
          text: `আপনাকেও অনেক ধন্যবাদ! 😊 আপনার কোনো প্রশ্ন থাকলে যেকোনো সময় আমায় জিজ্ঞেস করতে পারেন। দিনটি শুভ হোক!`,
          actions: []
        }
      }
      return {
        text: `You're very welcome! 😊 Feel free to ask if you have any other questions. Have a wonderful day!`,
        actions: []
      }
    }

    // --- DEFAULT FALLBACK ---
    if (useBanglaReply) {
      return {
        text: `ধন্যবাদ আপনার বার্তার জন্য! 😊\n\nআমি নাজমুলের এআই অ্যাসিস্ট্যান্ট। নাজমুল সম্পর্কে আরও জানতে নিচের যেকোনো অপশনে ক্লিক করুন অথবা আপনার নির্দিষ্ট প্রশ্নটি করুন:\n\n• নাজমুলের স্কিল ও যোগ্যতা\n• তিনি কী কী প্রজেক্ট তৈরি করেছেন\n• কীভাবে তার সাথে সরাসরি যোগাযোগ করবেন`,
        actions: [
          { type: 'link', label: '🧑‍💻 নাজমুল কে?', href: '#about' },
          { type: 'link', label: '⚡ স্কিলসমূহ', href: '#skills' },
          { type: 'link', label: '📞 যোগাযোগ', href: '#contact' }
        ]
      }
    }

    return {
      text: `Thanks for your message! 😊\n\nI'm Nazmul's AI Assistant. To help you better, you can select one of the topics below or ask specifically about his skills, services, projects, or contact details:`,
      actions: [
        { type: 'link', label: '🧑‍💻 Who is Nazmul?', href: '#about' },
        { type: 'link', label: '⚡ Technical Skills', href: '#skills' },
        { type: 'link', label: '📞 Contact Info', href: '#contact' }
      ]
    }
  }

  function handleSend(e, customQuery = null) {
    if (e) e.preventDefault()
    const query = customQuery || input
    if (!query.trim()) return

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: getCurrentTime()
    }

    setMessages((prev) => [...prev, userMessage])
    if (!customQuery) setInput('')
    setIsTyping(true)

    // Realistic typing delay for human-like feeling
    setTimeout(() => {
      const response = generateAIResponse(query)
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        actions: response.actions || [],
        timestamp: getCurrentTime()
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 700)
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Floating Notification Badge */}
        {showTooltip && !isOpen && (
          <div className="mb-3 flex items-center gap-2 bg-ink-soft border border-gold/40 text-paper text-xs px-3.5 py-2 rounded-xl shadow-xl animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Chat with Nazmul&apos;s AI Assistant! / এআই চ্যাটবট</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowTooltip(false)
              }}
              className="ml-1 text-muted hover:text-paper"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen)
            setShowTooltip(false)
          }}
          className={`group relative flex items-center justify-center rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isOpen
              ? 'bg-ink-soft border border-ink-line text-paper'
              : 'bg-gradient-to-r from-gold to-teal text-ink font-semibold'
          }`}
          aria-label="Toggle AI Chatbot"
        >
          {/* Animated pulse ring */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold/50 to-teal/50 blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse" />
          )}

          <div className="relative flex items-center gap-2">
            {isOpen ? (
              <X size={24} />
            ) : (
              <>
                <Bot size={26} className="text-ink" />
                <span className="hidden sm:inline font-display text-sm font-bold text-ink pr-1">
                  Ask AI
                </span>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[82vh] rounded-2xl border border-ink-line bg-ink/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 border-b border-ink-line bg-ink-soft/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-gold to-teal p-[2px]">
                <div className="w-full h-full rounded-full bg-ink flex items-center justify-center text-gold">
                  <Bot size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-ink" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-paper flex items-center gap-1.5">
                  Nazmul Assistant
                  <Sparkles size={13} className="text-gold" />
                </h3>
                <p className="text-[11px] text-teal flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online • Multilingual AI (EN / বাংলা)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat / চ্যাট মুছুন"
                className="p-2 text-muted hover:text-gold hover:bg-ink rounded-lg transition-colors"
              >
                <RefreshCw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-2 text-muted hover:text-paper hover:bg-ink rounded-lg transition-colors"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={15} />
                  </div>
                )}

                <div className={`max-w-[84%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-gold to-gold-dim text-ink font-medium rounded-tr-none shadow-md'
                        : 'bg-ink-soft border border-ink-line text-paper rounded-tl-none shadow-sm'
                    }`}
                  >
                    <FormattedText text={msg.text} />
                  </div>

                  {/* Message Timestamp */}
                  <div
                    className={`text-[10px] text-muted px-1 ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.timestamp}
                  </div>

                  {/* Interactive Bot Actions / Links */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.actions.map((act, i) => (
                        <a
                          key={i}
                          href={act.href}
                          target={act.external ? '_blank' : '_self'}
                          rel={act.external ? 'noopener noreferrer' : ''}
                          onClick={() => {
                            if (!act.external && act.href.startsWith('#')) {
                              setIsOpen(false)
                            }
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-ink-softer hover:bg-gold/20 text-gold border border-gold/30 px-2.5 py-1.5 rounded-lg transition-colors"
                        >
                          {act.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Quick Suggestions Chips */}
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {msg.quickActions.map((qa, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(null, qa.query)}
                          className="text-xs bg-ink-soft hover:bg-gold/20 text-paper border border-ink-line hover:border-gold/50 px-2.5 py-1.5 rounded-full transition-colors text-left"
                        >
                          {qa.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-teal/20 border border-teal/40 text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center text-muted text-xs">
                <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center">
                  <Bot size={15} />
                </div>
                <div className="bg-ink-soft border border-ink-line px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Preset Quick Chips Bar */}
          <div className="px-3 py-2 border-t border-ink-line bg-ink-soft/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <QuickChip label="⚡ Skills" onClick={() => handleSend(null, 'Skills')} />
            <QuickChip label="💼 Services" onClick={() => handleSend(null, 'Services')} />
            <QuickChip label="📂 Projects" onClick={() => handleSend(null, 'Projects')} />
            <QuickChip label="📧 Contact" onClick={() => handleSend(null, 'Contact')} />
            <QuickChip label="🇧🇩 নাজমুল কে?" onClick={() => handleSend(null, 'নাজমুল সম্পর্কে বলুন')} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-ink-line bg-ink-soft">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask in English or বাংলা..."
                className="w-full bg-ink border border-ink-line rounded-xl pl-3.5 pr-11 py-2.5 text-xs sm:text-sm text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-1.5 p-2 rounded-lg bg-gold text-ink disabled:opacity-30 disabled:bg-transparent disabled:text-muted hover:bg-gold-dim transition-colors"
              >
                <Send size={15} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

function QuickChip({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 text-[11px] text-muted hover:text-gold bg-ink hover:bg-ink-softer border border-ink-line px-2.5 py-1 rounded-full transition-colors"
    >
      {label}
    </button>
  )
}

// Simple bold and line break parser for rich text feel
function FormattedText({ text }) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="text-gold font-semibold">{part.slice(2, -2)}</strong>
        }
        return part
      })}
    </span>
  )
}
