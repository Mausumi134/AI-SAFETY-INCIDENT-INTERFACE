import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Incident } from '../types/incident'; 

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(prev => !prev); 
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderSeverityIcon = (severityLevel: string) => {
    // Could also switch to a map if we get too many types
    switch (severityLevel) {
      case 'High':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'Medium':
        return <AlertCircle className="h-5 w-5 text-amber-600" />;
      case 'Low':
        return <Info className="h-5 w-5 text-emerald-600" />;
      default:
        return null; // fallback for unknown severities
    }
  };

  const getSeverityStyles = (level: string) => {
    // Maybe refactor into a separate file if more severities added
    switch (level) {
      case 'High':
        return {
          bg: 'bg-red-900/50',
          text: 'text-white',
          border: 'border-red-700/50',
          shadow: 'shadow-red-900/50',
          accent: 'bg-red-600',
          hover: 'hover:bg-red-800/50',
          expanded: 'bg-red-900/70',
        };
      case 'Medium':
        return {
          bg: 'bg-amber-900/50',
          text: 'text-white',
          border: 'border-amber-700/50',
          shadow: 'shadow-amber-900/50',
          accent: 'bg-amber-600',
          hover: 'hover:bg-amber-800/50',
          expanded: 'bg-amber-900/70',
        };
      case 'Low':
        return {
          bg: 'bg-emerald-900/50',
          text: 'text-white',
          border: 'border-emerald-700/50',
          shadow: 'shadow-emerald-900/50',
          accent: 'bg-emerald-600',
          hover: 'hover:bg-emerald-800/50',
          expanded: 'bg-emerald-900/70',
        };
      default:
        return {
          bg: 'bg-gray-900/50',
          text: 'text-white',
          border: 'border-gray-700/50',
          shadow: 'shadow-gray-900/50',
          accent: 'bg-gray-600',
          hover: 'hover:bg-gray-800/50',
          expanded: 'bg-gray-900/70',
        };
    }
  };

  const colors = getSeverityStyles(incident.severity);

  return (
    <div
      className={`glass-effect rounded-xl shadow-lg border ${colors.border} transition-all duration-300 hover:shadow-xl mb-4 ${
        expanded ? `${colors.expanded} scale-[1.02]` : ''
      }`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          
          {/* Left side - Icon + Title */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${colors.bg} ${colors.shadow}`}>
              {renderSeverityIcon(incident.severity)}
            </div>
            <h3 className={`font-semibold text-lg ${colors.text}`}>
              {incident.title}
            </h3>
          </div>

          {/* Right side - Severity + Date */}
          <div className="flex items-center space-x-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.accent} text-white`}
            >
              {incident.severity}
            </span>
            <span className="text-sm text-white bg-gray-800/50 px-3 py-1 rounded-full">
              {formatDate(incident.reported_at)}
            </span>
          </div>

        </div>

        {/* Expand/Collapse button */}
        <div className="mt-4">
          <button
            onClick={toggleExpand}
            className={`inline-flex items-center text-sm font-medium transition-all duration-200 ${colors.bg} ${colors.hover} ${colors.text} px-3 py-1 rounded-full`}
          >
            {expanded ? 'Hide Details' : 'View Details'}
            {expanded ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </button>
        </div>

        {/* Description if expanded */}
        {expanded && (
          <div
            className={`mt-4 ${colors.text} text-sm border-t pt-4 ${colors.border} animate-fadeIn leading-relaxed`}
          >
            {incident.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentCard;
