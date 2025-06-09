
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
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
          World Time Zone
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real-time display of UTC and your local time zone with animated indicators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* UTC Time */}
        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Globe className="h-16 w-16 text-primary animate-pulse-slow" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">UTC Time</h3>
            <div className="text-5xl md:text-6xl font-bold mb-4">
              {formatTime(currentTime, 'UTC')}
            </div>
            <p className="text-lg text-muted-foreground">
              {formatDate(currentTime, 'UTC')}
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Coordinated Universal Time
            </div>
          </div>
        </Card>

        {/* Local Time */}
        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="h-16 w-16 text-primary animate-bounce-slow" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">Local Time</h3>
            <div className="text-5xl md:text-6xl font-bold mb-4">
              {formatTime(currentTime)}
            </div>
            <p className="text-lg text-muted-foreground">
              {formatDate(currentTime)}
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              {timeZone} ({getTimeOffset()})
            </div>
          </div>
        </Card>
      </div>

      {/* Time Difference Indicator */}
      <Card className="p-6 bg-accent/50 border-border">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h4 className="text-xl font-semibold">Time Difference</h4>
          </div>
          <div className="text-3xl font-bold text-primary">
            {getTimeOffset()}
          </div>
          <p className="text-muted-foreground mt-2">
            Your local time is {getTimeOffset()} from UTC
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TimeDisplay;
