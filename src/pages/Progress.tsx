import { motion } from 'framer-motion';
import { Award, TrendingUp, Calendar, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Progress = () => {
  const weekData = [
    { day: 'Mon', hours: 6 },
    { day: 'Tue', hours: 7 },
    { day: 'Wed', hours: 5 },
    { day: 'Thu', hours: 8 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 3 },
  ];

  const badges = [
    { icon: '🔥', title: '7-Day Streak', description: 'Consistent focus this week' },
    { icon: '⭐', title: 'Balanced Week', description: 'Great work-life balance' },
    { icon: '🎯', title: 'Goal Crusher', description: 'Hit all daily targets' },
    { icon: '💪', title: 'Early Bird', description: 'Started before 9 AM' },
  ];

  const stats = [
    { icon: Target, label: 'Focus Hours', value: '39h', change: '+12%' },
    { icon: Calendar, label: 'Current Streak', value: '7 days', change: '+2' },
    { icon: TrendingUp, label: 'Productivity', value: '89%', change: '+5%' },
    { icon: Award, label: 'Badges Earned', value: '12', change: '+4' },
  ];

  return (
    <div className="min-h-screen p-6 md:p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Progress Tracker 📊
        </h1>
        <p className="text-muted-foreground">
          Track your focus time and celebrate your achievements
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <Icon className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-secondary font-medium">{stat.change}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="glass-card rounded-3xl p-6 mb-8"
      >
        <h2 className="text-xl font-semibold text-foreground mb-6">Weekly Focus Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weekData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
              }}
            />
            <Line
              type="monotone"
              dataKey="hours"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-foreground mb-4">Recent Achievements 🏆</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-smooth"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{badge.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;
