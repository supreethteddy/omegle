
import { useState } from 'react';

interface ReportModalProps {
  onClose: () => void;
  onReport: (reason: string) => void;
}

export default function ReportModal({ onClose, onReport }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const reasons = [
    'Inappropriate behavior',
    'Spam or advertising',
    'Harassment',
    'Nudity or sexual content',
    'Violence or threats',
    'Fake profile',
    'Other'
  ];

  const handleSubmit = () => {
    const reason = selectedReason === 'Other' ? customReason : selectedReason;
    if (reason) {
      onReport(reason);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Report User</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <i className="ri-close-line text-gray-600"></i>
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Help us keep RandomConnect safe. What's the issue?
        </p>

        <div className="space-y-2 mb-4">
          {reasons.map((reason) => (
            <button
              key={reason}
              onClick={() => setSelectedReason(reason)}
              className={`w-full text-left p-3 rounded-xl border-2 transition-colors ${
                selectedReason === reason
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {reason}
            </button>
          ))}
        </div>

        {selectedReason === 'Other' && (
          <div className="mb-4">
            <textarea
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="Please describe the issue..."
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
              rows={3}
            />
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedReason || (selectedReason === 'Other' && !customReason.trim())}
            className="flex-1 py-3 px-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Report
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Reports are reviewed by our moderation team within 24 hours
        </div>
      </div>
    </div>
  );
}
