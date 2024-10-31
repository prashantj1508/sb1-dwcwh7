import React from 'react';
import { MapPin, Phone, Calendar, Globe2 } from 'lucide-react';

const PersonalInfo = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="text-blue-400" size={20} />
          <span className="text-gray-300">San Francisco, CA</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-blue-400" size={20} />
          <span className="text-gray-300">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="text-blue-400" size={20} />
          <span className="text-gray-300">Available for freelance</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe2 className="text-blue-400" size={20} />
          <span className="text-gray-300">English, Spanish</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;