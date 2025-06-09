
import { useState, useEffect } from 'react';
import { Clock, Globe, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    // Detect user's timezone
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date, timeZone?: string) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZone,
    });
  };

  const formatDate = (date: Date, timeZone?: string) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: timeZone,
    });
  };

  const getTimeOffset = () => {
    const utcTime = new Date(currentTime.toISOString());
    const localTime = new Date();
    const offsetMinutes = localTime.getTimezoneOffset();
    const offsetHours = Math.abs(offsetMinutes) / 60;
    const sign = offsetMinutes <= 0 ? '+' : '-';
    return `UTC${sign}${Math.floor(offsetHours)}:${String(Math.abs(offsetMinutes) % 60).padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text animate-gradient-x">
          World Time Display
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real-time display of UTC and your local time zone with <span className="text-cyan">animated indicators</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* UTC Time */}
        <div className="gradient-border">
          <Card className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue to-cyan animate-pulse-slow">
                  <Globe className="h-16 w-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue">UTC Time</h3>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-mono gradient-text">
                {formatTime(currentTime, 'UTC')}
              </div>
              <p className="text-lg text-muted-foreground">
                {formatDate(currentTime, 'UTC')}
              </p>
              <div className="mt-4 text-sm text-cyan">
                Coordinated Universal Time
              </div>
            </div>
          </Card>
        </div>

        {/* Local Time */}
        <div className="gradient-border">
          <Card className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple to-pink animate-bounce-slow">
                  <MapPin className="h-16 w-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-purple">Local Time</h3>
              <div className="text-5xl md:text-6xl font-bold mb-4 font-mono gradient-text">
                {formatTime(currentTime)}
              </div>
              <p className="text-lg text-muted-foreground">
                {formatDate(currentTime)}
              </p>
              <div className="mt-4 text-sm text-pink">
                {timeZone} ({getTimeOffset()})
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Time Difference Indicator */}
      <div className="gradient-border">
        <Card className="p-6 bg-gradient-to-r from-card/50 to-accent/30 backdrop-blur-sm">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green to-yellow mr-3">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-green">Time Difference</h4>
            </div>
            <div className="text-3xl font-bold gradient-text">
              {getTimeOffset()}
            </div>
            <p className="text-muted-foreground mt-2">
              Your local time is <span className="text-yellow font-semibold">{getTimeOffset()}</span> from UTC
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TimeDisplay;
