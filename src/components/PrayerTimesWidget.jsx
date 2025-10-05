import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaClock } from 'react-icons/fa';

const PrayerTimesWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState('');

  // Sample prayer times for Mandera, Kenya (you would typically fetch this from an API)
  const prayerTimes = {
    Fajr: '05:30',
    Dhuhr: '12:30',
    Asr: '15:45',
    Maghrib: '18:15',
    Isha: '19:30'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Calculate next prayer
      const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();
      const prayers = Object.entries(prayerTimes);
      
      for (let i = 0; i < prayers.length; i++) {
        const [name, time] = prayers[i];
        const [hours, minutes] = time.split(':').map(Number);
        const prayerMinutes = hours * 60 + minutes;
        
        if (currentTimeMinutes < prayerMinutes) {
          setNextPrayer(name);
          break;
        }
      }
      
      // If all prayers have passed, next is Fajr tomorrow
      if (!nextPrayer || currentTimeMinutes >= 19 * 60 + 30) {
        setNextPrayer('Fajr');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextPrayer]);

  const formatTime = (time) => {
    return new Date(`2025-01-01 ${time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCurrentTimeString = () => {
    return currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getPrayerIcon = (prayerName) => {
    if (prayerName === 'Fajr' || prayerName === 'Maghrib' || prayerName === 'Isha') {
      return <FaMoon className="text-blue-600" />;
    }
    return <FaSun className="text-yellow-600" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <FaClock className="text-green-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-800">Prayer Times</h3>
        </div>
        <div className="text-sm text-gray-600">Mandera, Kenya</div>
        <div className="text-xl font-bold text-green-600 mt-2">
          {getCurrentTimeString()}
        </div>
      </div>

      {/* Next Prayer Alert */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-center"
      >
        <div className="text-sm text-green-700 mb-1">Next Prayer:</div>
        <div className="flex items-center justify-center">
          {getPrayerIcon(nextPrayer)}
          <span className="text-lg font-bold text-green-800 ml-2">
            {nextPrayer} - {formatTime(prayerTimes[nextPrayer] || prayerTimes.Fajr)}
          </span>
        </div>
      </motion.div>

      {/* Prayer Times List */}
      <div className="space-y-3">
        {Object.entries(prayerTimes).map(([prayer, time]) => (
          <motion.div
            key={prayer}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              prayer === nextPrayer 
                ? 'bg-green-100 border-2 border-green-300' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center">
              {getPrayerIcon(prayer)}
              <span className={`ml-3 font-medium ${
                prayer === nextPrayer ? 'text-green-800' : 'text-gray-700'
              }`}>
                {prayer}
              </span>
            </div>
            <span className={`font-semibold ${
              prayer === nextPrayer ? 'text-green-800' : 'text-gray-600'
            }`}>
              {formatTime(time)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <div className="text-xs text-gray-500">
          Times are approximate. Please verify with local mosque.
        </div>
      </div>
    </motion.div>
  );
};

export default PrayerTimesWidget;