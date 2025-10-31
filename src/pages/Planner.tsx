import { motion } from 'framer-motion';
import { Book, Briefcase, Dumbbell, Heart, Coffee, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Planner = () => {
  const timeBlocks = [
    { time: '08:00', task: 'Morning Routine', icon: Coffee, color: 'hsl(var(--accent))' },
    { time: '09:00', task: 'Study Session', icon: Book, color: 'hsl(var(--primary))' },
    { time: '11:00', task: 'Project Work', icon: Briefcase, color: 'hsl(var(--secondary))' },
    { time: '14:00', task: 'Football Practice', icon: Dumbbell, color: 'hsl(180 60% 55%)' },
    { time: '16:00', task: 'Personal Time', icon: Heart, color: 'hsl(340 75% 60%)' },
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date().getDay();

  return (
    <div className="min-h-screen p-6 md:p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Routine Planner 📅
        </h1>
        <p className="text-muted-foreground">
          Plan your day with time blocks and stay organized
        </p>
      </motion.div>

      {/* Week Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="glass-card rounded-3xl p-6 mb-6"
      >
        <div className="flex justify-between items-center gap-2">
          {weekDays.map((day, index) => {
            const isToday = index + 1 === today;
            return (
              <div
                key={day}
                className={`flex-1 text-center py-3 rounded-xl transition-smooth ${
                  isToday
                    ? 'gradient-primary text-white'
                    : 'hover:bg-accent/10'
                }`}
              >
                <div className="text-xs md:text-sm font-medium">{day}</div>
                <div className={`text-lg md:text-xl font-bold mt-1 ${isToday ? 'text-white' : 'text-foreground'}`}>
                  {new Date().getDate() + (index + 1 - today)}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Today's Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4 mb-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-foreground">Today's Schedule</h2>
          <Button className="gradient-primary text-white hover:opacity-90 transition-smooth rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Add Block
          </Button>
        </div>

        <div className="space-y-3">
          {timeBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.time}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl p-4 hover:scale-[1.02] transition-smooth cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-lg font-semibold text-muted-foreground w-16">
                    {block.time}
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${block.color}20`, color: block.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{block.task}</h3>
                    <p className="text-sm text-muted-foreground">1 hour</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-lg hover:bg-accent/10"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Quick Add Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">Quick Templates</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📚', label: 'Study' },
            { icon: '💻', label: 'Work' },
            { icon: '⚽', label: 'Exercise' },
            { icon: '🧘', label: 'Relax' },
          ].map((template, index) => (
            <motion.div
              key={template.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
            >
              <Button
                variant="outline"
                className="glass-card border-border hover:bg-accent/10 transition-smooth rounded-xl w-full py-8 flex flex-col gap-2"
              >
                <span className="text-3xl">{template.icon}</span>
                <span className="text-sm font-medium">{template.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Planner;
