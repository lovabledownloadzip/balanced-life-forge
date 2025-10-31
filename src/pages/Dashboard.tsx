import { motion } from 'framer-motion';
import { Play, Book, Briefcase, Dumbbell, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProgressRing from '@/components/ProgressRing';
import FocusCard from '@/components/FocusCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const todaysFocus = [
    { icon: Book, title: 'Study Session', duration: '2 hours', completed: true, color: 'hsl(var(--primary))' },
    { icon: Briefcase, title: 'Project Work', duration: '1.5 hours', completed: true, color: 'hsl(var(--secondary))' },
    { icon: Dumbbell, title: 'Football Practice', duration: '1 hour', completed: false, color: 'hsl(var(--accent))' },
    { icon: Heart, title: 'Personal Time', duration: '30 mins', completed: false, color: 'hsl(180 60% 55%)' },
  ];

  const quotes = [
    "Focus is the gateway to thinking clearly.",
    "Small daily improvements lead to stunning results.",
    "Balance is not something you find, it's something you create.",
    "The secret of change is to focus all of your energy on building the new.",
  ];

  const todayQuote = quotes[new Date().getDate() % quotes.length];
  const completedTasks = todaysFocus.filter(task => task.completed).length;
  const progress = (completedTasks / todaysFocus.length) * 100;

  return (
    <div className="min-h-screen p-6 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="glass-card rounded-3xl p-6 md:p-8"
        >
          <h2 className="text-xl font-semibold mb-6 text-foreground">Today's Progress</h2>
          <div className="flex flex-col items-center">
            <ProgressRing progress={progress} size={160} strokeWidth={12} />
            <p className="mt-4 text-muted-foreground text-center">
              {completedTasks} of {todaysFocus.length} tasks completed
            </p>
            <Button
              onClick={() => navigate('/timer')}
              className="mt-6 w-full gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl py-6 text-lg font-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              Focus Now
            </Button>
          </div>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card rounded-3xl p-6 md:p-8 gradient-primary relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-6xl mb-4 opacity-20">"</div>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-4">
              {todayQuote}
            </p>
            <p className="text-white/80 text-sm">— Daily Motivation</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        </motion.div>
      </div>

      {/* Today's Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Today's Focus</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {todaysFocus.map((task, index) => (
            <FocusCard
              key={task.title}
              {...task}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Button
          variant="outline"
          onClick={() => navigate('/planner')}
          className="glass-card border-border hover:bg-accent/10 transition-smooth rounded-xl py-8 flex flex-col gap-2"
        >
          <span className="text-2xl">📅</span>
          <span className="text-sm font-medium">Plan Day</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate('/progress')}
          className="glass-card border-border hover:bg-accent/10 transition-smooth rounded-xl py-8 flex flex-col gap-2"
        >
          <span className="text-2xl">📊</span>
          <span className="text-sm font-medium">View Stats</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate('/wellness')}
          className="glass-card border-border hover:bg-accent/10 transition-smooth rounded-xl py-8 flex flex-col gap-2"
        >
          <span className="text-2xl">👁️</span>
          <span className="text-sm font-medium">Wellness</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate('/timer')}
          className="glass-card border-border hover:bg-accent/10 transition-smooth rounded-xl py-8 flex flex-col gap-2"
        >
          <span className="text-2xl">🎯</span>
          <span className="text-sm font-medium">Zen Mode</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
