import { Incident } from '../types/incident';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendation systems, leading to potential discrimination issues. The bias was discovered during a regular audit and has been temporarily disabled for recalibration.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information during an industrial consultation, which could have led to physical harm. The model has been taken offline for retraining and additional safety guardrails are being implemented.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in responses. No personally identifiable information was leaked, but the incident highlights potential vulnerabilities in the data handling pipeline.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Uncontrolled AI Content Generation",
    description: "AI content generator created inappropriate imagery when given certain prompts, bypassing existing safety filters. The vulnerability has been patched and additional content screening measures have been implemented.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Algorithm Energy Consumption Spike",
    description: "An AI optimization algorithm entered an unexpected loop state, causing excessive computational resource usage and energy consumption. The issue was automatically detected and resolved by the monitoring system.",
    severity: "Low",
    reported_at: "2025-03-10T11:20:00Z"
  }
];